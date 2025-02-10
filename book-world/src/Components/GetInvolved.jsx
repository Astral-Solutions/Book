import React from "react";
import { Link } from "react-router-dom";

const GetInvolvedPage = () => {
  return (
    <div className="get-involved-page bg-white min-h-screen py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-[#2b347c] mb-6 text-center">
          Get Involved
        </h1>
        
        <img
  src="/images/LiteracyDevelopment.jpg"
  alt="Book World impact"
  loading="lazy"
  className="mx-auto max-w-md h-auto object-cover shadow-lg border-4 border-white"
/>
        <p className="text-lg text-gray-700 mb-12 text-center">
          Join us in making a difference! Whether it's volunteering, donating, or participating in our programmes, your support helps us bring books, literacy, and opportunities to underserved communities.
        </p>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Volunteer Section */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
            <h2 className="text-2xl font-bold text-[#2b347c] mb-4">Volunteer</h2>
            <p className="text-gray-600 mb-4">
              Become a part of our mission by joining as a volunteer. Assist in book distributions, literacy programmes, or community events.
            </p>
            <Link
              to="/volunteer"
              className="inline-block px-6 py-2 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition"
            >
              Learn More
            </Link>
          </div>

          {/* Donate Section */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
            <h2 className="text-2xl font-bold text-[#2b347c] mb-4">Donate</h2>
            <p className="text-gray-600 mb-4">
              Support our cause with a financial contribution or book donations. Every little bit helps us change lives.
            </p>
            <Link
              to="/donate"
              className="inline-block px-6 py-2 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition"
            >
              Donate Now
            </Link>
          </div>

          {/* Fundraising Section */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
            <h2 className="text-2xl font-bold text-[#2b347c] mb-4">Fundraising</h2>
            <p className="text-gray-600 mb-4">
              Participate in our upcoming fundraising events or organize one to support our mission.
            </p>
            <Link
              to="/calendar"
              className="inline-block px-6 py-2 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition"
            >
              View Events
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-[#2b347c] mb-4">
            Every Action Counts
          </h2>
          <p className="text-gray-600 mb-6">
            Your involvement makes a direct impact in creating a brighter future for children and communities.
          </p>
          <Link
            to="/contact"
            className="px-8 py-3 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedPage;
