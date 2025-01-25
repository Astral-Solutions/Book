import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight, Calendar, Users, Target, Phone } from 'lucide-react';
import Carousel from './Carousel';
import { FaSeedling, FaLeaf, FaHandHoldingUsd, FaFacebook, FaCoffee } from 'react-icons/fa';

const TaglineCarousel = () => {
  const taglines = [
    "Empowering Young Minds Through Books",
    "Inspiring a Love for Reading",
    "Transforming Communities One Book at a Time",
    "Creating Literacy-Rich Environments",
    "Together, We Build a World of Readers"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-24 bg-white/80 backdrop-blur-md shadow-sm">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-50/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut"
            }}
            className="text-center"
          >
            <p className="text-2xl font-serif text-green-800 tracking-wide">
              {taglines[currentIndex]}
            </p>

            {/* Decorative line */}
            <motion.div
              className="mt-2 mx-auto h-0.5 bg-green-800/20"
              initial={{ width: 0 }}
              animate={{ width: '100px' }}
              transition={{ delay: 0.2, duration: 0.5 }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Progress indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
          {taglines.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-6 bg-green-800' 
                  : 'w-2 bg-green-800/20'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="w-12 h-12 bg-[#1B5538]/10 rounded-full flex items-center justify-center mb-4">
      <Icon className="text-[#1B5538] w-6 h-6" />
    </div>
    <h3 className="text-xl font-semibold text-[#1B5538] mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

function Home() {
  return (
    <div className="home-page min-h-screen bg-gray-50">
      <TaglineCarousel />
      
      {/* Hero Section */}
      <motion.div 
        className="relative h-[600px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
        <img 
          src="/images/ReadingChildren.jpg" 
          alt="Children enjoying books" 
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl relative z-20">
            <motion.h1 
              className="text-5xl font-bold text-white mb-6 shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to Book World
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 mb-8 shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Empowering Young Minds Through Books
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#1B5538] text-white rounded-full hover:bg-[#397D5A] transition-colors duration-300"
              >
                Learn More <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <FeatureCard 
            icon={Calendar}
            title="Community Events"
            description="Gatherings to foster literacy and engagement with books."
          />
          <FeatureCard 
            icon={Users}
            title="Early Literacy Programs"
            description="Building foundational skills in children aged 0–16."
          />
          <FeatureCard 
            icon={Target}
            title="Book Donation Drives"
            description="Ensuring every child owns 50 books by age 5."
          />
          <FeatureCard 
            icon={Phone}
            title="Stay Connected"
            description="Explore how you can get involved and support our mission."
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
