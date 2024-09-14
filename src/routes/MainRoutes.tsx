import config from "@/config";
import MainLayout from "@/layouts/MainLayout"
import NotFound from "@/pages/404/404";
import Home from "@/pages/Home/Home";


const MainRouter = () => {
    return <MainLayout/>
};

const publicRoutes = {
    children: [
        { path: config.routes.public.home, element: <Home/> },
    ]
};

const notFoundRoutes = { path: '*', element: <NotFound/>}

const MainRoutes = {
    path: '/',
    element: <MainRouter/>,
    children: [publicRoutes, notFoundRoutes],
};

export default MainRoutes;