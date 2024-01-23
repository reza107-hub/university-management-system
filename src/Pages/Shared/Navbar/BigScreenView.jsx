import { Link } from "react-router-dom";

const BigScreenView = ({ navigation }) => {
  return (
    <div className="flex space-x-4">
      {navigation.map((item) => (
        <div key={item.name}>
          <Link
            to={item?.to}
            key={item.name}
            className="relative group text-white hover:bg-primary hover:text-white font-bold rounded-md px-3 py-2 text-sm list-none"
          >
            {item.name}
            {item.nested_links && item.nested_links.length > 0 && (
              <ul className="absolute hidden group-hover:block bg-primary text-white mt-2 py-1 rounded-md shadow-lg -ml-[100%] w-72">
                {item.nested_links.map((nestedLink) => (
                  <li
                    key={nestedLink.name}
                    className="px-4 py-2 text-center hover:bg-gray-100 hover:text-primary cursor-pointer"
                  >
                    <Link to={nestedLink.to}>{nestedLink.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BigScreenView;
