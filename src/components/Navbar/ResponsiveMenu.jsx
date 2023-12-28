import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavbarLinks } from "./Navbar";
import PropTypes from 'prop-types';

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-300 md:hidden rounded-r-xl shadow-lg`}
    >
      <div className="flex items-center justify-start gap-3 mb-6">
        <FaUserCircle size={50} className="text-blue-500" />
        <div>
          <h1 className="text-lg font-bold">Hello User</h1>
          <h1 className="text-sm text-gray-600">Premium user</h1>
        </div>
      </div>
      <div className="card">
        <nav className="mt-4">
          <ul className="space-y-4 text-xl">
            {NavbarLinks.map((data, index) => (
              <li key={index}>
                <Link
                  to={data.link}
                  onClick={() => setShowMenu(false)}
                  className="mb-5 inline-block transition duration-300 ease-in-out hover:text-blue-600 hover:underline"
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer mt-6">
        <h1 className="text-center text-gray-500 text-sm italic">
          Pesona Indonesia &copy; {new Date().getFullYear()}
        </h1>
      </div>
    </div>
  );
};

ResponsiveMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  setShowMenu: PropTypes.func.isRequired,
};

export default ResponsiveMenu;