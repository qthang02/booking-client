import { Navigate, createBrowserRouter } from "react-router-dom";

import AboutUs from "../features/About us/Aboutus";
import BookingHistory from "../features/booking history/bookinghistory";
import Login from "../features/login/login";
import { MainLayout } from "../components/MainLayout";
import Payment from "../features/payment/payment";
import Register from "../features/register/register";
import RoomList from "../features/Categories/Categories";
import UserProfile from "../features/Profile User/ProfileUser";
import StatusPayment from "../features/payment/StatusPayment.tsx";

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
    path: "/categories",
    element: <RoomList />,
  },
  {
    path: "/bookinghistory",
    element: <BookingHistory />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/profile",
    element: <UserProfile />,
  },
  {
    path: "/status-payment",
    element: <StatusPayment />,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);
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