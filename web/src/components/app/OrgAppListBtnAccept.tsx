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
import {toast} from "react-hot-toast";

interface ApplicationProps {
  application?;
}

  export const OrgAppListBtnAccept : React.FC<ApplicationProps> = ({application}) => {
    const [updateApplication] = useUpdateApplicationStatusMutation();
    if (!application) {        
      return null;
    } else if (application) {
  return (
      <Box
          cursor={'pointer'}
          as="a"
          p={4}
          borderRadius="full"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          bgColor="gray.300"
          _hover={{
              bgColor: "blue.400",
              transform: "scale(1.05)",
          }}
          _active={{
              transform: "scale(0.95)",
          }}

          onClick={async () => {
              let values = {
                  applicationId: application.id,
                  status: "Accepted"
              }

              const response = await updateApplication({
                  variables: {applicationId: values.applicationId, status: values.status},
              });
              if (response.data?.updateApplicationStatus.errors) {
                  console.log(response.data?.updateApplicationStatus.errors);
                  toast.success('Application has been successfully updated.');
              } else if (response.data?.updateApplicationStatus.application) {
                  // worked
                  console.log("Updated");
                  toast.error('Error updating application.')
              }
          }
          }
      >
          <Text
              as="i"
              px="10"
              py="5"
              color="black"
              fontSize="1.2rem"
              fontWeight="bold"
              textTransform="uppercase"
              _hover={{
                  color: 'white'
              }}
          >
              Approve
          </Text>
      </Box>
  );
}
};

