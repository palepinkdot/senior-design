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
import React, {useState} from "react";
import {
  MeOrgDocument,
  MeOrgQuery,
  useRegisterOrgMutation,
} from "../../generated/graphql";
import { toErrorMap } from "../../utils/toErrorMap";
import { InputField } from "../InputField";
import { toOrgErrorMap } from "../../utils/toOrgErrorMap";
import ReCAPTCHA from "react-google-recaptcha";

export default function OrgRegisterCard() {
  const router = useRouter();
  const [register] = useRegisterOrgMutation();
  const [isVerified, setIsVerified] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          username: "",
          password: "",
          verifypassword: "",
          contactFirstname: "",
          contactLastname: "",
          orgName: "",
          address: "",
        }}
        onSubmit={async (values, { setErrors }) => {
          const response = await register({
            variables: { options: values },
            update: (cache, { data }) => {
              cache.writeQuery<MeOrgQuery>({
                query: MeOrgDocument,
                data: {
                  __typename: "Query",
                  meOrg: data?.registerOrg.org,
                },
              });
            },
          });
          if (response.data?.registerOrg.errors) {
            setErrors(toOrgErrorMap(response.data.registerOrg.errors));
          } else if (response.data?.registerOrg.org) {
            // worked
            router.push("/app/org/dashboard");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Flex
              minH={"100vh"}
              align={"center"}
              justify={"center"}
              bg="blue.100"
            >
              <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                  <Heading fontSize={"4xl"} align={"center"}>
                    Create your Organization/Shelter account
                  </Heading>
                  <Text fontSize={"lg"} color={"gray.600"}>
                    to enjoy all of our member{" "}
                    <Link color={"blue.400"}>features</Link> ✌️
                  </Text>
                </Stack>
                <Box rounded={"lg"} bg="white" boxShadow={"lg"} p={8}>
                  <Stack spacing={4}>
                    <Flex justifyContent={"space-between"}>
                      <FormControl pr={1.5} id="contactFirstname">
                        <InputField
                          name="contactFirstname"
                          placeholder="Contact First Name"
                          label="First Name"
                        />
                      </FormControl>
                      <FormControl pl={1.5} id="contactLastname">
                        <InputField
                          name="contactLastname"
                          placeholder="Last Name"
                          label="Contact Last Name"
                        />
                      </FormControl>
                    </Flex>

                    <FormControl id="orgName">
                      <InputField
                        name="orgName"
                        placeholder="This is how you'll appear to users"
                        label="Organization or Shelter Name"
                      />
                    </FormControl>

                    {/* <Flex justifyContent={"space-between"}>
                      <FormControl pr={1.5} id="orgstate">
                        <InputField
                          name="state"
                          placeholder="State"
                          label="State"
                        />
                      </FormControl>
                      <FormControl pl={1.5} id="orgcity">
                        <InputField
                          name="orgcity"
                          placeholder="City"
                          label="City"
                        />
                      </FormControl>
                    </Flex> */}

                    <FormControl id="username">
                      <InputField
                        name="username"
                        placeholder="This is only used to log you in"
                        label="Username"
                      />
                    </FormControl>

                    <FormControl id="email">
                      <InputField
                        name="email"
                        placeholder="We won't spam you, we promise"
                        label="Email"
                      />
                    </FormControl>

                    <Flex justifyContent={"space-between"}>
                      <FormControl pr={1.5} id="password">
                        <InputField
                          name="password"
                          placeholder="Password"
                          label="Password"
                          type="password"
                        />
                      </FormControl>
                      <FormControl pl={1.5} id="verifypassword">
                        <InputField
                          name="verifypassword"
                          placeholder="Verify Password"
                          label="Verify Password"
                          type="password"
                        />
                      </FormControl>
                    </Flex>

                    <Stack spacing={10}>
                      <Stack
                        direction={{ base: "column", sm: "row" }}
                        align={"start"}
                        justify={"flex-end"}
                      >
                        <NextLink href="/app/org-first-login">
                          <Link color={"grey.400"}>
                            already have an account?
                          </Link>
                        </NextLink>
                      </Stack>
                      <Stack
                        direction={{ base: "column", sm: "row" }}
                        align="center"
                        justify={"flex"}
                        px="10"                        
                      >
                        <ReCAPTCHA
                          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                          onChange={() => setIsVerified(true)}
                        />
                      </Stack>
                      <Button
                        type="submit"
                        isLoading={isSubmitting}
                        bg={"blue.200"}
                        color={"white"}
                        _hover={{
                          bg: "red.200",
                        }}
                        isDisabled={!isVerified}
                      >
                        Register
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
