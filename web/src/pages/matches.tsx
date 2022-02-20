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
import {useMatchesQuery, useMeUserQuery, useAnimalsQuery } from "../generated/graphql";
import { isServer } from "../utils/isServer";

const Matches: React.FC<{}> = ({ }) => {
  const { data: meData, loading: meLoading } = useMeUserQuery({
    skip: isServer(),
  });
  console.log(meData.meUser.id);
  const { data: matchData, error: matchError } = useMatchesQuery({
    variables: {
    userId: meData.meUser.id,
    limit: 100,
    },
    });
    console.log(matchData.matches.matches);
    const { data: animalsData, error: animalsError } = useAnimalsQuery({
        variables: {
          limit: 10,
          cursor: null,
        },
      });
      console.log("animalsData");
      console.log(animalsData);

  return (
    <div>
      <AppNavBar />      
      <Flex flexDir="column" overflow="hidden" minH="100vh">
        <HStack align="stretch" margin="20px" spacing={4}>        
          <Box color="black" >
            <Heading size="2xl" alignSelf="start" >My Matches</Heading>
          </Box>          
        </HStack>
        <HStack align="stretch" mx="20px" spacing={4}>        
          <Table variant='striped' colorScheme='blue' size="lg">            
            <Thead backgroundColor="red.300" >
              <Tr>
                <Th color="white" textAlign="center"><Heading as='h4' size='md'>Pet</Heading></Th>
                <Th color="white" textAlign="center"><Heading as='h4' size='md'>Shelter</Heading></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td textAlign="center">Dog</Td>  
                <Td textAlign="center">ABC Shelter</Td>              
              </Tr>
              <Tr>
                <Td textAlign="center">Cat</Td>
                <Td textAlign="center">XYZ Shelter</Td>
              </Tr>
              <Tr>
                <Td textAlign="center">Horse</Td>
                <Td textAlign="center">Some Stable</Td>
              </Tr>
              <Tr>
                <Td textAlign="center">Dog</Td>
                <Td textAlign="center">ABC Shelter</Td>
              </Tr>
              <Tr>
                <Td textAlign="center">Cat</Td>
                <Td textAlign="center">XYZ Shelter</Td>
              </Tr>
              <Tr>
                <Td textAlign="center">Horse</Td>
                <Td textAlign="center">Some Stable</Td>
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

export default withApollo()(Matches);
