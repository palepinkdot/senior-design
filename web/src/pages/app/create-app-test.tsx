import React from "react";
import { AppLayout } from "../../components/app/AppLayout";
import { AppWrapper } from "../../components/app/AppWrapper";
import { withApollo } from "../../utils/withApollo";
import { UserTypeChoice } from "../../components/app/UserTypeChoice";
import CreateApplication from "../../components/app/CreateApplication";

const AppGetStarted: React.FC<{}> = ({}) => {
    return (
        <AppLayout>
            <CreateApplication />
        </AppLayout>
    );
};

export default withApollo({ ssr: false })(AppGetStarted);
