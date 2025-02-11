import React from "react";

function BookDonation() {
  return (
    <div className="book-donation-page bg-gray-50 min-h-screen py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-[#2b347c] text-center mb-6">
          Book Donation
        </h1>
        <section className="text-center mb-12">
        <img
          src="/images/BookDon.jpg"
          alt="Book Donation Lead"
          loading="lazy"
          className="mx-auto w-full sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover shadow-lg border-4 border-white rounded-lg"
        />
      </section>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Books have the power to transform lives, ignite imaginations, and open doors to new possibilities. At Book World, our Book Donation initiative is designed to ensure that every child in South Africa has access to a personal collection of books. Through our book donation drives, we are working to foster a culture of reading, learning, and discovery—one book at a time.
        </p>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          By donating books, you help create a world where children, regardless of their background or circumstances, have the resources they need to thrive academically and socially. The gift of books not only supports literacy development but also inspires creativity, critical thinking, and a lifelong love of reading.
        </p>

        <section className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold text-[#2b347c] mb-4">
            How You Can Help
          </h2>
          <p className="text-gray-700 mb-6">
            There are many ways you can get involved and support our Book Donation initiative. Your contribution can have a lasting impact on children’s education, empowering them to build skills and achieve their dreams. Below are several ways you can make a difference:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>
              <strong>Donate New or Gently Used Books to Support Our programmes</strong>
              <p className="mt-2">
                One of the most direct ways you can support our initiative is by donating books. Whether they are new or gently used, every book you donate helps us provide children with the essential reading materials they need to develop literacy skills. We accept books in various categories, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li><strong>Children’s Picture Books:</strong> For younger children to develop early literacy skills and foster a love of reading.</li>
                <li><strong>Early Chapter Books:</strong> To support children who are starting to read independently and build their reading confidence.</li>
                <li><strong>Educational Books and Workbooks:</strong> Helping children enhance their comprehension and understanding of subjects like math, science, and history.</li>
                <li><strong>Storybooks and Novels:</strong> Engaging children with stories that spark creativity and broaden their imagination.</li>
              </ul>
              <p className="mt-2">
                Donating books gives children the opportunity to explore new worlds, enhance their knowledge, and grow in ways that would otherwise be limited without access to quality literature.
              </p>
            </li>
            <li>
              <strong>Sponsor a Book Drive to Reach Schools and ECD Centers in Underserved Areas</strong>
              <p className="mt-2">
                Many schools and Early Childhood Development (ECD) centers in underserved areas struggle to provide enough reading materials for their students. You can help by sponsoring a book drive to gather books and deliver them to these institutions. There are several ways to get involved:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li><strong>Organize a Community Book Drive:</strong> Mobilize your friends, family, colleagues, or school to collect books for donation. This could be through local events, school campaigns, or virtual drives.</li>
                <li><strong>Raise Funds to Purchase New Books:</strong> If the demand for books is high, raising funds to purchase new books ensures that we can meet the needs of children in these areas.</li>
                <li><strong>Targeted Book Collection:</strong> You can help by focusing on specific types of books needed for particular age groups or subjects, ensuring that the right resources reach the children who need them most.</li>
              </ul>
              <p className="mt-2">
                Book drives are a great way to bring communities together for a cause that has a lasting, positive impact on children’s education.
              </p>
            </li>
            <li>
              <strong>Volunteer to Distribute Books and Engage with Children at Community Events</strong>
              <p className="mt-2">
                In addition to donating and organizing drives, you can make a huge difference by volunteering your time to distribute books and engage with children during literacy-related events. Here are a few ways you can help:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li><strong>Book Distribution at Schools and ECD Centers:</strong> Volunteers play a vital role in ensuring that donated books get to the right places. You can help distribute books directly to schools and community centers.</li>
                <li><strong>Reading Sessions and Literacy Events:</strong> Volunteers can lead or participate in reading sessions, storytelling, and interactive learning events that make reading a fun and engaging experience for children.</li>
                <li><strong>Mentorship and Learning Activities:</strong> Volunteers can also assist with organizing workshops, creative writing sessions, and group reading activities that support children’s development and foster a love for learning.</li>
              </ul>
              <p className="mt-2">
                Volunteering allows you to have a direct, personal impact on children’s literacy journeys and helps them connect more deeply with the books they receive.
              </p>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-[#2b347c] mb-4">
            The Ripple Effect of Your Support
          </h3>
          <p className="text-gray-700 mb-6">
            When you contribute to our Book Donation initiative, you're not just giving a child a book—you're giving them the keys to unlock their potential. Books have the power to broaden their horizons, stimulate their curiosity, and develop their critical thinking skills. By helping ensure that every child has access to a personal collection of books, you're supporting their academic growth and fostering a lifelong love of reading.
          </p>
          <p className="text-gray-700 mb-6">
            Your support has a ripple effect: as children gain literacy skills, they gain confidence, perform better in school, and become active, engaged members of their communities. Together, we can create a brighter future for all by ensuring that books are available to those who need them most.
          </p>
        </section>
      </div>
    </div>
  );
}

export default BookDonation;
