import { FaHome, FaRegUser } from "react-icons/fa";
import AcademicCap from "../../Components/AcademicCap/AcademicCap";
import UserSvg from "../../Components/UserSvg/UserSvg";

export const sidebarItems = [
  { to: "/", label: "Home", icon: <FaHome /> },
  { to: "/dashboard/profile", label: "Profile", icon: <FaRegUser /> },
  {
    to: "/dashboard/users",
    label: "Users",
    icon: <UserSvg />,
    role: "admin",
  },
  {
    to: "/dashboard/programs",
    label: "Programs",
    icon: <AcademicCap />,
    role: "admin",
  },
  {
    to: "/dashboard/department",
    label: "Department",
    icon: <AcademicCap />,
    role: "admin",
  },
  {
    to: "/dashboard/admission-requests-lists",
    label: "Admission Requests",
    icon: <UserSvg />,
    role: "admin",
  },
  {
    to: "/dashboard/admins",
    label: "Admin List",
    icon: <UserSvg />,
    role: "admin",
  },
  {
    to: "/dashboard/students",
    label: "Students List",
    icon: <UserSvg />,
    role: "admin",
  },
];
