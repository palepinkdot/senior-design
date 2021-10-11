import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
} from "@chakra-ui/react";

interface WrapperProps {}

export const AnimalCard: React.FC<WrapperProps> = ({}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      alignSelf="center"
      justifyContent="space-evenly"
      flexDirection="column"
      w="80vw"
      height="80vh"
    >
      <HStack justify="space-around" w={"100%"}>
        <VStack alignItems="left">
          <Text fontSize="md">German Shepard</Text>
          <Heading fontSize="5xl" fontWeight="900">
            Juno
          </Heading>
          <Text fontSize="lg">$400</Text>
        </VStack>
        <Box
          w="33vw"
          h="66vh"
          bgColor="red.600"
          borderRadius="20px"
          bgImage={
            "https://dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg"
          }
        ></Box>
      </HStack>

      <Box
        as="a"
        href="#"
        p={4}
        borderRadius="full"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        bgColor="blue.400"
        _hover={{
          bgColor: "red.300",
          transform: "scale(1.05)",
        }}
        _active={{
          transform: "scale(0.95)",
        }}
      >
        <Text
          as="i"
          px="10"
          color="white"
          fontSize="1.2rem"
          fontWeight="bold"
          textTransform="uppercase"
        >
          More details
        </Text>
      </Box>
    </Box>
  );
};
