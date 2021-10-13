import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../home/HomeFooter";
import { HomeNavBar } from "../home/HomeNavBar";
import { Wrapper, WrapperVariant } from "../Wrapper";

interface LayoutProps {
  variant?: WrapperVariant;
}

export const AppLayout: React.FC<LayoutProps> = ({ children, variant }) => {
  return (
    <>
      <Box w="100%" h="100vh">
        {children}
      </Box>
    </>
  );
};
