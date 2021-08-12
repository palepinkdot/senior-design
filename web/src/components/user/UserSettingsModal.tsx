import {
  FormControl,
  Stack,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Fade,
  MenuItem,
  Flex,
  Box,
  Avatar,
} from "@chakra-ui/react";

import { Formik, Form } from "formik";
import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { useMeQuery, useUpdateUserInfoMutation } from "../../generated/graphql";
import { toErrorMap } from "../../utils/toErrorMap";
import { InputField } from "../InputField";

export function UserSettingsModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [updateUserInfo] = useUpdateUserInfoMutation();
  const { data, loading } = useMeQuery();

  if (loading) {
    return <h1>Loading...</h1>;
  } else if (!data?.me) {
  } else {
  }

  return (
    <>
      <MenuItem onClick={onOpen} justifyContent={"space-between"}>
        User Settings
        <IoSettingsOutline size={"1.25em"} />
      </MenuItem>

      <Fade in={isOpen}>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>User Settings</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Formik
                initialValues={{
                  userid: `${data.me.id}`,
                  firstname: `${data.me.firstname}`,
                  lastname: `${data.me.lastname}`,
                  avatarUrl: `${data.me.avatarUrl}`,
                  email: `${data.me.email}`,
                }}
                onSubmit={async (values, { setErrors }) => {
                  const response = await updateUserInfo({
                    variables: { options: values },
                  });
                  if (response.data?.updateUserInfo.errors) {
                    setErrors(toErrorMap(response.data.updateUserInfo.errors));
                  } else if (response.data?.updateUserInfo) {
                    // worked
                    onClose();
                  }
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Box pb={5}>
                      <Flex justifyContent={"space-between"}>
                        <Avatar
                          name={data.me.firstname + " " + data.me.lastname}
                          size={"xl"}
                          src={data.me.avatarUrl}
                        />

                        <FormControl pl={3} id="avatarUrl">
                          <InputField
                            name="avatarUrl"
                            placeholder="Avatar URL"
                            label="Avatar URL"
                          />
                        </FormControl>
                      </Flex>
                    </Box>

                    <Stack spacing={4}>
                      <Flex justifyContent={"space-between"}>
                        <FormControl pr={1.5} id="firstname">
                          <InputField
                            name="firstname"
                            placeholder="First Name"
                            label="First Name"
                          />
                        </FormControl>
                        <FormControl pl={1.5} id="lastname">
                          <InputField
                            name="lastname"
                            placeholder="Last Name"
                            label="Last Name"
                          />
                        </FormControl>
                      </Flex>

                      <FormControl id="email">
                        <InputField
                          name="email"
                          placeholder="Email"
                          label="Email"
                        />
                      </FormControl>

                      <Stack spacing={10}>
                        <Button
                          type="submit"
                          isLoading={isSubmitting}
                          bg={"green.300"}
                          color={"grey.700"}
                          _hover={{
                            bg: "green.200",
                          }}
                        >
                          Update
                        </Button>
                      </Stack>
                    </Stack>
                  </Form>
                )}
              </Formik>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="red" mr={3} onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Fade>
    </>
  );
}
