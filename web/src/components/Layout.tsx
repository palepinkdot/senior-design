import React from "react";
import Footer from "./Footer";
import { NavBar } from "./NavBar";
import { Wrapper, WrapperVariant } from "./Wrapper";

interface LayoutProps {
  variant?: WrapperVariant;
  boxHeight?: WrapperVariant;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  variant,
  boxHeight,
}) => {
  return (
    <>
      <NavBar />
      <Wrapper height={boxHeight} variant={variant}>
        {children}
      </Wrapper>
      <Footer />
    </>
  );
};
