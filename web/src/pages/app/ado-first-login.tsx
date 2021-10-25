import React from "react";
import { AppLayout } from "../../components/app/AppLayout";
import { AppWrapper } from "../../components/app/AppWrapper";
import { withApollo } from "../../utils/withApollo";
import { UserTypeChoice } from "../../components/app/UserTypeChoice";
import AdoFirstLoginCard from "../../components/app/AdoFirstLoginCard";

const AppGetStarted: React.FC<{}> = ({}) => {
  return (
    <AppLayout>
      <AdoFirstLoginCard />
    </AppLayout>
  );
};

export default withApollo({ ssr: false })(AppGetStarted);
