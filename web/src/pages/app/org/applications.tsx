import React from "react";
import { useIsOrg } from "../../../utils/useIsOrg";
import { AppLayout } from "../../../components/app/AppLayout";
import { AppUserHome } from "../../../components/app/AppUserHome";
import { Layout } from "../../../components/Layout";
import { useIsUser } from "../../../utils/useIsUser";
import { withApollo } from "../../../utils/withApollo";
import OrgDashboard from "../../../components/app/OrgDashboard";
import OrgApplicationReview from "../../../components/app/OrgApplicationReview";

const AppIndex: React.FC<{}> = ({}) => {
  useIsOrg();
  return (
    <AppLayout>
      <OrgApplicationReview />
    </AppLayout>
  );
};

export default withApollo({ ssr: false })(AppIndex);
