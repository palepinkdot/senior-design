import {
  Flex,
  Box,
  FormControl,
  Stack,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";

import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { useUpdateOrgInfoMutation } from "../../generated/graphql";
import { InputField } from "../InputField";
import { toOrgErrorMap } from "../../utils/toOrgErrorMap";
import { stringify } from "querystring";

export default function OrgFirstLoginCard() {
  const router = useRouter();
  const [updateOrgInfo] = useUpdateOrgInfoMutation();

  let formattedString;
  return (
    <>
      <Formik
        initialValues={{
          animalType: "",
          location: "",
        }}
        onSubmit={async (values, { setErrors }) => {
          console.log(values);
          console.log(stringify(values));
          formattedString = stringify(values);
          const response = await updateOrgInfo({
            variables: { options: formattedString.toString() },
          });
          if (response.data?.updateOrgInfo.errors) {
            setErrors(toOrgErrorMap(response.data.updateOrgInfo.errors));
          } else if (response.data?.updateOrgInfo) {
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
              bg="blue.100"
            >
              <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                  <Heading fontSize={"3xl"}>Before you begin...</Heading>
                  <Text fontSize={"lg"} color={"gray.600"}>
                    ...tell us a little bit about your shelter.{" "}
                  </Text>
                </Stack>
                <Box rounded={"lg"} bg="white" boxShadow={"lg"} p={8}>
                  <Stack spacing={4}>
                    <FormControl id="animalType">
                      <InputField
                        name="animalType"
                        placeholder="cats, dogs, hamsters, aligators..."
                        label="What kind of animals do you have?"
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
