import {Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr} from "@chakra-ui/table";
import { Text, Button} from "@chakra-ui/react";
import { TableAnimalsAppCount } from "./TableAnimalsAppCount";

interface AnimalsProps {
    animals;
    applications;
  }

export const TableAnimals : React.FC<AnimalsProps> = ({animals, applications}) => {
    if (!animals) {
        return null;
      } else if (animals) {
        
        return (
            <Table variant="striped" colorScheme="red">
            <TableCaption>
                <Button>Show More</Button>
            </TableCaption>
            <Thead>
                <Tr>
                    <Th textAlign="center">Pet Name</Th>
                    <Th textAlign="center">Total Applications</Th>
                </Tr>
            </Thead>
            <Tbody>
            {
                animals?.map((e) => {                  
                 return (                    
                    <Tr>
                      <Td textAlign="center"><Text fontSize="xl" as="b" textTransform={"capitalize"}>{e.name}</Text></Td>
                      <TableAnimalsAppCount applications={applications} animal={e} />
                    </Tr>
                  );
                })
              }
            </Tbody>
        </Table>
        );
      }
}
