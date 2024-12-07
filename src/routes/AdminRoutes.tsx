import config from "@/config";
import AdminLayout from "@/layouts/AdminLayout"
import Dashboard from "@/pages/Admin/Dashboard";
import ManageCustomer from "@/pages/Admin/ManageCustomer";
import ManageOrder from "@/pages/Admin/ManageOrder";
import ManageProduct from "@/pages/Admin/ManageProduct";


const AdminRouter = () => {
    return <AdminLayout />
};

const AdminRoutes = {
    path: config.routes.admin.dashboard,
    element: <AdminRouter />,
    children: [
        { path: config.routes.admin.dashboard, element: <Dashboard /> },
        { path: config.routes.admin.manageOrder, element: <ManageOrder />},
        { path: config.routes.admin.manageProduct, element: <ManageProduct />},
        { path: config.routes.admin.manageCustomer, element: <ManageCustomer />},
    ]
};

export default AdminRoutes;