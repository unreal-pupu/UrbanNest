import React, { useState } from "react";
import { FaSearch, FaRedo, FaTimes } from "react-icons/fa";
import PASTA2 from '../../assets/PASTA2.jpg';
import SAL3 from '../../assets/SAL3.jpg';
import MENU6 from '../../assets/MENU6.jpg';
import { motion, AnimatePresence } from "framer-motion";

const initialOrders = [
  {
    id: 1,
    name: "Creamy Alfredo Pasta",
    price: "$12.99",
    image: PASTA2,
    status: "Delivered",
  },
  {
    id: 2,
    name: "Fresh Garden Salad",
    price: "$8.50",
    image: SAL3,
    status: "In Progress",
  },
  {
    id: 3,
    name: "Chef's Special Platter",
    price: "$16.75",
    image: MENU6,
    status: "Cancelled",
  },
  {
    id: 4,
    name: "Classic Caesar Salad",
    price: "$9.25",
    image: SAL3,
    status: "Delivered",
  },
  {
    id: 5,
    name: "Spaghetti Bolognese",
    price: "$13.00",
    image: PASTA2,
    status: "In Progress",
  },
];

const itemsPerPage = 3;

const Order = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [page, setPage] = useState(1);

  const filteredOrders = orders.filter((order) => {
    const matchesStatus = statusFilter === "All" || order.status === statusFilter;
    const matchesSearch = order.name.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const paginatedOrders = filteredOrders.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

  const reorderItem = (order) => {
    const newOrder = { ...order, id: Date.now(), status: "In Progress" };
    setOrders([newOrder, ...orders]);
  };

  const cancelReorder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-[#352208] mb-6 text-center">My Orders</h1>

      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
        <div className="relative w-full sm:w-1/2">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search orders..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#352208]"
          />
        </div>
        <select
          className="w-full sm:w-48 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Delivered">Delivered</option>
          <option value="In Progress">In Progress</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {paginatedOrders.map((order) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img src={order.image} alt={order.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{order.name}</h3>
                <p className="text-gray-600">{order.price}</p>
                <p
                  className={`mt-1 font-medium ${
                    order.status === "Delivered"
                      ? "text-green-600"
                      : order.status === "Cancelled"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {order.status}
                </p>
                <div className="mt-4 flex gap-3">
                  <button
                    onClick={() => reorderItem(order)}
                    className="flex items-center gap-2 px-4 py-2 bg-[#352208] text-[#e1bb80] rounded-lg hover:bg-[#e1bb80] hover:text-[#352208] transition"
                  >
                    <FaRedo /> Reorder
                  </button>
                  <button
                    onClick={() => cancelReorder(order.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-[#e1bb80] text-[#352208] rounded-lg hover:bg-[#352208] hover:text-[#e1bb80] transition"
                  >
                    <FaTimes /> Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {paginatedOrders.length === 0 && (
          <div className="col-span-full text-center text-gray-500">No orders found.</div>
        )}
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 rounded-md border text-sm font-medium transition ${
              page === i + 1
                ? "bg-blue-500 text-white border-blue-500"
                : "text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Order;
