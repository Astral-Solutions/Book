import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function WhoWeAre() {
const teamMembers = [
  {
    name: "Nkosinathi Milanzi",
    role: "Communications & Development Manager",
    image: "/images/team1.jpg",
  },
  {
    name: "Petronella Mosimane",
    role: "Literacy Material Development Lead",
    image: "/images/team2.jpg",
  },
  {
    name: "Lebogang Phiri",
    role: "Programme Manager",
    image: "/images/team3.jpg",
  },
  // Add more team members as needed
];

const partners = [
  { name: "Standard Bank", logo: "/images/partner1.png" },
  { name: "Department of Education", logo: "/images/partner2.png" },
  { name: "Rally to Read", logo: "/images/partner3.png" },
  { name: "Local Libraries", logo: "/images/partner4.png" },
  // Add more partner logos
];

const WhoWeAre = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate team members every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="who-we-are-page bg-gray-50 min-h-screen py-12 px-6">
      <div className="container mx-auto">
        {/* Overview */}
        <section className="mb-16 text-center">
          <motion.h1
            className="text-5xl font-bold text-[#2b347c] mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Who We Are
          </motion.h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Book World SA is a nonprofit movement redefining literacy as a lifestyle.
            We equip children, youth, and communities with access to books, creative
            programmes, and opportunities that empower lifelong learning.
          </p>
        </section>

        {/* About Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-[#2b347c] mb-4">About Us</h2>
          <p className="text-gray-700">
            Founded in 2019, Book World has grown from a small initiative into a
            nationwide literacy organization. Our mission is to ensure every child
            has access to culturally relevant books, inspiring programmes, and
            supportive environments that ignite a love for reading.
          </p>
        </section>

        {/* Our Team - Carousel */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-semibold text-[#2b347c] mb-4">Our Team</h2>
          <p className="text-gray-700 mb-6">
            Meet the passionate individuals driving Book World’s mission.
          </p>
          <div className="relative w-full max-w-md mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <img
                  src={teamMembers[currentIndex].image}
                  alt={teamMembers[currentIndex].name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-[#2b347c]">
                  {teamMembers[currentIndex].name}
                </h3>
                <p className="text-gray-600">{teamMembers[currentIndex].role}</p>
              </motion.div>
            </AnimatePresence>
            {/* Manual navigation */}
            <div className="flex justify-center mt-4 gap-2">
              {teamMembers.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full ${
                    idx === currentIndex ? "bg-[#2b347c]" : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </section>

        {/* Our Partners - Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-[#2b347c] mb-4">Our Partners</h2>
          <p className="text-gray-700 mb-6 text-center">
            We proudly collaborate with schools, corporates, and community
            organizations to amplify literacy impact.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        {/* The rest of your sections (Our Work, Function Groups, Projects, Programmes, Annual Reports, Careers) go here... */}
      </div>
    </div>
  );
};
}

export default WhoWeAre;
