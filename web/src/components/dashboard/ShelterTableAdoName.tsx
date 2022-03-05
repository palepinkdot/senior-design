import {Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr} from "@chakra-ui/table";
import {Text, HStack} from "@chakra-ui/react";
import {Button} from "@chakra-ui/react";
import { useAdopterByIdQuery, useAnimalByIdQuery } from "../../generated/graphql";

interface ApplicationsProps {
    userId;
  }

export const ShelterTableAdoName : React.FC<ApplicationsProps> = ({userId}) => {
    
    if (!userId) {
        return null;
      } else if (userId) {
        const {data: adopterData, error: adopterError} = useAdopterByIdQuery({
            variables: {
                id: userId,
            }
          });
        return (
                <Td><Text fontSize="xl" as="b" textTransform={"capitalize"}>{adopterData !== undefined ? adopterData?.adopterByID.firstname : "Can't Load Adopter Name."}</Text></Td>
        );
      }
}
