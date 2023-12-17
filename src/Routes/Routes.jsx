import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Regester/Register";
import Dashboard from "../Layout/Dashboard/Dashboard";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import GetAdmission from "../Pages/GetAdmission/GetAdmission";
import AdmissionForm from "../Pages/GetAdmission/AdmissionForm";
import PrivateRoute from "./PrivateRoute";
import AdminRoutes from "./AdminRoute";
import UserProfile from "../Pages/Dashboard/Profile/UserProfile";
import AdmissionRequests from "../Pages/AdmissionRequests/AdmissionRequests";
import AdmissionDetails from "../Pages/AdmissionDetails/AdmissionDetails";

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
        element: (
          <PrivateRoute>
            <GetAdmission />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/getAdmission/admission-form",
    element: (
      <PrivateRoute>
        <AdmissionForm />
      </PrivateRoute>
    ),
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
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/users",
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <ManageUsers />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/admission-requests-lists",
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <AdmissionRequests />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/admission-requests-lists/details/:email",
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <AdmissionDetails />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/profile",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
