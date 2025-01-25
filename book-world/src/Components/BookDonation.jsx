import React from "react";

function BookDonation() {
  return (
    <div className="book-donation-page bg-gray-50 min-h-screen py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-[#2b347c] text-center mb-6">
          Book Donation
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Help us bring the joy of reading to children across South Africa.
          Through our book donation drives, we aim to ensure that every child
          has access to a personal collection of books.
        </p>

        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-[#2b347c] mb-4">
            How You Can Help
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Donate new or gently used books to support our programs.</li>
            <li>
              Sponsor a book drive to reach schools and ECD centers in
              underserved areas.
            </li>
            <li>
              Volunteer to distribute books and engage with children at
              community events.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default BookDonation;
