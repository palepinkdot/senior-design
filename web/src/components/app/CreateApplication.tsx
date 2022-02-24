import {
    Flex,
    Box,
    FormControl,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";

import NextLink from "next/link";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import React, {useState} from "react";
import { Application } from "../../../../server/src/entities/Application";
import {
    MeUserDocument,
    MeUserQuery,
    createApplicationMutation,
} from "../../generated/graphql";
import { toErrorMap } from "../../utils/toErrorMap";
import { InputField } from "../InputField";

export default function CreateApplication() {
    const router = useRouter();
    const [createAplicaiton] = createApplicationMutation();
    const [isVerified, setIsVerified] = useState(false);

    return (
        <>
            <Button
                type="submit"
                bg={"red.200"}
                color={"white"}
                _hover={{
                    bg: "blue.200",
                }}
                isDisabled={!isVerified}
                onCLick={() => createApplicationMutation()}
            >
                Submit Application
            </Button>
        </>
    );
}
