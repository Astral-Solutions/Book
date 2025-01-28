import React from "react";
import { Helmet } from "react-helmet";
import { FaHandHoldingUsd, FaHeart, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

const DonationsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <Helmet>
        <title>Support Book World | Donate</title>
        <meta
          name="description"
          content="Support Book World by making a donation. Your contributions help us provide books, literacy programmes, and youth empowerment initiatives."
        />
      </Helmet>

      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#2b347c] mb-4">
          Support Book World
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Your donation helps us provide books, literacy programmes, and youth empowerment initiatives to underserved communities. Together, we can foster a love for reading and education.
        </p>
      </section>

      {/* Why Donate Section */}
      <section className="container mx-auto px-6 py-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-[#2b347c] mb-6">
          Why Your Donation Matters
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <FaHandHoldingUsd className="text-[#2b347c] text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#2b347c] mb-2">
              Empowering Literacy
            </h3>
            <p className="text-gray-600">
              Your contributions help provide books to children in need, fostering a love for reading.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <FaHeart className="text-[#2b347c] text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#2b347c] mb-2">
              Supporting Education
            </h3>
            <p className="text-gray-600">
              Donations fund literacy programmes, book drives, and educational initiatives for youth empowerment.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <FaDollarSign className="text-[#2b347c] text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#2b347c] mb-2">
              Building Communities
            </h3>
            <p className="text-gray-600">
              Your support allows us to create reading-friendly environments in schools and community centers.
            </p>
          </div>
        </div>
      </section>

      {/* Banking Details Section */}
      <section className="container mx-auto px-6 py-12 bg-white shadow-lg rounded-lg mt-12">
        <h2 className="text-3xl font-bold text-center text-[#2b347c] mb-6">
          Bank Account Details
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-left bg-gray-50">
            <thead>
              <tr className="bg-[#2b347c] text-white">
                <th className="border border-gray-300 px-4 py-2">Legal Entity Name</th>
                <th className="border border-gray-300 px-4 py-2">Bank Name</th>
                <th className="border border-gray-300 px-4 py-2">Account Number</th>
                <th className="border border-gray-300 px-4 py-2">Branch Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Book World SA</td>
                <td className="border border-gray-300 px-4 py-2">Standard Bank</td>
                <td className="border border-gray-300 px-4 py-2">10183691987</td>
                <td className="border border-gray-300 px-4 py-2">017045</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mt-12">
        <h2 className="text-3xl font-bold text-[#2b347c] mb-4">
          Join Us in Making a Difference
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-6">
          Every contribution helps us change lives through literacy. Partner with us in building a brighter future for children and youth.
        </p>
        <Link
          to="/contact"
          className="px-8 py-3 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition"
        >
          Contact Us for More Ways to Support
        </Link>
      </section>
    </div>
  );
};

export default DonationsPage;
