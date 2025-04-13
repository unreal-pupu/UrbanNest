import React, { useState } from "react";
import { FaCreditCard, FaCashRegister } from "react-icons/fa";  
import { useNavigate } from "react-router-dom";  

import DEST7 from '../../assets/DEST7.jpg';
import DEST8 from '../../assets/DEST8.jpg';
import CHEF3 from '../../assets/CHEF3.jpg';


const cartItems = [
  { name: "Spicy Diner Meal", price: 25.99, type: "Food Vendor", id: 1 },
  { name: "Neon Tavern Drinks", price: 15.49, type: "Bar", id: 2 },
  { name: "Ocean View Suite", price: 120.00, type: "Hotel", id: 3 },
];

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [billingInfo, setBillingInfo] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  });

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo({
      ...billingInfo,
      [name]: value,
    });
  };

  const handlePaymentDetailsChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Checkout submitted", { billingInfo, paymentDetails });
    navigate("/order-success"); 
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <span className="text-gray-800">{item.name}</span>
                <span className="text-gray-600">${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <hr className="my-4" />
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg">Total</span>
            <span className="font-semibold text-lg">${totalAmount.toFixed(2)}</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Billing Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={billingInfo.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Shipping Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={billingInfo.address}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={billingInfo.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={billingInfo.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                <div className="flex space-x-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="credit"
                      checked={paymentMethod === "credit"}
                      onChange={() => setPaymentMethod("credit")}
                      className="mr-2"
                    />
                    <FaCreditCard /> Credit Card
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={paymentMethod === "cash"}
                      onChange={() => setPaymentMethod("cash")}
                      className="mr-2"
                    />
                    <FaCashRegister /> Cash on Delivery
                  </label>
                </div>
              </div>

              {paymentMethod === "credit" && (
                <div>
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                      Card Number
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      id="cardNumber"
                      value={paymentDetails.cardNumber}
                      onChange={handlePaymentDetailsChange}
                      className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      name="cardExpiry"
                      id="cardExpiry"
                      value={paymentDetails.cardExpiry}
                      onChange={handlePaymentDetailsChange}
                      className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cardCvc" className="block text-sm font-medium text-gray-700">
                      CVC
                    </label>
                    <input
                      type="text"
                      name="cardCvc"
                      id="cardCvc"
                      value={paymentDetails.cardCvc}
                      onChange={handlePaymentDetailsChange}
                      className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm"
                      required
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[#352208] text-[#e1bb80] py-2 px-4 rounded-md hover:bg-[#e1bb80] hover:text-[#352208] transition-colors mt-6"
              >
                Complete Checkout
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex justify-center">
          <img src={DEST7} alt="Destination 7" className="w-full h-56 object-cover rounded-lg shadow-md" />
        </div>
        <div className="flex justify-center">
          <img src={DEST8} alt="Destination 8" className="w-full h-56 object-cover rounded-lg shadow-md" />
        </div>
        <div className="flex justify-center">
          <img src={CHEF3} alt="Chef 3" className="w-full h-56 object-cover rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default Checkout;