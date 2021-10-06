import React from "react";
import AdoRegisterCard from "../../components/app/AdoRegisterCard";
import { withApollo } from "../../utils/withApollo";

const AppRegisterAdo: React.FC<{}> = ({}) => {
  return <AdoRegisterCard />;
};

export default withApollo({ ssr: false })(AppRegisterAdo);
