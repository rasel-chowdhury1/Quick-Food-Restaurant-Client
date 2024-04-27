import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/OurMany/Menu/Menu";
import Shop from "../pages/OurShop/Shop/Shop";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Secret from "../Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/AdminDashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../pages/AdminDashboard/ManageItem/ManageItem";
import ContactUs from "../pages/Home/ContactUs/ContactUs";
import Payment from "../pages/Dashboard/Payment/Payment";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/AdminDashboard/AdminHome/AdminHome";
import { Elements } from '@stripe/react-stripe-js';
import AddReview from "../pages/Dashboard/AddReview/AddReview";
import ManageBooking from "../pages/Dashboard/ManageBooking/ManageBooking";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import ErrrorPage from "../pages/ErrrorPage/ErrrorPage";
import Reservation from "../pages/Dashboard/Reservation/Reservation";
import UpdateItem from "../pages/AdminDashboard/UpdateItem/UpdateItem";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: "/contact",
          element: <ContactUs></ContactUs>
        },
        {
          path: 'menu',
          element: <Menu></Menu>
        },
        {
          path: 'shop/:category',
          element: <Shop></Shop>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'userhome',
          element:<UserHome></UserHome>
        },
        {
          path: "mycart",
          element: <MyCart></MyCart>
        },
        {
          path: "payment",
          element: <Payment></Payment>
        },
        {
          path: "addReview",
          element: <AddReview></AddReview>
        },
        {
          path: "manageBooking",
          element: <ManageBooking></ManageBooking>
        },
        {
          path: "paymentHistory",
          element: <PaymentHistory></PaymentHistory>
        },
        {
          path: "reservation",
          element: <Reservation></Reservation>
        },

        //admin routes
        {
          path: 'adminhome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: "allusers",
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: "addItem",
          element: <AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path: "manageItems",
          element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
        },
        {
          path: "updateItem",
          element: <AdminRoute><UpdateItem/></AdminRoute>
        }
      ]
    },
    {
      path: '*',
      element: <ErrrorPage></ErrrorPage>
    }
    
  ]);

  export default router;