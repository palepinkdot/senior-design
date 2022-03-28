import {Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr} from "@chakra-ui/table";
import { Text, Button} from "@chakra-ui/react";

interface AnimalsProps {
    animal;
    applications?;
  }

export const TableAnimalsAppCount : React.FC<AnimalsProps> = ({animal, applications}) => {
    if (!animal) {
        return null;
      } else if (animal) {
        return (
                <Td textAlign="center"><Text fontSize="xl">{applications?.filter((app) => app.animalId == animal.id).length}</Text></Td>
        );
      }
}
