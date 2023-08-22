import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const SmallScreenView = ({ navigation, Disclosure }) => {
  return (
    <div className="space-y-1 px-2 pb-3 pt-2">
      {navigation.map((item, index) => (
        // accordion starting
        <Disclosure key={index} as={Link} to={item?.to}>
          {({ open }) => (
            <>
              {/* accordion click button */}
              <Disclosure.Button className="text-white hover:bg-white hover:text-primary rounded-md px-3 py-2 text-base font-bold flex justify-between w-full">
                <span>{item?.name}</span>
                {item?.nested_links ? (
                  <>
                    {/* accordion arrow sign */}
                    <ChevronDownIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </>
                ) : (
                  <></>
                )}
              </Disclosure.Button>
              {/* accordion content */}
              {item?.nested_links ? (
                <>
                  <Disclosure.Panel className="text-white hover:bg-white hover:text-primary rounded-md px-3 py-2 text-base font-bold">
                    {item?.nested_links ? (
                      <>
                        {item?.nested_links.map((link) => (
                          <Link key={link.name} to={link.to}>
                            <li className="hover:bg-primary hover:text-white rounded-md px-3 py-2 text-base font-bold cursor-pointer list-none">
                              {link.name}
                            </li>
                          </Link>
                        ))}
                      </>
                    ) : (
                      <></>
                    )}
                  </Disclosure.Panel>
                </>
              ) : (
                <></>
              )}
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default SmallScreenView;
