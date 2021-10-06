import React from "react";
import { AppLayout } from "../../components/app/AppLayout";
import { AppWrapper } from "../../components/app/AppWrapper";
import { withApollo } from "../../utils/withApollo";
import { UserTypeChoice } from "../../components/app/UserTypeChoice";

const AppGetStarted: React.FC<{}> = ({}) => {
  return (
    <AppLayout>
      <AppWrapper>
        <UserTypeChoice />
      </AppWrapper>
    </AppLayout>
  );
};

export default withApollo({ ssr: false })(AppGetStarted);
