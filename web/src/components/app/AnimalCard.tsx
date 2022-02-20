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
      <Box
        key={data.id}
        display="flex"
        alignItems="center"
        alignSelf="center"
        justifyContent="space-evenly"
        flexDirection="column"
        boxShadow="xl"
        borderRadius="20px"
        bgColor="white"
        position="relative"
        mb="10rem"
        mt="5rem"
      >
        <HStack justify="space-around" w={"100%"} h={"100%"}>
          <VStack alignItems="left">
            <Text fontSize="md">{data.type}</Text>
            <Heading fontSize="5xl" fontWeight="900">
              {data.name}
            </Heading>
            <Text fontSize="lg">4 years old</Text>
            <Text fontSize="md" as="i">
              fee: ${data.cost}
            </Text>
          </VStack>
          <Box
            w="33vw"
            h="66vh"
            bgImage={data.imageURL}
            borderRadius="20px"
          ></Box>
        </HStack>
        &nbsp;
        <PetDetailModal pet={data} />
        &nbsp;
      </Box>
    );
  }
};
