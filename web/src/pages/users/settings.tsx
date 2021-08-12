import React from "react";
import { Layout } from "../../components/Layout";
import { withApollo } from "../../utils/withApollo";

const Settings: React.FC<{}> = ({}) => {
  return (
    <Layout>
      <h1>User settings slug</h1>
    </Layout>
  );

  return null;
};

export default withApollo({ ssr: false })(Settings);
