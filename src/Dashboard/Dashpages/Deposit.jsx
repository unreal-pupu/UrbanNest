import React, { useState } from "react";
import { FaCreditCard, FaPaypal, FaUniversity, FaApple } from "react-icons/fa";


const Deposit = () => {
    const [selectedMethod, setSelectedMethod] = useState("card");
  return (
   
   <>
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <h1 className="text-3xl font-semibold text-gray-800 text-center">Payment</h1>
        <p className="text-gray-600 text-center mt-2">Choose your preferred payment method</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          <button
            className={`p-3 border rounded-lg flex flex-col items-center transition ${
              selectedMethod === "card" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setSelectedMethod("card")}
          >
            <FaCreditCard size={30} />
            <span className="mt-2 text-sm">Credit/Debit Card</span>
          </button>

          <button
            className={`p-3 border rounded-lg flex flex-col items-center transition ${
              selectedMethod === "paypal" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setSelectedMethod("paypal")}
          >
            <FaPaypal size={30} />
            <span className="mt-2 text-sm">PayPal</span>
          </button>

          <button
            className={`p-3 border rounded-lg flex flex-col items-center transition ${
              selectedMethod === "bank" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setSelectedMethod("bank")}
          >
            <FaUniversity size={30} />
            <span className="mt-2 text-sm">Bank Transfer</span>
          </button>

          <button
            className={`p-3 border rounded-lg flex flex-col items-center transition ${
              selectedMethod === "applepay" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setSelectedMethod("applepay")}
          >
            <FaApple size={30} />
            <span className="mt-2 text-sm">Apple Pay</span>
          </button>
        </div>

        <div className="mt-8">
          {selectedMethod === "card" && (
            <div>
              <h2 className="text-xl font-semibold text-gray-700">Card Details</h2>
              <input type="text" placeholder="Cardholder Name" className="w-full p-2 border rounded mt-2" />
              <input type="text" placeholder="Card Number" className="w-full p-2 border rounded mt-2" />
              <div className="flex space-x-4 mt-2">
                <input type="text" placeholder="MM/YY" className="w-1/2 p-2 border rounded" />
                <input type="text" placeholder="CVV" className="w-1/2 p-2 border rounded" />
              </div>
            </div>
          )}

          {selectedMethod === "paypal" && (
            <div>
              <h2 className="text-xl font-semibold text-gray-700">PayPal Email</h2>
              <input type="email" placeholder="Enter PayPal Email" className="w-full p-2 border rounded mt-2" />
            </div>
          )}

          {selectedMethod === "bank" && (
            <div>
              <h2 className="text-xl font-semibold text-gray-700">Bank Transfer Details</h2>
              <p className="text-gray-600 mt-2">Transfer funds to the following account:</p>
              <p className="font-semibold mt-2 text-red-800">Bank: XYZ Bank</p>
              <p className="font-semibold text-blue-700">Account Number: 123456789</p>
              <p className="font-semibold text-purple-500">SWIFT Code: XYZ123</p>
            </div>
          )}

          {selectedMethod === "applepay" && (
            <div>
              <h2 className="text-xl font-semibold text-gray-700">Apple Pay</h2>
              <p className="text-gray-600 mt-2">Use Apple Pay for fast and secure checkout.</p>
              <button className="mt-4 bg-black text-white py-2 px-4 rounded-lg flex items-center justify-center">
                <FaApple size={20} className="mr-2" /> Pay with Apple Pay
              </button>
            </div>
          )}
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-6 hover:bg-blue-700 transition">
          Proceed to Payment
        </button>
      </div>
   </>
   
  
  )
}

export default Deposit