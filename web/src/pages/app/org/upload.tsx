import React from "react";
import AnimalForm from "../../../components/app/OrgAnimalUpload";

import { withApollo } from "../../../utils/withApollo";

const AnimalUploadPage: React.FC<{}> = ({}) => {
  return <AnimalForm />;
};
export default withApollo({ ssr: false })(AnimalUploadPage);
