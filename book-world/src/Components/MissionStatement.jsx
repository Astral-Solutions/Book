import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

function MissionStatement() {
  const coreObjectives = [
    {
      title: "Early Literacy Development",
      description:
        "Facilitate foundational reading and writing skills in children aged 0–16 and promote cognitive development starting 20 weeks before birth.",
      icon: "📖",
    },
    {
      title: "Book Access for All",
      description:
        "Donate books to underserved communities, ensuring every child owns 50 books by age 5 and provide books in all 11 official languages of South Africa.",
      icon: "📚",
    },
    {
      title: "Empowering Youth",
      description:
        "Train unemployed youth as literacy facilitators and establish Literature Clubs to create vibrant reading communities.",
      icon: "🌟",
    },
    {
      title: "Promoting Reading as a Lifestyle",
      description:
        "Help children develop a lifelong love for books and advocate for reading awareness through digital and traditional media campaigns.",
      icon: "📢",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <Helmet>
        <title>Mission Statement | Book World</title>
        <meta
          name="description"
          content="Discover the mission of Book World, focusing on literacy development, youth empowerment, and creating a culture of reading."
        />
        <meta
          name="keywords"
          content="Book World Mission, Literacy Development, Empowering Youth, Reading Culture, Book Donations"
        />
      </Helmet>

      {/* Header Section */}
      <header className="text-center mb-12">
        <motion.h1
          className="text-4xl font-bold text-[#2b347c] mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Mission – Unlocking Potential Through Literacy
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          "Our mission is to provide access to books, promote a reading culture, and equip youth with literacy skills for a lifetime. By
          creating book-rich environments and empowering communities, we aim to ensure that every child, regardless of their circumstances, has
          the chance to succeed through literacy."
        </motion.p>
      </header>

      {/* Core Objectives Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-[#2b347c] mb-6 text-center">
          Core Objectives
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreObjectives.map((objective, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-5xl text-[#2b347c] mb-4">{objective.icon}</div>
              <h3 className="text-xl font-semibold text-[#2b347c] mb-2">
                {objective.title}
              </h3>
              <p className="text-gray-600">{objective.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision Section */}
      <section className="text-center mt-12">
        <motion.h2
          className="text-3xl font-semibold text-[#2b347c] mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Vision
        </motion.h2>
        <motion.p
          className="text-gray-700 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          "A world where every child grows up surrounded by books, inspired to learn, and empowered to achieve their dreams."
        </motion.p>
      </section>

      {/* What Drives Us Section */}
      <section className="text-center mt-12">
        <motion.h2
          className="text-3xl font-semibold text-[#2b347c] mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Drives Us
        </motion.h2>
        <motion.p
          className="text-gray-700 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          "We believe that through literacy, we can shape not only individual futures but also the future of entire communities. Every book
          donated, every child engaged, and every facilitator trained brings us closer to a literate and empowered South Africa."
        </motion.p>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mt-12">
        <motion.h2
          className="text-2xl font-semibold text-[#2b347c] mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let’s Turn the Page on Illiteracy
        </motion.h2>
        <motion.p
          className="text-gray-700 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          "Join us in creating a brighter future, one book at a time."
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="px-8 py-3 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition-colors">
            Partner With Us
          </button>
          <button className="px-8 py-3 bg-[#1a2d6b] text-white rounded-full hover:bg-[#0f214e] transition-colors">
            Get Involved Today
          </button>
        </motion.div>
      </section>
    </div>
  );
}

export default MissionStatement;
