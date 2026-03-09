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
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/about", label: "About Us" },
    { path: "/mission-statement", label: "Mission Statement" },
    { path: "/function-groups", label: "Function Groups" },
    { path: "/projects", label: "Projects" },
    { path: "/get-involved", label: "Get Involved" },
    { path: "/volunteer", label: "Volunteer" },
    { path: "/donate", label: "Donate" },
    { path: "/contact", label: "Contact" },
  ];

  const functionGroups = [
    { path: "/literacy-promotion", label: "Literacy Promotion" },
    { path: "/literacy-development", label: "Literacy Development" },
    { path: "/literacy-material-development", label: "Material Development" },
    { path: "/literacy-material-donation", label: "Material Donation" },
    { path: "/literacy-hub-functionality", label: "Library Functionality" },
  ];

  const socialPlatforms = [
    { icon: Facebook, href: "https://web.facebook.com/DRLETMETALKGROUPEDU/?_rdc=1&_rdr#", label: "Facebook" },
    { icon: MessageCircle, href: "#", label: "WhatsApp" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#2b347c] to-[#1a2d6b] text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <img
                src="/images/BookWorldLogo.png"
                alt="Book World Logo"
                className="w-10 h-10 mr-3 bg-white p-1 rounded-full"
              />
              <h2 className="text-xl font-bold">Book World</h2>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              We are a group of Bookmen across South Africa who obsess about children's access to literacy materials, 
              literacy development & literacy lifestyle.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-300">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <span>info@bookworld.org.za</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <span>+27 (0) 123 456 789</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin size={16} className="mr-2 flex-shrink-0 mt-0.5" />
                <span>South Africa</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-200 block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Function Groups */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Function Groups</h3>
            <ul className="space-y-2">
              {functionGroups.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-200 block py-1"
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