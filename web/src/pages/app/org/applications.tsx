import React from "react";
import { useIsOrg } from "../../../utils/useIsOrg";
import { AppLayout } from "../../../components/app/AppLayout";
import { AppUserHome } from "../../../components/app/AppUserHome";
import { Layout } from "../../../components/Layout";
import { useIsUser } from "../../../utils/useIsUser";
import { withApollo } from "../../../utils/withApollo";
import OrgDashboard from "../../../components/app/OrgDashboard";
import OrgApplicationListView from "../../../components/app/OrgApplicationListView";

const ShelterApplicationsView: React.FC<{}> = ({}) => {
  useIsOrg();
  return (
    <AppLayout>
      <OrgApplicationListView />
    </AppLayout>
  );
};

export default withApollo({ ssr: false })(ShelterApplicationsView);
