import React from "react";

function LiteracyMaterialDonation() {
  return (
    <div className="literacy-material-donation-page bg-gray-50 min-h-screen py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-[#2b347c] text-center mb-6">
          Literacy Material Donation
        </h1>
        <section className="text-center mb-12">
          <img
            src="/images/BookDon.jpg"
            alt="Literacy Material Donation Lead"
            loading="lazy"
            className="mx-auto w-full sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover shadow-lg border-4 border-white rounded-lg"
          />
        </section>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Literacy materials can transform classrooms and communities. At Book World, our Literacy Material Donation initiative ensures that children in underserved communities have access to high-quality books, worksheets, phonics tools, and other learning aids that support reading, writing, and language development.
        </p>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Your donation goes beyond simply giving a book , it contributes to a literacy-rich environment where children have the tools to learn, grow, and dream. By supporting this initiative, you help us provide materials that are essential to every learner’s success.
        </p>

        <section className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold text-[#2b347c] mb-4">
            How You Can Help
          </h2>
          <p className="text-gray-700 mb-6">
            There are multiple ways to get involved in the Literacy Material Donation initiative. Whether you're donating supplies or time, your contribution brings us closer to closing the literacy gap in South Africa. Here's how:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>
              <strong>Donate Literacy Materials for Classrooms and Homes</strong>
              <p className="mt-2">
                We accept new or gently used literacy materials that align with early and intermediate literacy development. These include:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li><strong>Storybooks and Readers:</strong> Age-appropriate stories that help learners develop fluency and imagination.</li>
                <li><strong>Phonics and Language Activity Books:</strong> To assist with foundational reading, spelling, and grammar skills.</li>
                <li><strong>Workbooks and Worksheets:</strong> Materials that reinforce classroom learning and can be used in ECD centres and homes.</li>
                <li><strong>Visual Learning Aids:</strong> Posters, flashcards, and alphabet charts that support multisensory learning.</li>
              </ul>
              <p className="mt-2">
                These materials are distributed to schools, ECD centres, community libraries, and directly to learners , especially in rural and VTSD areas.
              </p>
            </li>
            <li>
              <strong>Sponsor a Literacy Distribution Campaign</strong>
              <p className="mt-2">
                You or your organization can sponsor a targeted literacy distribution campaign to ensure more learners access quality resources. Options include:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li><strong>Community Drives:</strong> Host or fund collection points for literacy materials across your network or workplace.</li>
                <li><strong>Classroom Starter Kits:</strong> Sponsor kits that include storybooks, writing materials, and phonics tools for under-resourced classrooms.</li>
                <li><strong>Back-to-School Literacy Packs:</strong> Support children with a bundle of essential reading and writing tools at the start of each school year.</li>
              </ul>
              <p className="mt-2">
                Sponsorship ensures that we can scale our reach and respond to high-need areas more efficiently.
              </p>
            </li>
            <li>
              <strong>Volunteer to Deliver and Facilitate Literacy Engagements</strong>
              <p className="mt-2">
                Volunteers help make this initiative come alive by being present in the communities we serve. You can assist by:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li><strong>Distributing Literacy Packs:</strong> Join our team in delivering materials to schools, clinics, libraries, and homes.</li>
                <li><strong>Hosting Literacy Days:</strong> Facilitate or support storytelling circles, reading competitions, or book-themed festivals to promote engagement.</li>
                <li><strong>Supporting Educators:</strong> Help educators and facilitators use donated materials effectively through orientation and classroom integration tips.</li>
              </ul>
              <p className="mt-2">
                Your time and presence amplify the impact of every book and learning tool we provide.
              </p>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-[#2b347c] mb-4">
            Why Literacy Material Donation Matters
          </h3>
          <p className="text-gray-700 mb-6">
            Quality materials improve reading outcomes. They help learners build vocabulary, improve comprehension, and grow in confidence. Yet for many learners in South Africa, these resources are simply not accessible. Through this initiative, we help bridge that gap.
          </p>
          <p className="text-gray-700 mb-6">
            When learners have access to their own books and literacy materials, they are more likely to practice outside of the classroom, take initiative in their learning, and develop a sustained interest in reading. The effects are long-term: better academic results, improved self-esteem, and increased chances of success in life.
          </p>
        </section>
      </div>
    </div>
  );
}

export default LiteracyMaterialDonation;
