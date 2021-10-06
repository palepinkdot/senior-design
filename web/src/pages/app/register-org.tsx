import React from "react";
import OrgRegisterCard from "../../components/app/OrgRegisterCard";
import { withApollo } from "../../utils/withApollo";

const AppRegisterOrg: React.FC<{}> = ({}) => {
  return <OrgRegisterCard />;
};

export default withApollo({ ssr: false })(AppRegisterOrg);
