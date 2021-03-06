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
import { useApplicationsQuery, useMeUserQuery } from "../generated/graphql";
import { isServer } from "../utils/isServer";
import { ApplicationsTable } from "../components/app/ApplicationsTable";

const Applications: React.FC<{}> = ({ }) => {
    // get user
    const { data: meData, loading: meLoading } = useMeUserQuery({
      skip: isServer(),
    });
  
    // get all matches for that user
    const { data: applications, loading: appsLoading, error: appsError } = useApplicationsQuery({
      variables: {
        userId: meData?.meUser.id,
        limit: 100,
      },
    });
    console.log(applications);
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
            {!appsLoading ? <ApplicationsTable data={applications}></ApplicationsTable> : null}            
          </Table>
        </HStack>
      </Flex>
      <HomeFooter></HomeFooter>
    </div>

  );

  return null;
};

export default withApollo()(Applications);
