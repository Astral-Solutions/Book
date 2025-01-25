import React from "react";

function ReadingPromotion() {
  return (
    <div className="reading-promotion-page bg-gray-50 min-h-screen py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-[#2b347c] text-center mb-6">
          Reading Promotion
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Reading is a habit that transforms lives. At Book World, we organize
          events, campaigns, and digital initiatives to inspire a culture of
          reading among children and youth.
        </p>

        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-[#2b347c] mb-4">
            Initiatives
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Host storytelling sessions in schools and community centers.
            </li>
            <li>
              Organize reading challenges to encourage consistent reading
              habits.
            </li>
            <li>
              Collaborate with libraries and bookshops to create reading
              awareness campaigns.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default ReadingPromotion;
