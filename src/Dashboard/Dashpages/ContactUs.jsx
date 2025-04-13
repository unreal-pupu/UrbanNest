import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BsSnapchat } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { IoIosCall } from 'react-icons/io';
import { MdOutlineEmail } from 'react-icons/md';
const ContactUs = () => {
  return (
   <>
   <div className="flex flex-col items-center text-center p-6">
        <h1 className="text-4xl font-semibold text-[#352208] capitalize">Contact Us</h1>
        <p className="text-lg text-gray-600 max-w-lg mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate unde nostrum quae eveniet quaerat quis.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-start p-10 gap-10">
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl font-semibold text-[#352208] capitalize">Get in touch</h1>
          <p className="text-lg text-gray-700">We're glad to have you here! Connect with us for the best taste experiences.</p>
          <div className="space-y-3 text-gray-700">
            <p className="flex items-center gap-3"><CiLocationOn className='text-xl text-teal-800'/> Birmingham City</p>
            <p className="flex items-center gap-3"><IoIosCall className='text-xl text-teal-800'/> Contact us today for more information</p>
            <p className="flex items-center gap-3"><MdOutlineEmail className='text-xl text-teal-800'/> support@sip&savor.com</p>
          </div>
          <h3 className='text-2xl font-semibold text-[#352208] capitalize'>Follow Us</h3>
          <div className="flex gap-4 text-[#352208] text-xl">
            <FaFacebookF className='cursor-pointer hover:text-[#e1bb80] transition' />
            <FaXTwitter className='cursor-pointer hover:text-[#e1bb80] transition' />
            <BsSnapchat className='cursor-pointer hover:text-[#e1bb80] transition' />
            <FaInstagram className='cursor-pointer hover:text-[#e1bb80] transition' />
          </div>
        </div>

        <div className="flex-1 bg-white shadow-lg p-6 rounded-lg max-w-md w-full">
          <h3 className="text-3xl font-semibold text-[#352208] mb-4">Send a Message</h3>
          <div className="space-y-4">
            <div>
              <label className="text-gray-700 text-sm font-medium">Name</label>
              <input type="text" className="w-full p-3 mt-1 border rounded-md focus:ring-2 focus:ring-[#352208] focus:outline-none" />
            </div>
            <div>
              <label className="text-gray-700 text-sm font-medium">Email</label>
              <input type="text" className="w-full p-3 mt-1 border rounded-md focus:ring-2 focus:ring-[#352208] focus:outline-none" />
            </div>
            <div>
              <label className="text-gray-700 text-sm font-medium">Message</label>
              <textarea rows="4" className="w-full p-3 mt-1 border rounded-md focus:ring-2 focus:ring-[#352208] focus:outline-none"></textarea>
            </div>
            <button className='w-full bg-[#352208] text-[#e1bb80] py-3 rounded-md font-medium hover:bg-[#e1bb80] hover:text-[#352208] transition'>Submit</button>
          </div>
        </div>
      </div>

   </>
  )
}

export default ContactUs