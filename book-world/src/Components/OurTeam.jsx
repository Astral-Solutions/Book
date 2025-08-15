import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";

const TeamMember = ({ name, role, image, description, contact, delay = 0 }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -5 }}
  >
    <div className="h-64 bg-gradient-to-br from-[#2b347c] to-[#1a2d6b] flex items-center justify-center">
      {image ? (
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center text-white text-3xl font-bold">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
      )}
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-bold text-[#2b347c] mb-2">{name}</h3>
      <p className="text-[#2b347c] font-semibold mb-3">{role}</p>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>
      
      {contact && (
        <div className="flex gap-3">
          {contact.email && (
            <a 
              href={`mailto:${contact.email}`} 
              className="text-[#2b347c] hover:text-[#1a2d6b] transition-colors"
            >
              <Mail size={18} />
            </a>
          )}
          {contact.phone && (
            <a 
              href={`tel:${contact.phone}`} 
              className="text-[#2b347c] hover:text-[#1a2d6b] transition-colors"
            >
              <Phone size={18} />
            </a>
          )}
          {contact.linkedin && (
            <a 
              href={contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#2b347c] hover:text-[#1a2d6b] transition-colors"
            >
              <Linkedin size={18} />
            </a>
          )}
        </div>
      )}
    </div>
  </motion.div>
);

function OurTeam() {
  const executiveTeam = [
    {
      name: "Kagiso Rangaka",
      role: "Managing Director",
      image: "/images/team/kagiso-rangaka.jpg",
      description: "Founder and visionary leader of Book World. Kagiso established the organization in 2019 after extensive research revealed South Africa's literacy crisis. His passion for early childhood development and sustainable community solutions drives Book World's mission.",
      contact: {
        email: "kagiso@bookworld.org.za",
        phone: "+27 63 928 9634"
      }
    },
    {
      name: "Katlego Makoloko", 
      role: "Operations Manager",
      image: "/images/team/katlego-makoloko.jpg",
      description: "Co-director and operations expert ensuring smooth implementation of all Book World programs. Katlego's strategic approach and commitment to excellence has been instrumental in the organization's growth since 2021.",
      contact: {
        email: "katlego@bookworld.org.za"
      }
    }
  ];

  const managementTeam = [
    {
      name: "Kelebogile Mageza",
      role: "Administrator", 
      description: "Handles administrative operations and ensures smooth day-to-day functioning of all Book World activities and programs."
    },
    {
      name: "Katlego Moteane",
      role: "Logistics Manager",
      description: "Manages logistics for book donations, event coordination, and distribution of literacy materials across communities."
    },
    {
      name: "Nkosinathi Milanzi",
      role: "Communications & Development Manager", 
      description: "Leads communication strategies, partnership development, and public relations. Champions the message: 'Join us in rewriting the future for SA children.'"
    }
  ];

  const functionGroupLeads = [
    {
      name: "Karabo Mosimane",
      role: "Literacy Material Development Lead",
      description: "Leads the development of innovative literacy materials, working with researchers, creatives, and developers to create resources that enhance language arts skills."
    },
    {
      name: "Rosa Tamele", 
      role: "Literacy Material Donation Lead",
      description: "Manages donation programs ensuring every child has access to quality books and learning materials in underserved communities."
    },
    {
      name: "Kgalalelo Ndlovu",
      role: "Literacy Development Lead", 
      description: "Oversees literacy facilitation programs and training, focusing on early childhood development and youth literacy skills."
    },
    {
      name: "Amasio Sikuava",
      role: "Library Functionality Lead",
      description: "Develops and manages library programs, helping communities establish reading spaces and improve access to Library & Information Services."
    },
    {
      name: "Gomotsanang Mogomotsi",
      role: "Literacy Promotion Lead",
      description: "Champions literacy lifestyle promotion through traditional and digital media campaigns, advocacy, and community engagement programs."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Our Team | Meet the Book World Leadership</title>
        <meta
          name="description"
          content="Meet the dedicated team behind Book World - passionate leaders, managers, and specialists working together to transform South Africa's literacy landscape."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2b347c] to-[#1a2d6b] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            MEET THE TEAM
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our dedicated team of professionals, volunteers, and specialists working together 
            to make literacy a legacy and lifestyle for South African children.
          </motion.p>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#2b347c] mb-4">Executive Leadership</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            From 2021, our founders committed themselves to setting up respectable teams across 
            provinces to implement challenging and extensive projects with outstanding and loyal coworkers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {executiveTeam.map((member, index) => (
            <TeamMember key={member.name} {...member} delay={index * 0.1} />
          ))}
        </div>
      </section>

      {/* Management Team */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#2b347c] mb-4">Management Team</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our management team ensures efficient operations, effective communication, and 
              seamless coordination of all Book World programs and initiatives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {managementTeam.map((member, index) => (
              <TeamMember key={member.name} {...member} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Function Group Leads */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#2b347c] mb-4">Function Group Leaders</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Our five function group leaders each specialize in core areas of literacy development, 
            ensuring comprehensive and effective solutions for communities across South Africa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {functionGroupLeads.map((member, index) => (
            <TeamMember key={member.name} {...member} delay={index * 0.1} />
          ))}
        </div>
      </section>

      {/* Team Values & Culture */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#2b347c] mb-4">Our Team Values</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-[#2b347c] mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe large goals can only be achieved together through networking 
                and working closely with all stakeholders.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-[#2b347c] mb-3">Excellence</h3>
              <p className="text-gray-600">
                We take research & development seriously, using data-driven approaches 
                to ensure our programs are relevant and successful.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-[#2b347c] mb-3">Sustainability</h3>
              <p className="text-gray-600">
                Sustainable development is only possible when all parties involved 
                have the same goal in mind and work together.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="bg-gradient-to-r from-[#2b347c] to-[#1a2d6b] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our commitment to shaping the future of South Africa's children is demonstrated by 
              a group of volunteers and professionals who commit their skills, time and knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="px-8 py-3 bg-white text-[#2b347c] rounded-full hover:bg-gray-100 transition-colors font-semibold"
              >
                View Careers
              </a>
              <a
                href="/volunteer"
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-[#2b347c] transition-colors font-semibold"
              >
                Volunteer With Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default OurTeam;