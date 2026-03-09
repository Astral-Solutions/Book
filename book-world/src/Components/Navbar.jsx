import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInfoCircle, FaUsers, FaBookOpen, FaChalkboardTeacher, FaHandsHelping, FaDonate, FaEnvelope } from "react-icons/fa";
import { Menu, X } from "lucide-react";

function Navbar() {
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { icon: <FaInfoCircle className="w-5 h-5" />, text: "About Us", path: "/about" },
    { icon: <FaBullseye className="w-5 h-5" />, text: "Mission Statement", path: "/mission-statement" },
    { icon: <FaCalendar className="w-5 h-5" />, text: "Calendar", path: "calendar"},
    { icon: <FaUsers className="w-5 h-5" />, text: "Function Groups", path: "/function-groups" },
    { icon: <FaUserTie className="w-5 h-5" />, text: "Get Involved", path: "/get-involved" },
    { icon: <FaChartBar className="w-5 h-5" />, text: "Our Impact", path: "/impact" }, // New Impact Page Link
    { icon: <FaEnvelope className="w-5 h-5" />, text: "Contact", path: "/contact" },
  ];

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`hidden lg:flex items-center justify-between px-6 py-4 sticky top-0 transition-all duration-300 z-50 ${
          scrolled ? "bg-white/95 backdrop-blur-sm text-[#2b347c] shadow-lg" : "bg-white text-[#2b347c] shadow-sm"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/BookWorldLogo.png"
            alt="Book World Logo"
            className="w-10 h-10 mr-3"
          />
          <span className="text-xl font-bold">Book World</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`flex items-center px-3 py-2 rounded-lg transition-all duration-200 hover:bg-[#2b347c]/10 hover:text-[#1a2d6b] ${
                isActiveLink(link.path) 
                  ? "bg-[#2b347c]/10 text-[#1a2d6b] font-semibold" 
                  : ""
              }`}
            >
              <span className="mr-2">{link.icon}</span>
              <span className="text-sm font-medium">{link.text}</span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center space-x-3">
          <Link
            to="/donate"
            className="px-4 py-2 bg-[#2b347c] text-white text-sm font-semibold rounded-full hover:bg-[#1a2d6b] transition-all duration-200 hover:scale-105"
          >
            Donate Now
          </Link>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="lg:hidden">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-white text-[#2b347c] hover:bg-[#f3f4f6]"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile Side Navbar */}
        <nav
          className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white text-[#2b347c] z-40 transform transition-transform duration-300 ease-in-out shadow-2xl ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            className="block p-4 text-center border-b border-blue-700"
            onClick={() => setIsOpen(false)}
          >
            <img
              src="/images/BookWorldLogo.png"
              alt="Book World Logo"
              className="w-10 h-10 mx-auto mb-2"
            />
            <span className="text-xl font-bold">Book World</span>
          </Link>

          {/* Navigation Links */}
          <div className="py-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-4 py-3 mx-2 rounded-lg transition-all duration-200 hover:bg-[#2b347c]/10 hover:text-[#1a2d6b] ${
                  isActiveLink(link.path) 
                    ? "bg-[#2b347c]/10 text-[#1a2d6b] font-semibold" 
                    : ""
                }`}
              >
                <span className="mr-3">{link.icon}</span>
                <span className="font-medium">{link.text}</span>
              </Link>
            ))}
            
            {/* Mobile CTA Button */}
            <div className="px-4 pt-4 border-t border-gray-200 mt-4">
              <Link
                to="/donate"
                onClick={() => setIsOpen(false)}
                className="block w-full px-4 py-3 bg-[#2b347c] text-white text-center font-semibold rounded-full hover:bg-[#1a2d6b] transition-colors"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
}

export default Navbar;