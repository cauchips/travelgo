import { useState, useEffect } from "react";
import Logo from "../../assets/logo1.png";
import { NavLink, Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3 } from "react-icons/hi";
import PropTypes from "prop-types";

export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Destination",
    link: "/destination",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "About",
    link: "/about",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [discountInfo, setDiscountInfo] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Simulating fetching discount information
    setTimeout(() => {
      setDiscountInfo("Explore the Wonderful Indonesia");
    }, 1000);

    // Update current date and time every second
    const intervalId = setInterval(() => {
      setCurrentDate(new Date().toLocaleDateString("en-GB"));
      setCurrentTime(new Date().toLocaleTimeString("en-US"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md bg-opacity-75">
        <div className="bg-gradient-to-r from-primary to-secondary text-white bg-opacity-80">
          <div className="container py-[2px] sm:block hidden">
            <div className="flex items-center justify-between">
              <p className="text-sm">{discountInfo}</p>
              <p>{`Date: ${currentDate} | Time: ${currentTime}`}</p>
            </div>
          </div>
        </div>
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 font-bold text-2xl">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="" className="h-16" />
              </Link>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-6">
                {NavbarLinks.map((link, index) => (
                  <li
                    key={index}
                    className="py-4 transition duration-300"
                  >
                    <NavLink
                      to={link.link}
                      activeClassName="active"
                      className="hover:text-primary hover:border-b-2 hover:border-primary transition duration-300"
                      style={{ marginRight: "20px" }}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full transition-transform transform hover:scale-105 flex items-center gap-2 focus:outline-none focus:ring focus:border-primary"
                onClick={handleOrderPopup}
              >
                <FaUser /> <span className="font-semibold">Login</span>
              </button>
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

Navbar.propTypes = {
  handleOrderPopup: PropTypes.func,
};

export default Navbar;
