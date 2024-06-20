import { Navigate, createBrowserRouter } from "react-router-dom";

import Login from "../features/login/login";
import { MainLayout } from "../components/MainLayout";
import Register from "../features/register/register";

// export const routes =[
//     {
//         path: "/",
//         element: <MainLayout />
//     },
//     {
//         path: "/login",
//         element: <LoginPage />
//     },
//     {
//         path: "/register",
//         element: <Register />
//     },
// ];

// export const router = createBrowserRouter(routes);
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Navigate to="/mainlayout" /> },
    //   { path: "login", element: <LoginPage /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);
