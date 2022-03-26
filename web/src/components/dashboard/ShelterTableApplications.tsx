import {Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr} from "@chakra-ui/table";
import {Text, HStack, Link, VStack, Box} from "@chakra-ui/react";
import {Button} from "@chakra-ui/react";
import { useAdopterByIdQuery, useAnimalByIdQuery, useUpdateApplicationStatusMutation } from "../../generated/graphql";
import { ShelterTableAdoName } from "./ShelterTableAdoName";
import { useRouter } from "next/router";

interface ApplicationsProps {
    applications;
  }

export const ShelterTableApplications : React.FC<ApplicationsProps> = ({applications}) => {
    const router = useRouter();
    const [updateApplication] = useUpdateApplicationStatusMutation();
    
    if (!applications) {
        return null;
      } else if (applications) {
        return (
            <Table variant="striped" colorScheme="red">
                <TableCaption>
                    <Button onClick={async () => {router.push("/app/org/apps")}}>Show More</Button>
                </TableCaption>
                <Thead>
                    <Tr>
                        <Th textAlign="center">Adopter Name</Th>
                        <Th textAlign="center">Pet Name</Th>
                        <Th textAlign="center">Status</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        applications?.map((e) => {
                            const { data: animalData, error: animalError} = useAnimalByIdQuery({
                                variables: {
                                  id: e.animalId,
                                },
                              });                              
                        return (                    
                            <Tr>
                                <ShelterTableAdoName userId={e.userId} />
                                <Td textAlign="center"><Text fontSize="xl" as="b" textTransform={"capitalize"}>{animalData !== undefined ? animalData?.animalByID.name : "Can't Load Pet Name."}</Text></Td>
                                <Td textAlign="center">{e.status}</Td>
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
                        })
                    }
                </Tbody>
            </Table>
        );
      }
}
