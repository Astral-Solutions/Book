import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  Lightbulb,
  PenTool,
  BookOpen,
  Library,
  MessageCircle,
  Briefcase,
  Presentation
} from "lucide-react";

function Training() {
  return (
    <div className="container mx-auto px-6 py-16">
      <motion.h1
        className="text-4xl font-bold text-[#2b347c] text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Training & Capacity Building
      </motion.h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
        We train unemployed youth, educators, and community leaders to become literacy champions, ensuring sustainable literacy development.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div className="p-6 bg-white rounded-lg shadow hover:shadow-lg" whileHover={{ y: -5 }}>
          <Users className="w-10 h-10 text-[#2b347c] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Youth Literacy Facilitators</h3>
          <p className="text-gray-600">
            Training unemployed youth to run LitClubs, facilitate reading interventions, and support schools.
          </p>
        </motion.div>
        <motion.div className="p-6 bg-white rounded-lg shadow hover:shadow-lg" whileHover={{ y: -5 }}>
          <GraduationCap className="w-10 h-10 text-[#2b347c] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Educator Development</h3>
          <p className="text-gray-600">
            Workshops for teachers and ECD practitioners to strengthen literacy teaching methods and learner engagement.
          </p>
        </motion.div>
        <motion.div className="p-6 bg-white rounded-lg shadow hover:shadow-lg" whileHover={{ y: -5 }}>
          <Lightbulb className="w-10 h-10 text-[#2b347c] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Innovative Training</h3>
          <p className="text-gray-600">
            Exploring creative and technology-driven approaches to enhance literacy learning and facilitation.
          </p>
        </motion.div>
        <motion.div className="p-6 bg-white rounded-lg shadow hover:shadow-lg" whileHover={{ y: -5 }}>
          <PenTool className="w-10 h-10 text-[#2b347c] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Writers Theatre</h3>
          <p className="text-gray-600">
            Interactive sessions where learners express themselves through storytelling, drama, and creative writing.
          </p>
        </motion.div>
        <motion.div className="p-6 bg-white rounded-lg shadow hover:shadow-lg" whileHover={{ y: -5 }}>
          <BookOpen className="w-10 h-10 text-[#2b347c] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Literacy Development</h3>
          <p className="text-gray-600">
            Building foundational reading and writing skills through structured training and community programs.
          </p>
        </motion.div>
        <motion.div className="p-6 bg-white rounded-lg shadow hover:shadow-lg" whileHover={{ y: -5 }}>
          <Library className="w-10 h-10 text-[#2b347c] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Library Assistant</h3>
          <p className="text-gray-600">
            Training community members to manage libraries, support readers, and promote a culture of reading.
          </p>
        </motion.div>
        <motion.div className="p-6 bg-white rounded-lg shadow hover:shadow-lg" whileHover={{ y: -5 }}>
          <MessageCircle className="w-10 h-10 text-[#2b347c] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Development & Communication</h3>
          <p className="text-gray-600">
            Building communication, leadership, and advocacy skills to strengthen literacy networks.
          </p>
        </motion.div>
        <motion.div className="p-6 bg-white rounded-lg shadow hover:shadow-lg" whileHover={{ y: -5 }}>
          <Briefcase className="w-10 h-10 text-[#2b347c] mb-4" />
          <h3 className="text-xl font-semibold mb-2">MyCareer</h3>
          <p className="text-gray-600">
            Career readiness programs equipping youth with literacy-based skills for future employment.
          </p>
        </motion.div>
        <motion.div className="p-6 bg-white rounded-lg shadow hover:shadow-lg" whileHover={{ y: -5 }}>
          <Presentation className="w-10 h-10 text-[#2b347c] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Seminars and Workshops</h3>
          <p className="text-gray-600">
            Regular training sessions for knowledge sharing, professional growth, and continuous learning.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Training;