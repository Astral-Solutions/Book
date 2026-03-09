import React from "react";
import { Link } from "react-router-dom";
import { 
  Facebook, 
  MessageCircle, 
  Twitter, 
  Youtube, 
  Instagram, 
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart
} from "lucide-react";

const SocialIcon = ({ icon: Icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
    aria-label={label}
    title={label}
  >
    <Icon size={18} />
  </a>
);

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

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <p className="text-gray-300 text-sm mb-4">
              Follow us on social media for updates and stories.
            </p>
            
            {/* Social Icons */}
            <div className="flex flex-wrap gap-3 mb-6">
              {socialPlatforms.map((social, index) => (
                <SocialIcon key={index} {...social} />
              ))}
            </div>

            {/* Call to Action */}
            <div className="space-y-3">
              <Link
                to="/donate"
                className="block w-full px-4 py-2 bg-white text-[#2b347c] text-center font-semibold rounded-full hover:bg-gray-100 transition-colors text-sm"
              >
                Support Our Mission
              </Link>
              <Link
                to="/volunteer"
                className="block w-full px-4 py-2 border border-white text-white text-center font-semibold rounded-full hover:bg-white hover:text-[#2b347c] transition-colors text-sm"
              >
                Become a Volunteer
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-8 pt-6">
          
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-300 text-center md:text-left">
              <p>&copy; {currentYear} Book World. All rights reserved.</p>
            </div>
            
            {/* Additional Links */}
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/impact" className="text-gray-300 hover:text-white transition-colors">
                Our Impact
              </Link>
            </div>
          </div>

          {/* Attribution */}
          <div className="text-center mt-4 pt-4 border-t border-white/10">
            <p className="text-xs text-gray-400">
              Designed with <Heart size={12} className="inline mx-1 text-red-400" /> by{" "}
              <a
                href="https://astral-solutions.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Astral Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;