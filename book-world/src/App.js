import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, Heart, Users, Target, Mail, Phone, MapPin, Send, Gift, 
  DollarSign, CreditCard, Building2, UserPlus, Award, 
  Lightbulb, TrendingUp, FileText, GraduationCap, School, Library, 
  Megaphone, ArrowRight, ChevronLeft, ChevronRight, Check, 
  Facebook, Twitter, Youtube, Instagram, Linkedin, 
  Sparkles, Menu, X
} from "lucide-react";

// Enhanced Carousel Component
const EnhancedCarousel = ({ slides, interval = 8000, showDots = true }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval, isPaused]);

  const goToSlide = (index) => setCurrentSlide(index);
  const goToPrevious = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNext = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl shadow-2xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          {/* IMAGE */}
          <div className="w-full h-[450px] overflow-hidden">
            {slides[currentSlide].image ? (
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="bg-gradient-to-br from-[#2b347c] via-[#1a2d6b] to-[#0f1a4d] h-full w-full" />
            )}
          </div>

          {/* TEXT BELOW IMAGE */}
          <div className="bg-white p-10 text-center">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-[#2b347c] mb-4"
            >
              {slides[currentSlide].title}
            </motion.h1>

            {slides[currentSlide].description && (
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-gray-700 max-w-3xl mx-auto"
              >
                {slides[currentSlide].description}
              </motion.p>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group z-10"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group z-10"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Dots */}
      {showDots && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Navigation Component
const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", page: "Home" },
    { name: "About Us", page: "About" },
    { name: "Function Groups", page: "FunctionGroups" },
    { name: "Research", page: "Research" },
    { name: "Training", page: "Training" },
    { name: "Get Involved", page: "GetInvolved" },
    { name: "Donate", page: "Donate" },
    { name: "Contact", page: "Contact" }
  ];

  return (
        <nav className="bg-gradient-to-r from-[#2b347c] to-[#1a2d6b] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo + Site Name */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setCurrentPage("Home")}
          >
            <img
              src="/BookWorldLogo.png"
              alt="Book World Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-2xl font-bold">Book World</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-2">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => setCurrentPage(item.page)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  currentPage === item.page
                    ? "bg-white text-[#2b347c] font-bold"
                    : "hover:bg-white/20"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-white/20 rounded-lg transition-all"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  setCurrentPage(item.page);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all mb-2 ${
                  currentPage === item.page 
                    ? 'bg-white text-[#2b347c] font-bold' 
                    : 'hover:bg-white/20'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

// Home Page Component
const HomePage = ({ setCurrentPage }) => {
  const heroSlides = [
    { 
      image: "/images/WeAre.jpeg",
      title: "WE ARE BOOK WORLD", 
      description: "A passionate community of Bookmen dedicated to transforming literacy across South Africa." 
    },
    { 
      image: "/images/GomoKids.jpg",
      title: "TRANSFORMING LIVES", 
      description: "Working hand-in-hand with local community builders for every child's literacy journey." 
    },
    { 
      image: "/images/BookDonation.jpg",
      title: "LITERACY FOR ALL", 
      description: "Building a future where literacy is a lifestyle and legacy for all children." 
    }
  ];

  const functionGroups = [
    { 
      icon: FileText, 
      title: "Literacy Material Development", 
      description: "Creating innovative educational materials",
      image: "/images/MaterialDev.jpeg"
    },
    { 
      icon: Gift, 
      title: "Literacy Material Donation", 
      description: "Ensuring books reach every child",
      image: "/images/MaterialDon.jpeg"
    },
    { 
      icon: GraduationCap, 
      title: "Literacy Development", 
      description: "Empowering through trained facilitators",
      image: "/images/LitDev.jpeg"
    },
    { 
      icon: Library, 
      title: "Literacy Hub Functionality", 
      description: "Sustainable literacy hub systems",
      image: "/images/LitHub.jpeg"
    },
    { 
      icon: Megaphone, 
      title: "Literacy Promotion", 
      description: "Inspiring a culture of reading",
      image: "/images/LitPromo.jpeg"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="max-w-7xl mx-auto h-full px-6">
          <EnhancedCarousel slides={heroSlides} />
        </div>
      </div>

      {/* Stats Section */}
      <section className="relative -mt-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#2b347c] to-[#1a2d6b] rounded-3xl shadow-2xl p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center text-white">
              <div>
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-lg opacity-90">Communities Served</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">14,000+</div>
                <div className="text-lg opacity-90">Books Distributed</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">7,500+</div>
                <div className="text-lg opacity-90">Children Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement with Image */}
       
      <section className="container mx-auto px-6 py-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-12">
            <img 
              src="/images/Mission.jpeg" 
              alt="Mission Statement" 
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
          <div className="inline-flex items-center gap-2 bg-[#2b347c]/10 px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-[#2b347c]" />
            <span className="text-[#2b347c] font-semibold">Who We Are</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#2b347c] mb-8">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Book World is dedicated to ensuring that the world's most vulnerable children have access to literacy materials 
            and the opportunity to acquire literacy skills to reach their full potential.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            We work hand-in-hand with trusted local community builders in Villages, Towns & Small Dorpies (VTSDs) 
            to help communities organize, eradicate illiteracy, and build literate communities.
          </p>
          <button 
            onClick={() => setCurrentPage("About")}
            className="px-8 py-4 bg-[#2b347c] text-white rounded-full font-bold hover:bg-[#1a2d6b] transition-all inline-flex items-center gap-2"
          >
            Learn More About Us <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
     

      {/* About Section with Images */}
      <section className="container mx-auto px-6 py-16 bg-gray-50">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-xl shadow-lg group"
          >
            <img 
              src="/images/OurStory.jpeg" 
              alt="About Us" 
              className="w-full h-80 object-contain group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <h3 className="text-white text-2xl font-bold">Our Story</h3>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative overflow-hidden rounded-xl shadow-lg group"
          >
            <img 
              src="/images/AboutUs.jpg" 
              alt="Our Values" 
              className="w-full h-80 object-contain group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <h3 className="text-white text-2xl font-bold">Our Values</h3>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden rounded-xl shadow-lg group"
          >
            <img 
              src="/images/OurTeam.jpeg" 
              alt="Our Team" 
              className="w-full h-80 object-contain group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <h3 className="text-white text-2xl font-bold">Our Team</h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Function Groups */}
      <section className="container mx-auto px-6 py-24 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#2b347c] mb-6">Our Function Groups</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            Five interconnected pillars working together to create comprehensive literacy solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {functionGroups.map((group, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              {group.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={group.image} 
                    alt={group.title}
                    className="w-full h-full object-contain hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2b347c] to-[#1a2d6b] rounded-2xl flex items-center justify-center mb-6">
                  <group.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2b347c] mb-3">{group.title}</h3>
                <p className="text-gray-600 mb-4">{group.description}</p>
                <button 
                  onClick={() => setCurrentPage("FunctionGroups")}
                  className="text-[#2b347c] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-wrap gap-6 justify-center">
            <button
              onClick={() => setCurrentPage("Donate")}
              className="px-10 py-4 bg-gradient-to-r from-[#2b347c] to-[#1a2d6b] text-white rounded-full text-lg hover:shadow-2xl transition-all font-bold"
            >
              DONATE NOW
            </button>
            <button
              onClick={() => setCurrentPage("GetInvolved")}
              className="px-10 py-4 bg-white text-[#2b347c] border-3 border-[#2b347c] rounded-full text-lg hover:bg-[#2b347c] hover:text-white transition-all font-bold shadow-lg"
            >
              VOLUNTEER NOW
            </button>
          </div>
        </div>
      </section>

      {/* Impact Gallery */}
      {/*
      <section className="container mx-auto px-6 py-24 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#2b347c] mb-6">Our Impact</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            See the real difference we're making in communities across South Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { image: "/images/Kelebogile.JPG", title: "Kelebogile's Journey", description: "From struggling reader to literacy champion" },
            { image: "/images/LibFun.JPG", title: "Library Joy", description: "Community libraries bringing learning to life" },
            { image: "/images/GetInvolved.JPG", title: "Get Involved", description: "Join our mission to transform literacy" },
            { image: "/images/Reading.jpg", title: "Reading Time", description: "Children discovering the joy of books" },
            { image: "/images/LiteracyNest.jpg", title: "Literacy Nest", description: "Creating cozy reading spaces" },
            { image: "/images/Kgalalelo.JPG", title: "Community Impact", description: "Transforming communities through literacy" },
            { image: "/images/Gomotsanang.JPG", title: "Youth Programs", description: "Empowering young readers" },
            { image: "/images/Amasio.JPG", title: "Amasio Project", description: "Bringing books to rural areas" },
            { image: "/images/BackToSchool.jpg", title: "Back to School", description: "Supporting education initiatives" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2b347c] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      */}

      {/* Activities & Events Carousel */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[#2b347c] mb-6">Activities & Events</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            Join us in celebrating literacy through engaging community events and creative initiatives.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto h-[500px]">
          <EnhancedCarousel 
            slides={[
              { image: "/images/BlindDateWithABook.png", title: "Blind Date with a Book", description: "Creative reading promotion event" },
              { image: "/images/WorldReadAloudCPT.jpg", title: "World Read Aloud Day", description: "Celebrating reading together" },
              { image: "/images/WRA05.jpg", title: "Reading Celebrations", description: "Community reading events" },
              { image: "/images/WRAD.jpg", title: "World Read Aloud", description: "Global literacy celebration" },
              { image: "/images/bookOpening.gif", title: "Literacy Hub Openings", description: "New literacy hubs launched" },
              { image: "/images/LunFriends.jpg", title: "Reading Friends", description: "Building literacy partnerships" }
            ]} 
            interval={5000} 
          />
        </div>
      </section>

      {/* Team Section */}
      {/*
      <section className="container mx-auto px-6 py-24 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#2b347c] mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Passionate individuals driving literacy transformation across South Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { image: "/images/BWTeam.jpg", title: "Book World Team", description: "Our passionate team driving change" },
            { image: "/images/MrMoteane.JPG", title: "Leadership", description: "Guiding our mission with vision" },
            { image: "/images/MrRangaka.JPG", title: "Field Team", description: "Working directly with communities" },
            { image: "/images/MsMakoloko.JPG", title: "Program Coordinators", description: "Managing literacy initiatives" },
            { image: "/images/Petronella.JPG", title: "Community Liaisons", description: "Connecting with local builders" },
            { image: "/images/Rosa.JPG", title: "Training Specialists", description: "Empowering literacy facilitators" }
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2b347c] mb-2">{member.title}</h3>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      */}
      
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#2b347c] mb-6">Why Book World</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We combine research, community partnership, and holistic solutions for lasting impact.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-[#2b347c] to-[#1a2d6b] rounded-2xl flex items-center justify-center mb-6">
              <Target className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#2b347c] mb-3">Data-Driven Approach</h3>
            <p className="text-gray-600">We use strategic, evidence-based methods to ensure measurable results and lasting change.</p>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-[#2b347c] to-[#1a2d6b] rounded-2xl flex items-center justify-center mb-6">
              <Users className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#2b347c] mb-3">Community Partnership</h3>
            <p className="text-gray-600">Working alongside passionate local leaders who understand their communities' needs.</p>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-[#2b347c] to-[#1a2d6b] rounded-2xl flex items-center justify-center mb-6">
              <Heart className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#2b347c] mb-3">Holistic Solutions</h3>
            <p className="text-gray-600">Comprehensive approach addressing materials, development, and lifestyle transformation.</p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2b347c] via-[#1a2d6b] to-[#0f1a4d] text-white py-24">
        <div className="container mx-auto px-6 text-center relative z-10">
          <Award className="w-20 h-20 text-yellow-400 mx-auto mb-8" />
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Join Us In Rewriting the Future</h2>
          <p className="text-2xl mb-12 max-w-3xl mx-auto opacity-90">
            Together we can make literacy a legacy and a lifestyle for every South African child.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => setCurrentPage("Donate")}
              className="px-12 py-5 bg-white text-[#2b347c] rounded-full text-lg hover:bg-yellow-400 transition-all font-bold shadow-xl"
            >
              Support Our Mission
            </button>
            <button
              onClick={() => setCurrentPage("GetInvolved")}
              className="px-12 py-5 bg-transparent border-3 border-white text-white rounded-full text-lg hover:bg-white hover:text-[#2b347c] transition-all font-bold"
            >
              Get Involved Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// About Page
const AboutPage = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Image */}
    <div className="relative h-96 overflow-hidden">
      <img 
        src="/images/AboutUs.jpg" 
        alt="About Book World"
        className="w-full h-full object-contain"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
        <div className="container mx-auto px-6 pb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Who We Are</h1>
          <p className="text-xl text-white/90">A passionate community transforming literacy across South Africa</p>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <p className="text-xl text-gray-700 mb-12">
          Book World is a passionate community of Bookmen dedicated to transforming literacy across South Africa.
        </p>
        
        <div className="bg-gradient-to-br from-[#2b347c] to-[#1a2d6b] text-white p-12 rounded-2xl mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg leading-relaxed">
            Founded with a vision to make literacy accessible to every child, Book World has grown into a comprehensive 
            literacy transformation organization. We work hand-in-hand with trusted local community builders in Villages, 
            Towns & Small Dorpies (VTSDs) to help communities organize, eradicate illiteracy, and build literate communities.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-[#2b347c] mb-6">Our Values</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { icon: Heart, title: "Compassion", desc: "Every child deserves access to literacy" },
            { icon: Users, title: "Community", desc: "Working together for lasting change" },
            { icon: Target, title: "Impact", desc: "Data-driven results that matter" },
            { icon: Lightbulb, title: "Innovation", desc: "Creative solutions to literacy challenges" }
          ].map((value, i) => (
            <div key={i} className="flex gap-4 items-start bg-gray-50 p-6 rounded-lg">
              <value.icon className="w-10 h-10 text-[#2b347c] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-[#2b347c] mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Images Grid */}
        <h2 className="text-3xl font-bold text-[#2b347c] mb-6">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { image: "/images/Kagiso.jpeg", name: "Mr. Rangaka" },
            { image: "/images/KatMak.jpeg", name: "Ms. Makoloko" },
            { image: "/images/Katlego.jpeg", name: "Mr. Moteane" },
            { image: "/images/Mageza.jpeg", name: "Ms. Mageza" },
            { image: "/images/Nkosi.jpeg", name: "Mr. Milanzi" },
            { image: "/images/Petro.jpeg", name: "Ms. Mosimane" },
            { image: "/images/Gomo.jpeg", name: "Ms. Mogomutsi" },
            { image: "/images/Rosa.jpeg", name: "Ms. Tamele" },
            { image: "/images/BWTeam.jpg", name: "Team" }
          ].map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden shadow-lg group"
            >
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-bold text-lg">{member.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-gray-700 mb-6">
          Our team consists of passionate educators, community organizers, and literacy advocates who bring 
          diverse skills and deep commitment to our mission. Together, we work tirelessly to ensure every 
          child has the opportunity to discover the joy of reading.
        </p>
      </motion.div>
    </div>
  </div>
);

// Function Groups Page
const FunctionGroupsPage = () => {
  const groups = [
    {
      icon: FileText,
      title: "Literacy Material Development",
      description: "Creating innovative educational materials tailored for diverse community needs. Our team develops age-appropriate books, workbooks, and learning resources.",
      features: ["Custom content creation", "Culturally relevant materials", "Quality assurance", "Community feedback integration"]
    },
    {
      icon: Gift,
      title: "Literacy Material Donation",
      description: "Ensuring quality books and resources reach every child in underserved areas. We manage logistics and distribution networks.",
      features: ["Book collection drives", "Distribution logistics", "Community partnerships", "Impact tracking"]
    },
    {
      icon: GraduationCap,
      title: "Literacy Development",
      description: "Empowering communities through trained facilitators who bring literacy programs to life.",
      features: ["Facilitator training", "Curriculum development", "Progress monitoring", "Ongoing support"]
    },
    {
      icon: Library,
      title: "Library Functionality",
      description: "Establishing sustainable library systems in homes and communities for lasting impact.",
      features: ["Library setup", "Management training", "Resource organization", "Community engagement"]
    },
    {
      icon: Megaphone,
      title: "Literacy Promotion",
      description: "Inspiring a culture of reading through creative campaigns and community engagement.",
      features: ["Reading campaigns", "Community events", "Social media outreach", "Success stories"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#2b347c] mb-6">Our Function Groups</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Five interconnected pillars working together to create comprehensive literacy solutions
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {groups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-[#2b347c] to-[#1a2d6b] p-8 flex items-center justify-center">
                  <group.icon className="w-32 h-32 text-white" />
                </div>
                <div className="md:w-2/3 p-8">
                  <h2 className="text-3xl font-bold text-[#2b347c] mb-4">{group.title}</h2>
                  <p className="text-gray-700 mb-6">{group.description}</p>
                  <h3 className="font-bold text-[#2b347c] mb-3">Key Features:</h3>
                  <ul className="space-y-2">
                    {group.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Research Page
const ResearchPage = () => (
  <div className="container mx-auto px-6 py-16">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-5xl font-bold text-[#2b347c] mb-8">Research & Development</h1>
      
      <p className="text-xl text-gray-700 mb-12">
        We take research seriously, using data-driven approaches to ensure our programs are relevant and successful.
      </p>

      <div className="space-y-8">
        {[
          {
            icon: Target,
            title: "Community Needs Assessment",
            description: "Understanding unique literacy challenges in VTSDs through comprehensive data collection and analysis.",
            details: ["Household surveys", "Community consultations", "Literacy rate analysis", "Resource mapping"]
          },
          {
            icon: TrendingUp,
            title: "Program Impact Studies",
            description: "Measuring effectiveness of interventions and continuously improving our approach.",
            details: ["Pre/post assessments", "Longitudinal studies", "Success metrics tracking", "Stakeholder feedback"]
          },
          {
            icon: Lightbulb,
            title: "Best Practices Research",
            description: "Identifying and documenting successful literacy development strategies.",
            details: ["Case studies", "Model replication", "Innovation testing", "Knowledge sharing"]
          }
        ].map((area, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#2b347c]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <area.icon className="w-6 h-6 text-[#2b347c]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#2b347c] mb-2">{area.title}</h2>
                <p className="text-gray-700 mb-4">{area.description}</p>
                <ul className="space-y-2">
                  {area.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);

// Training Page
const TrainingPage = () => {
  const programs = [
    {
      icon: School,
      title: "Literacy Facilitator Training",
      duration: "6 weeks",
      description: "Comprehensive program preparing community members to deliver effective literacy instruction.",
      modules: ["Reading methodology", "Classroom management", "Assessment techniques", "Community engagement"],
      image: "/images/LiteracyFascilitators.jpg"
    },
    {
      icon: Library,
      title: "Literacy Hub Management",
      duration: "4 weeks",
      description: "Training on organizing, maintaining, and maximizing community Literacy Hub resources.",
      modules: ["Cataloging systems", "Resource organization", "User engagement", "Sustainability planning"],
      image: "/images/LitHubJoy.jpeg"
    },
    {
      icon: BookOpen,
      title: "Reading Promotion",
      duration: "3 weeks",
      description: "Techniques for inspiring children and families to embrace reading as a lifestyle.",
      modules: ["Storytelling techniques", "Event planning", "Parent engagement", "Creating reading culture"],
      image: "/images/ReadingPromotion.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#2b347c] mb-6">Training Programs</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Empowering community members with skills and knowledge to become literacy champions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {program.image && (
                <div className="h-56 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              <div className="bg-gradient-to-br from-[#2b347c] to-[#1a2d6b] p-6 text-white text-center">
                <program.icon className="w-16 h-16 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">{program.title}</h2>
                <div className="text-sm opacity-90">{program.duration}</div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{program.description}</p>
                <h3 className="font-bold text-[#2b347c] mb-3">Course Modules:</h3>
                <ul className="space-y-2">
                  {program.modules.map((module, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{module}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-[#2b347c] mb-4">Ready to Get Trained?</h2>
          <p className="text-gray-700 mb-6">
            Join our next training cohort and become a certified literacy facilitator
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#2b347c] to-[#1a2d6b] text-white rounded-lg font-bold hover:shadow-xl transition-all">
            Apply for Training
          </button>
        </div>
      </div>
    </div>
  );
};

// Get Involved Page
const GetInvolvedPage = ({ setCurrentPage }) => {
  const opportunities = [
    {
      icon: UserPlus,
      title: "Become a Volunteer",
      description: "Join our team and help transform lives through literacy. Make a real difference in children's lives.",
      action: "Volunteer",
      features: ["Flexible commitment", "Meaningful impact", "Community connection", "Skill development"]
    },
    {
      icon: DollarSign,
      title: "Make a Donation",
      description: "Support our programs with a financial contribution. Every rand makes a difference.",
      action: "Donate",
      features: ["One-time giving", "Monthly support", "Tax deductible", "Direct impact"]
    },
    {
      icon: Building2,
      title: "Corporate Partnership",
      description: "Partner with us through workplace giving and CSR programs. Build community together.",
      action: "Donate",
      features: ["Team volunteering", "Matching gifts", "Sponsorships", "Long-term impact"]
    },
    {
      icon: Heart,
      title: "Become a Member",
      description: "Join our community as a member and be part of our literacy movement.",
      action: "Donate",
      features: ["Member benefits", "Exclusive updates", "Community events", "Recognition"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#2b347c] mb-6">Get Involved</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join our movement to transform literacy across South Africa. Whether through volunteering, 
            donating, or partnering with us, your involvement makes a real difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {opportunities.map((opp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#2b347c] to-[#1a2d6b] rounded-2xl flex items-center justify-center mb-6">
                <opp.icon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#2b347c] mb-3">{opp.title}</h2>
              <p className="text-gray-700 mb-6">{opp.description}</p>
              <ul className="space-y-2 mb-6">
                {opp.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setCurrentPage(opp.action)}
                className="w-full px-6 py-3 bg-[#2b347c] text-white rounded-lg hover:bg-[#1a2d6b] transition-all font-semibold"
              >
                Learn More
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-br from-[#2b347c] to-[#1a2d6b] text-white p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-lg mb-8 opacity-90">
            We'd love to hear from you and discuss how you can make an impact.
          </p>
          <button
            onClick={() => setCurrentPage("Contact")}
            className="px-8 py-4 bg-white text-[#2b347c] rounded-full font-bold hover:bg-yellow-400 transition-all"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

 // donations page
const DonatePage = () => {
  const [selectedAmount, setSelectedAmount] = React.useState(null);
  const [customAmount, setCustomAmount] = React.useState("");
  const amounts = [100, 250, 500, 1000];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#2b347c] mb-6">Make a Difference Today</h1>
            <p className="text-xl text-gray-700">
              Your donation helps bring literacy to children across South Africa. 
              Our online donation platform is coming soon! In the meantime, you can manually deposit into the bank account details below.
            </p>
          </div>

          {/* Donation Amount Section */}

          {/* Banking Details */}
          <div className="container mx-auto px-6 py-12 bg-white shadow-lg rounded-lg mb-12">
            <h2 className="text-3xl font-bold text-center text-[#2b347c] mb-6">Bank Account Details</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-left bg-gray-50">
                <thead>
                  <tr className="bg-[#2b347c] text-white">
                    <th className="border border-gray-300 px-4 py-2">Legal Entity Name</th>
                    <th className="border border-gray-300 px-4 py-2">Bank Name</th>
                    <th className="border border-gray-300 px-4 py-2">Account Number</th>
                    <th className="border border-gray-300 px-4 py-2">Branch Code</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Book World SA</td>
                    <td className="border border-gray-300 px-4 py-2">Standard Bank</td>
                    <td className="border border-gray-300 px-4 py-2">10183691987</td>
                    <td className="border border-gray-300 px-4 py-2">017045</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
{/* 
          // Donation Amount Selection  */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#2b347c] mb-6">Choose Your Donation Amount</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedAmount === amount
                      ? "border-[#2b347c] bg-[#2b347c] text-white"
                      : "border-gray-300 hover:border-[#2b347c]"
                  }`}
                >
                  <div className="text-2xl font-bold">R{amount}</div>
                </button>
              ))}
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-semibold">Or enter custom amount (R)</label>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#2b347c] focus:outline-none"
              />
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-[#2b347c] to-[#1a2d6b] text-white rounded-lg font-bold text-lg hover:shadow-xl transition-all">
              Donate Now
            </button>
          </div>

          {/* Donation Impact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <BookOpen className="w-12 h-12 text-[#2b347c] mx-auto mb-4" />
              <h3 className="font-bold text-[#2b347c] mb-2">R100</h3>
              <p className="text-gray-600 text-sm">Provides 5 books to a child</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Users className="w-12 h-12 text-[#2b347c] mx-auto mb-4" />
              <h3 className="font-bold text-[#2b347c] mb-2">R500</h3>
              <p className="text-gray-600 text-sm">Trains one literacy facilitator</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Library className="w-12 h-12 text-[#2b347c] mx-auto mb-4" />
              <h3 className="font-bold text-[#2b347c] mb-2">R1000</h3>
              <p className="text-gray-600 text-sm">Establishes a community library</p>
            </div>
          </div>

          {/* Other Ways to Give */}
          <div className="mt-12 bg-gradient-to-r from-[#2b347c] to-[#1a2d6b] text-white p-8 rounded-xl mb-12">
            <h3 className="text-2xl font-bold mb-4">Other Ways to Give</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <CreditCard className="w-6 h-6 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Monthly Giving</h4>
                  <p className="text-sm opacity-90">Sustained support</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="w-6 h-6 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Workplace Giving</h4>
                  <p className="text-sm opacity-90">Corporate partnerships</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <UserPlus className="w-6 h-6 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Membership</h4>
                  <p className="text-sm opacity-90">Join our community</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 mb-12">
            <h2 className="text-3xl font-bold text-[#2b347c] mb-4">Join Us in Making a Difference</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              Every contribution helps us change lives through literacy. Partner with us in building a brighter future for children and youth.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
// Volunteer Page (simplified version)
const VolunteerPage = () => {
  const volunteerAreas = [
    "Literacy Facilitation",
    "Library Management",
    "Event Organization",
    "Material Development",
    "Community Outreach"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#2b347c] mb-6">Become a Volunteer</h1>
            <p className="text-xl text-gray-700">
              Join our team and help transform lives through literacy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Heart className="w-12 h-12 text-[#2b347c] mb-4" />
              <h3 className="text-2xl font-bold text-[#2b347c] mb-4">Why Volunteer?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Make a real difference in children's lives</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Gain valuable experience in education</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Join a passionate community</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Flexible commitment options</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Users className="w-12 h-12 text-[#2b347c] mb-4" />
              <h3 className="text-2xl font-bold text-[#2b347c] mb-4">Volunteer Roles</h3>
              <ul className="space-y-2 text-gray-700">
                {volunteerAreas.map((area, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-[#2b347c]" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-[#2b347c] mb-6">Volunteer Application</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2 font-semibold">Full Name</label>
                <input
                  type="text"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#2b347c] focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#2b347c] focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-semibold">Phone</label>
                <input
                  type="tel"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#2b347c] focus:outline-none"
                  placeholder="+27"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-semibold">Areas of Interest</label>
                <div className="space-y-2">
                  {volunteerAreas.map((area, i) => (
                    <label key={i} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-gray-700">{area}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-semibold">Why do you want to volunteer?</label>
                <textarea
                  rows="4"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#2b347c] focus:outline-none"
                  placeholder="Tell us about your motivation..."
                />
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-[#2b347c] to-[#1a2d6b] text-white rounded-lg font-bold text-lg hover:shadow-xl transition-all">
                Submit Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Page
const ContactPage = () => (
  <div className="min-h-screen bg-gray-50 py-16">
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#2b347c] mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-700">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#2b347c] to-[#1a2d6b] text-white p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="opacity-90">info@bookworld.org.za</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="opacity-90">+27 83 646 9971</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Address</h3>
                  <p className="opacity-90">48 Steen Street, Rustenburg 0300, North West South Africa</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold text-[#2b347c] mb-6">Send Us a Message</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#2b347c] focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#2b347c] focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-semibold">Subject</label>
                <input
                  type="text"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#2b347c] focus:outline-none"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-semibold">Message</label>
                <textarea
                  rows="5"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-[#2b347c] focus:outline-none"
                  placeholder="Your message..."
                />
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-[#2b347c] to-[#1a2d6b] text-white rounded-lg font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Footer Component
const Footer = ({ setCurrentPage }) => {
  const socialPlatforms = [
    { icon: Facebook, platform: "Facebook" },
    { icon: Twitter, platform: "Twitter" },
    { icon: Instagram, platform: "Instagram" },
    { icon: Youtube, platform: "YouTube" }
  ];

  return (
    <footer className="bg-gradient-to-r from-[#2b347c] to-[#1a2d6b] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Book World</h3>
            <p className="text-white/80 text-sm">
              Transforming literacy across South Africa, one community at a time.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => setCurrentPage("About")} className="hover:underline">About Us</button></li>
              <li><button onClick={() => setCurrentPage("FunctionGroups")} className="hover:underline">Function Groups</button></li>
              <li><button onClick={() => setCurrentPage("Research")} className="hover:underline">Research</button></li>
              <li><button onClick={() => setCurrentPage("Training")} className="hover:underline">Training</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => setCurrentPage("Donate")} className="hover:underline">Donate</button></li>
              <li><button onClick={() => setCurrentPage("Volunteer")} className="hover:underline">Volunteer</button></li>
              <li><button onClick={() => setCurrentPage("GetInvolved")} className="hover:underline">Get Involved</button></li>
              <li><button onClick={() => setCurrentPage("Contact")} className="hover:underline">Contact</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              {socialPlatforms.map(({ icon: Icon, platform }, i) => (
                <button
                  key={i}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
                  title={platform}
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
            <p className="text-sm text-white/80">info@bookworld.org.za</p>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
          <p>&copy; 2026 Book World. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch(currentPage) {
      case "Home":
        return <HomePage setCurrentPage={setCurrentPage} />;
      case "About":
        return <AboutPage />;
      case "FunctionGroups":
        return <FunctionGroupsPage />;
      case "Research":
        return <ResearchPage />;
      case "Training":
        return <TrainingPage />;
      case "GetInvolved":
        return <GetInvolvedPage setCurrentPage={setCurrentPage} />;
      case "Donate":
        return <DonatePage />;
      case "Volunteer":
        return <VolunteerPage />;
      case "Contact":
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;