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
} from "@chakra-ui/react";

import { Formik, Form } from "formik";
import React from "react";
import { IoAddOutline } from "react-icons/io5";
import { useAddProductMutation } from "../../generated/graphql";
import { InputField } from "../InputField";

export function AddProductModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [addProduct] = useAddProductMutation();
  return (
    <>
      <Button onClick={onOpen} bg={"green.300"}>
        <IoAddOutline size={"1.25rem"} />
        &nbsp; New Product
      </Button>

      <Fade in={isOpen}>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add New Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Formik
                initialValues={{ sku: "", name: "", price: "", imageUrl: "" }}
                onSubmit={async (values) => {
                  const response = await addProduct({
                    variables: { options: values },
                  });
                  if (response.data?.addProduct.errors) {
                    console.error();
                  } else if (response.data?.addProduct.product.sku) {
                    // worked
                    onClose();
                    window.location.reload();
                  }
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Stack spacing={8} mx={"auto"} maxW={"lg"} px={6}>
                      <Stack spacing={4}>
                        <FormControl id="sku">
                          <InputField
                            name="sku"
                            placeholder="SKU"
                            label="Product SKU"
                          />
                        </FormControl>

                        <FormControl id="name">
                          <InputField
                            name="name"
                            placeholder="Name"
                            label="Product Name"
                          />
                        </FormControl>

                        <FormControl id="price">
                          <InputField
                            name="price"
                            placeholder="Price"
                            label="Price"
                          />
                        </FormControl>

                        <FormControl id="imageUrl">
                          <InputField
                            name="imageUrl"
                            placeholder="Image URL"
                            label="Image URL"
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
                            Add Product
                          </Button>
                        </Stack>
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
