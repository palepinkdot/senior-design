import React from "react";
import { Layout } from "../../components/Layout";
import { useIsAuth } from "../../utils/useIsAuth";
import { withApollo } from "../../utils/withApollo";

const AppIndex: React.FC<{}> = ({}) => {
  useIsAuth();
  return (
    <Layout>
      <h1>This is the main page of the app, once a user is signed in.</h1>
    </Layout>
  );

  return null;
};

export default withApollo({ ssr: false })(AppIndex);
