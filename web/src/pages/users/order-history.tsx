import React from "react";
import { withApollo } from "../../utils/withApollo";

const OrderHistory: React.FC<{}> = ({}) => {
  return (
    <h1>Order History slug</h1>
    // user is logged in
  );

  return null;
};

export default withApollo({ ssr: false })(OrderHistory);
