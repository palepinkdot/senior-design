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
  AspectRatio,
  Center,
} from "@chakra-ui/react";
import { PetDetailModal } from "./PetDetailModal";

interface AnimalDataProps {
  data;
}

export const AnimalCard: React.FC<AnimalDataProps> = ({ data }) => {
  if (!data) {
    return <>Nothing here.</>;
  } else if (data) {
    //position: relative;
    // background-color: #fff;
    // width: 80vw;
    // max-width: 260px;
    // height: 300px;
    // box-shadow: 0px 0px 60px 0px rgba(0,0,0,0.30);
    // border-radius: 20px;
    // background-size: cover;
    // background-position: center;
    return (
      // <Flex
      //   alignItems="center"
      //   justifyContent="center"
      // >
      <Center
        // height="1200px"
        verticalAlign={"center"}
        justifyContent="center"
        pb="80%"
        // pt="25%"
        mb="25%"
      >
        <Box
          key={data.id}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          boxShadow="xl"
          borderRadius="20px"
          bgColor="white"
        >
          <HStack mt="80px" display={"flex"}>
            <VStack alignItems="left" p="6">
              <Text fontSize="md">{data.type}</Text>
              <Heading fontSize="5xl" fontWeight="900">
                {data.name}
              </Heading>
              <Text fontSize="lg">4 years old</Text>
              <Text fontSize="md" as="i">
                fee: ${data.cost}
              </Text>
            </VStack>
            <Image
              maxW="550px"
              w={"70%"}
              src={data.imageURL}
              borderRadius="20px"
              alignItems="center"
              justifyContent="center"
              display="flex"
            >

            </Image>
          </HStack>
          &nbsp;
          <HStack pt="5">
            <PetDetailModal pet={data} />
            &nbsp;
            <Box
              cursor={"pointer"}
              as="a"
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
                Adopt Now
              </Text>
            </Box>
          </HStack>
          &nbsp;
        </Box>
      </Center>
      // </Flex>
    );
  }
};


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
