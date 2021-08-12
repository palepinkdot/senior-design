import React from "react";
import { useMeQuery } from "../../generated/graphql";
import { isServer } from "../../utils/isServer";
import Footer from "../Footer";
import { NavBar } from "../NavBar";
import { Wrapper, WrapperVariant } from "../Wrapper";

interface LayoutProps {
  variant?: WrapperVariant;
}

export const ShopLayout: React.FC<LayoutProps> = ({ children, variant }) => {
  const { data, loading } = useMeQuery({
    skip: isServer(),
  });

  if (loading) {
    return null; //Maybe add a spinner
  } else if (!data?.me) {
    return <h1>Not logged in</h1>; //User not loggedin
  } else {
    //User is logged in
  }

  return (
    <>
      <NavBar />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  );
};
