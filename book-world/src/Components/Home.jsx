import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  Users, 
  Target, 
  BookOpen, 
  Heart, 
  Lightbulb,
  Facebook,
  MessageCircle,
  Twitter,
  Youtube,
  Instagram,
  Linkedin,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Award,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Send,
  GraduationCap,
  School,
  Library,
  Gift,
  Megaphone,
  FileText,
  UserPlus,
  DollarSign,
  Building2,
  CreditCard,
  ArrowRight
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
  const goToPrevious = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <div 
      className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div className="relative h-full w-full">
            {slides[currentSlide].image ? (
              <>
                <img 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              </>
            ) : (
              <div className="bg-gradient-to-br from-[#2b347c] via-[#1a2d6b] to-[#0f1a4d] h-full w-full" />
            )}
            
            <div className="absolute inset-0 flex items-center justify-center px-8 md:px-16">
              <div className="text-center max-w-4xl">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                    {slides[currentSlide].title}
                  </h1>
                </motion.div>
                {slides[currentSlide].description && (
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed drop-shadow-md"
                  >
                    {slides[currentSlide].description}
                  </motion.p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group z-10"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group z-10"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {showDots && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Image Card Component
const ImageCard = ({ image, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
  >
    <div className="relative h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    {(title || description) && (
      <div className="p-6">
        {title && <h3 className="text-xl font-bold text-[#2b347c] mb-2">{title}</h3>}
        {description && <p className="text-gray-600">{description}</p>}
      </div>
    )}
  </motion.div>
);

// Feature Card
const FeatureCard = ({ icon: Icon, title, description, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      className="relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#2b347c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      <div className="relative">
        <motion.div
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 bg-gradient-to-br from-[#2b347c] to-[#1a2d6b] rounded-2xl flex items-center justify-center mb-6 shadow-lg"
        >
          <Icon className="text-white w-8 h-8" />
        </motion.div>
        <h3 className="text-2xl font-bold text-[#2b347c] mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
        {link && (
          <Link to={link} className="text-[#2b347c] font-semibold hover:underline inline-flex items-center gap-1">
            Learn More <ArrowRight className="w-4 h-4" />
          </Link>
        )}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          className="h-1 bg-gradient-to-r from-[#2b347c] to-[#1a2d6b] mt-4 rounded-full"
        />
      </div>
    </motion.div>
  );
};

// Function Group Card
const FunctionGroupCard = ({ title, description, link, icon: Icon, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#2b347c] to-[#1a2d6b] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      
      <div className="relative h-56 overflow-hidden">
        {image ? (
          <>
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </>
        ) : (
          <div className="bg-gradient-to-br from-[#2b347c] to-[#1a2d6b] h-full flex items-center justify-center">
            <Icon className="text-white w-20 h-20" />
          </div>
        )}
      </div>
      
      <div className="relative p-6 group-hover:text-white transition-colors duration-300 z-20">
        <h3 className="text-2xl font-bold text-[#2b347c] group-hover:text-white mb-3 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 group-hover:text-white/90 mb-6 transition-colors duration-300">{description}</p>
        <Link 
          to={link}
          className="inline-flex items-center gap-2 text-[#2b347c] group-hover:text-white font-semibold transition-colors duration-300"
        >
          <motion.span whileHover={{ x: 5 }} className="flex items-center gap-2">
            Explore Group
            <ChevronRight className="w-4 h-4" />
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
};

// Stats Counter
const StatCounter = ({ end, label, icon: Icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-4">
        <Icon className="w-10 h-10 text-white" />
      </div>
      <div className="text-5xl font-bold text-white mb-2">{count.toLocaleString()}+</div>
      <div className="text-white/80 text-lg">{label}</div>
    </motion.div>
  );
};

// Social Icon
const SocialIcon = ({ icon: Icon, platform }) => (
  <motion.a
    href="#"
    whileHover={{ scale: 1.15, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
    className="w-14 h-14 bg-gradient-to-br from-[#2b347c] to-[#1a2d6b] hover:from-[#1a2d6b] hover:to-[#0f1a4d] rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-xl"
    title={platform}
  >
    <Icon size={24} />
  </motion.a>
);

function Home() {
  // Hero Slides with actual images
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

  // Function Groups with images
  const functionGroups = [
    {
      title: "Literacy Material Development",
      description: "Creating innovative educational materials tailored for diverse community needs.",
      link: "/literacy-material-development",
      icon: FileText,
      image: "/images/MaterialDev.jpeg"
    },
    {
      title: "Literacy Material Donation",
      description: "Ensuring quality books and resources reach every child in underserved areas.",
      link: "/literacy-material-donation",
      icon: Gift,
      image: "/images/MaterialDon.jpeg"
    },
    {
      title: "Literacy Development",
      description: "Empowering communities through trained facilitators who bring literacy programs to life.",
      link: "/literacy-development",
      icon: GraduationCap,
      image: "/images/LitDev.jpeg"
    },
    {
      title: "Library Functionality",
      description: "Establishing sustainable library systems in homes and communities for lasting impact.",
      link: "/literacy-hub-functionality",
      icon: Library,
      image: "/images/LitHub.jpeg"
    },
    {
      title: "Literacy Promotion",
      description: "Inspiring a culture of reading through creative campaigns and community engagement.",
      link: "/literacy-promotion",
      icon: Megaphone,
      image: "/images/LitPromo.jpeg"
    }
  ];

  // Impact Gallery
  const impactGallery = [
    { image: "/images/Kelebogile.JPG", title: "Kelebogile's Journey", description: "From struggling reader to literacy champion" },
    { image: "/images/LibFun.JPG", title: "Library Joy", description: "Community libraries bringing learning to life" },
    { image: "/images/GetInvolved.JPG", title: "Get Involved", description: "Join our mission to transform literacy" },
    { image: "/images/Reading.jpg", title: "Reading Time", description: "Children discovering the joy of books" },
    { image: "/images/LiteracyNest.jpg", title: "Literacy Nest", description: "Creating cozy reading spaces" },
    { image: "/images/Kgalalelo.JPG", title: "Community Impact", description: "Transforming communities through literacy" },
    { image: "/images/Gomotsanang.JPG", title: "Youth Programs", description: "Empowering young readers" },
    { image: "/images/Amasio.JPG", title: "Amasio Project", description: "Bringing books to rural areas" },
    { image: "/images/BackToSchool.jpg", title: "Back to School", description: "Supporting education initiatives" }
  ];

  // Team Members
  const teamHighlights = [
    { image: "/images/BWTeam.jpg", title: "Book World Team", description: "Our passionate team driving change" },
    { image: "/images/MrMoteane.JPG", title: "Leadership", description: "Guiding our mission with vision" },
    { image: "/images/MrRangaka.JPG", title: "Field Team", description: "Working directly with communities" },
    { image: "/images/MsMakoloko.JPG", title: "Program Coordinators", description: "Managing literacy initiatives" },
    { image: "/images/Petronella.JPG", title: "Community Liaisons", description: "Connecting with local builders" },
    { image: "/images/Rosa.JPG", title: "Training Specialists", description: "Empowering literacy facilitators" }
  ];

  // Activities & Events
  const activitiesSlides = [
    { image: "/images/BlindDateWithABook.png", title: "Blind Date with a Book", description: "Creative reading promotion event" },
    { image: "/images/WorldReadAloudCPT.jpg", title: "World Read Aloud Day", description: "Celebrating reading together" },
    { image: "/images/WRA05.jpg", title: "Reading Celebrations", description: "Community reading events" },
    { image: "/images/WRAD.jpg", title: "World Read Aloud", description: "Global literacy celebration" },
    { image: "/images/bookOpening.gif", title: "Library Openings", description: "New literacy hubs launched" },
    { image: "/images/LunFriends.jpg", title: "Reading Friends", description: "Building literacy partnerships" }
  ];

  // Research & Development
  const researchAreas = [
    {
      title: "Community Needs Assessment",
      description: "Understanding unique literacy challenges in VTSDs through comprehensive data collection.",
      icon: Target
    },
    {
      title: "Program Impact Studies",
      description: "Measuring effectiveness of interventions and continuously improving our approach.",
      icon: TrendingUp
    },
    {
      title: "Best Practices Research",
      description: "Identifying and documenting successful literacy development strategies.",
      icon: Lightbulb
    }
  ];

  // Training Programs
  const trainingPrograms = [
    {
      title: "Literacy Facilitator Training",
      description: "Comprehensive program preparing community members to deliver effective literacy instruction.",
      icon: School,
      image: "/images/LiteracyFascilitators.jpg"
    },
    {
      title: "Library Management",
      description: "Training on organizing, maintaining, and maximizing community library resources.",
      icon: Library,
      image: "/images/LibFun.JPG"
    },
    {
      title: "Reading Promotion",
      description: "Techniques for inspiring children and families to embrace reading as a lifestyle.",
      icon: BookOpen,
      image: "/images/ReadingPromotion.jpg"
    }
  ];

  // Ways to Give
  const givingOptions = [
    {
      title: "One-Time Donation",
      description: "Make an immediate impact with a single contribution to support literacy programs.",
      icon: DollarSign,
      link: "/donate"
    },
    {
      title: "Monthly Giving",
      description: "Provide sustained support through regular monthly contributions.",
      icon: CreditCard,
      link: "/subscription-giving"
    },
    {
      title: "Workplace Giving",
      description: "Partner with us through corporate social responsibility programs.",
      icon: Building2,
      link: "/workplace-giving"
    },
    {
      title: "Become a Member",
      description: "Join our community as a member and be part of our literacy movement.",
      icon: UserPlus,
      link: "/membership"
    }
  ];

  const socialPlatforms = [
    { icon: Facebook, platform: "Facebook" },
    { icon: MessageCircle, platform: "WhatsApp" },
    { icon: Twitter, platform: "Twitter" },
    { icon: Youtube, platform: "YouTube" },
    { icon: Instagram, platform: "Instagram" },
    { icon: Linkedin, platform: "LinkedIn" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.div
        className="relative h-[700px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto h-full px-6">
          <EnhancedCarousel slides={heroSlides} />
        </div>
      </motion.div>

      {/* Stats Section */}
      <section className="relative -mt-20 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#2b347c] to-[#1a2d6b] rounded-3xl shadow-2xl p-12"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <StatCounter end={50} label="Communities Served" icon={Users} />
              <StatCounter end={14000} label="Books Distributed" icon={BookOpen} />
              <StatCounter end={7500} label="Children Impacted" icon={Heart} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <img src="/images/MissionStatement.jpg" alt="Mission Statement" className="w-full rounded-2xl shadow-2xl mb-12" />
          </div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#2b347c]/10 px-6 py-3 rounded-full mb-6"
          >
            <Sparkles className="w-5 h-5 text-[#2b347c]" />
            <span className="text-[#2b347c] font-semibold">Who We Are</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#2b347c] mb-8">Our Mission</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
            Book World is dedicated to ensuring that the world's most vulnerable children have access to literacy materials 
            and the opportunity to acquire literacy skills to reach their full potential.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We work hand-in-hand with trusted local community builders in Villages, Towns & Small Dorpies (VTSDs) 
            to help communities organize, eradicate illiteracy, and build literate communities.
          </p>
          <div className="mt-8">
            <Link to="/about" className="inline-flex items-center gap-2 text-[#2b347c] font-semibold text-lg hover:underline">
              Read Our Full Story <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* About Section with Images */}
      <section className="container mx-auto px-6 py-16 bg-gray-50">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <img src="/images/About.jpg" alt="About Us" className="w-full h-full object-cover rounded-xl shadow-lg" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1"
          >
            <img src="/images/AboutUs.jpg" alt="Our Story" className="w-full h-full object-cover rounded-xl shadow-lg" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1"
          >
            <img src="/images/Litfac.JPG" alt="Literacy Facilitators" className="w-full h-full object-cover rounded-xl shadow-lg" />
          </motion.div>
        </div>
      </section>

      {/* Function Groups */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#2b347c] mb-6">Our Function Groups</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            Five interconnected pillars working together to create comprehensive literacy solutions.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center mb-12">
            <Link to="/donate">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(43,52,124,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-[#2b347c] to-[#1a2d6b] text-white rounded-full text-lg hover:shadow-2xl transition-all font-bold"
              >
                DONATE NOW
              </motion.button>
            </Link>
            <Link to="/volunteer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-[#2b347c] border-3 border-[#2b347c] rounded-full text-lg hover:bg-[#2b347c] hover:text-white transition-all font-bold shadow-lg"
              >
                VOLUNTEER NOW
              </motion.button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {functionGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <FunctionGroupCard {...group} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Impact Gallery */}
      <section className="container mx-auto px-6 py-24 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#2b347c] mb-6">Our Impact</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            See the real difference we're making in communities across South Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {impactGallery.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <ImageCard {...item} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Activities & Events */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-[#2b347c] mb-6">Activities & Events</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            Join us in celebrating literacy through engaging community events and creative initiatives.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto h-[500px]">
          <EnhancedCarousel slides={activitiesSlides} interval={5000} />
        </div>

        <div className="text-center mt-12">
          <Link to="/calendar" className="inline-flex items-center gap-2 text-[#2b347c] font-semibold text-lg hover:underline">
            View Event Calendar <Calendar className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Research Section */}
      <section className="container mx-auto px-6 py-24 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#2b347c] mb-6">Research & Development</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We take research seriously, using data-driven approaches to ensure our programs are relevant and successful.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <FeatureCard {...area} link="/research" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Training Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#2b347c] mb-6">Training Programs</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Empowering community members with skills and knowledge to become literacy champions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trainingPrograms.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {program.image && (
                  <div className="h-48 overflow-hidden">
                    <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-6">
                  <div className="w-12 h-12 bg-[#2b347c]/10 rounded-full flex items-center justify-center mb-4">
                    <program.icon className="text-[#2b347c] w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2b347c] mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <Link to="/training" className="text-[#2b347c] font-semibold hover:underline inline-flex items-center gap-1">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 py-24 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#2b347c] mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Passionate individuals driving literacy transformation across South Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {teamHighlights.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ImageCard {...member} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/about" className="inline-flex items-center gap-2 text-[#2b347c] font-semibold text-lg hover:underline">
            Meet the Full Team <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Why Book World */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#2b347c] mb-6">Why Book World</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We combine research, community partnership, and holistic solutions for lasting impact.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <FeatureCard
            icon={Target}
            title="Data-Driven Approach"
            description="We take research seriously, using strategic, evidence-based methods to ensure our programs deliver measurable results and lasting change."
            link="/research"
          />
          <FeatureCard
            icon={Users}
            title="Community Partnership"
            description="Working alongside passionate local leaders who deeply understand their communities' unique needs and aspirations."
            link="/about"
          />
          <FeatureCard
            icon={Heart}
            title="Holistic Solutions"
            description="Every child's journey is unique. Our comprehensive approach addresses materials, development, and lifestyle for complete transformation."
            link="/function-groups"
          />
        </div>
      </section>

      {/* Ways to Give */}
      <section className="container mx-auto px-6 py-24 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#2b347c] mb-6">Ways to Give</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Support our mission and help us bring literacy to every child in South Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {givingOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={option.link}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#2b347c] to-[#1a2d6b] rounded-full flex items-center justify-center mb-4">
                    <option.icon className="text-white w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2b347c] mb-2">{option.title}</h3>
                  <p className="text-gray-600 text-sm">{option.description}</p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Get Involved */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src="/images/GetInvolved.JPG" alt="Get Involved" className="w-full rounded-2xl shadow-2xl" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2b347c] mb-6">Get Involved</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Join our movement to transform literacy across South Africa. Whether through volunteering, 
              donating, or partnering with us, your involvement makes a real difference.
            </p>
            <div className="space-y-4">
              <Link to="/volunteer">
                <motion.button
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="w-full px-6 py-3 bg-[#2b347c] text-white rounded-lg hover:bg-[#1a2d6b] transition-all font-semibold text-left flex items-center justify-between"
                >
                  <span>Become a Volunteer</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/donate">
                <motion.button
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="w-full px-6 py-3 bg-white text-[#2b347c] border-2 border-[#2b347c] rounded-lg hover:bg-[#2b347c] hover:text-white transition-all font-semibold text-left flex items-center justify-between"
                >
                  <span>Make a Donation</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/get-involved">
                <motion.button
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="w-full px-6 py-3 bg-white text-[#2b347c] border-2 border-[#2b347c] rounded-lg hover:bg-[#2b347c] hover:text-white transition-all font-semibold text-left flex items-center justify-between"
                >
                  <span>Explore More Ways</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media & Connect */}
      <section className="container mx-auto px-6 py-24 bg-gray-50">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2b347c] mb-8">Connect With Us</h2>
          
          <div className="flex gap-6 justify-center mb-10">
            {socialPlatforms.map((social, index) => (
              <motion.div
                key={social.platform}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
              >
                <SocialIcon {...social} />
              </motion.div>
            ))}
          </div>
          
          <p className="text-gray-600 text-lg mb-8">Follow us for inspiring stories and ways to make a difference!</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-gradient-to-br from-[#2b347c] to-[#1a2d6b] p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
              <p className="mb-8 text-white/90">
                Have questions or want to learn more about our work? We'd love to hear from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6" />
                  <span>info@bookworld.org.za</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  <span>+27 XX XXX XXXX</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6" />
                  <span>South Africa</span>
                </div>
              </div>
            </div>
            <div className="p-12">
              <h4 className="text-2xl font-bold text-[#2b347c] mb-6">Send us a message</h4>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#2b347c] to-[#1a2d6b] text-white rounded-lg hover:shadow-xl transition-all font-semibold flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Go to Contact Page
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2b347c] via-[#1a2d6b] to-[#0f1a4d] text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block mb-8"
            >
              <Award className="w-20 h-20 text-yellow-400" />
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">Join Us In Rewriting the Future</h2>
            <p className="text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
              Together we can make literacy a legacy and a lifestyle for every South African child.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/donate">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 bg-white text-[#2b347c] rounded-full text-lg hover:bg-yellow-400 transition-all font-bold shadow-xl"
                >
                  Support Our Mission
                </motion.button>
              </Link>
              <Link to="/get-involved">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 bg-transparent border-3 border-white text-white rounded-full text-lg hover:bg-white hover:text-[#2b347c] transition-all font-bold"
                >
                  Get Involved Today
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;