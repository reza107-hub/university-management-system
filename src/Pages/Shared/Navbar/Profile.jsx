import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Profile = ({ Menu, Transition, Fragment, user }) => {
  const { logOut } = useAuth();

  const handleLogOut = () => {
    logOut();
  };

  return (
    <>
      <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open user menu</span>
            <img className="h-8 w-8 rounded-full" src={user?.photoURL} alt="" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-primary text-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Link to={"/dashboard/profile"}>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`${
                      active ? "bg-gray-100 text-primary" : ""
                    } block px-4 py-2 text-sm`}
                  >
                    Dashboard
                  </div>
                )}
              </Menu.Item>
            </Link>
            <Menu.Item onClick={handleLogOut}>
              {({ active }) => (
                <div
                  className={`${
                    active ? "bg-gray-100 text-primary" : ""
                  } block px-4 py-2 text-sm`}
                >
                  Sign out
                </div>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default Profile;
