import React from "react";
import { Box, Center, Container } from "@chakra-ui/react";

export type WrapperVariant = "small" | "regular";
interface WrapperProps {
  variant?: WrapperVariant;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <>
      <Center px={8} py={8}>
        <Box alignSelf="center" maxW="1500px">
          {children}
        </Box>
      </Center>
    </>
  );
};
