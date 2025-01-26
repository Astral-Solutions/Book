import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const VolunteerPage = () => {
  const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [id]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Volunteer Application Submitted", formData);
//     alert("Thank you for your interest! We will get in touch with you soon.");
//     setFormData({ name: "", email: "", message: "" });
//   };

  return (
    <div className="container mx-auto px-6 py-12">

      {/* Header */}
      <h1 className="text-4xl font-bold text-[#2b347c] mb-4">Volunteer with Us</h1>
      <p className="text-gray-700 mb-8">
        At Book World, we rely on passionate volunteers to help us spread the joy of reading and literacy in communities across South Africa. Join us today and make a difference!
      </p>

      {/* Why Volunteer Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#2b347c] mb-4">Why Volunteer?</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Make a tangible impact on children’s lives through literacy programs.</li>
          <li>Build meaningful connections with communities and like-minded individuals.</li>
          <li>Gain valuable experience in education and social work.</li>
          <li>Contribute to reducing literacy inequality in underserved areas.</li>
        </ul>
      </section>

      {/* Volunteer Benefits Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#2b347c] mb-4">Benefits of Volunteering</h2>
        <p className="text-gray-700">
          As a volunteer, you’ll have the opportunity to:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Enhance your skills in teaching, organizing, and facilitating events.</li>
          <li>Be a part of a supportive, community-driven initiative.</li>
          <li>Earn certificates of appreciation for your contributions.</li>
          <li>Shape the future of children by giving them access to books and education.</li>
        </ul>
      </section>

      {/* Volunteer Application Form */}
      <section className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-[#2b347c] mb-6">Apply to Volunteer</h2>
          <div className="mt-12 text-center">
                  <Link
                    to="/contact"
                    className="px-8 py-3 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition"
                  >
                    Contact Us
                  </Link>
                </div>
        {/* <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:border-[#2b347c] focus:ring-1 focus:ring-[#2b347c] transition-colors"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:border-[#2b347c] focus:ring-1 focus:ring-[#2b347c] transition-colors"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Why do you want to volunteer with us? <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:border-[#2b347c] focus:ring-1 focus:ring-[#2b347c] transition-colors"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#2b347c] text-white font-bold rounded-md hover:bg-[#1a2d6b] transition-colors duration-200"
          >
            Submit Application
          </button>
        </form> */}
      </section>
    </div>
  );
};

export default VolunteerPage;
