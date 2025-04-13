import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom'
import { HiMenuAlt3 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import Footer from './Footer/Footer';
import ScrollToTop from './ScrollToTop'

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };
  return (
    <>
      <nav className="flex items-center justify-between h-[20vh] px-8  z-10">
      <div className="flex items-center">
        <h2 className="text-4xl font-bold texttext-[#352208] font-quicksand">
          UrbanNest</h2>
      </div>

      <ul className="hidden md:flex items-center space-x-6">
        <li>
          <NavLink className="text-gradient-to-r from-[#104147] to-[#12365c] text-lg font-semibold font-outfit" to="/"> Home </NavLink> </li> <li>
          <NavLink className=" text-[#352208] text-lg font-medium hover:border-b-2 border-[#104147] transition-all" to="pricing">  Pricing </NavLink></li>
        <li> <NavLink className=" text-[#352208] text-lg font-medium hover:border-b-2 border-[#104147] transition-all" to="gallery"> Gallery</NavLink> </li>
        <li> <NavLink className=" text-[#352208] text-lg font-medium hover:border-b-2 border-[#104147] transition-all" to="service"> Service </NavLink> </li>
        <li><NavLink className=" text-[#352208] text-lg font-medium hover:border-b-2 border-[#104147] transition-all capitalize" to="features">Features</NavLink> </li>
        <li><NavLink className=" text-[#352208] text-lg font-medium hover:border-b-2 border-[#104147] transition-all capitalize" to="registervendor">Get Listed</NavLink> </li>
      </ul>
      <div className="hidden md:flex items-center space-x-4">
  <NavLink className="text-[#352208] text-lg font-semibold tracking-wider px-4 py-2 hover:scale-110 transition-transform"to="login">Sign In</NavLink>
  <NavLink className="flex items-center space-x-2 border-2 border-[#352208] text-[#352208] px-4 py-2 rounded-lg hover:scale-110 transition-transform"to="register"> <span className="text-lg font-semibold">Sign Up</span></NavLink>
</div>

      <div className="md:hidden">
            <button className="text-[#352208]" onClick={toggleMenu}>
            <HiMenuAlt3 className="h-6 w-6 text-[#352208]"/>
            </button>
          </div>
    </nav>
    <div
          className={`fixed inset-0 bg-[#e1bb80] transition-transform duration-300 ease-in-out z-50 ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <button onClick={toggleMenu} className="absolute top-6 right-6 text-[#352208]">
              <GrClose className="h-8 w-8 text-[#352208]"/>
            </button>
            <ul className="w-full text-center space-y-8">
              <li><NavLink className="text-[#352208] text-2xl font-semibold hover:text-[#352208] transition-colors duration-200 block py-3 font-roboto" to="" onClick={toggleMenu}>Home</NavLink></li><li>
                <NavLink 
                  className="text-[#352208] text-2xl font-semibold hover:text-[#352208] transition-colors duration-200 block py-3 font-roboto" 
                  to="pricing"
                  onClick={toggleMenu}
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink 
                  className="text-[#352208] text-2xl font-semibold hover:text-[#352208] transition-colors duration-200 block py-3 font-roboto" 
                  to="gallery"
                  onClick={toggleMenu}
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink 
                  className="text-[#352208] text-2xl font-semibold hover:text-[#352208] transition-colors duration-200 block py-3 font-roboto" 
                  to="service"
                  onClick={toggleMenu}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink 
                  className="text-[#352208] text-2xl font-semibold hover:text-[#352208] transition-colors duration-200 block py-3 font-roboto" 
                  to="features"
                  onClick={toggleMenu}
                >
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink 
                  className="text-[#352208] text-2xl font-semibold hover:text-[#352208] transition-colors duration-200 block py-3 font-roboto" 
                  to="registervendor"
                  onClick={toggleMenu}
                >
                  Become a vendor
                </NavLink>
              </li>
              <li>
                <NavLink 
                  className="text-[#352208] text-2xl font-semibold hover:text-[#352208] transition-colors duration-200 block py-3 font-roboto" 
                  to="register"
                  onClick={toggleMenu}
                >
                  Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink 
                  className="text-[#352208] text-2xl font-semibold hover:text-[#352208] transition-colors duration-200 block py-3 font-roboto" 
                  to="login"
                  onClick={toggleMenu}
                >
                  Sign In
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <main>
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
        <ScrollToTop/>
    </>
  )
}

export default Layout