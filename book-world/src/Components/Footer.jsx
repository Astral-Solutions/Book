import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#2b347c] text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Navigation Links */}
        <div className="w-full md:w-auto">
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="flex flex-col md:flex-row gap-2 md:gap-6">
            {[
              { path: "/who-we-are", label: "Who We Are" },
              { path: "/function-groups", label: "Function Groups" },
              { path: "/research", label: "Research" },
              { path: "/training", label: "Training" },
              { path: "/get-involved", label: "Get Involved" },
              { path: "/ways-to-give", label: "Ways to Give" },
              { path: "/contact", label: "Contact Us" },
            ].map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="text-sm text-gray-300 hover:text-gray-100 transition block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="w-full md:w-auto text-center md:text-left">
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>
          <p className="text-sm text-gray-300 mb-4">
            Stay connected with us on social media:
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://web.facebook.com/DRLETMETALKGROUPEDU/?_rdc=1&_rdr#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-100 transition text-2xl"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Book World. All rights reserved.</p>
        <p>
          Designed with ♥ by{" "}
          <a
            href="https://astral-solutions.vercel.app/"
            className="text-gray-300 hover:text-gray-100"
          >
            Astral Solutions
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
