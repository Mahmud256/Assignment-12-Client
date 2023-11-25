import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Login from "../page/Login/Login";
import Home from "../page/Home/Home";
import LoginAuth from "../page/Login/LoginAuth";
import Register from "../page/Register/Register";
import Apartment from "../page/Apartment/Apartment";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/BuildingDetails.json')
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
            },
            {
                path: '/apartment',
                element: <Apartment></Apartment>
            }
        ]
    },
]);
export default router;  