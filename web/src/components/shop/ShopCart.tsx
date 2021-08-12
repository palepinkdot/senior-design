import {
  chakra,
  Circle,
  Fade,
  Flex,
  Tooltip,
  transition,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { useCartQuery } from "../../generated/graphql";

import { WrapperVariant } from "../Wrapper";

interface LayoutProps {
  variant?: WrapperVariant;
}

export const ShopCart: React.FC<LayoutProps> = ({ children, variant }) => {
  const { data, loading } = useCartQuery();

  if (loading) {
    //Loading
    return null; //Maybe add a spinner
  } else if (!data?.cart) {
    //User not logged in
    return <h1>No cart loaded</h1>;
  } else {
    //User is logged in
  }

  return (
    <>
      <Flex pl={4} alignItems="center" justifyContent="center">
        <Tooltip
          label="View cart"
          bg={useColorModeValue("gray.100", "gray.800")}
          placement={"top"}
          color={useColorModeValue("gray.800", "gray.100")}
          fontSize={"1.2em"}
          transition={".3s"}
          hasArrow
          shadow={"lg"}
        >
          <chakra.a href={"#"} display={"flex"}>
            <Circle
              bg={useColorModeValue("gray.100", "gray.800")}
              size={12}
              _hover={{
                shadow: "lg",
                transition: ".3s",
                bg: `${useColorModeValue("white", "black")}`,
              }}
            >
              <IoCartOutline size={"2em"} />
            </Circle>
          </chakra.a>
        </Tooltip>
      </Flex>
    </>
  );
};
