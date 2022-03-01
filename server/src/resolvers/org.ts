import {
  Resolver,
  Mutation,
  Arg,
  Field,
  Ctx,
  ObjectType,
  Query,
} from "type-graphql";
import { MyContext } from "../types";
import { Org } from "../entities/Org";
import argon2 from "argon2";
import { COOKIE_NAME, FORGET_PASSWORD_PREFIX } from "../constants";
import { sendEmail } from "../utils/sendEmail";
import { v4 } from "uuid";
import { getConnection } from "typeorm";
import { OrgUsernamePasswordInput } from "./OrgUsernamePasswordInput";
import { validateRegisterOrg } from "../utils/validateRegisterOrg";

@ObjectType()
class OrgFieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class OrgResponse {
  @Field(() => [OrgFieldError], { nullable: true })
  errors?: OrgFieldError[];

  @Field(() => Org, { nullable: true })
  org?: Org;
}

@Resolver()
export class OrgResolver {
  @Mutation(() => OrgResponse)
  async updateOrgInfo(
    @Arg("options") options: string,
    @Ctx() { req }: MyContext
  ): Promise<OrgResponse> {
    const updatedOrg = await Org.findOne({
      where: { id: req.session.orgId },
    });

    const attributes = options;

    let org;
    try {
      const result = await Org.update(
        { id: req.session.orgId },
        {
          attributes: attributes,
        }
      );
      org = result.raw[0];
    } catch (err) {
      if (err.code === "23505") {
        return {
          errors: [
            {
              field: "email",
              message: "email already taken",
            },
          ],
        };
      }
    }

    // log in user after change password
    req.session.orgId = updatedOrg?.id;

    return { org };
  }
  @Mutation(() => OrgResponse)
  async changeOrgPassword(
    @Arg("token") token: string,
    @Arg("newPassword") newPassword: string,
    @Ctx() { redis, req }: MyContext
  ): Promise<OrgResponse> {
    if (newPassword.length <= 2) {
      return {
        errors: [
          {
            field: "newPassword",
            message: "length must be greater than 2",
          },
        ],
      };
    }

    const key = FORGET_PASSWORD_PREFIX + token;
    const orgId = await redis.get(key);
    if (!orgId) {
      return {
        errors: [
          {
            field: "token",
            message: "token expired",
          },
        ],
      };
    }

    const orgIdNum = orgId;
    const org = await Org.findOne(orgIdNum);

    if (!org) {
      return {
        errors: [
          {
            field: "token",
            message: "user no longer exists",
          },
        ],
      };
    }

    await Org.update(
      { id: orgIdNum },
      {
        password: await argon2.hash(newPassword),
      }
    );

    await redis.del(key);

    // log in user after change password
    req.session.orgId = org.id;

    return { org: org };
  }

  @Mutation(() => Boolean)
  async forgotOrgPassword(
    @Arg("email") email: string,
    @Ctx() { redis }: MyContext
  ) {
    const org = await Org.findOne({ where: { email } });
    if (!org) {
      // the email is not in the db
      return true;
    }

    const token = v4();
    const corsOrigin = process.env.CORS_ORIGIN;

    await redis.set(
      FORGET_PASSWORD_PREFIX + token,
      org.id,
      "ex",
      1000 * 60 * 60 * 24 * 3
    ); // 3 days

    await sendEmail(
      email,
      `<a href="${corsOrigin}/change-password/${token}">reset password</a>`
    );

    return true;
  }

  @Query(() => Org, { nullable: true })
  meOrg(@Ctx() { req }: MyContext) {
    // you are not logged in
    if (!req.session.orgId) {
      return null;
    }

    return Org.findOne(req.session.orgId);
  }

	@Query(() => Org)
	async orgByID(@Arg("id", () => String) id: string) {
		const org = await getConnection().createQueryBuilder()
															.select("org")
															.from(Org, "org")
															.where("org.id = :id", {id: id})
															.getOne();
		console.log(org);
		return org;
	}

  @Mutation(() => OrgResponse)
  async registerOrg(
    @Arg("options") options: OrgUsernamePasswordInput,
    @Ctx() { req }: MyContext
  ): Promise<OrgResponse> {
    const errors = validateRegisterOrg(options);
    if (errors) {
      return { errors };
    }

    const hashedPassword = await argon2.hash(options.password);
    let org;
    try {
      if (options.password != options.verifypassword) {
        return {
          errors: [
            {
              field: "verifypassword",
              message: "passwords do not match",
            },
          ],
        };
      }

      const newUserAvatar = "placeholder";

      const result = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Org)
        .values({
          contactFirstname: options.contactFirstname,
          contactLastname: options.contactLastname,
          orgName: options.orgName,
          address: options.address,
          username: options.username,
          email: options.email,
          avatarUrl: newUserAvatar,
          password: hashedPassword,
        })
        .returning("*")
        .execute();
      org = result.raw[0];
    } catch (err) {
      if (err.code === "23505") {
        return {
          errors: [
            {
              field: "username",
              message: "username already taken",
            },
          ],
        };
      }
    }

    req.session.orgId = org.id;

    return { org: org };
  }

  @Mutation(() => OrgResponse)
  async loginOrg(
    @Arg("usernameOrEmail") usernameOrEmail: string,
    @Arg("password") password: string,
    @Ctx() { req }: MyContext
  ): Promise<OrgResponse> {
    const org = await Org.findOne(
      usernameOrEmail.includes("@")
        ? { where: { email: usernameOrEmail } }
        : { where: { username: usernameOrEmail } }
    );
    if (!org) {
      return {
        errors: [
          {
            field: "usernameOrEmail",
            message: "that username doesn't exist",
          },
        ],
      };
    }
    const valid = await argon2.verify(org.password, password);
    if (!valid) {
      return {
        errors: [
          {
            field: "password",
            message: "incorrect password",
          },
        ],
      };
    }

    req.session.userId = org.id;

    return {
      org: org,
    };
  }

  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext) {
    return new Promise((resolve) =>
      req.session.destroy((err) => {
        res.clearCookie(COOKIE_NAME);
        if (err) {
          console.log(err);
          resolve(false);
          return;
        }

        resolve(true);
      })
    );
  }
}
