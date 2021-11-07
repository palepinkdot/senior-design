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
  MeUserDocument,
  MeUserQuery,
  useRegisterUserMutation,
  useUpdateUserInfoMutation,
} from "../../generated/graphql";
import { toErrorMap } from "../../utils/toErrorMap";
import { InputField } from "../InputField";
import { stringify } from "querystring";
import { useIsUser } from "../../utils/useIsUser";

export default function AdoFirstLoginCard() {
  const router = useRouter();
  const [updateUserInfo] = useUpdateUserInfoMutation();

  let formattedString;

  useIsUser();
  return (
    <>
      <Formik
        initialValues={{
          animalPreference: "",
          location: "",
          age: "",
        }}
        onSubmit={async (values, { setErrors }) => {
          console.log(values);
          console.log(stringify(values));
          formattedString = stringify(values);
          const response = await updateUserInfo({
            variables: { options: formattedString.toString() },
          });
          if (response.data?.updateUserInfo.errors) {
            setErrors(toErrorMap(response.data.updateUserInfo.errors));
          } else if (response.data?.updateUserInfo) {
            // worked
            router.reload();
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Flex
              minH={"100vh"}
              align={"center"}
              justify={"center"}
              bg="red.100"
            >
              <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                  <Heading fontSize={"3xl"}>Before you begin...</Heading>
                  <Text fontSize={"lg"} color={"gray.600"}>
                    ...tell us a little bit about yourself.{" "}
                  </Text>
                </Stack>
                <Box rounded={"lg"} bg="white" boxShadow={"lg"} p={8}>
                  <Stack spacing={4}>
                    <FormControl pr={1.5} id="animalPreference">
                      <InputField
                        name="animalPreference"
                        placeholder="cats, dogs, hamsters, aligators..."
                        label="Animal Preference"
                      />
                    </FormControl>
                    <FormControl pl={1.5} id="location">
                      <InputField
                        name="location"
                        placeholder="Coordinates, PLEASE"
                        label="Location"
                      />
                    </FormControl>

                    <FormControl id="age">
                      <InputField name="age" placeholder="Age" label="Age" />
                    </FormControl>
                    <Button
                      type="submit"
                      isLoading={isSubmitting}
                      bg={"red.200"}
                      color={"white"}
                      _hover={{
                        bg: "blue.200",
                      }}
                    >
                      Submit
                    </Button>
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
