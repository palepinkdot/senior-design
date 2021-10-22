import React from "react";
import OrgDashboard from "../../components/app/OrgDashboard";
import { withApollo } from "../../utils/withApollo";

const AppRegisterAdo: React.FC<{}> = ({}) => {
    return <OrgDashboard />;
};

export default withApollo({ ssr: false })(AppRegisterAdo);
