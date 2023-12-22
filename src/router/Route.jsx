import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import PersonalTask from "../pages/Dashboard/PersonalTask/PersonalTask";
import CreateTask from "../pages/Dashboard/CreateTask/CreateTask";
import AddedTask from "../pages/Dashboard/CreateTask/AddedTask/AddedTask";
import UpdateTask from "../components/UpdateTask/UpdateTask";
import PrivateRoute from "./PrivateRoute";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'personal',
                element: <PrivateRoute><PersonalTask></PersonalTask></PrivateRoute>
            },
            {
                path: 'create',
                element: <PrivateRoute><CreateTask></CreateTask></PrivateRoute>
            },
            {
                path: 'added',
                element: <PrivateRoute><AddedTask></AddedTask></PrivateRoute>
            },
            {
                path: 'update/:id',
                element: <PrivateRoute><UpdateTask></UpdateTask></PrivateRoute>
            }
        ]
    }
]);

export default router;