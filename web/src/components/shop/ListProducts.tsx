import { Flex, Heading, WrapItem } from "@chakra-ui/react";
import React from "react";
import { IoSadOutline } from "react-icons/io5";
import { useProductsQuery } from "../../generated/graphql";

import ProductCard from "./ShopProductCard";

export const ListProducts = ({}) => {
  const { data, loading } = useProductsQuery();

  if (loading) {
    return <h1>Loading...</h1>;
  } else if (!data?.products) {
    return (
      <Flex alignItems="center" justifyContent="center">
        <Heading fontWeight={800} fontSize={48}>
          This shop has no items! &nbsp;
        </Heading>
        <IoSadOutline size={"4rem"} />
      </Flex>
    );
  }

  return (
    <Flex
      m={0}
      p={0}
      listStyleType={"none"}
      lineHeight={"unset"}
      boxSizing={"border-box"}
      flexWrap={"wrap"}
    >
      {data.products.map((product) => (
        <ProductCard product={product} />
      ))}
    </Flex>
  );
};
