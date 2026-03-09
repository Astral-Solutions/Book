import React from "react";
import { motion } from "framer-motion";
import { BookOpen, BarChart, Users, HelpCircle, Layers, Lightbulb, TrendingUp } from "lucide-react";

function Research() {
  return (
    <div className="container mx-auto px-6 py-16">
      <motion.h1
        className="text-4xl font-bold text-[#2b347c] text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Research & Knowledge
      </motion.h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
        At Book World, research drives our literacy strategies. We use evidence-based approaches to measure progress, strengthen programmes, and share knowledge with partners and stakeholders.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          className="p-6 bg-white shadow-md rounded-xl"
          whileHover={{ scale: 1.02 }}
        >
          <BookOpen className="w-10 h-10 text-[#2b347c] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Evidence-Based Literacy</h3>
          <p className="text-gray-600">
            Our work is rooted in the Balanced Literacy Approach, combining phonics, comprehension, writing, and critical thinking.
          </p>
        </motion.div>
        <motion.div
          className="p-6 bg-white shadow-md rounded-xl"
          whileHover={{ scale: 1.02 }}
        >
          <BarChart className="w-10 h-10 text-[#2b347c] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Data & Impact</h3>
          <p className="text-gray-600">
            We track the number of learners reached, books donated, and facilitators trained — building a model for long-term literacy success.
          </p>
        </motion.div>
        <motion.div
          className="p-6 bg-white shadow-md rounded-xl"
          whileHover={{ scale: 1.02 }}
        >
          <Users className="w-10 h-10 text-[#2b347c] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Research Committee</h3>
          <p className="text-gray-600">
            A dedicated team of educators, researchers, and literacy experts guiding our research agenda.
          </p>
        </motion.div>
        <motion.div
          className="p-6 bg-white shadow-md rounded-xl"
          whileHover={{ scale: 1.02 }}
        >
          <HelpCircle className="w-10 h-10 text-[#2b347c] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Why Book World</h3>
          <p className="text-gray-600">
            We champion literacy because it is the foundation for learning, empowerment, and opportunity.
          </p>
        </motion.div>
        <motion.div
          className="p-6 bg-white shadow-md rounded-xl"
          whileHover={{ scale: 1.02 }}
        >
          <Layers className="w-10 h-10 text-[#2b347c] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Divisions</h3>
          <p className="text-gray-600">
            Specialized divisions focus on early literacy, digital learning, research, and community engagement.
          </p>
        </motion.div>
        <motion.div
          className="p-6 bg-white shadow-md rounded-xl"
          whileHover={{ scale: 1.02 }}
        >
          <Lightbulb className="w-10 h-10 text-[#2b347c] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Initiatives</h3>
          <p className="text-gray-600">
            Innovative literacy initiatives are piloted and scaled to address diverse learner needs globally.
          </p>
        </motion.div>
        <motion.div
          className="p-6 bg-white shadow-md rounded-xl"
          whileHover={{ scale: 1.02 }}
        >
          <TrendingUp className="w-10 h-10 text-[#2b347c] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Progress</h3>
          <p className="text-gray-600">
            Tracking growth in literacy outcomes and continuously improving strategies to maximize impact.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Research;
