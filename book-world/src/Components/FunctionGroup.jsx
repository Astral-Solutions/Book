import React from "react";
import { Link } from "react-router-dom";

const functionGroups = [
  {
    name: "Literacy Material Development",
    description: "Creating culturally relevant, multilingual educational books for children and youth.",
    image: "/images/BookDevelopment.jpg",
    link: "/literacy-material-development",
  },
  {
    name: "Literacy Material Donation",
    description: "Providing free books and learning resources to children in underserved communities.",
    image: "/images/ReadingPromotion.jpg",
    link: "/literacy-material-donation",
  },
  {
    name: "Literacy Development",
    description: "Improving reading, writing, and communication skills through structured facilitation.",
    image: "/images/LiteracyFascilitators.jpg",
    link: "/literacy-development",
  },
  {
    name: "Literacy Hub Functionality",
    description: "Strengthening libraries and reading hubs to become community learning centers.",
    image: "/images/Nest.jpg",
    link: "/literacy-hub-functionality",
  },
  {
    name: "Literacy Promotion",
    description: "Fostering a love of reading through storytelling, reading challenges, and outreach campaigns.",
    image: "/images/WRAD.jpg",
    link: "/literacy-promotion",
  },
];

const FunctionGroupsPage = () => {
  return (
    <div className="function-groups-page bg-white min-h-screen py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-[#2b347c] mb-6 text-center">
          Our Function Groups
        </h1>
        <p className="text-lg text-gray-700 mb-12 text-center">
          Explore the five pillars of our literacy mission , each one designed to empower children and communities through the transformative power of books.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {functionGroups.map((group, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <img
                src={group.image}
                alt={group.name}
                className="w-full h-48 object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2b347c] mb-2">
                  {group.name}
                </h3>
                <p className="text-gray-600 mb-4">{group.description}</p>
                <Link
                  to={group.link}
                  className="text-[#2b347c] font-medium hover:text-[#1a2d6b] transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FunctionGroupsPage;
