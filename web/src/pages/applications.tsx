import React from "react";
import { Layout } from "../components/Layout";
import {
  Container,
  Flex,
  HStack,
  VStack,
  Heading,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  GridItem,
  Divider,
  Text,
  Table, TableCaption, Thead, Th, Tr, Td, Tbody, Tfoot,
  Box
} from "@chakra-ui/react";
import { NotAllowedIcon, CheckCircleIcon, WarningIcon } from '@chakra-ui/icons'
import { AppNavBar } from "../components/app/AppNavBar";
import HomeFooter from "../components/home/HomeFooter";
import { withApollo } from "../utils/withApollo";

const Applications: React.FC<{}> = ({ }) => {
  return (
    <div>
      <AppNavBar />      
      <Flex flexDir="column" overflow="hidden" minH="100vh">
        <HStack align="stretch" margin="20px" spacing={4}>        
          <Box color="black" >
            <Heading size="2xl" alignSelf="start" >My Applications</Heading>
          </Box>          
        </HStack>
        <HStack align="stretch" mx="20px" spacing={4}>        
          <Table variant='striped' colorScheme='blue' size="lg">            
            <Thead backgroundColor="red.300" >
              <Tr>
                <Th color="white" textAlign="center"><Heading as='h4' size='md'>Shelter</Heading></Th>
                <Th color="white" textAlign="center"><Heading as='h4' size='md'>Pet</Heading></Th>
                <Th color="white" textAlign="center"><Heading as='h4' size='md'>Status</Heading></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td textAlign="center">ABC Shelter</Td>
                <Td textAlign="center">Dog</Td>
                <Td textAlign="center"><WarningIcon w={8} h={8} color="yellow.400" /> Under Review </Td>
              </Tr>
              <Tr>
                <Td textAlign="center">XYZ Shelter</Td>
                <Td textAlign="center">Cat</Td>
                <Td textAlign="center"><CheckCircleIcon w={8} h={8} color="green.400" /> Accepted! Schedule Visit Now</Td>
              </Tr>
              <Tr>
                <Td textAlign="center">Some Stable</Td>
                <Td textAlign="center">Horse</Td>
                <Td textAlign="center"><NotAllowedIcon w={8} h={8} color="red.400" /> Rejected </Td>
              </Tr>
              <Tr>
                <Td textAlign="center">ABC Shelter</Td>
                <Td textAlign="center">Dog</Td>
                <Td textAlign="center"><WarningIcon w={8} h={8} color="yellow.400" /> Under Review </Td>
              </Tr>
              <Tr>
                <Td textAlign="center">XYZ Shelter</Td>
                <Td textAlign="center">Cat</Td>
                <Td textAlign="center"><CheckCircleIcon w={8} h={8} color="green.400" /> Accepted! Schedule Visit Now</Td>
              </Tr>
              <Tr>
                <Td textAlign="center">Some Stable</Td>
                <Td textAlign="center">Horse</Td>
                <Td textAlign="center"><NotAllowedIcon w={8} h={8} color="red.400" /> Rejected </Td>
              </Tr>
            </Tbody>
          </Table>
        </HStack>
      </Flex>
      <HomeFooter></HomeFooter>
    </div>

  );

  return null;
};

export default withApollo()(Applications);
