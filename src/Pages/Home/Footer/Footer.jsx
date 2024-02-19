import { Link } from 'react-router-dom'
import { navigation } from '../../Shared/Navbar/navigation'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Sylhet Metropolitan University
            </h2>
            <p className="text-sm mb-4">
              Address: ABC Street, Sylhet, Bangladesh
            </p>
            <p className="text-sm mb-4">Phone: +880 1234 56789</p>
            <p className="text-sm mb-4">Email: info@sylhetmetrouni.edu.bd</p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/sylhetmetrouni"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/sylhetmetrouni"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/sylhetmetrouni"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          {navigation.map((item, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-4">{item.name}</h3>
              <ul>
                {item.nested_links && item.nested_links.length > 0 ? (
                  item.nested_links.map((nestedLink, nestedIndex) => (
                    <li key={nestedIndex}>
                      <Link to={nestedLink.to} className="hover:text-blue-500">
                        {nestedLink.name}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>
                    <Link to={item.to} className="hover:text-blue-500">
                      {item.name}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-4 text-sm text-center">
        &copy; {new Date().getFullYear()} Sylhet Metropolitan University. All
        rights reserved.
      </div>
    </footer>
  )
}

export default Footer
