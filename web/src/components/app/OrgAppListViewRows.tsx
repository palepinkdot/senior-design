import React from "react";
import {
    Tr,
    Td,
    Box,
    Text,
    VStack
} from "@chakra-ui/react";
import {
    useAnimalByIdQuery, useUpdateApplicationStatusMutation
} from "../../generated/graphql";
import { ShelterTableAdoName } from "../dashboard/ShelterTableAdoName";
import { OrgAppListBtnAccept } from "./OrgAppListBtnAccept";
import { OrgAppListBtnReject } from "./OrgAppListBtnReject";

interface ApplicationsProps {
  applications;
}

  export const OrgAppListViewRows : React.FC<ApplicationsProps> = ({applications}) => {
    if (!applications) {        
      return null;
    } else if (applications) {
  return (
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
                  <OrgAppListBtnAccept application={e}/>
                  <OrgAppListBtnReject application={e}/>
              </VStack>
            </Td>
        </Tr>
    );
    })
  );
                            }
};

