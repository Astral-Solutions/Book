import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

function About() {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const milestones = [
    {
      year: "2019",
      event: "Book World was founded with the mission to promote literacy and empower communities through reading.",
      details: "In 2019, Book World began its journey, focusing on creating a love for reading among children and youth in underserved areas.",
      icon: "📖",
      image: "/images/milestone2019.jpg",
    },
    {
      year: "2020",
      event: "Launched the first Early Literacy programme, impacting children in 5 communities.",
      details: "Our Early Literacy programme focused on foundational reading skills for children aged 0–6, helping them achieve early academic success.",
      icon: "🌟",
      image: "/images/milestone2020.jpg",
    },
    {
      year: "2021",
      event: "Established partnerships with local libraries, creating access to 1,000+ books for underserved communities.",
      details: "We partnered with libraries to expand access to quality books in rural and township communities.",
      icon: "📚",
      image: "/images/milestone2021.jpg",
    },
    {
      year: "2022",
      event: "Initiated Literature Clubs in 16 Early Childhood Development (ECD) centers.",
      details: "Our Literature Clubs provided a space for children to engage in storytelling, book discussions, and creative activities.",
      icon: "🤝",
      image: "/images/milestone2022.jpg",
    },
    {
      year: "2023",
      event: "Donated 3,000 books to children in rural areas and trained 100 youth as literacy facilitators.",
      details: "The donation campaign empowered thousands of children, while the facilitator training programme provided skills and employment opportunities.",
      icon: "📖",
      image: "/images/milestone2023.jpg",
    },
    {
      year: "2024",
      event: "Collaborated with corporate sponsors to bring books and literacy programmes to 2,360 learners across schools.",
      details: "Partnerships with companies expanded our reach, allowing us to positively impact thousands of learners.",
      icon: "🏫",
      image: "/images/milestone2024.jpg",
    },
  ];

  const handleMilestoneClick = (milestone) => {
    setSelectedMilestone(milestone);
  };

  const closeModal = () => {
    setSelectedMilestone(null);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <Helmet>
        <title>About Book World | Inspiring a Love for Reading</title>
        <meta
          name="description"
          content="Learn about Book World, a South African organization dedicated to empowering children and youth through literacy programmes, book donations, and community engagement."
        />
        <meta
          name="keywords"
          content="Book World, Literacy Development, Early Literacy programmes, Book Donations, Community Engagement, South Africa"
        />
      </Helmet>

      {/* Title Section */}
      <header className="text-center mb-12">
        <motion.h1
          className="text-4xl font-bold text-[#2b347c] mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Story – Building a World of Readers
        </motion.h1>
      </header>

      {/* Intro Section */}
      <section className="text-center mb-12">
        <p className="text-lg text-gray-700">
          "At Book World, we believe that literacy is the foundation for personal growth, community development, and societal transformation.
          Since 2019, we’ve been at the forefront of combating literacy challenges in South Africa by ensuring children and youth have access
          to books, a reading-friendly environment, and passionate literacy facilitators."
        </p>
      </section>

      {/* Who We Are Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-[#2b347c] mb-6">Who We Are</h2>
        <p className="text-gray-700">
          "Book World is more than a book donation organization. We are a social impact movement that redefines literacy as a lifestyle.
          We bring together educators, youth volunteers, and communities to inspire a love for reading. Our mission is fueled by the belief
          that books can open doors to imagination, creativity, and success."
        </p>
      </section>

      {/* Our Approach Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-[#2b347c] mb-6">Our Approach</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-4">
          <li>
            <strong>Balanced Literacy Framework:</strong> Combining phonics and comprehension for a holistic reading experience.
          </li>
          <li>
            <strong>Youth Empowerment:</strong> Training unemployed youth to become literacy ambassadors.
          </li>
          <li>
            <strong>Community Engagement:</strong> Establishing Literature Clubs (LitClubs) in schools, homes, and community centers.
          </li>
        </ul>
      </section>

      {/* Our History Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-[#2b347c] mb-6">Our History</h2>
        <p className="text-gray-700 mb-8">
          "Founded in 2019, Book World has grown from a small initiative into a thriving organization. From hosting World Book Day events to
          launching Literature Clubs in ECD centers, we’ve consistently brought communities together around the power of books. Our book
          donation drives and partnerships have reached over 10,000 children and youth in rural and underserved communities."
        </p>
        <div className="relative border-l-4 border-[#2b347c]">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="mb-8 ml-6 relative group flex items-start"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onClick={() => handleMilestoneClick(milestone)}
            >
              <div className="flex-1 bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-[#2b347c]/10 transition">
                <p className="text-gray-700 group-hover:text-[#2b347c]">{milestone.event}</p>
              </div>
              <div className="ml-4 w-12 h-12 rounded-full bg-[#2b347c] text-white flex items-center justify-center cursor-pointer">
                {milestone.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="text-center mt-12">
        <h2 className="text-3xl font-semibold text-[#2b347c] mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Inclusivity:</strong> Ensuring everyone has access to books, regardless of their background.</li>
          <li><strong>Sustainability:</strong> Creating long-term impact through literacy initiatives.</li>
          <li><strong>Empowerment:</strong> Providing tools for individuals and communities to thrive.</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-12">
        <h2 className="text-2xl font-semibold text-[#2b347c] mb-4">
          Join Us in Rewriting the Future
        </h2>
        <p className="text-gray-700 mb-6">
          "Join us in rewriting the future for South African children. Together, we can make reading a lifestyle and a legacy."
        </p>
      </section>
    </div>
  );
}

export default About;
