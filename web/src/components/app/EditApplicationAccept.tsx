import {Box, Text} from "@chakra-ui/react";
import React from "react";
import { useUpdateApplicationStatusMutation} from "../../generated/graphql";

export default function EditApplicationAccept() {
    return (
        <>
            <Box
                cursor={'pointer'}
                as="a"
                p={4}
                borderRadius="full"
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                bgColor="blue.400"
                _hover={{
                    bgColor: "red.300",
                    transform: "scale(1.05)",
                }}
                _active={{
                    transform: "scale(0.95)",
                }}

                onClick={async () => {
                        const [updateApplication] = useUpdateApplicationStatusMutation();
                        let values = {
                            applicationId: "09e609d6-c96e-4969-9203-59f4a5e889cc",
                            status: "Accepted"
                        }

                        const response = await updateApplication({
                            variables: {applicationId: values.applicationId, status: values.status},
                        });
                        if (response.data?.updateApplicationStatus.errors) {
                            console.log(response.data?.updateApplicationStatus.errors)
                        } else if (response.data?.updateApplicationStatus.application) {
                            // worked
                            console.log("Updated");
                        }
                    }
                }
            >
                <Text
                    as="i"
                    px="10"
                    color="white"
                    fontSize="1.2rem"
                    fontWeight="bold"
                    textTransform="uppercase"
                >
                    Accept Application
                </Text>
            </Box>
        </>
    );
};
