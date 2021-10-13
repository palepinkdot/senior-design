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
  MeDocument,
  MeQuery,
  useRegisterMutation,
} from "../../generated/graphql";
import { toErrorMap } from "../../utils/toErrorMap";
import { InputField } from "../InputField";

export default function OrgRegisterCard() {
  const router = useRouter();
  const [register] = useRegisterMutation();
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          username: "",
          password: "",
          verifypassword: "",
          firstname: "",
          lastname: "",
        }}
        onSubmit={async (values, { setErrors }) => {
          const response = await register({
            variables: { options: values },
            update: (cache, { data }) => {
              cache.writeQuery<MeQuery>({
                query: MeDocument,
                data: {
                  __typename: "Query",
                  me: data?.register.user,
                },
              });
            },
          });
          if (response.data?.register.errors) {
            setErrors(toErrorMap(response.data.register.errors));
          } else if (response.data?.register.user) {
            // worked
            router.push("/app/org/dash");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Flex minH={"100vh"} align={"center"} justify={"center"} bg="white">
              <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                  <Heading fontSize={"4xl"} align={"center"}>Create your Organization/Shelter account</Heading>
                  <Text fontSize={"lg"} color={"gray.600"}>
                    to enjoy all of our member{" "}
                    <Link color={"blue.400"}>features</Link> ✌️
                  </Text>
                </Stack>
                <Box
                  rounded={"lg"}
                  bg={useColorModeValue("white", "gray.700")}
                  boxShadow={"lg"}
                  p={8}
                >
                  <Stack spacing={4}>
                    {/* <Flex justifyContent={"space-between"}>
                      <FormControl pr={1.5} id="orgadminFirstname">
                        <InputField
                          name="orgadminFirstname"
                          placeholder="First Name"
                          label="First Name"
                        />
                      </FormControl>
                      <FormControl pl={1.5} id="orgadminLastname">
                        <InputField
                          name="orgadminLastname"
                          placeholder="Last Name"
                          label="Last Name"
                        />
                      </FormControl>
                    </Flex> */}

                    <FormControl id="orgname">
                      <InputField
                        name="Organization"
                        placeholder="Organization"
                        label="Organization or Shelter Name"
                      />
                    </FormControl>

                    <Flex justifyContent={"space-between"}>
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
                    </Flex>

                    <FormControl id="orgemail">
                      <InputField
                        name="orgemail"
                        placeholder="Email"
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
                        <NextLink href="/forgot-password">
                          <Link color={"grey.400"}>already have one?</Link>
                        </NextLink>
                      </Stack>
                      <Button
                        type="submit"
                        isLoading={isSubmitting}
                        bg={"yellow.300"}
                        color={"grey.700"}
                        _hover={{
                          bg: "yellow.200",
                        }}
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