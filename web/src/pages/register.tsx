import React from "react";
import { useRouter } from "next/router";
import RegisterCard from "../components/RegisterCard";
import { withApollo } from "../utils/withApollo";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  const router = useRouter();
  return <RegisterCard></RegisterCard>;
};

export default withApollo({ ssr: true })(Register);
