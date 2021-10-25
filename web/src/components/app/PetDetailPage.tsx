import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  StackDivider,
  Icon
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

interface WrapperProps { }

export const PetDetailPage: React.FC<WrapperProps> = ({ }) => {
  return (

    <HStack justify="space-around" w={"100%"}>
      <Box>
        <VStack p={6} alignItems="left">
          <HStack>
            <Box
              h="50vh"
              w="30vw"
              bgColor="gray.300"
              borderRadius="20px"
              paddingLeft={5}>
              <Image />
              <Text
                align="center"
                verticalAlign="center">
                Dog Image Goes Here</Text>
            </Box>
            <Box>
              <VStack spacing={20}>
                <Icon as={ChevronUpIcon} w={12} h={12} />
                <Icon as={ChevronDownIcon} w={12} h={12} />
              </VStack>
            </Box>
          </HStack>
          <VStack alignItems="left">
            <Text fontSize="md">German Shephard</Text>
            <Heading fontSize="5xl" fontWeight="900">
              Juno
            </Heading>
            <Text fontSize="lg">4 years old</Text>
            <Text fontSize="md" as="i">
              fee: $180
            </Text>
          </VStack>
          <Box
            as="a"
            href="#"
            alignItems="center"
            py={4}
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
        </VStack>
      </Box>


      <Box
        display="flex"
        alignItems="center"
        alignSelf="right"
        justifyContent="space-evenly"
        flexDirection="row"
        w="40vw"
        height="100vh"
        bgColor="white"
        borderRadius="20px">

        <VStack alignItems="left" verticalAlign="top" spacing={3} paddingLeft="25px">
          <Heading fontSize="2xl" fontWeight="900">
            Bio
          </Heading>
          <Text fontSize="lg">Juno is great I love him blahhahaha dkdk Juno is great I love him blahhahaha dkdk
          </Text>
          <Heading fontSize="2xl" fontWeight="900">
            Animal Information
          </Heading>
          <VStack divider={<StackDivider borderColor="gray.200" />}
            alignItems="left"
            verticalAlign="top"
            spacing={6}
            paddingLeft="10px"
            paddingRight="25px"
          >
            <HStack alignItems="center" spacing="205px">
              <Heading fontSize="lg" fontWeight="400">
                Size:
              </Heading>
              <Text fontSize="md"> Small - 15lbs </Text>
            </HStack>
            <HStack alignItems="center" spacing="112px">
              <Heading fontSize="lg" fontWeight="400">
                Vaccine Info:
              </Heading>
              <Text fontSize="md"> pfizer SARS-19 Vaccine </Text>
            </HStack>
            <HStack alignItems="center" spacing="142px">
              <Heading fontSize="lg" fontWeight="400">
                Good to Know:
              </Heading>
              <Text fontSize="md"> Other important info such as time in shelter and yah </Text>
            </HStack>
            <HStack alignItems="center" spacing="115px">
              <Heading fontSize="lg" fontWeight="550">
                Agency <br /> Information:
              </Heading>
              <VStack align="left">
                <Text fontSize="md"> 513-123-1234 </Text>
                <Text fontSize="md"> sheltername@gmail.com </Text>
              </VStack>

            </HStack>
          </VStack>
        </VStack>

      </Box>

    </HStack>
  );
}