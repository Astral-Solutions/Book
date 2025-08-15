import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Users, Target, Award, Calendar, MapPin } from "lucide-react";

function About() {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const milestones = [
    {
      year: "2017",
      event: "DrLetMeTalkPen&Paper begins extensive research on book reading habits, literacy levels and book buying trends in South Africa.",
      details: "Research findings revealed poor and low numbers across all three research angles, attributed to delayed early childhood literacy development.",
      icon: "🔍",
    },
    {
      year: "2019", 
      event: "Book World was founded by Kagiso Rangaka with the mission to respond to South Africa's literacy crisis wholistically.",
      details: "Established as a non-profit organization to implement literacy solutions beyond conventional approaches, focusing on Villages Towns & Small Dorpies (VTSDs).",
      icon: "🌱",
    },
    {
      year: "2021",
      event: "First board members inaugurated at Royal Bafokeng Enterprise Development in Phokeng, Rustenburg on 09 December 2021.",
      details: "Official establishment of governance structure and launch of comprehensive Book World District Development Plan Model (BWDDPM).",
      icon: "🏛️",
    },
    {
      year: "2022",
      event: "Marothodi Heritage Festival Project launched under Presidential Employment Stimulus Programme (PESP3).",
      details: "Created Income Earning Opportunities (IEOs) for 229 unemployed youth, supported 204 artists, and worked with 12 Community Art Centres.",
      icon: "🎨",
    },
    {
      year: "2023", 
      event: "Literacy Facilitator Project deployed across North West and Mpumalanga provinces.",
      details: "Trained and deployed literacy facilitators to improve literacy skills of at-risk learners in underserved communities.",
      icon: "👩‍🏫",
    },
    {
      year: "2024",
      event: "Expanded reach to 1,300 learners with comprehensive literacy status quo studies and improvement programs.",
      details: "Implemented 16-week literacy facilitation programs with 44 literacy facilitators at 1:30 ratio across multiple sites.",
      icon: "📊",
    },
  ];

  const foundingPrinciples = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Book World Edutainment Station",
      description: "Creating, establishing, protecting and preserving stations where underserved communities visit to forge their literacy skills and hone the lifestyle."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Engagement",
      description: "Hosting talks around critical issues relating to literacy material development, donation, development, library functionality and promotion."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Literacy Activities",
      description: "Promoting and engaging in literacy activities, including talks regarding issues pertaining to literacy development."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Fundraising & Support",
      description: "Raising funds and providing support services to promote the common interests of members and communities."
    }
  ];

  const teamMembers = [
    {
      name: "Kagiso Rangaka",
      position: "Managing Director & Founder",
      initials: "KR",
      description: "Founded Book World in 2019 after extensive research revealed South Africa's literacy crisis. Former book publisher with experience in Rustenburg, Bojanala District."
    },
    {
      name: "Katlego Makoloko",
      position: "Operations Manager",
      initials: "KM",
      description: "Co-leads strategic implementation across provinces to deliver challenging and extensive literacy projects."
    },
    {
      name: "Kelebogile Mageza",
      position: "Administrator",
      initials: "KMa",
      description: "Manages administrative operations and organizational coordination."
    },
    {
      name: "Katlego Moteane",
      position: "Logistics Manager",
      initials: "KMo",
      description: "Oversees logistics and operational delivery of programs and projects."
    },
    {
      name: "Nkosinathi Milanzi",
      position: "Communications & Development Manager",
      initials: "NM",
      description: "Leads communications strategy and organizational development initiatives."
    },
    {
      name: "Karabo Mosimane",
      position: "Literacy Material Development Lead",
      initials: "KMs",
      description: "Heads the development of innovative literacy materials and resources."
    },
    {
      name: "Rosa Tamele",
      position: "Literacy Material Donation Lead",
      initials: "RT",
      description: "Manages literacy material donation programs and distribution strategies."
    },
    {
      name: "Kgalalelo Ndlovu",
      position: "Literacy Development Lead",
      initials: "KN",
      description: "Leads literacy development programs and educational interventions."
    },
    {
      name: "Amasio Sikuava",
      position: "Library Functionality Lead",
      initials: "AS",
      description: "Oversees library functionality programs and information services."
    },
    {
      name: "Gomotsanang Mogomotsi",
      position: "Literacy Promotion Lead",
      initials: "GM",
      description: "Leads literacy promotion campaigns and awareness initiatives."
    }
  ];

  const handleMilestoneClick = (milestone) => {
    setSelectedMilestone(milestone);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-12 py-12">
      <Helmet>
        <title>About Book World | Our Story - Building a World of Readers</title>
        <meta
          name="description"
          content="Learn about Book World's journey from 2019, our mission to address South Africa's literacy crisis, and our comprehensive approach to literacy development in underserved communities."
        />
      </Helmet>

      {/* Hero Section */}
      <header className="text-center mb-16">
        <motion.h1
          className="text-5xl font-bold text-[#2b347c] mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          WHO WE ARE
        </motion.h1>
        <motion.p
          className="text-xl text-gray-700 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Book World is a non-profit company obsessing about literacy materials development, 
          literacy materials donation, literacy development, library functionality and literacy 
          promotion, founded by Kagiso Rangaka in 2019.
        </motion.p>
      </header>

      {/* Overview Section */}
      <section className="mb-16 bg-gray-50 rounded-lg p-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#2b347c] mb-6">Overview</h2>
            <p className="text-gray-700 mb-4">
              We are a group of Bookmen who commit to obsess about the literacy crisis that South Africa 
              is currently facing. Our well thought response to the crisis commits special focus to early 
              literacy, we are committed to the mission:
            </p>
            <blockquote className="text-lg font-semibold text-[#2b347c] border-l-4 border-[#2b347c] pl-4 mb-6">
              "To unite all the South Africans for the development of a literacy lifestyle amongst 
              South Africans in all ages starting with the first 1000 days after birth."
            </blockquote>
            <p className="text-gray-700">
              Part of the implementation and advancement of Book World's vision includes our special 
              focus on cognitive development programmes which start 20 weeks before birth.
            </p>
          </div>
          <div>
            <img
              src="/images/BookWorldTeam.JPG"
              alt="Book World Team"
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Mission, Vision & Approach */}
      <section className="mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-2xl font-bold text-[#2b347c] mb-4">Vision</h3>
            <p className="text-gray-700">
              A group of Bookmen who commit to obsess about literacy development and its lifestyle.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-2xl font-bold text-[#2b347c] mb-4">Mission</h3>
            <p className="text-gray-700">
              Our mission is to contribute to the making of a literate society by uniting South Africans 
              to develop literacy materials, donate them, forge literacy development, library functionality 
              and promote the literacy lifestyle.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-2xl font-bold text-[#2b347c] mb-4">Our Approach</h3>
            <p className="text-gray-700">
              We know that every child is different. We take research & development seriously, take 
              data-driven & strategic approach to ensure that our programmes & projects are relevant 
              and successful with all our 5 function groups.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Book World - Founder's Story */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[#2b347c] mb-8">About Book World</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <img
              src="/images/milestone2021.jpg"
              alt="Book World first board members inauguration"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
            <p className="text-sm text-gray-600 mt-2 text-center">
              On 09 December 2021, Book World first board members were inaugurated at Royal Bafokeng Enterprise Development in Phokeng, Rustenburg.
            </p>
          </div>
          
          <div>
            <p className="text-gray-700 mb-4">
              Book World was established in 2019 when its founder, Mr Kagiso Rangaka, was considering 
              how to respond to findings from extensive research conducted since 2017 on book reading 
              habits, literacy levels and book buying trends. The research presented poor & low numbers 
              across all three angles, attributed to delayed early childhood literacy development and lifestyle.
            </p>
            
            <p className="text-gray-700">
              DrLetMeTalkEdu developed an Early Childhood Development Programme (ECDLP) emphasizing 
              that early childhood is the most important phase for overall development throughout the 
              human lifespan. The programme suggests ways every child can have at least two years of 
              pre-school literacy education, aiming to eliminate illiteracy by 2030.
            </p>
          </div>
        </div>
        
        {/* Founder's Quote */}
        <blockquote className="bg-[#2b347c] text-white p-8 rounded-lg mb-8">
          <p className="text-lg mb-4">
            "My work as a book publisher in Rustenburg, Bojanala District, made a lasting impression on me. 
            However, I also experienced negative impressions about book reading habits, literacy levels and 
            book buying trends which recorded low levels across the three angles and the daily struggle for 
            children literature by the rural population in VTSDs in the province."
          </p>
          <p className="text-lg mb-4">
            "I was predominantly concerned with book famine, the question of what is needed to improve 
            the quality of early childhood literacy programming and literacy levels in the province."
          </p>
          <p className="text-lg">
            "Large goals can only be achieved together, which is why networking is indispensable. 
            Sustainable development is only possible if all parties involved work closely together 
            and have the same goal in mind."
          </p>
          <footer className="mt-4 font-semibold">- Kagiso Rangaka, Founder & Managing Director</footer>
        </blockquote>
      </section>

      {/* Founding Principles */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[#2b347c] mb-8">Founding Principles of Book World</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {foundingPrinciples.map((principle, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="text-[#2b347c] flex-shrink-0 mt-1">
                  {principle.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2b347c] mb-2">{principle.title}</h3>
                  <p className="text-gray-700">{principle.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Journey - Timeline */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[#2b347c] mb-8">Our Journey</h2>
        <p className="text-gray-700 mb-12 text-center max-w-4xl mx-auto">
          From research findings to comprehensive literacy solutions - trace Book World's evolution 
          from a response to South Africa's literacy crisis to a multi-faceted organization creating 
          sustainable impact across the country.
        </p>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#2b347c]"></div>
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="relative mb-12 ml-16 cursor-pointer"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleMilestoneClick(milestone)}
            >
              <div className="absolute -left-20 w-16 h-16 bg-[#2b347c] rounded-full flex items-center justify-center text-white text-2xl font-bold border-4 border-white shadow-lg">
                {milestone.year.slice(-2)}
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">{milestone.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2b347c] mb-1">{milestone.year}</h3>
                    <p className="text-gray-800 font-medium">{milestone.event}</p>
                  </div>
                </div>
                <p className="text-gray-600">{milestone.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16 bg-gray-50 rounded-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#2b347c] mb-4">Meet Our Team</h2>
          <p className="text-gray-700">
            From 2021, Kagiso Rangaka and Katlego Makoloko committed themselves to setting up 
            respectable teams across provinces to implement challenging and extensive projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.slice(0, 6).map((member, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-20 h-20 bg-[#2b347c] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                {member.initials}
              </div>
              <h3 className="text-lg font-semibold text-[#2b347c] mb-1">{member.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{member.position}</p>
              <p className="text-gray-700 text-sm">{member.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link
            to="/our-team"
            className="inline-block bg-[#2b347c] text-white px-6 py-3 rounded-full hover:bg-[#1a2d6b] transition-colors"
          >
            Meet Our Full Team
          </Link>
        </div>
      </section>

      {/* Our Impact Preview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[#2b347c] mb-8 text-center">Our Impact So Far</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-[#2b347c] mb-2">204</div>
            <p className="text-gray-600">Artists Supported</p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-[#2b347c] mb-2">229</div>
            <p className="text-gray-600">Youth Employment Opportunities</p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-[#2b347c] mb-2">1,300</div>
            <p className="text-gray-600">Learners Reached in 2024</p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-[#2b347c] mb-2">12</div>
            <p className="text-gray-600">Community Art Centres</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-gradient-to-r from-[#2b347c] to-[#1a2d6b] text-white p-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Join Us in Rewriting the Future</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          "Join us in rewriting the future for South African children. Together we can make literacy a legacy and a lifestyle." - N Milanzi
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/get-involved"
            className="px-8 py-3 bg-white text-[#2b347c] rounded-full hover:bg-gray-100 transition-colors font-semibold"
          >
            Get Involved
          </Link>
          <Link
            to="/our-work"
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-[#2b347c] transition-colors font-semibold"
          >
            See Our Work
          </Link>
        </div>
      </section>

      {/* Modal for milestone details */}
      {selectedMilestone && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedMilestone(null)}
        >
          <motion.div
            className="bg-white p-8 rounded-lg max-w-2xl w-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">{selectedMilestone.icon}</span>
              <h3 className="text-2xl font-bold text-[#2b347c]">{selectedMilestone.year}</h3>
            </div>
            <h4 className="text-xl font-semibold mb-4">{selectedMilestone.event}</h4>
            <p className="text-gray-700 mb-6">{selectedMilestone.details}</p>
            <button
              onClick={() => setSelectedMilestone(null)}
              className="bg-[#2b347c] text-white px-6 py-2 rounded-full hover:bg-[#1a2d6b] transition-colors"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default About;