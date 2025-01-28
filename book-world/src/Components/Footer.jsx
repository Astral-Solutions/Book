import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa"; // Using only Facebook as per your example

function Footer() {
  return (
    <footer className="bg-[#2b347c] text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="flex space-x-6">
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
<div className="mt-6 md:mt-0 flex flex-col md:flex-row justify-end"> {/* Added flex-col for stacking */}
  <div>
    <h2 className="text-lg font-bold mb-4">Follow Us</h2>
    <p className="text-sm text-gray-300 mb-4">
      Stay connected with us on social media:
    </p>
  </div>
  <div className="flex space-x-4">
    <a
      href="https://web.facebook.com/DRLETMETALKGROUPEDU/?_rdc=1&_rdr#"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-gray-100 transition text-xl"
    >
      <FaFacebook />
    </a>
    {/* Add other social media links if necessary */}
  </div>
</div>

      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Book World. All rights reserved.</p>
        <p>
          Designed with ♥ by{" "}
          <a href="https://astral-solutions.vercel.app/" className="text-gray-300 hover:text-gray-100">
            Astral Solutions
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
