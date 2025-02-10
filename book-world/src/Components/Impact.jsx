import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

function ImpactPage() {
  const stats = [
    { label: "Books Donated", value: 3000 },
    { label: "Communities Impacted", value: 200 },
    { label: "programmes Conducted", value: 50 },
  ];

  return (
    <div className="impact-page bg-gray-50 min-h-screen py-12 px-6">
      <div className="container mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2b347c] mb-4">Our Impact</h1>
          
          {/* <img
  src="/images/GetInvolved.jpg"
  alt="Book World Literacy Fascilitators"
  loading="lazy"
  className="mx-auto max-w-40 h-60 object-cover shadow-lg border-4 border-white"
/> */}
          <p className="text-lg text-gray-700">
            At Book World, we're proud of the difference we've made in our
            communities through books, literacy programmes, and youth empowerment.
          </p>
        </header>

        {/* Impact Highlights */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold text-[#2b347c] mb-2">
                2024 Partnership Highlights
              </h3>
              <p className="text-gray-600">
                Over 2,300 learners from Kana and Letsibogo primary schools
                received books through our partnership with Standard Bank SA.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold text-[#2b347c] mb-2">
                Supporting ECD Centers
              </h3>
              <p className="text-gray-600">
                Supported 16 Early Childhood Development (ECD) centers with
                foundational literacy programmes.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold text-[#2b347c] mb-2">
                Employment Opportunities
              </h3>
              <p className="text-gray-600">
                Launched 229 employment opportunities through community-based
                projects like the Marothodi Heritage Festival.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Impact Numbers */}
        <section className="py-16 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-[#2b347c] mb-6">
            Our Impact Numbers
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-4xl font-bold text-[#2b347c] mb-2">
                  <CountUp end={stat.value} duration={2.5} />
                  {stat.label === "Books Donated" && "+"}
                </h3>
                <p className="text-lg text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center text-[#2b347c] mb-6">
            Testimonials
          </h2>
          <div className="max-w-4xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-gray-700 italic text-center">
              "Book World has been a game changer in our community – bringing
              books and hope to our youth."
            </p>
            <p className="text-gray-800 font-semibold text-right mt-4">
              – Community Leader
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ImpactPage;
