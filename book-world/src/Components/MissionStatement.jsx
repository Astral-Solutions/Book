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
    <div className="container mx-auto px-4 sm:px-6 py-12">
      <Helmet>
        <title>Mission Statement | Book World</title>
        <meta
          name="description"
          content="Discover the mission of Book World, focusing on literacy development, youth empowerment, and creating a culture of reading."
        />
      </Helmet>

      {/* Header Section */}
      <header className="text-center mb-12">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-[#2b347c] mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Mission – Unlocking Potential Through Literacy
        </motion.h1>
        <motion.img
          src="/images/MissionStatement.jpg"
          alt="Book World Stakeholders"
          loading="lazy"
          className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover shadow-lg border-4 border-white rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.p
          className="text-base sm:text-lg text-gray-700 mt-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          "Our mission is to provide access to books, promote a reading culture, and equip youth with literacy skills for a lifetime."
        </motion.p>
      </header>

      {/* Core Objectives Section */}
      <section className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#2b347c] mb-6 text-center">
          Core Objectives
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreObjectives.map((objective, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-4xl sm:text-5xl text-[#2b347c] mb-4">{objective.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#2b347c] mb-2">
                {objective.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{objective.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision Section */}
      <section className="text-center mt-12">
        <motion.h2 className="text-2xl sm:text-3xl font-semibold text-[#2b347c] mb-4" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          Our Vision
        </motion.h2>
        <motion.p className="text-gray-700 text-base sm:text-lg" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          "A world where every child grows up surrounded by books, inspired to learn, and empowered to achieve their dreams."
        </motion.p>
      </section>
    </div>
  );
}

export default MissionStatement;
