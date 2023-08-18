import { Outlet } from "react-router-dom";
import NavigationBar from "../../Pages/Shared/Navbar/NavigationBar";


const Main = () => {
  return (
    <>
      <NavigationBar />
     <Outlet />
    </>
  );
};

export default Main;
