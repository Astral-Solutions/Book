import React from "react";
import { Link } from "react-router-dom";

function GetInvolvedPage() {
const GetInvolvedPage = () => {
  return (
    <div className="get-involved-page bg-white min-h-screen py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-[#2b347c] mb-6 text-center">
          Get Involved
        </h1>

        <img
          src="/images/GomoKids.jpg"
          alt="Book World impact"
          loading="lazy"
          className="mx-auto w-full sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain shadow-lg rounded-lg"
        />

        <p className="text-lg text-gray-700 mb-12 text-center">
          Join us in making a difference! Whether it's volunteering, donating, or participating in our programmes, your support helps us bring books, literacy, and opportunities to underserved communities.
        </p>

        {/* Main Involvement Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
            <h2 className="text-2xl font-bold text-[#2b347c] mb-4">Become a Member</h2>
            <p className="text-gray-600 mb-4">Join Book World as a member and actively contribute to literacy advancement initiatives.</p>
            <Link to="/membership" className="inline-block px-6 py-2 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition">Join Now</Link>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
            <h2 className="text-2xl font-bold text-[#2b347c] mb-4">Attend an Event</h2>
            <p className="text-gray-600 mb-4">Be part of our literacy events, workshops, and awareness campaigns.</p>
            <Link to="/events" className="inline-block px-6 py-2 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition">View Events</Link>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
            <h2 className="text-2xl font-bold text-[#2b347c] mb-4">Volunteer Locally</h2>
            <p className="text-gray-600 mb-4">Support community programmes by volunteering in your area.</p>
            <Link to="/volunteer-local" className="inline-block px-6 py-2 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition">Sign Up</Link>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
            <h2 className="text-2xl font-bold text-[#2b347c] mb-4">Volunteer at the Office</h2>
            <p className="text-gray-600 mb-4">Help with administration, coordination, and operations at our office.</p>
            <Link to="/volunteer-office" className="inline-block px-6 py-2 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition">Learn More</Link>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
            <h2 className="text-2xl font-bold text-[#2b347c] mb-4">Subscription Giving Membership</h2>
            <p className="text-gray-600 mb-4">Support literacy year-round by becoming a monthly giving member.</p>
            <Link to="/subscribe-giving" className="inline-block px-6 py-2 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition">Subscribe</Link>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
            <h2 className="text-2xl font-bold text-[#2b347c] mb-4">Fundraisers</h2>
            <p className="text-gray-600 mb-4">Participate in our fundraising drives or organize one in your community.</p>
            <Link to="/fundraisers" className="inline-block px-6 py-2 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition">Get Involved</Link>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
            <h2 className="text-2xl font-bold text-[#2b347c] mb-4">Literacy Facilitation Programme</h2>
            <p className="text-gray-600 mb-4">Train as a literacy facilitator and help lead reading initiatives.</p>
            <Link to="/facilitation" className="inline-block px-6 py-2 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition">Join Programme</Link>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
            <h2 className="text-2xl font-bold text-[#2b347c] mb-4">Library Revamp</h2>
            <p className="text-gray-600 mb-4">Contribute to revamping libraries, making them vibrant community hubs.</p>
            <Link to="/library-revamp" className="inline-block px-6 py-2 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition">Help Revamp</Link>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
            <h2 className="text-2xl font-bold text-[#2b347c] mb-4">Library Corner</h2>
            <p className="text-gray-600 mb-4">Support small library corners in schools and community centers.</p>
            <Link to="/library-corner" className="inline-block px-6 py-2 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition">Support</Link>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
            <h2 className="text-2xl font-bold text-[#2b347c] mb-4">Library Stock</h2>
            <p className="text-gray-600 mb-4">Donate books to help stock libraries with diverse and engaging materials.</p>
            <Link to="/library-stock" className="inline-block px-6 py-2 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition">Donate Books</Link>
          </div>
        </div>

        {/* Other Ways to Get Involved */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-[#2b347c] mb-6 text-center">Other Ways to Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Subscribe to our YouTube Channel</h3>
              <p className="text-gray-600 mb-4">Follow us online for updates, literacy resources, and community stories.</p>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition">Subscribe</a>
            </div>
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Join Literature Club</h3>
              <p className="text-gray-600 mb-4">Engage with fellow readers and writers in our community literature club.</p>
              <Link to="/literature-club" className="inline-block px-6 py-2 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition">Join Club</Link>
            </div>
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Donate Your Car</h3>
              <p className="text-gray-600 mb-4">Turn your old car into an opportunity to fund literacy programmes.</p>
              <Link to="/donate-car" className="inline-block px-6 py-2 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition">Donate Car</Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-[#2b347c] mb-4">Every Action Counts</h2>
          <p className="text-gray-600 mb-6">Your involvement makes a direct impact in creating a brighter future for children and communities.</p>
          <Link to="/contact" className="px-8 py-3 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};
}

export default GetInvolvedPage;