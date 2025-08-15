import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Calendar, Target, Award, BookOpen, Music, Globe, Heart, Lightbulb, HandHeart, Building2, TrendingUp } from "lucide-react";

const ProjectCard = ({ project, index }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
  >
    <div className="h-64 bg-gradient-to-br from-[#2b347c] to-[#1a2d6b] flex items-center justify-center relative overflow-hidden">
      {project.image ? (
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="text-white">
          <project.icon size={64} />
        </div>
      )}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
        <div className="text-white">
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2 ${
            project.status === 'Active' ? 'bg-green-500/80' : 
            project.status === 'Development' ? 'bg-yellow-500/80' : 
            'bg-blue-500/80'
          }`}>
            {project.status}
          </span>
        </div>
      </div>
    </div>
    
    <div className="p-6">
      <h3 className="text-2xl font-bold text-[#2b347c] mb-3">{project.title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-sm text-gray-500">Beneficiaries</p>
          <p className="font-semibold text-[#2b347c]">{project.beneficiaries}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Duration</p>
          <p className="font-semibold text-[#2b347c]">{project.duration}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, i) => (
          <span 
            key={i} 
            className="px-3 py-1 bg-[#2b347c]/10 text-[#2b347c] rounded-full text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <Link
        to={project.link}
        className="inline-block w-full text-center bg-[#2b347c] text-white py-3 rounded-full hover:bg-[#1a2d6b] transition-colors font-semibold"
      >
        Learn More
      </Link>
    </div>
  </motion.div>
);

const ImpactStat = ({ number, label, icon: Icon }) => (
  <motion.div
    className="text-center"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="w-16 h-16 bg-[#2b347c]/10 rounded-full flex items-center justify-center mx-auto mb-3">
      <Icon className="text-[#2b347c] w-8 h-8" />
    </div>
    <div className="text-3xl font-bold text-[#2b347c] mb-2">{number}</div>
    <p className="text-gray-600">{label}</p>
  </motion.div>
);

const ProjectPhaseCard = ({ phase, index }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="w-8 h-8 bg-[#2b347c] text-white rounded-full flex items-center justify-center text-sm font-bold">
        {phase.number}
      </div>
      <h3 className="text-lg font-semibold text-[#2b347c]">{phase.title}</h3>
    </div>
    <p className="text-gray-600">{phase.description}</p>
  </motion.div>
);

const ComponentCard = ({ component }) => (
  <motion.div
    className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg shadow-lg border border-gray-100"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-[#2b347c]/10 rounded-lg flex items-center justify-center flex-shrink-0">
        <component.icon className="text-[#2b347c] w-6 h-6" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-[#2b347c] mb-2">{component.title}</h3>
        <p className="text-gray-600 leading-relaxed">{component.description}</p>
      </div>
    </div>
  </motion.div>
);

const FutureInitiativeCard = ({ initiative, index }) => (
  <motion.div
    className="bg-gradient-to-br from-[#2b347c]/5 to-[#1a2d6b]/5 p-6 rounded-lg border border-[#2b347c]/20"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
  >
    <div className="flex items-center gap-3 mb-3">
      <initiative.icon className="text-[#2b347c] w-8 h-8" />
      <h3 className="text-xl font-semibold text-[#2b347c]">{initiative.title}</h3>
    </div>
    <p className="text-gray-700 mb-3">{initiative.description}</p>
    <div className="flex justify-between items-center">
      <span className="text-sm font-medium text-[#2b347c] bg-[#2b347c]/10 px-3 py-1 rounded-full">
        {initiative.timeline}
      </span>
      <span className="text-sm text-gray-500">{initiative.scope}</span>
    </div>
  </motion.div>
);

function Projects() {
  const projects = [
    {
      title: "Marothodi Heritage Festival",
      description: "A comprehensive book-driven project that attracts multidiscipline art practitioners from local municipalities in underserved communities. Through book publication, dramatisation, music, dance, and visual arts, we promote book reading culture and create employment opportunities.",
      image: "/images/projects/marothodi-festival.jpg",
      status: "Active",
      beneficiaries: "867 audience members",
      duration: "Annual",
      tags: ["Arts", "Heritage", "Employment", "Book Culture", "Community"],
      link: "/projects/marothodi",
      icon: Music
    },
    {
      title: "Literacy Facilitator Program",
      description: "Deploying experienced literacy facilitators to Early Childhood Development Centres and Primary Schools to enable at-risk learners to improve their literacy skills across all language arts disciplines.",
      image: "/images/projects/literacy-facilitators.jpg", 
      status: "Ongoing",
      beneficiaries: "1,300 learners",
      duration: "16 weeks per cycle",
      tags: ["Literacy", "Education", "Early Childhood", "Training", "Rural Development"],
      link: "/projects/literacy-facilitator",
      icon: BookOpen
    },
    {
      title: "Book Donation Web (BookDoWeb)",
      description: "A comprehensive book donation platform that conducts interest surveys to identify what topics, subjects, and genres children enjoy, allowing for targeted book recommendations and donations.",
      image: "/images/projects/book-donation-web.jpg",
      status: "Development",
      beneficiaries: "2,360 learners",
      duration: "Ongoing",
      tags: ["Technology", "Book Donation", "Surveys", "Digital Platform"],
      link: "/projects/book-donation-web",
      icon: Globe
    },
    {
      title: "Early Childhood Literacy Development Programme (ECLDP)",
      description: "A comprehensive program emphasizing prenatal cognitive development (20 weeks before birth), emergent literacy (first 1000 days), and conventional literacy (4-8 years).",
      image: "/images/projects/early-childhood.jpg",
      status: "Active", 
      beneficiaries: "Multiple ECDs",
      duration: "Ongoing",
      tags: ["Early Childhood", "Cognitive Development", "Prenatal", "Literacy"],
      link: "/projects/early-childhood-literacy",
      icon: Users
    },
    {
      title: "Library Functionality Program",
      description: "Addressing challenges in accessing Library & Information Services (LIS) in rural areas through support, training opportunities, classroom library corners, and library design makeovers.",
      image: "/images/projects/library-functionality.jpg",
      status: "Active",
      beneficiaries: "Multiple communities",
      duration: "Ongoing",
      tags: ["Libraries", "Information Services", "Rural Access", "Design"],
      link: "/projects/library-functionality",
      icon: Target
    },
    {
      title: "Literacy Promotion Campaign",
      description: "Addressing South Africa's literacy crisis where 81% of Grade 4 learners can't read for meaning. Promoting literacy lifestyle through awareness campaigns and implementation solutions.",
      image: "/images/projects/literacy-promotion.jpg",
      status: "Active",
      beneficiaries: "General public",
      duration: "Ongoing",
      tags: ["Awareness", "Campaigns", "Lifestyle", "Media"],
      link: "/projects/literacy-promotion",
      icon: Heart
    }
  ];

  const impactStats = [
    { number: "204", label: "Artists Supported", icon: Users },
    { number: "229", label: "Youth Employment Opportunities", icon: Award },
    { number: "1,300", label: "Learners Reached (2024)", icon: BookOpen },
    { number: "12", label: "Community Art Centres", icon: Target },
    { number: "867", label: "Audience Members Reached", icon: Calendar },
    { number: "44", label: "Literacy Facilitators Deployed", icon: Users }
  ];

  const marothodi8Phases = [
    {
      number: 1,
      title: "Book Publish",
      description: "DrLetMeTalkPen&Paper releases the book that serves as the foundation for all subsequent phases."
    },
    {
      number: 2,
      title: "Book Launch Tour",
      description: "A series of tour events after the release of the book to introduce it to communities."
    },
    {
      number: 3,
      title: "Book Dramatisation",
      description: "All beneficiaries including Production Companies (YouthInDrama) create theatrical interpretations."
    },
    {
      number: 4,
      title: "Book Music Arrangements",
      description: "Song writers, vocalists and producers (YouthInMusic) create musical adaptations."
    },
    {
      number: 5,
      title: "Book Dance Choreography",
      description: "Dance groups (YouthInDance) develop choreographed performances based on the book."
    },
    {
      number: 6,
      title: "Book Visual Art Interpretation",
      description: "Individual visual artists (YouthInVisuals) create artistic interpretations and works."
    },
    {
      number: 7,
      title: "Expert Screening",
      description: "Generation X industry experts review and assess all work prior to Heritage Weekend."
    },
    {
      number: 8,
      title: "Marothodi Heritage Festival",
      description: "Heritage Weekend event presenting cultural celebration through drama, music, dance, and visual art over 3 days."
    }
  ];

  const literacyFacilitatorComponents = [
    {
      title: "Literacy & Literature Status Quo Study",
      description: "Investigation of 1,300 learners led by Literacy Specialists and Educational Psychologists to establish literacy levels and identify improvement paths.",
      icon: Target
    },
    {
      title: "Graded Reader & Notebook Distribution",
      description: "Distribution of bilingual reading books relevant to children's interests and reusable notebooks to establish love of books and reading.",
      icon: BookOpen
    },
    {
      title: "16 Week Literacy Facilitation",
      description: "Deploy 44 Literacy Facilitators at 1:30 ratio for 16 weeks to enable at-risk children to improve literacy levels and succeed in school.",
      icon: Users
    }
  ];

  const futureInitiatives = [
    {
      title: "Digital Library Expansion",
      description: "Expanding our digital library platform to reach remote communities with limited physical library access.",
      timeline: "2025 Q2",
      scope: "National",
      icon: Globe
    },
    {
      title: "Teacher Training Certification",
      description: "Developing certified training programs for educators to become literacy facilitators in their communities.",
      timeline: "2025 Q3",
      scope: "Provincial",
      icon: Award
    },
    {
      title: "Mobile Library Initiative",
      description: "Launching mobile library units to serve rural communities with limited access to reading materials.",
      timeline: "2025 Q4",
      scope: "Regional",
      icon: Target
    },
    {
      title: "Corporate Partnership Program",
      description: "Building strategic partnerships with corporations to fund and support literacy initiatives at scale.",
      timeline: "2025 Q1",
      scope: "National",
      icon: HandHeart
    }
  ];

  const partnerships = [
    {
      name: "Department of Arts & Culture",
      type: "Government Partner",
      contribution: "Funding & Policy Support"
    },
    {
      name: "Local Municipalities",
      type: "Community Partner", 
      contribution: "Venue & Community Access"
    },
    {
      name: "Educational Institutions",
      type: "Academic Partner",
      contribution: "Research & Expertise"
    },
    {
      name: "Private Foundations",
      type: "Funding Partner",
      contribution: "Financial Support"
    }
  ];

  const projectApproach = [
    {
      step: "Community Assessment",
      description: "Comprehensive evaluation of local needs, resources, and challenges to tailor our interventions."
    },
    {
      step: "Stakeholder Engagement",
      description: "Building partnerships with local leaders, educators, and community members for sustainable impact."
    },
    {
      step: "Program Implementation",
      description: "Executing evidence-based interventions with continuous monitoring and adaptation."
    },
    {
      step: "Impact Measurement",
      description: "Rigorous evaluation of outcomes to ensure effectiveness and inform future programming."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Our Projects - DrLetMeTalkPen&Paper</title>
        <meta name="description" content="Explore our comprehensive literacy and arts projects making a difference in South African communities." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2b347c] to-[#1a2d6b] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Transforming communities through literacy, arts, and cultural preservation. 
              Discover how we're creating lasting change across South Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-center text-[#2b347c] mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Impact by Numbers
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {impactStats.map((stat, index) => (
              <ImpactStat key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Main Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-center text-[#2b347c] mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Current Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Marothodi 8 Phases */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#2b347c] mb-4">Marothodi Heritage Festival - 8 Phases</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our signature heritage festival follows a comprehensive 8-phase approach, 
              from book publication to the grand cultural celebration.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marothodi8Phases.map((phase, index) => (
              <ProjectPhaseCard key={index} phase={phase} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Literacy Facilitator Components */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#2b347c] mb-4">Literacy Facilitator Program Components</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our three-pronged approach to improving literacy outcomes through assessment, 
              resource distribution, and targeted facilitation.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {literacyFacilitatorComponents.map((component, index) => (
              <ComponentCard key={index} component={component} />
            ))}
          </div>
        </div>
      </section>

      {/* Project Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#2b347c] mb-4">Our Project Approach</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow a systematic, evidence-based approach to ensure maximum impact 
              and sustainable outcomes in all our interventions.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectApproach.map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-[#2b347c] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-[#2b347c] mb-2">{item.step}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Initiatives */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#2b347c] mb-4">Future Initiatives</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Looking ahead, we're expanding our reach and impact through innovative 
              programs and strategic partnerships.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {futureInitiatives.map((initiative, index) => (
              <FutureInitiativeCard key={index} initiative={initiative} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships & Funding */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#2b347c] mb-4">Our Partners</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Working together with government, communities, and private sector 
              to create lasting change.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-lg border border-gray-100 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Building2 className="text-[#2b347c] w-12 h-12 mx-auto mb-4" />
                <h3 className="font-semibold text-[#2b347c] mb-2">{partner.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{partner.type}</p>
                <p className="text-sm text-gray-600">{partner.contribution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#2b347c] to-[#1a2d6b] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Whether you're an individual, organization, or community leader, 
              there are many ways to support our literacy and arts initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-involved"
                className="bg-white text-[#2b347c] px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold"
              >
                Get Involved
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#2b347c] transition-all font-semibold"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Projects;