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
import AdmissionRequests from "../Pages/Dashboard/Admin/AdmissionRequests/AdmissionRequests";
import AdmissionDetails from "../Pages/Dashboard/Admin/AdmissionDetails/AdmissionDetails";

import AdminList from "../Pages/Dashboard/Admin/AdminList";
import StudentsLists from "../Pages/Dashboard/Admin/StudentsLists/StudentsLists";
import Programs from "../Pages/Dashboard/Admin/Programs/Programs";
import Department from "../Pages/Dashboard/Admin/Department/Department";
import AcademicSemester from "../Pages/Dashboard/Admin/AcademicSemester/AcademicSemester";
import Batch from "../Pages/Dashboard/Admin/Batch/Batch";
import AdditionalInfoRequireRoutes from "./AdditionalInfoRequireRoutes";
import FacultyList from "../Pages/Dashboard/Admin/FacultyList";
import SemesterRegistration from "../Pages/Dashboard/Admin/SemesterRegistration/SemesterRegistration";
import Overview from "../Pages/Home/AboutPage/overview/Overview";
import HistoryOfMu from "../Pages/Home/AboutPage/HistoryOfMu/HistoryOfMu";
import VisionAndMission from "../Pages/Home/AboutPage/VissionAndMission/VisionAndMission";
import CSEProgramUi from "../Pages/Home/AcdemicsPage/CSEProgram/CSEProgramUi";
import SEProgramUi from "../Pages/Home/AcdemicsPage/SEProgramUi/SEProgramUi";
import OneStopServiceUi from "../Pages/Home/facilitiesPages/OneStopServiceUi/OneStopServiceUi";
import LibraryOfMuUi from "../Pages/Home/facilitiesPages/LibraryOfMuUi/LibraryOfMuUi";
import LaboratoryUi from "../Pages/Home/facilitiesPages/Laboratory/LaboratoryUi";
import Cafeteria from "../Pages/Home/facilitiesPages/Cafeteria/Cafeteria";
import MuSportsClub from "../Pages/Home/Club&Organization/MuSportsClub/MuSportsClub";
import MuSocialServiceClub from "../Pages/Home/Club&Organization/muSocialServiceClub/muSocialServiceClub";
import MuCulturalClub from "../Pages/Home/Club&Organization/MuCulturalClab/MuCulturalClub";
import MuPhotographicSociety from "../Pages/Home/Club&Organization/MuPhotographicSociety/MuPhotographicSociety";
import MuRoboticsClub from "../Pages/Home/Club&Organization/MuRoboticsClub/MuRoboticsClub";

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
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "/history",
        element: <HistoryOfMu />,
      },
      {
        path: "/vision-mission",
        element: <VisionAndMission />,
      },
      {
        path: "/cse",
        element: <CSEProgramUi />,
      },
      {
        path: "/software-engineering",
        element: <SEProgramUi />,
      },
      {
        path: "/one-stop",
        element: <OneStopServiceUi />,
      },
      {
        path: "/library",
        element: <LibraryOfMuUi />,
      },
      {
        path: "/laboratory",
        element: <LaboratoryUi />,
      },
      {
        path: "/cafeteria",
        element: <Cafeteria />,
      },
      {
        path: "/mu-sports-club",
        element: <MuSportsClub />,
      },
      {
        path: "/mu-social-service",
        element: <MuSocialServiceClub />,
      },
      {
        path: "/mu-cultural-club",
        element: <MuCulturalClub />,
      },
      {
        path: "/mu-photographic-society",
        element: <MuPhotographicSociety />,
      },
      {
        path: "/mu-robotics-club",
        element: <MuRoboticsClub />,
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
        <AdditionalInfoRequireRoutes>
          <AdmissionForm />
        </AdditionalInfoRequireRoutes>
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
        path: "/dashboard/admins",
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <AdminList />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/semester-registration",
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <SemesterRegistration />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/faculties",
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <FacultyList />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/programs",
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <Programs />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/department",
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <Department />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/batch",
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <Batch />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/academic-semesters",
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <AcademicSemester />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/students",
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <StudentsLists />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/admission-requests-lists/details/:Id",
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
