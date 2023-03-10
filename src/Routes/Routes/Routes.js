import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Appointment from "../../Pages/Appointment/Appointment";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import DashboardLaout from "../../Layout/DashboardLaout";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import Allusers from "../../Pages/Dashboard/AllUsers/Allusers";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import MangaDoctors from "../../Pages/Dashboard/ManageDoctors/MangaDoctors";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLaout />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <MyAppointment />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <Allusers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-doctor",
        element: (
          <AdminRoute>
            <AddDoctor />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/managedoctors",
        element: (
          <AdminRoute>
            <MangaDoctors />
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
