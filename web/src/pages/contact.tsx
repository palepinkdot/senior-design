import React from "react";
import { Layout } from "../components/Layout";
import { withApollo } from "../utils/withApollo";

const Contact: React.FC<{}> = ({}) => {
  return (
    <Layout>
      <h1>Contact works.</h1>
    </Layout>
  );

  return null;
};

export default withApollo()(Contact);
