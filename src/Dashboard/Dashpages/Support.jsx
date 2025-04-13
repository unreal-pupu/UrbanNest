import React, { useState } from 'react';

const Support = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [issue, setIssue] = useState('');
  const [message, setMessage] = useState('');

  const handleSupportSubmit = (e) => {
    e.preventDefault();
    alert('Your support request has been submitted! We will get back to you soon.');
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4 text-[#352208]">Support</h2>
      <p className="text-lg mb-6">If you're having any issues or need assistance, please fill out the form below, and we'll get back to you as soon as possible.</p>

      <form onSubmit={handleSupportSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">What is your issue?</label>
          <input
            type="text"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Briefly describe your issue"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Additional Details</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Provide more details about your issue"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#352208] text-[#e1bb80] py-2 px-4 rounded-md hover:bg-[#e1bb80] hover:text-[#352208] transition duration-300"
        >
          Submit Support Request
        </button>
      </form>
    </div>
  );
};

export default Support;