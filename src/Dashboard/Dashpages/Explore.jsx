import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Contex/AuthContext';

const Explore = () => {
  const { isAuthenticated, userType } = useAuth();
  const navigate = useNavigate();
  const [services, setServices] = useState([]);

  // Sample services
  const sampleServices = [
    {
      id: 1,
      name: "Personalized Concierge Services",
      description: "Get help with travel planning, event coordination, and more.",
      price: "$100/hour",
      category: "Concierge",
    },
    {
      id: 2,
      name: "Private Chef & Catering Services",
      description: "Book a private chef for special events or catering needs.",
      price: "$500 per event",
      category: "Chef & Catering",
    },
    {
      id: 3,
      name: "Food Photography",
      description: "Capture your food in the best light with professional photography.",
      price: "$200 per session",
      category: "Food Photography",
    },
  ];

  useEffect(() => {
    if (!isAuthenticated || userType !== 'customer') {
      navigate('/login'); // Redirect if the user is not logged in or not a customer
    } else {
      setServices(sampleServices); // Set services (replace with real data from your backend)
    }
  }, [isAuthenticated, userType, navigate]);

  const handleBookService = (serviceId) => {
    // Redirect to the booking page for the specific service
    navigate(`/book-service/${serviceId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Explore Our Exclusive Services
        </h2>

        {/* Displaying services */}
        <div className="space-y-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{service.description}</p>
              <p className="text-md font-bold text-gray-800 mt-2">{service.price}</p>
              <button
                className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-full font-semibold hover:bg-indigo-700 transition"
                onClick={() => handleBookService(service.id)}
              >
                Book Service
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;