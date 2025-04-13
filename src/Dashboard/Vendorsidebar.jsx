import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { FaExpandAlt } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { MdOutlinePayment } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdMenu, MdClose } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import { MdHelpCenter } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";

const Vendorsidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <button 
        onClick={toggleMenu} 
        className="lg:hidden p-2 bg-[#352208] rounded-full absolute top-4 left-4 z-50"
      >
        <MdMenu className="text-white" />
      </button>

      {mobileMenuOpen && (
        <button 
          onClick={toggleMenu} 
          className="lg:hidden p-2 bg-[#352208] rounded-full absolute top-4 right-4 z-50"
        >
          <MdClose className="text-white" />
        </button>
      )}

      <div className={`h-screen p-2 relative transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'} 
        ${mobileMenuOpen ? 'absolute top-0 left-0 z-50 bg-[#ffff] w-64 h-full' : 'hidden lg:block'}`}>
        
        <nav className={`fixed h-full bg-[#ffff] text-[#352208] p-4 rounded-xl flex flex-col transition-all duration-300 ${mobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-xl font-semibold transition-all duration-300 ${collapsed ? 'hidden' : 'block'}`}>
              <span className="text-[#352208]">Urban</span>Nest
            </h2>
            <button onClick={() => setCollapsed(!collapsed)} className="p-2 bg-[#352208] rounded-full">
              <FaExpandAlt className="text-white" />
            </button>
          </div>

          <div className="mb-4">
            <input 
              type="search" 
              placeholder="Search for anything" 
              className="w-full p-2 rounded-md text-[#e1bb80] bg-[#352208] outline-none"
            />
          </div>

          <ul className="flex flex-col gap-3">
            <li>
              <NavLink className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#e1bb80]" to="/dashboard/vendordash">
                <MdDashboard /> {!collapsed && 'Dashboard'}
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#e1bb80]" to="/dashboard/barmenumanagement">
              <MdManageAccounts /> {!collapsed && 'Manage Bar Menu'}
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#e1bb80]" to="/dashboard/contactus">
                <IoMdCall /> {!collapsed && 'Contact Us'}
              </NavLink>
            </li>

            <li>
              <NavLink className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#e1bb80]" to="/dashboard/menumanagement">
              <MdManageAccounts /> {!collapsed && 'Manage Menu'}
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#e1bb80]" to="/dashboard/listingmanagement">
              <MdManageAccounts /> {!collapsed && 'Manage Listings'}
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#e1bb80]" to="/dashboard/reservationmanagement">
              <MdManageAccounts /> {!collapsed && 'Manage Reservations'}
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#e1bb80]" to="/dashboard/supporthelpcenter">
              <MdHelpCenter /> {!collapsed && 'Help Center'}
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#e1bb80]" to="/dashboard/analyticsreports">
              <IoMdAnalytics /> {!collapsed && 'Analytics Reports'}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className={`lg:ml-${collapsed ? '20' : '64'} ml-0`}>
      </div>
    </>
  );
};

export default Vendorsidebar;