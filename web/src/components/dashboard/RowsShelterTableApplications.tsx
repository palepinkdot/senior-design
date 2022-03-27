import {Tbody, Td, Tr} from "@chakra-ui/table";
import {Text, VStack, Box} from "@chakra-ui/react";
import { useAnimalByIdQuery, useUpdateApplicationStatusMutation } from "../../generated/graphql";
import { ShelterTableAdoName } from "./ShelterTableAdoName";


interface ApplicationsProps {
    application;
  }

export const RowsShelterTableApplications : React.FC<ApplicationsProps> = ({application}) => {
    const [updateApplication] = useUpdateApplicationStatusMutation();
    const { data: animalData, error: animalError} = useAnimalByIdQuery({
      variables: {
        id: application?.animalId,
      },
    });
    if (!animalData) {        
        return null;
      } else if (animalData) {
        return (
                  <Tr>
                      <ShelterTableAdoName userId={application?.userId} />
                      <Td textAlign="center"><Text fontSize="xl" as="b" textTransform={"capitalize"}>{animalData !== undefined ? animalData?.animalByID.name : "Loading..."}</Text></Td>
                      <Td textAlign="center">{application?.status}</Td>
                      <Td textAlign="center">
                              <VStack>
                                  <Box
                                      cursor={'pointer'}
                                      as="a"
                                      p={1.5}
                                      borderRadius="full"
                                      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                      bgColor="gray.300"
                                      _hover={{
                                          bgColor: "blue.400",
                                          transform: "scale(1.05)",
                                      }}
                                      _active={{
                                          transform: "scale(0.95)",
                                      }}

                                      onClick={async () => {
                                          let values = {
                                              applicationId: application?.id,
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
                                          py="2"
                                          color="black"
                                          fontSize="1.1rem"
                                          fontWeight="bold"
                                          textTransform="uppercase"
                                          _hover={{
                                              color: "white"
                                          }}
                                      >
                                          Approve
                                      </Text>
                                  </Box>
                                  <Box
                                      cursor={'pointer'}
                                      as="a"
                                      p={1.5}
                                      borderRadius="full"
                                      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                      bgColor="gray.400"
                                      _hover={{
                                          bgColor: "red.300",
                                          transform: "scale(1.05)",
                                      }}
                                      _active={{
                                          transform: "scale(0.95)",
                                      }}

                                      onClick={async () => {
                                          let values = {
                                              applicationId: application?.id,
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
                                          py="2"
                                          color="black"
                                          fontSize="1.1rem"
                                          fontWeight="bold"
                                          textTransform="uppercase"
                                          _hover={{
                                              color: "white"
                                          }}
                                      >
                                          Reject
                                      </Text>
                                  </Box>
                              </VStack>
                            </Td>
                  </Tr>
        );
      }      
}
