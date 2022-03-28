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
    Box,
    Text,
    Button, VStack
} from "@chakra-ui/react";
import { AppNavBar } from "../../components/app/AppNavBar";
import HomeFooter from "../../components/home/HomeFooter";
import { withApollo } from "../../utils/withApollo";
import {
    useMatchesQuery,
    useMeUserQuery,
    useAnimalByIdQuery,
    useMeOrgQuery,
    useAnimalsQuery,
    useAnimalsPerShelterQuery,
    useApplicationPerShelterQuery,
    useAdopterByIdQuery,
    useUpdateApplicationStatusMutation
} from "../../generated/graphql";
import { isServer } from "../../utils/isServer";
import { ShelterTableApplications } from "../dashboard/ShelterTableApplications";
import { OrgNavBar } from "./OrgNavBar";
import { ShelterTableAdoName } from "../dashboard/ShelterTableAdoName";
import { OrgAppListViewRows } from "./OrgAppListViewRows";


export default function OrgApplicationListView() {
    const [updateApplication] = useUpdateApplicationStatusMutation();
  const { data : data, loading : loading, error: error } = useMeOrgQuery({
    skip: isServer(),
  });	
  const {
    data: animalData,
    error: animalError,
    loading: animalLoading,
    fetchMore,
    variables,
  } = useAnimalsQuery({
    variables: {
      limit: 15,
      cursor: null,
    },
    notifyOnNetworkStatusChange: true,
  });

  const { data: animalsPerShelter, loading: perShelterLoading, error: perShelterError } = useAnimalsPerShelterQuery({
    variables: {
      orgId: data?.meOrg?.id
    },
  });
  const animalIds = !perShelterLoading ? animalsPerShelter?.animalsPerShelter.animals.map(animal => animal.id) : [];

  const {data: shelterApps, loading: shelterAppsLoading, error: shelterAppsError} = useApplicationPerShelterQuery({
    variables: {
      limit: 100,
      animalIds: animalIds
    }
  });

  return (
    <div>
      <OrgNavBar />
      <Flex flexDir="column" overflow="hidden" minH="100vh">
        <HStack align="stretch" margin="20px" spacing={4}>
          <Box color="black" >
            <Heading size="2xl" alignSelf="start" >All Applications</Heading>
          </Box>
        </HStack>
        <HStack align="stretch" mx="20px" spacing={4}>
          <Table variant="striped" colorScheme="red" size="lg">
                      <Thead backgroundColor="blue.200" >
                          <Tr>
                              <Th textAlign="center"><Heading as='h4' size='md' >Adopter Name</Heading></Th>
                              <Th textAlign="center"><Heading as='h4' size='md'>Pet Name</Heading></Th>
                              <Th textAlign="center"><Heading as='h4' size='md'>Status</Heading></Th>
                              <Th textAlign="center"><Heading as='h4' size='md'>Actions</Heading></Th>
                          </Tr>
                      </Thead>
                      <Tbody>
                        <OrgAppListViewRows applications={!shelterAppsLoading ? shelterApps?.applicationPerShelter.applications : null}  />
                      </Tbody>
                  </Table>
              </HStack>
      </Flex>
      <HomeFooter></HomeFooter>
            </div>
  );

  return null;
};

