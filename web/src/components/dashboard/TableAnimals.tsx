import {Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr} from "@chakra-ui/table";
import {Button} from "@chakra-ui/react";

interface AnimalsProps {
    animals;
  }

export const TableAnimals : React.FC<AnimalsProps> = ({animals}) => {
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
                    <Th>Pet Name</Th>
                    <Th>Views</Th>
                    <Th>Likes</Th>
                    <Th>Total Applications</Th>
                    <Th>Edit</Th>
                </Tr>
            </Thead>
            <Tbody>
            {
                animals?.map((e) => {                  
                 return (                    
                    <Tr>
                    <Td>{e.name}</Td>
                    <Td>3746</Td>
                    <Td>742</Td>
                    <Td>21</Td>
                    <Td>
                        <Button>Edit</Button>
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
