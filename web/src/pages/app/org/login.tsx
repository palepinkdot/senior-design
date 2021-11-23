import React from "react";
import OrgLoginCard from "../../../components/app/OrgLoginCard";
import OrgRegisterCard from "../../../components/app/OrgRegisterCard";
import { withApollo } from "../../../utils/withApollo";

const AppLoginrOrg: React.FC<{}> = ({}) => {
  return <OrgLoginCard />;
};

export default withApollo({ ssr: false })(AppLoginrOrg);
