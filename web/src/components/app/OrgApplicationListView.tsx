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
                      <Thead>
                          <Tr>
                              <Th><Heading as='h4' size='md'>Adopter Name</Heading></Th>
                              <Th><Heading as='h4' size='md'>Pet Name</Heading></Th>
                              <Th><Heading as='h4' size='md'>Status</Heading></Th>
                          </Tr>
                      </Thead>
                      <Tbody>
                          {
                              shelterApps?.applicationPerShelter.applications?.map((e) => {
                                  const { data: animalData, error: animalError} = useAnimalByIdQuery({
                                      variables: {
                                        id: e.animalId,
                                      },
                                    });                                    
                              return (                    
                                  <Tr>
                                      <ShelterTableAdoName userId={e.userId} />                                      
                                      <Td><Text fontSize="xl" as="b" textTransform={"capitalize"}>{animalData !== undefined ? animalData?.animalByID.name : "Can't Load Pet Name."}</Text></Td>
                                      <Td>{e.status}</Td>
                                      <Td>
                                        <VStack>
                                            <Box
                                                cursor={'pointer'}
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

                                                onClick={async () => {
                                                    let values = {
                                                        applicationId: e.id,
                                                        status: "Accepted"
                                                    }

                                                    const response = await updateApplication({
                                                        variables: {applicationId: values.applicationId, status: values.status},
                                                    });
                                                    if (response.data?.updateApplicationStatus.errors) {
                                                        console.log(response.data?.updateApplicationStatus.errors)
                                                    } else if (response.data?.updateApplicationStatus.application) {
                                                        // worked
                                                        console.log("Updated");
                                                    }
                                                }
                                                }
                                            >
                                                <Text
                                                    as="i"
                                                    px="10"
                                                    color="white"
                                                    fontSize="1.2rem"
                                                    fontWeight="bold"
                                                    textTransform="uppercase"
                                                >
                                                    Approve
                                                </Text>
                                            </Box>
                                            <Box
                                                cursor={'pointer'}
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

                                                onClick={async () => {
                                                    let values = {
                                                        applicationId: e.id,
                                                        status: "Rejected"
                                                    }

                                                    const response = await updateApplication({
                                                        variables: {applicationId: values.applicationId, status: values.status},
                                                    });
                                                    if (response.data?.updateApplicationStatus.errors) {
                                                        console.log(response.data?.updateApplicationStatus.errors)
                                                    } else if (response.data?.updateApplicationStatus.application) {
                                                        // worked
                                                        console.log("Updated");
                                                    }
                                                }
                                                }
                                            >
                                                <Text
                                                    as="i"
                                                    px="10"
                                                    color="white"
                                                    fontSize="1.2rem"
                                                    fontWeight="bold"
                                                    textTransform="uppercase"
                                                >
                                                    Reject
                                                </Text>
                                            </Box>
                                        </VStack>
                                      </Td>
                                  </Tr>
                              );
                              })
                          }
                      </Tbody>
                  </Table>
              </HStack>
      </Flex>
      <HomeFooter></HomeFooter>
            </div>
  );

  return null;
};

