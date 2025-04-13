import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contex/AuthContext";

const Login = () => {
  const { setIsAuthenticated, setUserType } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "vendor@example.com") {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userType", "vendor");
      setIsAuthenticated(true);
      setUserType("vendor");
      navigate("/dashboard/vendor");
    } else {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userType", "customer");
      setIsAuthenticated(true);
      setUserType("customer");
      navigate("/dashboard/dashboard");
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-white shadow-lg rounded-lg  mt-20 mb-80">
      <h2 className="text-center text-2xl font-bold text-[#352208] mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="w-full bg-[#352208] text-[#e1bb80] p-2 rounded-md">Login</button>
      </form>
    </div>
  );
};

export default Login;