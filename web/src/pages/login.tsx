import React from "react";

import LoginCard from "../components/LoginCard";
import { withApollo } from "../utils/withApollo";

const Login: React.FC<{}> = ({}) => {
  return <LoginCard></LoginCard>;
};

export default withApollo({ ssr: true })(Login);
