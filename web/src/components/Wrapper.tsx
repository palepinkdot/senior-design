import React from "react";
import { Box, Center, Container } from "@chakra-ui/react";

export type WrapperVariant = "small" | "regular" | "100vh";
interface WrapperProps {
  variant?: WrapperVariant;
  height?: WrapperVariant;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
  height = null,
}) => {
  return (
    <Center height={height} px={8} py={8}>
      <Box alignSelf="center" maxW="1500px">
        {children}
      </Box>
    </Center>
  );
};
