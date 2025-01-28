import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInfoCircle, FaBullseye, FaUsers, FaUserTie, FaEnvelope, FaChartBar, FaCalendar } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import ResponsiveLogo from "./ResponsiveLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { icon: <FaInfoCircle className="w-5 h-5" />, text: "About Us", path: "/about" },
    { icon: <FaBullseye className="w-5 h-5" />, text: "Mission Statement", path: "/mission-statement" },
    { icon: <FaCalendar className="w-5 h-5" />, text: "Calendar", path: "calendar"},
    { icon: <FaUsers className="w-5 h-5" />, text: "Function Groups", path: "/function-groups" },
    { icon: <FaUserTie className="w-5 h-5" />, text: "Get Involved", path: "/get-involved" },
    { icon: <FaChartBar className="w-5 h-5" />, text: "Our Impact", path: "/impact" }, // New Impact Page Link
    { icon: <FaEnvelope className="w-5 h-5" />, text: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`hidden lg:flex items-center justify-between px-6 py-4 sticky top-0 transition-all duration-300 z-50 ${
          scrolled ? "bg-white text-[#2b347c] shadow-md" : "bg-white text-[#2b347c]"
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
              className="flex items-center hover:text-blue-600 transition-transform duration-200"
            >
              <span className="mr-2">{link.icon}</span>
              <span>{link.text}</span>
            </Link>
          ))}
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

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile Side Navbar */}
        <nav
          className={`fixed top-0 left-0 h-full w-64 bg-white text-[#2b347c] z-40 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
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
                className="flex items-center px-4 py-3 hover:text-blue-600 hover:bg-blue-100 rounded-lg transition-transform duration-200"
              >
                <span className="mr-2">{link.icon}</span>
                <span>{link.text}</span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
