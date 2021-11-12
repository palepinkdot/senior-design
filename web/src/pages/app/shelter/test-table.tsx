import React from "react";
import TableAnimals from "../../../components/dashboard/TableAnimals";
import {AppLayout} from "../../../components/app/AppLayout";
import {withApollo} from "../../../utils/withApollo";

const DashboardAnimals: React.FC<{}> = ({}) => {
    return(
        <AppLayout>
            <TableAnimals />
        </AppLayout>
    );
};

export default withApollo({ ssr: false })(DashboardAnimals);