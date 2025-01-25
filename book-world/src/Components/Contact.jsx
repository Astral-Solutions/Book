import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaArrowDown,
  FaMapMarkerAlt,
  FaCheck,
  FaFacebook,
} from "react-icons/fa";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-center py-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2 text-[#2b347c]">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-4">
            "Bringing literacy to life. Reach out to us today!"
          </p>
          <FaArrowDown className="animate-bounce text-[#2b347c] text-2xl mx-auto mt-4 cursor-pointer" />
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        {/* Contact Information */}
        <section className="text-center mt-8">
          <h2 className="text-2xl font-semibold mb-8 text-[#2b347c]">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <FaMapMarkerAlt className="text-[#2b347c] text-2xl mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-gray-700">
                E387 Church Street, Saron <br />
                Phokeng 0335, Rustenburg Local Municipality
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <FaPhoneAlt className="text-[#2b347c] text-2xl mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Phone Numbers</h3>
              <p className="text-gray-700">
                Office:{" "}
                <a
                  href="tel:+27639289634"
                  className="text-[#2b347c] hover:underline"
                >
                  +27 63 928 9634
                </a>
              </p>
              <p className="text-gray-700">
                Managing Director:{" "}
                <a
                  href="tel:+27632839036"
                  className="text-[#2b347c] hover:underline"
                >
                  +27 63 283 9036
                </a>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <FaEnvelope className="text-[#2b347c] text-2xl mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a
                href="mailto:Contact@bookworld.org"
                className="text-[#2b347c] hover:underline"
              >
                Contact@bookworld.org
              </a>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="text-center mt-12">
          <h2 className="text-2xl font-semibold text-[#2b347c] mb-4">
            Follow Us on Social Media
          </h2>
          <a
            href="https://facebook.com/BookWorld"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#2b347c] hover:underline"
          >
            <FaFacebook className="text-2xl" />
            Facebook: Book World
          </a>
        </section>

        {/* Contact Form */}
        <section className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-16 relative overflow-hidden">
          {submitted && (
            <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center z-10">
              <div className="text-center text-[#2b347c]">
                <FaCheck className="text-4xl mb-2 mx-auto" />
                <p className="font-semibold">Message Sent Successfully!</p>
              </div>
            </div>
          )}

          <h2 className="text-2xl font-semibold text-[#2b347c] mb-6">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Name <span className="text-red-500">*</span>
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
                Your Email <span className="text-red-500">*</span>
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
                Message <span className="text-red-500">*</span>
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
              className="w-full py-3 px-4 bg-[#2b347c] text-white font-bold rounded-md hover:bg-[#1a2d6b] transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <FaEnvelope className="text-sm" />
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Contact;
