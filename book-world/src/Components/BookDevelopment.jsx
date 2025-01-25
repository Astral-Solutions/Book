import React from "react";

function BookDevelopment() {
  return (
    <div className="book-development-page bg-gray-50 min-h-screen py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-[#2b347c] text-center mb-6">
          Book Development
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          At Book World, we believe in creating books that resonate with
          children and youth in South Africa. Through culturally relevant and
          inspiring content, we aim to nurture a love for reading while
          preserving local languages and traditions.
        </p>

        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-[#2b347c] mb-4">
            What We Do
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Develop educational books for children, focusing on local
              languages and cultural values.
            </li>
            <li>
              Partner with authors, illustrators, and educators to create
              engaging content.
            </li>
            <li>
              Promote diversity in storytelling to reflect the rich heritage of
              South Africa.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default BookDevelopment;
