import React from "react";
import {
  Tbody,
  Tr,
  Td,
  Text,
  HStack,
} from "@chakra-ui/react";
import { useAnimalByIdQuery, useOrgByIdQuery } from "../../generated/graphql";
import { Image } from "@chakra-ui/react";
import { PetDetailModal } from "./PetDetailModal"
import { NotAllowedIcon, CheckCircleIcon, WarningIcon } from '@chakra-ui/icons'

interface AnimalDataProps {
  data;
}

export const ApplicationsTable: React.FC<AnimalDataProps> = ({ data }) => {
  if (!data) {
    return null;
  } else if (data) {
    
    return (
      <Tbody>
              {
              // get animals by id
              
                data?.applications.applications.map((e) => {                  
                  const { data: animalData, error: animalError} = useAnimalByIdQuery({
                    variables: {
                      id: e.animalId,
                    },
                  });
                  
                  const { data: orgdata, error: orgError} = useOrgByIdQuery({
                    variables: {
                      id: animalData?.animalByID.orgId,
                    },
                  });
                  
                  return (                    
                    <Tr>
                      <Td textAlign="center">
                      <Text fontSize="xl" as="b" textTransform={"capitalize"}>{orgdata !== undefined ? orgdata?.orgByID.orgName : "Can't Load Org Name."} </Text></Td>
                      <Td textAlign="center">
                        <HStack justify="center" w={"100%"} h={"100%"} mx="10" py="25px">
                        <Image
                          boxSize='175px'
                          src={animalData?.animalByID.imageURL}
                          borderRadius="full"                          
                        ></Image>
                        <Text fontSize="2xl" as="b" textTransform={"capitalize"}>{animalData?.animalByID.name}</Text>
                        </HStack>
                        <PetDetailModal pet={animalData?.animalByID} showAdopt={false}/>
                        </Td>
                        <Td textAlign="center"> { e.status == 'Waiting' ? <WarningIcon w={8} h={8} color="yellow.400" /> : null}
                        { e.status == 'Accepted' ? <CheckCircleIcon w={8} h={8} color="green.400" /> : null}
                        { e.status == 'Rejected' ? <NotAllowedIcon w={8} h={8} color="red.400" /> : null}
                        <Text fontSize="xl" as="b"> {e.status}</Text></Td>
                    </Tr>
                  );
                })
              }
      </Tbody>
    );
  }
};
