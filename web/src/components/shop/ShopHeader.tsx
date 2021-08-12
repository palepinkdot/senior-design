import React from "react";
import { ShopCart } from "./ShopCart";
import { AddProductModal } from "./AddProductModal";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

export const ShopHeader: React.FC<{}> = ({}) => {
  return (
    <Flex
      p={4}
      alignItems="center"
      justifyContent="space-between"
      bg={useColorModeValue("gray.100", "gray.800")}
      rounded={"lg"}
      boxShadow={"md"}
      display={{ base: "none", md: "flex" }}
    >
      <Heading fontWeight={800}>Skratch Shop</Heading>
      <Flex alignItems="center" justifyContent="space-between">
        <AddProductModal />
        <ShopCart />
      </Flex>
    </Flex>
  );
};
