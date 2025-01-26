import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaChartBar } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#2b347c] text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link
                to="/about"
                className="text-sm text-gray-300 hover:text-gray-100 transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/mission-statement"
                className="text-sm text-gray-300 hover:text-gray-100 transition"
              >
                Mission Statement
              </Link>
            </li>
            <li>
              <Link
                to="/function-groups"
                className="text-sm text-gray-300 hover:text-gray-100 transition"
              >
                Function Groups
              </Link>
            </li>
            <li>
              <Link
                to="/get-involved"
                className="text-sm text-gray-300 hover:text-gray-100 transition"
              >
                Get Involved
              </Link>
            </li>
            <li>
              <Link
                to="/impact"
                className="text-sm text-gray-300 hover:text-gray-100 transition"
              >
                Our Impact
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-sm text-gray-300 hover:text-gray-100 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>
          <p className="text-sm text-gray-300 mb-4">
            Stay connected with us on social media:
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-100 transition text-xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-100 transition text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-100 transition text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-100 transition text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-100 transition text-xl"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Book World. All rights reserved.</p>
        <p>
          Designed with ♥ by{" "}
          <a href="#" className="text-gray-300 hover:text-gray-100">
            Astral Solutions
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
