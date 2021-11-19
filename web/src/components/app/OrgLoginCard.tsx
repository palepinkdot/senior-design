import {
  Flex,
  Box,
  FormControl,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import NextLink from "next/link";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import React from "react";
import {
  MeOrgDocument,
  MeOrgQuery,
  MeUserDocument,
  MeUserQuery,
  useLoginOrgMutation,
  useLoginUserMutation,
} from "../../generated/graphql";
import { toErrorMap } from "../../utils/toErrorMap";
import { InputField } from "../InputField";

export default function OrgLoginCard() {
  const router = useRouter();
  const [login] = useLoginOrgMutation();
  return (
    <>
      <Formik
        initialValues={{ usernameOrEmail: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await login({
            variables: values,
            update: (cache, { data }) => {
              cache.writeQuery<MeOrgQuery>({
                query: MeOrgDocument,
                data: {
                  __typename: "Query",
                  meOrg: data?.loginOrg.org,
                },
              });
            },
          });
          if (response.data?.loginOrg.errors) {
            console.log(response.data.loginOrg.errors);
          } else if (response.data?.loginOrg.org) {
            // worked
            router.push("/app");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Flex
              minH={"100vh"}
              align={"center"}
              justify={"center"}
              bg={"red.100"}
            >
              <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                  <Heading fontSize={"4xl"}>Sign in to your account</Heading>
                </Stack>
                <Box
                  rounded={"lg"}
                  bg={useColorModeValue("white", "gray.700")}
                  boxShadow={"lg"}
                  p={8}
                >
                  <Stack spacing={4}>
                    <FormControl id="email">
                      <InputField
                        name="usernameOrEmail"
                        placeholder="Username or Email"
                        label="Username or Email"
                      />
                    </FormControl>

                    <FormControl id="password">
                      <InputField
                        name="password"
                        placeholder="Password"
                        label="Password"
                        type="password"
                      />
                    </FormControl>

                    <Stack spacing={10}>
                      <Stack
                        direction={{ base: "column", sm: "row" }}
                        align={"start"}
                        justify={"space-between"}
                      >
                        {/* <Checkbox>Remember me</Checkbox> */}

                        <NextLink href="/app/org/register">
                          <Link color={"grey.400"}>Don't have one?</Link>
                        </NextLink>
                        <NextLink href="/forgot-password">
                          <Link color={"grey.400"}>Forgot password?</Link>
                        </NextLink>
                      </Stack>
                      <Button
                        type="submit"
                        isLoading={isSubmitting}
                        bg={"blue.200"}
                        color={"grey.700"}
                        _hover={{
                          bg: "blue.100",
                        }}
                      >
                        Sign in
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Flex>
          </Form>
        )}
      </Formik>
    </>
  );
}
