import {Button, Flex, HStack, Stack, Text} from "@chakra-ui/react";

export default function ApplicationCard() {
    return (
        <Stack
            bgColor={"#FFF"}
            flex={2}
            display={"column"}
            p={3}
        >
            <Text fontWeight={"bold"}>Amanda Chavez</Text>
            <Text fontWeight={"lighter"}>Requested Pet</Text>
            <Text fontWeight={"bold"}>Leslie Winkle</Text>
            <Flex
                display={"inline-flex"}
            >
                <Flex
                    flex={4}
                    display={"column"}
                >
                    <Text fontWeight={"lighter"}>Date</Text>
                    <Text fontWeight={"bold"}>25 Jul 2020</Text>
                </Flex>
                <Flex
                    flex={4}
                    display={"column"}
                >
                    <Text fontWeight={"lighter"}>Time</Text>
                    <Text fontWeight={"bold"}>11:00 - 12:00</Text>
                </Flex>
            </Flex>
            <hr />
            <HStack
                display={"inline-flex"}
            >
                <Button flex={2}>Accept</Button>
                <Button flex={2}>Decline</Button>
            </HStack>
        </Stack>
    );
}