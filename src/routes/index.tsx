import { Navigate, createBrowserRouter } from "react-router-dom";

import BookingHistory from "../features/booking history/bookinghistory";
import Login from "../features/login/login";
import { MainLayout } from "../components/MainLayout";
import Register from "../features/register/register";
import RoomList from "../features/Rooms/Rooms";

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
    //   { path: "/rooms", element: <RoomList /> },
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
    path: "/rooms",
    element: <RoomList />,
  },
  {
    path: "/bookinghistory",
    element: <BookingHistory />,
  },
//   {
//     path: "/payment",
//     element: <Payment />,
//   },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);
