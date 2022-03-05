import {Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr} from "@chakra-ui/table";
import {Text, HStack, Link} from "@chakra-ui/react";
import {Button} from "@chakra-ui/react";
import { useAdopterByIdQuery, useAnimalByIdQuery } from "../../generated/graphql";
import { ShelterTableAdoName } from "./ShelterTableAdoName";
import { useRouter } from "next/router";

interface ApplicationsProps {
    applications;
  }

export const ShelterTableApplications : React.FC<ApplicationsProps> = ({applications}) => {
    const router = useRouter();
    
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
                        <Th>Adopter Name</Th>
                        <Th>Pet Name</Th>
                        <Th>Status</Th>
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
                                <Td><Text fontSize="xl" as="b" textTransform={"capitalize"}>{animalData !== undefined ? animalData?.animalByID.name : "Can't Load Pet Name."}</Text></Td>
                                <Td>{e.status}</Td>
                                <Td>
                                    <Button>Review</Button>
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
