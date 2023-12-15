import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Regester/Register";
import Dashboard from "../Layout/Dashboard/Dashboard";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import GetAdmission from "../Pages/GetAdmission/GetAdmission";
import AdmissionForm from "../Pages/GetAdmission/AdmissionForm";

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
        path: "/getAdmission",
        element: <GetAdmission />,
      },
    ],
  },
  {
    path: "/getAdmission/admission-form",
    element: <AdmissionForm />,
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
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/users",
        element: <ManageUsers />,
      },
    ],
  },
]);

export default router;
