import React from "react";
import { AppLayout } from "../../components/app/AppLayout";
import { AppUserHome } from "../../components/app/AppUserHome";
import { Layout } from "../../components/Layout";
import { useIsUser } from "../../utils/useIsUser";
import { withApollo } from "../../utils/withApollo";

const AppIndex: React.FC<{}> = ({}) => {
  useIsUser();

  return (
    <AppLayout>
      <AppUserHome />
    </AppLayout>
  );
};

export default withApollo({ ssr: false })(AppIndex);
