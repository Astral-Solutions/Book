import React from "react";

function LibraryFunctionality() {
  return (
    <div className="container mx-auto px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#2b347c] mb-4">
          Library Functionality
        </h1>
        <p className="text-lg text-gray-700">
          Supporting libraries to improve their resources and reach.
        </p>
      </header>

      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-[#2b347c] mb-4">
          Enhancing Libraries for All
        </h2>
        <p className="text-gray-700 mb-6">
          Libraries are the cornerstone of literacy-rich environments. Our
          Library Functionality program focuses on upgrading libraries to make
          them accessible, welcoming, and resourceful for the communities they
          serve.
        </p>
        <h3 className="text-xl font-semibold text-[#2b347c] mb-2">
          Key Initiatives:
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Donating books and educational materials to libraries.</li>
          <li>Training library staff to create engaging programs.</li>
          <li>Building digital library infrastructure for rural areas.</li>
        </ul>
      </section>
    </div>
  );
}

export default LibraryFunctionality;
