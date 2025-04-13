import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdDashboard, MdOutlinePrivacyTip, MdMenu, MdClose } from 'react-icons/md';
import { MdOutlineFastfood,  } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { PiChefHatThin } from "react-icons/pi";
import { FaHotel } from "react-icons/fa6";
import { GiDrinkMe } from "react-icons/gi";
import { FaExpandAlt } from 'react-icons/fa';
import UserProfile from './Dashpages/UserProfile';

const Sidebar = () => {
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
        ${mobileMenuOpen ? 'absolute top-0 left-0 z-50 bg-white w-64 h-full' : 'hidden lg:block'}`}>
        
        <nav className={`h-full bg-white text-[#352208] p-4 rounded-xl flex flex-col transition-all duration-300 
          overflow-y-auto scrollbar-thin scrollbar-thumb-[#352208]/30 ${mobileMenuOpen ? 'block' : 'hidden'} lg:block`}>

          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-xl font-semibold transition-all duration-300 ${collapsed ? 'hidden' : 'block'}`}>
              <span className="text-[#352208]">Urban</span>Nest
            </h2>
            <button onClick={() => setCollapsed(!collapsed)} className="p-2 bg-[#352208] rounded-full">
              <FaExpandAlt className="text-[#e1bb80]" />
            </button>
          </div>

          <div className="mb-4">
            <input 
              type="search" 
              placeholder="Search for anything" 
              className="w-full p-2 rounded-md text-[#e1bb80] bg-[#352208] outline-none"
            />
          </div>
          <UserProfile />
          <ul className="flex flex-col gap-3 mt-4">
            <li><NavItem to="/dashboard/dashboard" icon={<MdDashboard />} label="Dashboard" collapsed={collapsed} /></li>
            <li><NavItem to="/dashboard/bars" icon={<GiDrinkMe />} label="Explore Bars" collapsed={collapsed} /></li>
            <li><NavItem to="/dashboard/foodvendors" icon={<MdOutlineFastfood />} label="Food Vendors" collapsed={collapsed} /></li>
            <li><NavItem to="/dashboard/order" icon={<CiShoppingCart />} label="Orders" collapsed={collapsed} /></li>
            <li><NavItem to="/dashboard/favorites" icon={<MdOutlineFavoriteBorder />} label="Favorites" collapsed={collapsed} /></li>
            <li><NavItem to="/dashboard/checkout" icon={<MdOutlineShoppingCartCheckout />} label="Checkout" collapsed={collapsed} /></li>
            <li><NavItem to="/dashboard/hotels" icon={<FaHotel />} label="Hotels" collapsed={collapsed} /></li>
            <li><NavItem to="/dashboard/reservation" icon={<MdOutlinePrivacyTip />} label="Reservations" collapsed={collapsed} /></li>
            <li><NavItem to="/dashboard/explore" icon={<PiChefHatThin />} label="Explore" collapsed={collapsed} /></li>
            <li><NavItem to="/dashboard/support" icon={<MdOutlineSupportAgent />} label="Support" collapsed={collapsed} /></li>
          </ul>
        </nav>
      </div>
      <div className={`lg:ml-${collapsed ? '20' : '64'} ml-0`}>
      </div>
    </>
  );
};


const NavItem = ({ to, icon, label, collapsed }) => (
  <NavLink 
    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#e1bb80]" 
    to={to}
  >
    {icon} {!collapsed && label}
  </NavLink>
);

export default Sidebar;