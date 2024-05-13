import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main/Main'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Regester/Register'
import Dashboard from '../Layout/Dashboard/Dashboard'
import ManageUsers from '../Pages/Dashboard/Admin/ManageUsers'
import GetAdmission from '../Pages/GetAdmission/GetAdmission'
import AdmissionForm from '../Pages/GetAdmission/AdmissionForm'
import PrivateRoute from './PrivateRoute'
import AdminRoutes from './AdminRoute'
import UserProfile from '../Pages/Dashboard/Profile/UserProfile'
import AdmissionRequests from '../Pages/Dashboard/Admin/AdmissionRequests/AdmissionRequests'
import AdmissionDetails from '../Pages/Dashboard/Admin/AdmissionDetails/AdmissionDetails'

import AdminList from '../Pages/Dashboard/Admin/AdminList'
import StudentsLists from '../Pages/Dashboard/Admin/StudentsLists/StudentsLists'
import Programs from '../Pages/Dashboard/Admin/Programs/Programs'
import Department from '../Pages/Dashboard/Admin/Department/Department'
import AcademicSemester from '../Pages/Dashboard/Admin/AcademicSemester/AcademicSemester'
import Batch from '../Pages/Dashboard/Admin/Batch/Batch'
import AdditionalInfoRequireRoutes from './AdditionalInfoRequireRoutes'
import FacultyList from '../Pages/Dashboard/Admin/FacultyList'
import SemesterRegistration from '../Pages/Dashboard/Admin/SemesterRegistration/SemesterRegistration'
import Overview from '../Pages/Home/AboutPage/overview/Overview'
import HistoryOfMu from '../Pages/Home/AboutPage/HistoryOfMu/HistoryOfMu'
import VisionAndMission from '../Pages/Home/AboutPage/VissionAndMission/VisionAndMission'
import CSEProgramUi from '../Pages/Home/AcdemicsPage/CSEProgram/CSEProgramUi'
import SEProgramUi from '../Pages/Home/AcdemicsPage/SEProgramUi/SEProgramUi'
import OneStopServiceUi from '../Pages/Home/facilitiesPages/OneStopServiceUi/OneStopServiceUi'
import LibraryOfMuUi from '../Pages/Home/facilitiesPages/LibraryOfMuUi/LibraryOfMuUi'
import LaboratoryUi from '../Pages/Home/facilitiesPages/Laboratory/LaboratoryUi'
import Cafeteria from '../Pages/Home/facilitiesPages/Cafeteria/Cafeteria'
import MuSportsClub from '../Pages/Home/Club&Organization/MuSportsClub/MuSportsClub'
import MuSocialServiceClub from '../Pages/Home/Club&Organization/muSocialServiceClub/muSocialServiceClub'
import MuCulturalClub from '../Pages/Home/Club&Organization/MuCulturalClab/MuCulturalClub'
import MuPhotographicSociety from '../Pages/Home/Club&Organization/MuPhotographicSociety/MuPhotographicSociety'
import MuRoboticsClub from '../Pages/Home/Club&Organization/MuRoboticsClub/MuRoboticsClub'
import Courses from '../Pages/Dashboard/Admin/Course/Courses'
import AdmissionPaymentSuccess from '../Pages/GetAdmission/AdmissionPaymentSuccess'
import NotFound from '../Pages/NotFoundPage/NotFound'
import AddStudentManually from '../Pages/Dashboard/Admin/AddStudentManually/AddStudentManually'
import FacultyRoutes from './FacultyRoute'
import FacultySemesterRoutine from '../Pages/Dashboard/faculty/semester routine/FacultySemesterRoutine'
import OfferedCourseTable from '../Pages/Dashboard/Admin/OfferedCourse/OfferedCourseTable'
import StudentRoute from './StudentRoute'
import DepartmentWiseStudentFee from '../Pages/Dashboard/Admin/DepartmentWiseStudentFee/DepartmentWiseStudentFee'
import StudentPayment from '../Pages/Dashboard/Student/StudentPayment/StudentPayment'
import SemesterPaymentSuccessFull from '../Pages/Dashboard/Student/StudentPayment/SemesterPaymentSuccessFull'
import OfferedCourseDetails from '../Pages/Dashboard/faculty/offer-course-details/OfferedCourseDetails'
import Attendance from '../Pages/Dashboard/faculty/make attendance/Attendance'
import Marks from '../Pages/Dashboard/faculty/Marks/Marks'
import SectionStudentsMarks from '../Pages/Dashboard/faculty/Marks/SectionStudentsMarks'
import See60Marks from '../Pages/Dashboard/faculty/Marks/See60Marks'
import See40Marks from '../Pages/Dashboard/faculty/Marks/See40Marks'
import AttendanceMarks from '../Pages/Dashboard/faculty/Marks/AttendanceMarks'
import StudentSemesterRoutine from '../Pages/Dashboard/student/semester routine/StudentSemesterRoutine'
import SixtyMarksOfRunningSemesterCourse from '../Pages/Dashboard/student/course marks/SixtyMarksOfRunningSemesterCourse'
import MonthlyPaymentSuccessFull from '../Pages/Dashboard/Student/StudentPayment/MonthlyPayment/MonthlyPaymentSuccessfull'
import AcademicHistory from '../Pages/Dashboard/student/academic history/AcademicHistory'
import PaymentHistory from '../Pages/Dashboard/student/payment history/PaymentHistory'
import FacultyStudyLeaveLists from '../Pages/Dashboard/Admin/FacultyStudyLeaveLists'
import BatchDetails from '../Pages/Dashboard/Admin/Batch/BatchDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/overview',
        element: <Overview />,
      },
      {
        path: '/history',
        element: <HistoryOfMu />,
      },
      {
        path: '/vision-mission',
        element: <VisionAndMission />,
      },
      {
        path: '/cse',
        element: <CSEProgramUi />,
      },
      {
        path: '/software-engineering',
        element: <SEProgramUi />,
      },
      {
        path: '/one-stop',
        element: <OneStopServiceUi />,
      },
      {
        path: '/library',
        element: <LibraryOfMuUi />,
      },
      {
        path: '/laboratory',
        element: <LaboratoryUi />,
      },
      {
        path: '/cafeteria',
        element: <Cafeteria />,
      },
      {
        path: '/mu-sports-club',
        element: <MuSportsClub />,
      },
      {
        path: '/mu-social-service',
        element: <MuSocialServiceClub />,
      },
      {
        path: '/mu-cultural-club',
        element: <MuCulturalClub />,
      },
      {
        path: '/mu-photographic-society',
        element: <MuPhotographicSociety />,
      },
      {
        path: '/mu-robotics-club',
        element: <MuRoboticsClub />,
      },
      {
        path: '/getAdmission',
        element: (
          <PrivateRoute>
            <GetAdmission />
          </PrivateRoute>
        ),
      },
      {
        path: '/admission-payment/:trans_id',
        element: (
          <PrivateRoute>
            <AdmissionPaymentSuccess />
          </PrivateRoute>
        ),
      },
      {
        path: '/semester-payment/:trans_id',
        element: (
          <PrivateRoute>
            <SemesterPaymentSuccessFull />
          </PrivateRoute>
        ),
      },
      {
        path: '/monthly-payment/:trans_id',
        element: (
          <PrivateRoute>
            <MonthlyPaymentSuccessFull />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/getAdmission/admission-form',
    element: (
      <PrivateRoute>
        <AdditionalInfoRequireRoutes>
          <AdmissionForm />
        </AdditionalInfoRequireRoutes>
      </PrivateRoute>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      //students routes
      {
        path: '/dashboard/semester-student-routine',
        element: (
          <PrivateRoute>
            <StudentRoute>
              <StudentSemesterRoutine />
            </StudentRoute>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/academic-records',
        element: (
          <PrivateRoute>
            <StudentRoute>
              <AcademicHistory />
            </StudentRoute>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/payment-history',
        element: (
          <PrivateRoute>
            <StudentRoute>
              <PaymentHistory />
            </StudentRoute>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/60-marks-of-running-semester-courses',
        element: (
          <PrivateRoute>
            <StudentRoute>
              <SixtyMarksOfRunningSemesterCourse />
            </StudentRoute>
          </PrivateRoute>
        ),
      },
      // faculty
      {
        path: '/dashboard/semester-faculty-routine',
        element: (
          <PrivateRoute>
            <FacultyRoutes>
              <FacultySemesterRoutine />
            </FacultyRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: `/dashboard/offered-course/:id`,
        element: (
          <PrivateRoute>
            <FacultyRoutes>
              <OfferedCourseDetails />
            </FacultyRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: `/dashboard/marks-of-students`,
        element: (
          <PrivateRoute>
            <FacultyRoutes>
              <Marks />
            </FacultyRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: `/dashboard/marks-of-students/:id`,
        element: (
          <PrivateRoute>
            <FacultyRoutes>
              <SectionStudentsMarks />
            </FacultyRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: `/dashboard/marks-of-students/see-60-marks/:id`,
        element: (
          <PrivateRoute>
            <FacultyRoutes>
              <See60Marks />
            </FacultyRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: `/dashboard/marks-of-students/see-40-marks/:id`,
        element: (
          <PrivateRoute>
            <FacultyRoutes>
              <See40Marks />
            </FacultyRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: `/dashboard/marks-of-students/attendance-marks/:id`,
        element: (
          <PrivateRoute>
            <FacultyRoutes>
              <AttendanceMarks />
            </FacultyRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: `/dashboard/make-attendance/:id`,
        element: (
          <PrivateRoute>
            <FacultyRoutes>
              <Attendance />
            </FacultyRoutes>
          </PrivateRoute>
        ),
      },
      // admin
      {
        path: '/dashboard/users',
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <ManageUsers />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/admission-requests-lists',
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <AdmissionRequests />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/admins',
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <AdminList />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/semester-registration',
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <SemesterRegistration />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/faculties',
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <FacultyList />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/faculties-list-those-in-study-leave',
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <FacultyStudyLeaveLists />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/programs',
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <Programs />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/department',
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <Department />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/batch',
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <Batch />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/batch/batch-details/:id',
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <BatchDetails />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/courses',
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <Courses />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/offered-course',
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <OfferedCourseTable />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/department-wise-student-fee',
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <DepartmentWiseStudentFee />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/student/payment',
        element: (
          <PrivateRoute>
            <StudentRoute>
              <StudentPayment />
            </StudentRoute>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/academic-semesters',
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <AcademicSemester />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/batch/batch-details/section-students/:id',
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <StudentsLists />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/add-students',
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <AddStudentManually />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/admission-requests-lists/details/:Id',
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <AdmissionDetails />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/profile',
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
])

export default router
