import React from "react";

import { withApollo } from "../../../utils/withApollo";

import AnimalForm from "../../../components/app/OrgAnimalUpload";

const AnimalUploadPage: React.FC<{}> = ({}) => {
  return <AnimalForm />;
};
export default withApollo({ ssr: false })(AnimalUploadPage);
