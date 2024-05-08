const MenuIcon = ({ Disclosure, open, XMarkIcon, Bars3Icon }) => {
  return (
    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
        <span className="absolute -inset-0.5" />
        <span className="sr-only">Open main menu</span>
        {open ? (
          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
        )}
      </Disclosure.Button>
    </div>
  )
}

export default MenuIcon
