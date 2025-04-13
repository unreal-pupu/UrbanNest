import React, { useState } from 'react';
import { FaQuestionCircle, FaPhoneAlt, FaEnvelope, FaSearch } from 'react-icons/fa';

const SupportHelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const faqs = [
    {
      question: "How do I make a reservation?",
      answer: "To make a reservation, go to the 'Reservations' page and select the date, time, and the type of reservation you want to make.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit/debit cards, PayPal, and other online payment methods. You can choose your preferred method during checkout.",
    },
    {
      question: "How do I cancel my reservation?",
      answer: "To cancel a reservation, go to your 'My Reservations' page, select the reservation you want to cancel, and click the 'Cancel' button.",
    },
    {
      question: "How can I contact customer support?",
      answer: "You can contact customer support via phone, email, or our live chat service. Visit the 'Contact Us' page for more details.",
    },
  ];

  const handleSearch = () => {
    console.log('Search for:', searchQuery);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-extrabold text-center text-[#352208] mb-12">
        Support Help Center
      </h2>

      <div className="flex justify-center mb-8">
        <div className="relative w-1/2">
          <input
            type="text"
            placeholder="Search for help..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#352208]"
          />
          <button
            onClick={handleSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#352208]"
          >
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-[#352208] mb-4">Frequently Asked Questions</h3>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{faq.question}</h4>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-8 mb-12">
        <h3 className="text-2xl font-semibold text-[#352208] mb-4">Contact Support</h3>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-[#352208] text-3xl" />
            <div>
              <p className="text-xl font-semibold text-gray-800">Call Us</p>
              <p className="text-gray-700">+1-800-123-4567</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-[#352208] text-3xl" />
            <div>
              <p className="text-xl font-semibold text-gray-800">Email Us</p>
              <p className="text-gray-700">support@company.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-8">
        <h3 className="text-2xl font-semibold text-[#352208] mb-4">Additional Resources</h3>
        <ul className="space-y-4">
          <li className="flex items-center space-x-4">
            <FaQuestionCircle className="text-[#352208] text-3xl" />
            <span className="text-lg text-gray-700">How to Use the App</span>
          </li>
          <li className="flex items-center space-x-4">
            <FaQuestionCircle className="text-[#352208] text-3xl" />
            <span className="text-lg text-gray-700">Booking Terms and Conditions</span>
          </li>
          <li className="flex items-center space-x-4">
            <FaQuestionCircle className="text-[#352208] text-3xl" />
            <span className="text-lg text-gray-700">Privacy Policy</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SupportHelpCenter;