import config from "@/config";
import ForgotPassword from "@/pages/Auth/ForgotPassword";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import SetPassword from "@/pages/Auth/SetPassword";
import { Outlet } from "react-router-dom"

const AuthRouter = () => {
    return <Outlet />;
};

const AuthRoutes = {
    element: <AuthRouter />,
    children: [
        { path: config.routes.public.login, element: <Login /> },
        { path: config.routes.public.register, element: <Register /> },
        { path: config.routes.public.setPassword, element: <SetPassword /> },
        { path: config.routes.public.forgotPassword, element: <ForgotPassword /> },
    ]
};

export default AuthRoutes;