import Login from "../features/login/login";
import {MainLayout} from "../components/MainLayout";
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
];

export const router = createBrowserRouter(routes);