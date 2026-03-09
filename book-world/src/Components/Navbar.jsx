import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Info, 
  Target, 
  Calendar, 
  Users, 
  UserPlus, 
  BarChart3, 
  Mail,
  Menu, 
  X 
} from "lucide-react";

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
    { icon: <Info className="w-4 h-4" />, text: "About Us", path: "/about" },
    { icon: <Target className="w-4 h-4" />, text: "Mission Statement", path: "/mission-statement" },
    { icon: <Calendar className="w-4 h-4" />, text: "Calendar", path: "/calendar" },
    { icon: <Users className="w-4 h-4" />, text: "Function Groups", path: "/function-groups" },
    { icon: <UserPlus className="w-4 h-4" />, text: "Get Involved", path: "/get-involved" },
    { icon: <BarChart3 className="w-4 h-4" />, text: "Our Impact", path: "/impact" },
    { icon: <Mail className="w-4 h-4" />, text: "Contact", path: "/contact" },
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
        <Link to="/" className="flex items-center group">
          <img
            src="/images/BookWorldLogo.png"
            alt="Book World Logo"
            className="w-10 h-10 mr-3 transition-transform group-hover:scale-105"
          />
          <span className="text-xl font-bold group-hover:text-[#1a2d6b] transition-colors">
            Book World
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-1">
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
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-white shadow-sm sticky top-0 z-50">
          <Link to="/" className="flex items-center">
            <img
              src="/images/BookWorldLogo.png"
              alt="Book World Logo"
              className="w-8 h-8 mr-2"
            />
            <span className="text-lg font-bold text-[#2b347c]">Book World</span>
          </Link>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md bg-[#2b347c]/10 text-[#2b347c] hover:bg-[#2b347c]/20 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile Side Menu */}
        <nav
          className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white text-[#2b347c] z-40 transform transition-transform duration-300 ease-in-out shadow-2xl ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center">
              <img
                src="/images/BookWorldLogo.png"
                alt="Book World Logo"
                className="w-8 h-8 mr-2"
              />
              <span className="text-lg font-bold">Book World</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Navigation Links */}
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

export default Navbar;