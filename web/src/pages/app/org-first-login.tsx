import React from "react";
import { AppLayout } from "../../components/app/AppLayout";
import { AppWrapper } from "../../components/app/AppWrapper";
import { withApollo } from "../../utils/withApollo";
import { UserTypeChoice } from "../../components/app/UserTypeChoice";
import AdoFirstLoginCard from "../../components/app/AdoFirstLoginCard";
import OrgFirstLoginCard from "../../components/app/OrgFirstLoginCard";

const AppGetStarted: React.FC<{}> = ({}) => {
  return (
    <AppLayout>
      <OrgFirstLoginCard />
    </AppLayout>
  );
};

export default withApollo({ ssr: false })(AppGetStarted);
