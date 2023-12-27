import FooterLogo from "../../assets/logo1.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import NatureVid from "../../assets/video/footer.mp4";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Destination",
    link: "/destination",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="dark:bg-gray-950 py-10 relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]"
      >
        <source src={NatureVid} type="video/mp4" />
      </video>
      <div className="container">
        <div className="grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
          <div className="py-8 px-4 text-center md:text-left md:col-span-1 md:flex md:flex-col md:justify-center">
            <h1 className="flex items-center justify-center md:justify-start gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
              <img src={FooterLogo} alt="" className="max-h-[60px]" />
              {/* TravelloGo */}
            </h1>
            <p className="text-sm">
              TravelloGo - Menemukan petualangan yang tak terlupakan!
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3 mt-6">
              <FaLocationArrow />
              <p>Depok, Jawa Barat</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3 mt-3">
              <FaMobileAlt />
              <p>+62 81239123</p>
            </div>
            {/* Social handles */}
            <div className="flex justify-center md:justify-start mt-6">
              <div className="flex items-center gap-3">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="py-8 px-4 md:pl-10 md:text-left md:col-span-2 flex flex-col justify-center items-center">
            <ul className="flex flex-col gap-3 text-left">
              {/* Using FooterLinks to display links */}
              {FooterLinks.map((link, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary text-gray-700 dark:text-gray-200"
                  onClick={scrollToTop}
                >
                  <Link to={link.link}>{link.title}</Link>
                </li>
              ))}
              {/* Additional links */}
              <li className="flex justify-center space-x-1 mt-4">
                <Link
                  to="/privacy-policy"
                  className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary text-gray-700 dark:text-gray-200"
                  onClick={scrollToTop}
                >
                  Kebijakan Privasi
                </Link>
                <span className="text-gray-700 dark:text-gray-200">|</span>
                <Link
                  to="/terms-of-service"
                  className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary text-gray-700 dark:text-gray-200"
                  onClick={scrollToTop}
                >
                  Syarat dan Ketentuan
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <div className="py-5 border-t-2 border-gray-300/50 bg-primary text-white">
            Informasi Kontak: travelgo@email.com | Indonesia
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
