import {Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr} from "@chakra-ui/table";
import {Button} from "@chakra-ui/react";


export default function TableAnimals() {
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
                <Tr>
                    <Td>Riley</Td>
                    <Td>3746</Td>
                    <Td>742</Td>
                    <Td>21</Td>
                    <Td>
                        <Button>Edit</Button>
                    </Td>
                </Tr>
                <Tr>
                    <Td>Tony</Td>
                    <Td>8126</Td>
                    <Td>1412</Td>
                    <Td>31</Td>
                    <Td>
                        <Button>Edit</Button>
                    </Td>
                </Tr>
                <Tr>
                    <Td>Luna</Td>
                    <Td>8836</Td>
                    <Td>2123</Td>
                    <Td>32</Td>
                    <Td>
                        <Button>Edit</Button>
                    </Td>
                </Tr>
                <Tr>
                    <Td>Mochi</Td>
                    <Td>1173</Td>
                    <Td>120</Td>
                    <Td>5</Td>
                    <Td>
                        <Button>Edit</Button>
                    </Td>
                </Tr>
                <Tr>
                    <Td>Gerald</Td>
                    <Td>2739</Td>
                    <Td>539</Td>
                    <Td>13</Td>
                    <Td>
                        <Button>Edit</Button>
                    </Td>
                </Tr>
            </Tbody>
        </Table>

    );
}
