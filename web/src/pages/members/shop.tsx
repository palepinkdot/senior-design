import React from "react";
import { ShopLayout } from "../../components/shop/ShopLayout";
import { useProductsQuery } from "../../generated/graphql";
import { ListProducts } from "../../components/shop/ListProducts";
import { Wrap, Flex } from "@chakra-ui/react";
import { ShopHeader } from "../../components/shop/ShopHeader";
import { ShopSidebar } from "../../components/shop/ShopSidebar";
import { withApollo } from "../../utils/withApollo";

const MemberShop: React.FC<{}> = ({}) => {
  const { data } = useProductsQuery();
  return (
    <ShopLayout>
      <ShopHeader />
      <Flex pt={6}>
        <Flex pr={6}>
          <ShopSidebar />
        </Flex>
        <Flex>
          <ListProducts />
        </Flex>
      </Flex>
    </ShopLayout>
  );
};

export default withApollo()(MemberShop);
