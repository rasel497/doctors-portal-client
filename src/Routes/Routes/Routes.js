import { createBrowserRouter } from "react-router-dom"
import DashBoardLayout from "../../Layout/DashBoardLayout";
import Main from "../../Layout/Main"
import Appoinment from "../../Pages/Appoinment/Appoinment/Appoinment";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import MyAppoinment from "../../Pages/Dashboard/MyAppoinment/MyAppoinment";
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/appoinment',
                element: <Appoinment></Appoinment>
            }
        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppoinment></MyAppoinment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            }
        ]
    }
])

export default router;