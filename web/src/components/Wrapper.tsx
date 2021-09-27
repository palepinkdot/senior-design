import React from "react";
import { Box } from "@chakra-ui/react";

export type WrapperVariant = "small" | "regular" | "100vh";
interface WrapperProps {
  variant?: WrapperVariant;
  height?: WrapperVariant;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <Box
      backgroundColor="white"
      mt={8}
      mx="auto"
      w="100%"
      maxW={variant === "regular" ? "1500px" : "400px"}
    >
      {children}
    </Box>
  );
};
