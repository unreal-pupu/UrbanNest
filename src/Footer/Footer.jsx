import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaSnapchatGhost, FaTwitter } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-[#e1bb80] text-[#352208] py-10">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold">
          <p>Stay Connected</p>
        </div>

        <div className="flex space-x-6">
          <a 
            href="https://www.pinterest.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl hover:bg-[#352208] hover:text-[#e1bb80] transition-all duration-300 ease-in-out transform hover:scale-110 p-2 rounded-full"
          >
            <FaPinterest />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl hover:bg-[#352208] hover:text-[#e1bb80]  transition-all duration-300 ease-in-out transform hover:scale-110 p-2 rounded-full"
          >
            <FaTwitter />
          </a>
          <a 
            href="https://www.facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl hover:bg-[#352208] hover:text-[#e1bb80]  transition-all duration-300 ease-in-out transform hover:scale-110 p-2 rounded-full"
          >
            <FaFacebook />
          </a>
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl hover:bg-[#352208] hover:text-[#e1bb80]  transition-all duration-300 ease-in-out transform hover:scale-110 p-2 rounded-full"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://www.tiktok.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl hover:bg-[#352208] hover:text-[#e1bb80]  transition-all duration-300 ease-in-out transform hover:scale-110 p-2 rounded-full"
          >
            <SiTiktok />
          </a>
          <a 
            href="https://www.snapchat.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl hover:bg-[#352208] hover:text-[#e1bb80]  transition-all duration-300 ease-in-out transform hover:scale-110 p-2 rounded-full"
          >
            <FaSnapchatGhost />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;