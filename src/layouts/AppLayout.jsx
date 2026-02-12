import { Outlet, useParams } from "react-router-dom";
import Dashboard from "../components/DashboardLayout";
import DashboardLayout from "../components/DashboardLayout";


const AppLayout = () => {
    const {companySlug} = useParams();

    return(
        <DashboardLayout userTier="Pro">
            <Outlet/>
        </DashboardLayout>
    )
}
export default AppLayout;