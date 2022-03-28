import {Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr} from "@chakra-ui/table";
import {Text, HStack, Link, VStack, Box} from "@chakra-ui/react";
import {Button} from "@chakra-ui/react";
import { useAdopterByIdQuery, useAnimalByIdQuery, useUpdateApplicationStatusMutation } from "../../generated/graphql";
import { ShelterTableAdoName } from "./ShelterTableAdoName";
import { useRouter } from "next/router";
import { RowsShelterTableApplications } from "./RowsShelterTableApplications";

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
                    <Button onClick={async () => {router.push("/app/org/applications")}}>Show More</Button>
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
                        return (     
                            <RowsShelterTableApplications application={e}/>               
                            
                        );
                        })
                    }
                </Tbody>
            </Table>
        );
      }
}
