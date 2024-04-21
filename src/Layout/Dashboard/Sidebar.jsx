import { Link } from 'react-router-dom'
import { FaHome, FaRegUser } from 'react-icons/fa'
import useAuth from '../../Hooks/useAuth'
import UserSvg from '../../Components/svg/UserSvg/UserSvg'
import { useGetPresentUserWithAdditionalInfoQuery } from '../../Redux/features/User/UserApi'
import AcademicCap from '../../Components/svg/AcademicCap/AcademicCap'

const Sidebar = () => {
  const { user, logOut } = useAuth()
  const { data: userData } = useGetPresentUserWithAdditionalInfoQuery(
    user?.email,
  )

  const handleLogOut = () => {
    logOut()
  }

  const menuItems = [
    { to: '/', label: 'Home', icon: <FaHome /> },
    { to: '/dashboard/profile', label: 'Profile', icon: <FaRegUser /> },
    {
      to: '/dashboard/users',
      label: 'Users',
      icon: <UserSvg />,
      role: 'admin',
    },
    {
      to: '/dashboard/admins',
      label: 'Admin List',
      icon: <UserSvg />,
      role: 'admin',
    },
    {
      to: '/dashboard/faculties',
      label: 'Faculty List',
      icon: <UserSvg />,
      role: 'admin',
    },
    {
      to: '/dashboard/programs',
      label: 'Programs',
      icon: <AcademicCap />,
      role: 'admin',
    },
    {
      to: '/dashboard/department',
      label: 'Department',
      icon: <AcademicCap />,
      role: 'admin',
    },
    {
      to: '/dashboard/batch',
      label: 'Batch',
      icon: <AcademicCap />,
      role: 'admin',
    },
    {
      to: '/dashboard/academic-semesters',
      label: 'Academic Semesters',
      icon: <AcademicCap />,
      role: 'admin',
    },
    {
      to: '/dashboard/semester-registration',
      label: 'Semester Registration',
      icon: <AcademicCap />,
      role: 'admin',
    },
    {
      to: '/dashboard/courses',
      label: 'Courses',
      icon: <AcademicCap />,
      role: 'admin',
    },
    {
      to: '/dashboard/offered-course',
      label: 'Offered Courses',
      icon: <AcademicCap />,
      role: 'admin',
    },
    {
      to: '/dashboard/admission-requests-lists',
      label: 'Admission Requests',
      icon: <UserSvg />,
      role: 'admin',
    },

    {
      to: '/dashboard/students',
      label: 'Students List',
      icon: <UserSvg />,
      role: 'admin',
    },
    {
      to: '/dashboard/add-students',
      label: 'Add Student Manually',
      icon: <UserSvg />,
      role: 'admin',
    },
    {
      to: '/dashboard/department-wise-student-fee',
      label: 'Add student fee for each dept',
      icon: <UserSvg />,
      role: 'admin',
    },
    {
      to: '/dashboard/semester-faculty-routine',
      label: 'Faculty Semester Routine',
      icon: <UserSvg />,
      role: 'faculty',
    },
    {
      to: '/dashboard/student/payment',
      label: 'Payment',
      icon: <UserSvg />,
      role: 'student',
    },
  ]

  return (
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
        {menuItems.map((item) =>
          !item.role ? (
            <li key={item.to}>
              <Link
                to={item.to}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                {item.icon}
                <span className="flex-1 ms-3 whitespace-nowrap">
                  {item.label}
                </span>
              </Link>
            </li>
          ) : item.role && item.role === userData?.data?.userId?.role ? (
            <li key={item.to}>
              <Link
                to={item.to}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                {item.icon}
                <span className="flex-1 ms-3 whitespace-nowrap">
                  {item.label}
                </span>
              </Link>
            </li>
          ) : (
            <li key={item.to}></li>
          ),
        )}
        <li>
          <a
            onClick={handleLogOut}
            href="/login"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <UserSvg />
            <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
