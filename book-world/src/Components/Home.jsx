import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Users, 
  Target, 
  BookOpen, 
  Heart, 
  Lightbulb,
  Facebook,
  MessageCircle, // WhatsApp
  Twitter,
  Youtube,
  Instagram,
  Linkedin
} from "lucide-react";
import Carousel from "./Carousel";

const FeatureCard = ({ icon: Icon, title, description, link }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="w-12 h-12 bg-[#2b347c]/10 rounded-full flex items-center justify-center mb-4">
      <Icon className="text-[#2b347c] w-6 h-6" />
    </div>
    <h3 className="text-xl font-semibold text-[#2b347c] mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    {link && (
      <Link 
        to={link}
        className="text-[#2b347c] hover:text-[#1a2d6b] font-medium text-sm"
      >
        Learn More →
      </Link>
    )}
  </motion.div>
);

const FunctionGroupCard = ({ title, description, image, link }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="h-48 bg-gradient-to-r from-[#2b347c] to-[#1a2d6b] flex items-center justify-center">
      <BookOpen className="text-white w-16 h-16" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-[#2b347c] mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={link}
        className="inline-block bg-[#2b347c] text-white px-4 py-2 rounded-full text-sm hover:bg-[#1a2d6b] transition-colors"
      >
        Explore Group
      </Link>
    </div>
  </motion.div>
);

const SocialIcon = ({ icon: Icon, platform, href = "#" }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="w-12 h-12 bg-[#2b347c] hover:bg-[#1a2d6b] rounded-full flex items-center justify-center text-white transition-colors duration-300"
    title={platform}
  >
    <Icon size={20} />
  </motion.a>
);

function Home() {
  // Enhanced carousel slides based on strategy document
  const heroSlides = [
    {
      image: "/images/BookWorldTeam.JPG",
      title: "WE ARE BOOK WORLD",
      description: "We are a group of Bookmen across South Africa who obsess about children's access to literacy materials, literacy development & literacy lifestyle.",
      ctaText: "Join Our Mission"
    },
    {
      image: "/images/GomoKids.jpg", 
      title: "OUR WORK",
      description: "We work hand-in-hand with trusted local community builders in Villages Towns & Small Dorpies (VTSDs) to help communities organize and gain access to literacy materials.",
      ctaText: "See Our Impact"
    },
    {
      image: "/images/BookDonation.jpg",
      title: "LITERACY FOR ALL",
      description: "Book World is on a mission to ensure that the world's most vulnerable children have literacy materials and opportunity to acquire literacy skills to reach their full potential.",
      ctaText: "Get Involved"
    }
  ];

  const functionGroups = [
    {
      title: "Literacy Material Development",
      description: "Creating and developing educational materials tailored for our communities and specific literacy needs.",
      image: "/images/BookDev.JPG",
      link: "/literacy-material-development"
    },
    {
      title: "Literacy Material Donation", 
      description: "Ensuring every child has access to quality books and learning materials in underserved communities.",
      image: "/images/BookDonation.jpg",
      link: "/literacy-material-donation"
    },
    {
      title: "Literacy Development",
      description: "Facilitating early literacy & youth literacy development with trained literacy facilitators.",
      image: "/images/LiteracyDevelopment.jpg",
      link: "/literacy-development"
    },
    {
      title: "Library Functionality",
      description: "Helping children establish libraries in their homes and supporting community library services.",
      image: "/images/LibraryFunctionality.jpg", 
      link: "/literacy-hub-functionality"
    },
    {
      title: "Literacy Promotion",
      description: "Promoting literacy lifestyle through traditional and digital media campaigns and community engagement.",
      image: "/images/LiteracyPromotion.jpg",
      link: "/literacy-promotion"
    }
  ];

  const impactStories = [
    {
      image: "/images/Kelebogile.JPG",
      title: "Kelebogile's Success Story",
      description: "From struggling reader to literacy champion - see how our programs transform lives."
    },
    {
      image: "/images/LibFun.JPG", 
      title: "Community Impact",
      description: "Libraries and reading corners bringing joy and learning to rural communities."
    },
    {
      image: "/images/GetInvolved.JPG",
      title: "Volunteer Success",
      description: "Our trained literacy facilitators making a difference in their communities."
    }
  ];

  const socialPlatforms = [
    { icon: Facebook, platform: "Facebook", href: "#" },
    { icon: MessageCircle, platform: "WhatsApp", href: "#" },
    { icon: Twitter, platform: "Twitter", href: "#" },
    { icon: Youtube, platform: "YouTube", href: "#" },
    { icon: Instagram, platform: "Instagram", href: "#" },
    { icon: Linkedin, platform: "LinkedIn", href: "#" }
  ];

  return (
    <div className="home-page min-h-screen bg-gray-50">
      {/* Hero Section with Rotating Slides */}
      <motion.div
        className="relative h-[700px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto h-full">
          <Carousel slides={heroSlides} interval={8000} showControls={true} />
        </div>
      </motion.div>

      {/* Our Work Section */}
      <section className="container mx-auto px-6 py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#2b347c] mb-6">Our Work</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            We work hand-in-hand with trusted local community builders in Villages Towns & Small Dorpies (VTSDs) 
            who obsess about children's access to literacy materials, literacy development and literacy lifestyle 
            so as to help their communities organise to gain access to literacy materials, eradicate illiteracy, 
            recover from its impacts and build literate communities.
          </p>
        </motion.div>
      </section>

      {/* Browse Function Groups Section */}
      <section className="container mx-auto px-6 py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2b347c] mb-6">Browse Function Groups</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Our five core function groups work together to create comprehensive literacy solutions for South African communities.
          </p>
          
          <div className="flex gap-4 justify-center mb-12">
            <Link
              to="/donate"
              className="px-8 py-3 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition-colors font-semibold"
            >
              DONATE NOW
            </Link>
            <Link
              to="/volunteer"
              className="px-8 py-3 bg-white text-[#2b347c] border-2 border-[#2b347c] rounded-full hover:bg-[#2b347c] hover:text-white transition-colors font-semibold"
            >
              VOLUNTEER NOW
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {functionGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <FunctionGroupCard {...group} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Get the Inside Sensation - Impact Stories */}
      <section className="container mx-auto px-6 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2b347c] mb-6">Get the Inside Sensation</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Stories about our impact and function groups activities that show the real difference we're making in communities.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto mb-8">
          <Carousel slides={impactStories} interval={6000} />
        </div>

        <div className="text-center">
          <Link
            to="/impact"
            className="inline-block text-[#2b347c] font-semibold text-lg hover:text-[#1a2d6b] transition-colors"
          >
            View more from Book World →
          </Link>
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="container mx-auto px-6 py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-[#2b347c] mb-12">Why Book World</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FeatureCard
            icon={Target}
            title="Data-Driven Approach"
            description="We take research & development seriously, using data-driven & strategic approaches to ensure our programmes are relevant and successful."
            link="/about"
          />
          <FeatureCard
            icon={Users}
            title="Community Partnership"
            description="Working with trusted local community builders who obsess about children's access to literacy materials and development."
            link="/our-partners"
          />
          <FeatureCard
            icon={Heart}
            title="Holistic Solutions"
            description="Every child is different. Our 5 function groups provide comprehensive literacy solutions from materials to lifestyle."
            link="/function-groups"
          />
        </div>
      </section>

      {/* Social Media Section */}
      <section className="container mx-auto px-6 py-16 bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#2b347c] mb-8">Connect With Us</h2>
          
          {/* Social Media Icons */}
          <div className="flex gap-4 justify-center mb-12">
            {socialPlatforms.map((social, index) => (
              <motion.div
                key={social.platform}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <SocialIcon {...social} />
              </motion.div>
            ))}
          </div>
          
          <p className="text-gray-600 mb-8">Follow us for updates, stories, and ways to get involved!</p>
        </div>
      </section>

      {/* Call to Action - Join Us in Rewriting the Future */}
      <section className="bg-gradient-to-r from-[#2b347c] to-[#1a2d6b] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Join Us In Rewriting the Future</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Together we can make literacy a legacy and a lifestyle for South African children.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/donate"
                className="px-8 py-3 bg-white text-[#2b347c] rounded-full hover:bg-gray-100 transition-colors font-semibold"
              >
                Support Our Mission
              </Link>
              <Link
                to="/get-involved"
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-[#2b347c] transition-colors font-semibold"
              >
                Get Involved Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;