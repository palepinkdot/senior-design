import React from "react";
import AdoLoginCard from "../../../components/app/AdoLoginCard";
import { withApollo } from "../../../utils/withApollo";

const AdoLoginPage: React.FC<{}> = ({}) => {
  return <AdoLoginCard />;
};

export default withApollo({ ssr: false })(AdoLoginPage);
