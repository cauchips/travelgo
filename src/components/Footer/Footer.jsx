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

// FooterLinks array containing navigation links
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

// Footer component
const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="dark:bg-gray-950 py-10 relative overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]"
      >
        <source src={NatureVid} type="video/mp4" />
      </video>
      <div className="container">
        {/* Grid layout for footer content */}
        <div className="grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
          {/* Left column with logo, text, and contact information */}
          <div className="py-8 px-4 text-center md:text-left md:col-span-1 md:flex md:flex-col md:justify-center">
            <img src={FooterLogo} alt="" className="max-h-[60px] max-w-[60px]" />
            <p className="text-sm">
              TravelGO - Discover unforgettable adventures!
            </p>
            {/* Location information */}
            <div className="flex items-center justify-center md:justify-start gap-3 mt-6">
              <FaLocationArrow />
              <p>Depok, West Java</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3 mt-3">
              <FaMobileAlt />
              <p>+62 81239123</p>
            </div>
            {/* Social handles */}
            <div className="flex justify-center md:justify-start mt-6">
              <div className="flex items-center gap-3">
                <a href="#" onClick={() => handleLinkClick('https://www.instagram.com/')}>
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#" onClick={() => handleLinkClick('https://www.facebook.com/')}>
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#" onClick={() => handleLinkClick('https://www.linkedin.com/')}>
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
          {/* Right column with navigation links */}
          <div className="py-8 px-4 md:pl-10 md:text-left md:col-span-2 flex flex-col justify-center items-center">
            <ul className="flex flex-col gap-3 text-left">
              {/* Mapping through FooterLinks array to display links */}
              {FooterLinks.map((link, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary text-gray-700 dark:text-gray-200"
                  onClick={scrollToTop}
                >
                  <Link to={link.link}>{link.title}</Link>
                </li>
              ))}
              {/* Additional links for privacy policy and terms of service */}
              <li className="flex justify-center space-x-1 mt-4">
                <Link
                  to="/privacy-policy"
                  className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary text-gray-700 dark:text-gray-200"
                  onClick={scrollToTop}
                >
                  Privacy Policy
                </Link>
                <span className="text-gray-700 dark:text-gray-200">|</span>
                <Link
                  to="/terms-and-conditions"
                  className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary text-gray-700 dark:text-gray-200"
                  onClick={scrollToTop}
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom section with contact information */}
        <div className="text-center mt-8">
          <div className="py-5 border-t-2 border-gray-300/50 bg-primary text-white">
            Contact Information: travelgo@email.com | Indonesia
          </div>
        </div>
      </div>
    </div>
  );
};

const handleLinkClick = (socialMedia) => {
  // You can customize the confirmation message here
  const confirmMessage = `Are you sure you want to visit ${socialMedia}?`;

  // Display a confirmation dialog
  const isConfirmed = window.confirm(confirmMessage);

  // If the user confirms, open the link
  if (isConfirmed) {
    window.open(socialMedia, '_blank');
  }
};

export default Footer;
