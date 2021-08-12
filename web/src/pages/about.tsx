import React from "react";
import { Layout } from "../components/Layout";
import { withApollo } from "../utils/withApollo";

const About: React.FC<{}> = ({}) => {
  return (
    <Layout>
      <body>About works.</body>
    </Layout>
  );

  return null;
};

export default withApollo()(About);
