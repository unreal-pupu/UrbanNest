import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Contex/AuthContext';

const RegisterVendor = () => {
  const { setIsAuthenticated, setUserType } = useAuth();
  const [companyName, setCompanyName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    setUserType('vendor');
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userType', 'vendor');
    navigate('/dashboard/vendor');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register Your Business
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Business Name</label>
            <input
              type="text"
              placeholder="e.g. Sunset Lounge"
              className="w-full border-b border-gray-300 focus:border-indigo-500 outline-none py-2"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Business Type</label>
            <select
              className="w-full border-b border-gray-300 focus:border-indigo-500 outline-none py-2"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              required
            >
              <option value="" disabled>Select type</option>
              <option value="restaurant">Restaurant</option>
              <option value="bar">Bar</option>
              <option value="hotel">Hotel</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Business Address</label>
            <input
              type="text"
              placeholder="123 Main St, City"
              className="w-full border-b border-gray-300 focus:border-indigo-500 outline-none py-2"
              value={businessAddress}
              onChange={(e) => setBusinessAddress(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Phone Number</label>
              <input
                type="tel"
                placeholder="+123 456 7890"
                className="w-full border-b border-gray-300 focus:border-indigo-500 outline-none py-2"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="business@email.com"
                className="w-full border-b border-gray-300 focus:border-indigo-500 outline-none py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Website (Optional)</label>
            <input
              type="url"
              placeholder="https://yourbusiness.com"
              className="w-full border-b border-gray-300 focus:border-indigo-500 outline-none py-2"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Brief Description</label>
            <textarea
              rows="4"
              placeholder="Tell us about your business..."
              className="w-full border border-gray-200 rounded-lg focus:border-indigo-500 outline-none p-3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
          >
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterVendor;