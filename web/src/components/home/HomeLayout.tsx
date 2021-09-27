import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../Footer";
import { NavBar } from "../NavBar";
import { Wrapper, WrapperVariant } from "../Wrapper";

interface LayoutProps {
  variant?: WrapperVariant;
}

export const HomeLayout: React.FC<LayoutProps> = ({ children, variant }) => {
  return (
    <>
      <Box
        w="100%"
        h="100vh"
        backgroundImage="https://swipet.s3.us-east-2.amazonaws.com/cocker-spaniel-2785074.jpg"
        backgroundBlendMode="darken"
        backgroundRepeat="no-repeat"
        backgroundAttachment="fixed"
        backgroundPosition="60% 50%"
        backgroundSize="cover"
        backgroundColor="rgba(0, 0, 0, .25)"
      >
        <NavBar />
        {children}
      </Box>
      <Footer />
    </>
  );
};
