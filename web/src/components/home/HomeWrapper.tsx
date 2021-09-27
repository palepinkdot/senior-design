import React from "react";
import { Box } from "@chakra-ui/react";

export type WrapperVariant = "small" | "regular" | "100vh";
interface WrapperProps {
  variant?: WrapperVariant;
  height?: WrapperVariant;
}

export const HomeWrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      mx="auto"
      maxW={variant === "regular" ? "1500px" : "400px"}
      h="90%"
    >
      {children}
    </Box>
  );
};
