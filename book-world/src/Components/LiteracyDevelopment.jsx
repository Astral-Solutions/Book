import React from "react";

function LiteracyDevelopment() {
  return (
    <div className="literacy-development-page bg-gray-50 min-h-screen py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-[#2b347c] text-center mb-6">
          Literacy Development
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Our Literacy Development initiatives are designed to provide children
          with foundational reading and writing skills, ensuring they can
          thrive academically and socially.
        </p>

        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-[#2b347c] mb-4">
            Key Programs
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Early Literacy Programs for children aged 0–16, focusing on
              phonics and comprehension.
            </li>
            <li>
              Literature Clubs that encourage storytelling, reading, and
              critical thinking.
            </li>
            <li>
              Training youth facilitators to act as literacy ambassadors within
              their communities.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default LiteracyDevelopment;
