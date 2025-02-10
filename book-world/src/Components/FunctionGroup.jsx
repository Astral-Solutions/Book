import React from "react";
import { Link } from "react-router-dom";

const functionGroups = [
  {
    name: "Book Development",
    description: "Creating a library of culturally relevant books for children and youth.",
    image: "/images/BookDevelopment.jpg",
    link: "/book-development",
  },
  {
    name: "Book Donation",
    description: "Distributing books to underserved communities across South Africa.",
    image: "/images/ReadingPromotion.jpg",
    link: "/book-donation",
  },
  {
    name: "Literacy Development",
    description: "Promoting literacy through clubs and educational programmes.",
    image: "/images/LiteracyFascilitators.jpg",
    link: "/literacy-development",
  },
  {
    name: "Library Functionality",
    description: "Supporting libraries to improve their resources and reach.",
    image: "/images/Nest.jpg",
    link: "/library-functionality",
  },
  {
    name: "Reading Promotion",
    description: "Encouraging reading as a lifestyle through events and campaigns.",
    image: "/images/WRAD.jpg",
    link: "/reading-promotion",
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
          Explore the key areas where Book World makes an impact through focused initiatives and community engagement.
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
