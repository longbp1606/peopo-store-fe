import config from "@/config";
import AdminLayout from "@/layouts/AdminLayout"
import Dashboard from "@/pages/Admin/Dashboard";
import ManageOrder from "@/pages/Admin/ManageOrder";


const AdminRouter = () => {
    return <AdminLayout />
};

const AdminRoutes = {
    path: config.routes.admin.dashboard,
    element: <AdminRouter />,
    children: [
        { path: config.routes.admin.dashboard, element: <Dashboard /> },
        { path: config.routes.admin.manageOrder, element: <ManageOrder />},
    ]
};

export default AdminRoutes;