import React from 'react';
import { HiOutlineUserCircle } from "react-icons/hi2";
import { CiLock } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard'); 
  }

  return (
    <div className="grid place-items-center h-screen bg-[#f1f5b] text-[#474f5c] relative overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="absolute w-[100vmin] h-[100vmin] bg-[#104147] rounded-[47%_53%_61%_39%/_45%_51%_49%_55%] top-[-40vmin] left-[-50vmin] animate-move"></div>
        <div className="absolute w-[100vmin] h-[100vmin] bg-[#d45d35] rounded-[47%_53%_61%_39%/_45%_51%_49%_55%] right-[-50vmin] bottom-[-55vmin] animate-move-reverse"></div>
      </div>
      <div className="relative bg-white p-8 rounded-3xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mt-28 mb-10 text-[#104147]">Sign In</h2>
        <form className="grid gap-3 mb-6" onSubmit={handleSubmit}>
          <div className="relative">
            <HiOutlineUserCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input 
              type="email" 
              placeholder="Username" 
              className="w-full h-14 rounded-md pl-12 pr-4 bg-gray-100 focus:outline-none"
            />
          </div>
          <div className="relative">
            <CiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"/>
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full h-14 rounded-md pl-12 pr-4 bg-gray-100 focus:outline-none"
            />
          </div>
          <button type="submit" className="w-full h-14 rounded-md bg-[#104147] text-white font-medium hover:bg-[#d45d35] transition">Sign In</button>
        </form>
        <a href="#" className="text-[#104147] hover:underline block mb-6">Forgot password?</a>
        <div className="text-gray-600">
          Need an account? <a href="/signup" className="text-[#d45d35] hover:underline">Sign up here</a>
        </div>
      </div>
    </div>
  );
}

export default Signin;