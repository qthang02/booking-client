import Login from "../features/login/login";
import {MainLayout} from "../components/MainLayout";
import Register from "../features/register/register";
import {createBrowserRouter} from "react-router-dom";

export const routes =[
    {
        path: "/",
        element: <MainLayout />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
];

export const router = createBrowserRouter(routes);