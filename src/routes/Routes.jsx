import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Login from "../page/Login/Login";
import Home from "../page/Home/Home";
import LoginAuth from "../page/Login/LoginAuth";
import Register from "../page/Register/Register";
import Apartment from "../page/Apartment/Apartment";
import Story from "../page/Story/Story";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import UserHome from "../page/Dashboard/UserHome/UserHome";
import AllUsers from "../page/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AdminHome from "../page/Dashboard/AdminHome/AdminHome";
import Book from "../page/Dashboard/Book/Book";
import MemberHome from "../page/Dashboard/MemberHome/MemberHome";
import MemberRoute from "./MemberRoute";

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
                path: '/story',
                element: <Story></Story>
            },
            {
                path: '/apartment',
                element: <Apartment></Apartment>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
         children: [
            // normal user
            {
                path: 'userHome',
                element: <PrivateRoute><UserHome></UserHome></PrivateRoute>
            },
            {
                path: 'book',
                element: <Book></Book>
            },
            // {
            //     path: 'payment',
            //     element: <Payment></Payment>
            // },
            // {
            //     path: 'paymentHistory',
            //     element: <PaymentHistory></PaymentHistory>
            // },
            // admin routes
            {
                path: 'users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'memberHome',
                element: <MemberRoute><MemberHome></MemberHome></MemberRoute>
            },
            {
                path: 'adminHome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            }
        //     {
        //         path: 'additems',
        //         element: <AdminRoute><AddItems></AddItems></AdminRoute>
        //     },
        //     {
        //         path: 'manageItems',
        //         element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        //     },
        //     {
        //         path: 'updateItem/:id',
        //         element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        //         loader: ({ params }) => fetch(`https://bistro-boss-restaurant-server-beta.vercel.app/menu/${params.id}`)
        //     }

         ]
    }
]);
export default router;  