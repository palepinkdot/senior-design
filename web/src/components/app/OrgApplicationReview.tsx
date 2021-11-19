import React from "react";
import { HomeNavBarProps } from "../home/HomeNavBar";
import {
  HStack,
  Link,
  Stack,
  Text,
  Flex,
  Image,
  VStack,
  Heading,
  StackDivider,
  Box,
} from "@chakra-ui/react";
import HomeFooter from "../home/HomeFooter";
import { OrgNavBar } from "./OrgNavBar";

export default function OrgApplicationReview() {
  return (
    <>
      <OrgNavBar />
      <HStack justify={"space-around"} w={"100%"}>
        <Stack w={"40%"} h={"auto"}>
          <Stack bgColor={"#80B5F4"} p={3} pb={0} borderRadius={20}>
            <HStack>
              <Text textColor={"#707070"}>
                <Link>Dashboard</Link> / Pet Application
              </Text>
            </HStack>
            <Image
              alignSelf={"center"}
              boxSize={"300px"}
              objectFit={"cover"}
              p={4}
              borderRadius={30}
              src={
                "https://images.unsplash.com/photo-1593991910379-b414c1e3bd74?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YWRvcHR8ZW58MHx8MHx8&ixlib" +
                "=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              }
              alt={"doggo"}
            />
          </Stack>
          <Stack bgColor={"#EBD9D9"} p={3} pt={0} borderRadius={20}>
            <Image
              alignSelf={"center"}
              boxSize={"300px"}
              objectFit={"cover"}
              p={4}
              borderRadius={30}
              src={
                "https://images.unsplash.com/photo-1598411072028-c4642d98352c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib" +
                "=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
              }
              alt={"person, adopter"}
            />
          </Stack>
        </Stack>
        <Stack w={"15%"} h={"auto"}>
          <Image boxSize={"500px"} src={"https://i.imgur.com/Xb5PPvU.png"} />
        </Stack>
        <Box
          display="flex"
          alignItems="center"
          alignSelf="right"
          justifyContent="space-evenly"
          flexDirection="row"
          w="40vw"
          height="100vh"
          bgColor="white"
          borderRadius="20px"
        >
          <VStack
            alignItems="left"
            verticalAlign="top"
            spacing={3}
            paddingLeft="25px"
          >
            <Heading fontSize="2xl" fontWeight="900">
              Bio
            </Heading>
            <Text fontSize="lg">
              Jackson is a feisty little bugger that we rescued from a some
              dude's house. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </Text>
            <Heading fontSize="2xl" fontWeight="900">
              Animal Information
            </Heading>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
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
                <Text fontSize="md"> HPV, flu, corona</Text>
              </HStack>
              <HStack alignItems="center" spacing="142px">
                <Heading fontSize="lg" fontWeight="400">
                  Good to Know:
                </Heading>
                <Text fontSize="md">
                  Doggo likes to eat hooves, careful if you have horses.
                </Text>
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
      <HomeFooter />
    </>
  );
}
