import React from "react";
import { Link } from "react-router-dom";
import { Heart, Users, Briefcase, Handshake, Gift, DollarSign, Star, Building } from "lucide-react";

function WaysToGive() {
const WaysToGivePage = () => {
  return (
    <div className="ways-to-give-page bg-white min-h-screen py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-[#2b347c] mb-6 text-center">
          Ways to Give
        </h1>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          Your support fuels our mission to advance literacy and create brighter futures. Explore the different ways you can make an impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
            <Heart className="w-10 h-10 text-[#2b347c] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#2b347c] mb-4">Donate Now</h2>
            <p className="text-gray-600 mb-4">Make an immediate difference by contributing today.</p>
            <Link to="/donate" className="inline-block px-6 py-2 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition">Donate</Link>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
            <Gift className="w-10 h-10 text-[#2b347c] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#2b347c] mb-4">Get Subscription Giving Membership</h2>
            <p className="text-gray-600 mb-4">Join our community of monthly donors who sustain our mission year-round.</p>
            <Link to="/subscription-giving" className="inline-block px-6 py-2 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition">Subscribe</Link>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
            <Star className="w-10 h-10 text-[#2b347c] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#2b347c] mb-4">Why Support Us?</h2>
            <p className="text-gray-600 mb-4">Learn how your support drives literacy, empowers communities, and changes lives.</p>
            <Link to="/why-support-us" className="inline-block px-6 py-2 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition">Learn More</Link>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
            <Gift className="w-10 h-10 text-[#2b347c] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#2b347c] mb-4">Subscription Giving Membership</h2>
            <p className="text-gray-600 mb-4">Enjoy exclusive updates, impact stories, and recognition as a valued supporter.</p>
            <Link to="/subscription-benefits" className="inline-block px-6 py-2 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition">View Benefits</Link>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
            <Briefcase className="w-10 h-10 text-[#2b347c] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#2b347c] mb-4">Workplace Giving</h2>
            <p className="text-gray-600 mb-4">Contribute through payroll giving or workplace donation programmes.</p>
            <Link to="/workplace-giving" className="inline-block px-6 py-2 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition">Get Started</Link>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
            <Users className="w-10 h-10 text-[#2b347c] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#2b347c] mb-4">Employee Giving</h2>
            <p className="text-gray-600 mb-4">Encourage your employees to give back and amplify their impact through matching programmes.</p>
            <Link to="/employee-giving" className="inline-block px-6 py-2 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition">Learn More</Link>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
            <DollarSign className="w-10 h-10 text-[#2b347c] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#2b347c] mb-4">Fundraise at Work</h2>
            <p className="text-gray-600 mb-4">Host a workplace fundraiser and unite your colleagues around literacy.</p>
            <Link to="/fundraise-at-work" className="inline-block px-6 py-2 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition">Start Fundraising</Link>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
            <Handshake className="w-10 h-10 text-[#2b347c] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#2b347c] mb-4">Become a Partner</h2>
            <p className="text-gray-600 mb-4">Collaborate with us as a corporate or community partner to extend our reach and impact.</p>
            <Link to="/partnership" className="inline-block px-6 py-2 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition">Partner With Us</Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-[#2b347c] mb-4">Your Support Matters</h2>
          <p className="text-gray-600 mb-6">Every contribution—big or small—creates opportunities for learning, growth, and empowerment.</p>
          <Link to="/contact" className="px-8 py-3 bg-[#2b347c] text-white rounded-full hover:bg-[#1a2d6b] transition">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};
}

export default WaysToGivePage;