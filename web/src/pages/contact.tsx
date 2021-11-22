import React from "react";
import { Layout } from "../components/Layout";
import { withApollo } from "../utils/withApollo";
import ContactPage from "../components/app/ContactPage";

const Contact: React.FC<{}> = ({ }) => {
  return (
    <Layout>
      <ContactPage />
    </Layout>

  );

  return null;
};

export default withApollo()(Contact);
