import { useState } from "react";
import { motion } from "framer-motion";
import HY from '../assets/HY.jpg'
import Ha from '../assets/Ha.jpg'
import HB from '../assets/HB.jpg'
import HC from '../assets/HC.jpg'
import HD from '../assets/HD.jpg'
import HE from '../assets/HE.jpg'
import HF from '../assets/HF.jpg'
import HG from '../assets/HG.jpg'
import HH from '../assets/HH.jpg'
import HI from '../assets/HI.jpg'
import HJ from '../assets/HJ.jpg'
import HK from '../assets/HK.jpg'
import HL from '../assets/HL.jpg'
import HM from '../assets/HM.jpg'
import HN from '../assets/HN.jpg'
import HO from '../assets/HO.jpg'
import QA from '../assets/QA.jpg'
import QB from '../assets/QB.jpg'
import QC from '../assets/QC.jpg'
import QD from '../assets/QD.jpg'
import QF from '../assets/QF.jpg'
import QG from '../assets/QG.jpg'
import QH from '../assets/QH.jpg'
import QI from '../assets/QI.jpg'
import QJ from '../assets/QJ.jpg'
import QK from '../assets/QK.jpg'
import QL from '../assets/QL.jpg'
import QN from '../assets/QN.jpg'
import QO from '../assets/QO.jpg'
import QT from '../assets/QT.jpg'
import QP from '../assets/QP.jpg'
import QQ from '../assets/QQ.jpg'
import QS from '../assets/QS.jpg'
import QV from '../assets/QV.jpg'
import PG from '../assets/PG.jpg'
import QE from '../assets/QE.jpg'
import NBA from '../assets/NBA.jpg'
import MENU3 from '../assets/MENU3.jpg'
import MENU4 from '../assets/MENU4.jpg'
import MENU7 from '../assets/MENU7.jpg'
import MENU2 from '../assets/MENU2.jpg'
import HP from '../assets/HP.jpg'
import AFR1 from '../assets/AFR1.jpg'
import AFR3 from '../assets/AFR3.jpg'
import AFR4 from '../assets/AFR4.jpg'
import AFR5 from '../assets/AFR5.jpg'
import Akara from '../assets/Akara.jpg'
import CHEF7 from '../assets/CHEF7.jpg'
import CHEF8 from '../assets/CHEF8.jpg'
import CHEF9 from '../assets/CHEF9.jpg'
import CONT13 from '../assets/CONT13.jpg'
import SEA9 from '../assets/SEA9.jpg'
import SEA1 from '../assets/SEA1.jpg'
import SAC from '../assets/SAC.jpg'
import SAD from '../assets/SAD.jpg'


const Gallery = () => {
  const [formData, setFormData] = useState({
    venueName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    menuItems: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };
  
  return (
    <>
  <div className="flex flex-col lg:flex-row items-stretch m-5">
  <motion.div
    className="flex-1"
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <img
      src={HY}
      alt="Food Photography"
      className="w-full lg:w-[600px] h-auto rounded-[32px_64px_64px_32px]"
    />
  </motion.div>

  <div className="flex-1 p-5">
    <motion.h1
      className="mt-8 font-quicksand w-full lg:w-[490px] text-[#352208] capitalize font-medium text-[32px] lg:text-[50px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      Food Photography & Videography
    </motion.h1>

    <motion.p
      className="mb-4 font-quicksand font-normal text-[14px] lg:text-[16px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
    >
      Food photography is more than just capturing an image; it's about
      creating an experience that entices the viewer's senses, turning a
      simple dish into a visual masterpiece. Great food photography can
      make a dish look irresistible, highlighting textures, colors, and
      flavors that draw people in, whether for a restaurant menu, social
      media, or an event. This level of detail and appeal can transform the
      way people perceive your food, making it look as delicious as it
      tastes.
    </motion.p>

    <motion.p
      className="mb-4 font-quicksand font-normal text-[14px] lg:text-[16px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      viewport={{ once: true }}
    >
      Hiring a professional food photographer for your event can bring that
      extra level of elegance and attraction. With expert lighting,
      composition, and styling, we ensure that each shot makes your dishes
      stand out, leaving a lasting impression on your guests. Let us help
      you showcase your culinary creations in the best light possible – reach
      out today to book one of our talented food photographers for your event!
    </motion.p>
  </div>
</div>

<div className="text-center m-5 p-5">
  <h2 className="mt-8 font-quicksand text-[#352208] capitalize font-medium text-[40px]">
    Our Food Photography
  </h2>
  <p className="text-base text-gray-600 mb-8 font-normal">
    Capturing the essence of every dish with stunning visuals. Explore our gallery to see our work.
  </p>
  <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
    {[Akara, CHEF7, Ha,SAC, HB,QE, HC,SEA1, HD, HE, HF,AFR3, HG, CHEF8,MENU4, HH, HI, HJ, HK, HL, HM,AFR5, HN, HO, QA, SAD, SEA9,CHEF9, QB, MENU7,QC,AFR4, QD, QF,MENU3, QH, QI,CONT13, QJ, QK, QL,MENU2, HP, QO, QP, QV,QG,QQ, QS,QT,NBA].map((image, index) => (
      <div key={index} className="overflow-hidden rounded-lg">
        <img
          src={image}
          alt=""
          className="w-full h-auto block transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
    ))}
  </div>
</div>

<div className="flex flex-col lg:flex-row items-stretch m-5">
  <div className="flex-1 p-5">
    <h1 className="mt-8 font-quicksand w-full lg:w-[490px] text-[#352208] capitalize font-medium text-[32px] lg:text-[50px]">
      Delicious Food Photography
    </h1>
    <ul className="text-[1.25rem] lg:text-[1.5rem] font-quicksand flex flex-col gap-6 lg:gap-8">
      <li className="font-light">
        Enjoy affordable, fixed pricing for high-quality food photography or combined food photography and videography.
      </li>
      <li className="font-light">
        With our pay-per-menu-item approach, you’re billed by each dish rather than by the hour.
      </li>
      <li className="font-light">
        Your quoted price covers post-editing and uploading your images and videos directly to your menu.
      </li>
    </ul>
  </div>

  <div className="flex-1">
    <img
      src={PG}
      alt="Food Photography"
      className="w-full lg:w-[450px] h-auto rounded-[32px_64px_64px_32px] brightness-50"
    />
  </div>
</div>

<form
      className="flex flex-col max-w-md mx-auto mt-20 p-5 border border-gray-300 rounded-lg bg-gray-100"
      onSubmit={handleSubmit}
    >
      <h2 className="text-center mb-8 text-[#352208] capitalize font-quicksand font-medium text-xl">
        Request for Food Photography Booking
      </h2>

      {[
        { label: "Venue/Restaurant Name", name: "venueName", type: "text" },
        { label: "First Name", name: "firstName", type: "text" },
        { label: "Last Name", name: "lastName", type: "text" },
        { label: "Email", name: "email", type: "email" },
        { label: "Phone Number", name: "phone", type: "tel" },
        { label: "Number of Menu Items for Photography", name: "menuItems", type: "number" },
      ].map((field) => (
        <label key={field.name} className="flex flex-col mb-4 text-gray-700 font-quicksand font-normal">
          {field.label}:
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            required
            className="p-2 mt-1 border border-gray-300 rounded-md font-quicksand"
          />
        </label>
      ))}

      <button
        type="submit"
        className="p-3 bg-[#e1bb80] text-[#352208] text-lg rounded-md cursor-pointer mt-3 font-quicksand font-normal hover:bg-[#352208] hover:text-[#e1bb80]"
      >
        Submit
      </button>
    </form>



    </>
  )
}

export default Gallery