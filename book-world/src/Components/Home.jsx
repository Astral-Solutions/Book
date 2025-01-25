import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Calendar, Users, Target } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="w-12 h-12 bg-[#2b347c]/10 rounded-full flex items-center justify-center mb-4">
      <Icon className="text-[#2b347c] w-6 h-6" />
    </div>
    <h3 className="text-xl font-semibold text-[#2b347c] mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

function Home() {
  return (
    <div className="home-page min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div
        className="relative h-[600px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
        <img
          src="/images/BookWorldTeam.jpg"
          alt="Children enjoying books"
          loading="lazy"
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl relative z-20">
            <motion.h1
              className="text-5xl font-bold text-white mb-6 shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Changing Lives One Book at a Time
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 mb-8 shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Join us in creating a brighter future for our children.
            </motion.p>
            <motion.div
              className="flex gap-4 justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition-colors duration-300"
              >
                Donate Today
              </Link>
              <Link
                to="/volunteer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition-colors duration-300"
              >
                Volunteer Now
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Introduction Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-[#2b347c] mb-6">
          Welcome to Book World
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          Book World is a South African organization dedicated to sparking a love for reading in children and youth. Through innovative literacy programs, book donations, and youth empowerment initiatives, we aim to nurture a culture of literacy from the earliest stages of life. Together, we can ensure that every child has access to books and the opportunity to unlock their full potential.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-6 py-16 bg-[#F7FAFC] rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-[#2b347c] mb-6">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Users}
            title="Proven Impact"
            description="Over 3,000 books donated annually and counting."
          />
          <FeatureCard
            icon={Target}
            title="Community Focused"
            description="Supporting 16 Early Childhood Development (ECD) centers and local schools."
          />
          <FeatureCard
            icon={Calendar}
            title="Empowering Youth"
            description="Training unemployed youth as literacy facilitators, giving them skills and purpose."
          />
        </div>
      </section>

      {/* Programs Highlight Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-[#2b347c] mb-6">
          Programs Highlight
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Users}
            title="Early Literacy Program"
            description="Combining phonics and comprehension for ages 0–16."
          />
          <FeatureCard
            icon={Target}
            title="Book Donation Drives"
            description="Ensuring every child owns 50 books by age 5."
          />
          <FeatureCard
            icon={Calendar}
            title="Literature Clubs"
            description="Fostering a love for books through engaging community programs."
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-[#2b347c] mb-6">
          Join Us in Transforming Lives
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          Every book counts, every child matters. Together, we can create a brighter future through literacy and a love for reading.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/support"
            className="px-8 py-3 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition"
          >
            Support Our Mission
          </Link>
          <Link
            to="/about"
            className="px-8 py-3 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition"
          >
            Learn More About Us
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
