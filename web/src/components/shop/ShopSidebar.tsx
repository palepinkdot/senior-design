import React from "react";
import {
  Flex,
  Stack,
  Input,
  Text,
  useColorModeValue,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";

export const ShopSidebar: React.FC<{}> = ({}) => {
  return (
    <Flex
      w={"20%"}
      minW={"250px"}
      bg={useColorModeValue("gray.100", "gray.800")}
      p={2}
      rounded={"lg"}
      boxShadow={"lg"}
      display={{ base: "none", md: "flex" }}
    >
      <Stack spacing={2}>
        <Text fontSize={20} fontWeight={"200"}>
          Refine
        </Text>
        <InputGroup
          size="lg"
          borderColor={useColorModeValue("gray.400", "gray.100")}
        >
          <InputLeftElement
            pointerEvents="none"
            children={
              <IoSearchOutline
                color={useColorModeValue("gray.400", "gray.100")}
              />
            }
          />
          <Input type="text" placeholder="Search" />
        </InputGroup>
      </Stack>
    </Flex>
  );
};
