import config from "@/config";
import MainLayout from "@/layouts/MainLayout"
import NotFound from "@/pages/404/404";
import Address from "@/pages/Customer/Address";
import CustomerLayout from "@/pages/Customer/CustomerLayout";
import Dashboard from "@/pages/Customer/Dashboard";
import Profile from "@/pages/Customer/Profile";
import Home from "@/pages/Home/Home";
import ProductDetail from "@/pages/ProductDetail/ProductDetail";
import Products from "@/pages/Products";


const MainRouter = () => {
    return <MainLayout />
};

const CustomerRouter = () => {
    return <CustomerLayout />;
}

const publicRoutes = {
    children: [
        { path: config.routes.public.home, element: <Home /> },
        { path: config.routes.public.product, element: <Products /> },
        { path: config.routes.public.productDetail, element: <ProductDetail /> }
    ]
};

const customerRoutes = {
    element: <CustomerRouter />,
    children: [
        { path: config.routes.customer.dashboard, element: <Dashboard /> },
        { path: config.routes.customer.profile, element: <Profile /> },
        { path: config.routes.customer.address, element: <Address /> },
    ]
}

const notFoundRoutes = { path: '*', element: <NotFound /> }

const MainRoutes = {
    path: '/',
    element: <MainRouter />,
    children: [publicRoutes, customerRoutes, notFoundRoutes],
};

export default MainRoutes;