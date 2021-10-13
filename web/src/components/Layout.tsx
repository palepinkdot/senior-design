import React from "react";
import Footer from "./home/HomeFooter";
import { AppNavBar } from "./home/HomeNavBar";
import { Wrapper, WrapperVariant } from "./Wrapper";

interface LayoutProps {
  variant?: WrapperVariant;
}

export const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
  return (
    <>
      <AppNavBar />
      {children}
      <Footer />
    </>
  );
};
