import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { navigation } from './navigation'
import NavIcon from './NavIcon'
import BigScreenView from './BigScreenView'
import SmallScreenView from './SmallScreenView'
import MenuIcon from './MenuIcon'
import { Link } from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth'

const NavigationBar = () => {
  const { user } = useAuth()

  return (
    <Disclosure as="nav" className="fixed bg-primary bg-opacity-40 z-50 w-full">
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
                <Link to={'/'}>
                  <NavIcon />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                {/* for big screen view */}
                <BigScreenView navigation={navigation} />
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                {user?.email ? (
                  <Link
                    className="text-white hover:bg-primary hover:text-white font-bold rounded-md px-3 py-2 text-sm list-none"
                    to={'/dashboard/profile'}
                  >
                    Dashboard
                  </Link>
                ) : (
                  <div>
                    <Link
                      to={'/login'}
                      className="px-4 py-2 text-center hover:bg-gray-100 hover:text-primary cursor-pointer text-white font-bold rounded-md"
                    >
                      Login
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-primary">
            {/* responsive view */}
            <div>
              <SmallScreenView
                navigation={navigation}
                Disclosure={Disclosure}
              />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
export default NavigationBar
