import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation } from "./navigation";
import NavIcon from "./NavIcon";
import BigScreenView from "./BigScreenView";
import SmallScreenView from "./SmallScreenView";
import MenuIcon from "./MenuIcon";
import Profile from "./Profile";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Disclosure as="nav" className="fixed z-50 w-full">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button*/}
              <MenuIcon
                Disclosure={Disclosure}
                open={open}
                XMarkIcon={XMarkIcon}
                Bars3Icon={Bars3Icon}
              />
              <div className="flex flex-1 sm:flex-initial items-center justify-center sm:items-stretch sm:justify-start">
                {/* Nav icon image*/}
                <Link to={"/"}>
                  <NavIcon />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                {/* for big screen view */}
                <BigScreenView navigation={navigation} />
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Profile
                  Menu={Menu}
                  Transition={Transition}
                  Fragment={Fragment}
                />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-primary">
            {/* responsive view */}
            <SmallScreenView navigation={navigation} Disclosure={Disclosure} />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default NavigationBar;
