import React from "react";
import { AppLayout } from "../../components/app/AppLayout";
import { Layout } from "../../components/Layout";
import { useIsAuth } from "../../utils/useIsAuth";
import { withApollo } from "../../utils/withApollo";

const AppGetStarted: React.FC<{}> = ({}) => {
  //   useIsAuth();
  return (
    <AppLayout>
      <h1>
        Here we will have the user select wheather or not they are a shelter or
        a user.
      </h1>
    </AppLayout>
  );

  return null;
};

export default withApollo({ ssr: false })(AppGetStarted);
