import { Box, Button, Flex, Grid } from "@chakra-ui/react";
import React from "react";
import {
  IoCheckmark,
  IoChevronBack,
  IoChevronForward,
  IoClose,
} from "react-icons/io5";
import Footer from "../Footer";
import { NavBar } from "../NavBar";
import { Wrapper, WrapperVariant } from "../Wrapper";

interface LayoutProps {
  variant?: WrapperVariant;
}

export const AppUserHome: React.FC<LayoutProps> = ({ children, variant }) => {
  let isApproved = false;
  let isDenied = false;
  return (
    <>
      {/* buttons + columns */}
      <Flex justifyContent="space-between" flexDirection="row">
        <Flex
          as={Button}
          w="12.5vw"
          h="100vh"
          bgColor="red.100"
          _hover={{
            bgColor: "red.50",
          }}
        >
          {isDenied ? (
            <IoClose size="6rem" opacity={0.33} />
          ) : (
            <IoChevronBack size="6rem" opacity={0.33} />
          )}
        </Flex>

        <Flex
          as={Button}
          w="12.5vw"
          h="100vh"
          bgColor="blue.100"
          _hover={{
            bgColor: "blue.50",
          }}
        >
          {isApproved ? (
            <IoCheckmark size="6rem" opacity={0.33} />
          ) : (
            <IoChevronForward size="6rem" opacity={0.33} />
          )}
        </Flex>
      </Flex>
    </>
  );
};
