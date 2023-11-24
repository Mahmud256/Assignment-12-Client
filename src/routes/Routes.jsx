import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Login from "../page/Login/Login";
import Home from "../page/Home/Home";
import LoginAuth from "../page/Login/LoginAuth";
import Register from "../page/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/login/auth',
                element: <LoginAuth></LoginAuth>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);
export default router;  