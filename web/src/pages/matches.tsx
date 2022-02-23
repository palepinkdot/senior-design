import React from "react";
import {
  Flex,
  HStack,
  Heading,
  Table, 
  TableCaption, 
  Thead, 
  Th, 
  Tr, 
  Td, 
  Tbody, 
  Tfoot,
  Box
} from "@chakra-ui/react";
import { AppNavBar } from "../components/app/AppNavBar";
import HomeFooter from "../components/home/HomeFooter";
import { withApollo } from "../utils/withApollo";
import {useMatchesQuery, useMeUserQuery, useAnimalByIdQuery } from "../generated/graphql";
import { isServer } from "../utils/isServer";
import { MatchedAnimalsTable } from "../components/app/MatchedAnimalsTable";

const Matches: React.FC<{}> = ({ }) => {
  // get user
  const { data: meData, loading: meLoading } = useMeUserQuery({
    skip: isServer(),
  });

  // get all matches for that user
  const { data: matchData, loading: matchLoading, error: matchError } = useMatchesQuery({
    variables: {
      userId: meData?.meUser.id,
      limit: 100,
    },
  });

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
            {!matchLoading ? <MatchedAnimalsTable data={matchData}></MatchedAnimalsTable> : null}
          </Table>
        </HStack>
      </Flex>
      <HomeFooter></HomeFooter>
    </div>
  );

  return null;
};

export default withApollo()(Matches);
