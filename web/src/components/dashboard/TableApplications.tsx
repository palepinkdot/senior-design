import {Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr} from "@chakra-ui/table";
import {Button} from "@chakra-ui/react";


export default function TableApplications() {
    return (
        <Table variant="striped" colorScheme="red">
            <TableCaption>
                <Button>Show More</Button>
            </TableCaption>
            <Thead>
                <Tr>
                    <Th>Adopter Name</Th>
                    <Th>Pet Name</Th>
                    <Th>Status</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>Riley</Td>
                    <Td>Mochi</Td>
                    <Td>Request for More Information</Td>
                    <Td>
                        <Button>Review</Button>
                    </Td>
                </Tr>
                <Tr>
                    <Td>Tom</Td>
                    <Td>Luna</Td>
                    <Td>Requires Review</Td>
                    <Td>
                        <Button>Review</Button>
                    </Td>
                </Tr>
                <Tr>
                    <Td>Jackson</Td>
                    <Td>Mochi</Td>
                    <Td>Request for Interview</Td>
                    <Td>
                        <Button>Review</Button>
                    </Td>
                </Tr>
            </Tbody>
        </Table>

    );
}
