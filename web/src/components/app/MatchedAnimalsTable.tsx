import React from "react";
import {
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";
import { useAnimalByIdQuery } from "../../generated/graphql";

interface AnimalDataProps {
  data;
}

export const MatchedAnimalsTable: React.FC<AnimalDataProps> = ({ data }) => {
  if (!data) {
    return null;
  } else if (data) {

    return (
      <Tbody>
              {
              // get animals by id
                data?.matches.matches.map((e) => {
                  const { data: animalData, error: animalError} = useAnimalByIdQuery({
                    variables: {
                      id: e.animalId,
                    },
                  });
                  return (
                    <Tr>
                      <Td textAlign="center">{animalData?.animalByID.name}</Td>
                      <Td textAlign="center">{animalData?.animalByID.orgId} Adopt Now!</Td>
                    </Tr>
                  );
                })
              }
      </Tbody>
    );
  }
};
