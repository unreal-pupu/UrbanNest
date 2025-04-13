import { useState, useEffect } from "react";
import { GrGoogleWallet } from "react-icons/gr";
import { FaAirbnb } from "react-icons/fa";
import { FaCcStripe } from "react-icons/fa";
import { SiUbereats } from "react-icons/si";
import { SiWoocommerce } from "react-icons/si";
import { SiAmazon } from "react-icons/si";
import { SiIntercom } from "react-icons/si";
import { FaShopify } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Menu from '../assets/menu.jpg'
import Kast from '../assets/Kast.jpg'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import DBBBB from '../assets/DBBBB.jpg'
import DBBBC from '../assets/DBBBC.jpg'
import DBBE from '../assets/DBBE.jpg'
import DRE from '../assets/DRE.jpg'
import DRL from '../assets/DRL.jpg'
import DRK from '../assets/DRK.jpg'
import HJ from '../assets/HJ.jpg'
import SAG from '../assets/SAG.jpg'
import DRIA from '../assets/DRIA.jpg'
import DRINKAT from '../assets/DRINKAT.jpg'
import DRA from '../assets/DRA.jpg'
import DRINF from '../assets/DRINF.jpg'
import EGAI from '../assets/EGAI.jpg'
import EDUBA from '../assets/EDUBA.jpg'
import CONFI from '../assets/CONFI.jpg'
import PUPU from '../assets/PUPU.jpg'
import { motion } from "framer-motion";
import POPA from '../assets/POPA.jpg'
import POPB from '../assets/POPB.jpg'
import POPC from '../assets/POPC.jpg'
import POPE from '../assets/POPE.jpg'
import POPF from '../assets/POPF.jpg'
import POPG from '../assets/POPG.jpg'
import POPH from '../assets/POPH.jpg'
import POPI from '../assets/POPI.jpg'
import POPJ from '../assets/POPJ.jpg'
import POPL from '../assets/POPL.jpg'
import POPM from '../assets/POPM.jpg'
import POPK from '../assets/POPK.jpg'
import { Star, Heart, PercentCircle, UserPlus, Sparkles } from 'lucide-react';
import { Store, Rocket, Users, LineChart } from 'lucide-react';

const Home = () => {
  
  const images = [DRIA,DBBBC,DRE,DRK,DRL,DBBE,DRA,SAG,DBBBB,HJ,DRINF,DRINKAT];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const reviews = [
    { id: 1, name: "Pupu", profession: "Software Engineer", text: "This product is amazing!", image:  PUPU},
    { id: 2, name: "Ebikeme Egai", profession: "Freelancer", text: "The design is top-notch!", image: EGAI },
    { id: 3, name: "Edubamoere Alaboh", profession: "Marketing Manager", text: "Great customer support!", image: EDUBA },
    { id: 4, name: "Confidence Columbus", profession: "Freelance Writer", text: "It has made my job easier!", image: CONFI },
  ];
const [selectedReview, setSelectedReview] = useState(reviews[0]);

const vendors = [
  { id: 1, name: 'Sunset Hotel', type: 'Hotel', image: POPI, rating: 4.5 },
  { id: 2, name: 'Coastal Bites', type: 'Restaurant', image: POPK, rating: 4.2 },
  { id: 3, name: 'Palm Lounge', type: 'Bar', image: POPA, rating: 4.0 },
  { id: 4, name: 'Moonlight Hotel', type: 'Hotel', image: POPF, rating: 4.6 },
  { id: 5, name: 'Sizzle Grill', type: 'Restaurant', image: POPL, rating: 4.3 },
  { id: 6, name: 'Skyline Bar', type: 'Bar', image: POPE, rating: 4.1 },
  { id: 7, name: 'Urban Stay', type: 'Hotel', image: POPH, rating: 4.7 },
  { id: 8, name: 'Fusion Dine', type: 'Restaurant', image: POPJ, rating: 4.4 },
  { id: 9, name: 'Nightcap Spot', type: 'Bar', image: POPB, rating: 4.2 },
  { id: 10, name: 'Luxe Hotel', type: 'Hotel', image: POPG, rating: 4.8 },
  { id: 11, name: 'The Gourmet', type: 'Restaurant', image: POPM, rating: 4.5 },
  { id: 12, name: 'Chill Bar', type: 'Bar', image: POPC, rating: 4.0 },
];


const benefits = [
  {
    icon: <PercentCircle className="w-6 h-6 text-indigo-600" />,
    title: 'Exclusive Discounts',
    description: 'Enjoy members-only deals on restaurants, bars, and hotels.',
  },
  {
    icon: <Sparkles className="w-6 h-6 text-pink-500" />,
    title: 'Personalized Recommendations',
    description: 'Get suggestions tailored to your taste and location.',
  },
  {
    icon: <Heart className="w-6 h-6 text-red-500" />,
    title: 'Favorites & Wishlists',
    description: 'Save your favorite spots and plan future visits easily.',
  },
  {
    icon: <UserPlus className="w-6 h-6 text-emerald-500" />,
    title: 'One-Click Sign-Up',
    description: 'Sign up for free and get started in seconds.',
  },
  {
    icon: <Star className="w-6 h-6 text-yellow-400" />,
    title: 'Verified Ratings & Reviews',
    description: 'Read trusted reviews from fellow users before you book.',
  },
];

const vendorPoints = [
  {
    icon: <Store className="w-6 h-6 text-blue-600" />,
    title: 'Reach More Customers',
    description: 'List your business where users are already looking for top-rated places to eat, drink, and stay.',
  },
  {
    icon: <LineChart className="w-6 h-6 text-green-600" />,
    title: 'Boost Your Visibility',
    description: 'Appear in searches, get featured in categories, and grow your reputation with reviews.',
  },
  {
    icon: <Rocket className="w-6 h-6 text-purple-600" />,
    title: 'Promote with Ease',
    description: 'Run special offers, discounts, and track engagement with your listing.',
  },
  {
    icon: <Users className="w-6 h-6 text-pink-600" />,
    title: 'Join a Growing Network',
    description: 'Be part of a thriving community of trusted vendors across cities.',
  },
];



  return (
    <> 
<div className="bg-[#ffff] min-h-screen">
  <div className="bg-[#ffff] py-20 px-4">
    <motion.h1
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-3xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold pt-20 mb-10 font-outfit text-[#352208] text-center lg:text-left lg:pl-80"
    >
      Discover Restaurants, Bars & Hotels
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.4 }}
      className="mt-4 text-base sm:text-lg font-quicksand font-outfit text-center lg:text-left lg:pl-80 max-w-full lg:w-[950px] mx-auto lg:mx-0"
    >
      UrbanNest is committed to bringing together the finest hotels, bars, and restaurants in one seamless platform. Whether you're looking to order delicious meals, enjoy premium drinks, or make hassle-free reservations, we provide a convenient and reliable way to explore top hospitality services.
    </motion.p>

    <motion.div
      className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mt-10 lg:pl-80"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.3,
          },
        },
      }}
    >
      <motion.button
        onClick={() => window.location.href = '/gallery'}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center px-8 py-3 bg-[#352208] text-white font-bold rounded-full shadow-lg transition-all duration-300"
      >
        Go to Gallery
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </motion.button>

      <motion.button
        onClick={() => window.location.href = '/pricing'}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#104147] to-[#12365c] text-white font-bold rounded-full shadow-lg transition-all duration-300"
      >
        View Pricing
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </motion.button>
    </motion.div>
  </div>
</div>

<div className="py-1 px-6 text-center lg:text-left lg:pl-80 overflow-hidden">
  <motion.h1
    className="text-2xl font-bold text-[#352208]"
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    How It Works
  </motion.h1>

  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
    <motion.div
      className="p-6 bg-white shadow rounded-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h3 className="text-xl font-semibold font-outfit text-[#352208]">Scan</h3>
      <p className="mt-2">
        Unlock a world of amazing experiences with just a scan! Use our QR code to instantly explore top hotels, bars, and restaurants, browse exclusive offerings, and book your next adventure in seconds. Fast, easy, and hassle-free!
      </p>
    </motion.div>

    <motion.div
      className="p-6 bg-white shadow rounded-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <h3 className="text-xl font-semibold text-[#352208]">Discover</h3>
      <p className="mt-2">
        Embark on a journey of discovery! Uncover the hottest hotels, trendiest bars, and finest dining spots—all at your fingertips. Your next great experience is just a click away!
      </p>
    </motion.div>

    <motion.div
      className="p-6 bg-white shadow rounded-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <h3 className="text-xl font-semibold text-[#352208]">Enjoy</h3>
      <p className="mt-2">
        Check in to comfort, check out the hassle! Instantly book top hotels and reserve tables at the best restaurants—seamless, stress-free, and just a tap away!
      </p>
    </motion.div>
  </div>
</div>

<div className="py-12 px-6 text-center lg:text-left lg:pl-80 overflow-hidden">
  <motion.h2
    className="text-2xl font-bold text-[#352208]"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    Featured Locations
  </motion.h2>

  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
    {[ 
      { title: "Top Restaurants", text: "Explore highly-rated restaurants near you." },
      { title: "Popular Bars", text: "Discover trending bars and lounges." },
      { title: "Luxury Hotels", text: "Find comfortable and luxurious stays." }
    ].map((item, index) => (
      <motion.div
        key={index}
        className="p-6 bg-white shadow rounded-lg"
        initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      >
        <h3 className="text-xl font-semibold text-[#352208]">{item.title}</h3>
        <p className="mt-2">{item.text}</p>
      </motion.div>
    ))}
  </div>
</div>

<section className="py-12 px-4 md:px-16 bg-gray-100">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Popular Vendors</h2>
        <p className="text-gray-600">Explore top-rated Hotels, Restaurants, and Bars</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {vendors.map((vendor, index) => (
          <motion.div
            key={vendor.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
          >
            <img src={vendor.image} alt={vendor.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-xl font-semibold">{vendor.name}</h4>
              <p className="text-sm text-gray-500">{vendor.type}</p>
              <div className="flex items-center mt-2">
                <div className="text-yellow-400 text-lg mr-2">★</div>
                <span className="text-gray-700 font-medium">{vendor.rating.toFixed(1)}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

<div className="text-center mt-[10rem] px-4">
  <p className="text-[20px] sm:text-[28px] mb-[30px] text-[#352208]">
    Over 50+ restaurants and hotels are growing with our platform
  </p>
  <div className="overflow-hidden w-full py-6">
  <div className="flex gap-[30px] sm:gap-[55px] animate-slide whitespace-nowrap">
    <div className="p-4 rounded-full bg-white shadow-md hover:scale-110 hover:bg-[#F2F7F2] hover:text-[#104147] transition-transform duration-300 ease-in-out">
      <GrGoogleWallet className="text-[40px] sm:text-[50px]" />
    </div>
    <div className="p-4 rounded-full bg-white shadow-md hover:scale-110 hover:bg-[#F2F7F2] hover:text-[#104147] transition-transform duration-300 ease-in-out">
      <FaAirbnb className="text-[40px] sm:text-[50px]" />
    </div>
    <div className="p-4 rounded-full bg-white shadow-md hover:scale-110 hover:bg-[#F2F7F2] hover:text-[#104147] transition-transform duration-300 ease-in-out">
      <FaCcStripe className="text-[40px] sm:text-[50px]" />
    </div>
    <div className="p-4 rounded-full bg-white shadow-md hover:scale-110 hover:bg-[#F2F7F2] hover:text-[#104147] transition-transform duration-300 ease-in-out">
      <SiUbereats className="text-[40px] sm:text-[50px]" />
    </div>
    <div className="p-4 rounded-full bg-white shadow-md hover:scale-110 hover:bg-[#F2F7F2] hover:text-[#104147] transition-transform duration-300 ease-in-out">
      <SiWoocommerce className="text-[40px] sm:text-[50px]" />
    </div>
    <div className="p-4 rounded-full bg-white shadow-md hover:scale-110 hover:bg-[#F2F7F2] hover:text-[#104147] transition-transform duration-300 ease-in-out">
      <SiAmazon className="text-[40px] sm:text-[50px]" />
    </div>
    <div className="p-4 rounded-full bg-white shadow-md hover:scale-110 hover:bg-[#F2F7F2] hover:text-[#104147] transition-transform duration-300 ease-in-out">
      <SiIntercom className="text-[40px] sm:text-[50px]" />
    </div>
    <div className="p-4 rounded-full bg-white shadow-md hover:scale-110 hover:bg-[#F2F7F2] hover:text-[#104147] transition-transform duration-300 ease-in-out">
      <FaShopify className="text-[40px] sm:text-[50px]" />
    </div>
    <div className="p-4 rounded-full bg-white shadow-md hover:scale-110 hover:bg-[#F2F7F2] hover:text-[#104147] transition-transform duration-300 ease-in-out">
      <FcGoogle className="text-[40px] sm:text-[50px]" />
    </div>
  </div>
</div>
</div>

<motion.h2
  className="text-[3em] mt-[4rem] mb-[4rem] text-[#352208] capitalize mx-auto max-w-[350px] text-center font-[Quicksand]"
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
>
  explorre services that we offer
</motion.h2>

<div className="text-center mx-auto max-w-[1200px] mt-[8rem] px-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 font-quicksand font-semibold">
    {[
      {
        title: "Personalized Concierge Services",
        text: "Offer a digital concierge to assist with recommendations, custom travel itineraries, and special requests."
      },
      {
        title: "Private Chef & Catering Services",
        text: "We connect users with professional chefs for private dining, catering, or in-home cooking experiences."
      },
      {
        title: "Food Photography",
        text: "We offer professional food photography services. Our experienced photographers ensure that your meals look as delicious online as they do in person. Interested in hiring a photographer? Contact us today and let us help you make your dishes shine!"
      },
      {
        title: "Food Delivery Services",
        text: "Order your favorites online and get them delivered fast! Enjoy exclusive online deals when you order directly from us!"
      }
    ].map((item, index) => (
      <motion.div
        key={index}
        className="bg-white shadow-xl rounded-2xl p-6 h-[350px] text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: index * 0.2,
          type: "spring",
          stiffness: 100
        }}
        viewport={{ once: true }}
      >
        <h4 className="text-[#352208] text-[22px] sm:text-[25px] capitalize mb-2">
          {item.title}
        </h4>
        <p className="text-sm sm:text-base text-gray-600">{item.text}</p>
      </motion.div>
    ))}
  </div>
</div>

<section className="py-14 bg-white px-6 md:px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Why Join Us?</h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          Sign up for free and unlock a world of dining, lounging, and stays at the best restaurants, bars, and hotels around you.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex-shrink-0">
              <div className="p-3 bg-white rounded-full shadow">{benefit.icon}</div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">{benefit.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

<div className="py-16 px-6 rounded-lg mt-12">
  <motion.div
    className="max-w-4xl mx-auto text-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <motion.h2
      className="text-4xl font-extrabold mb-4 text-[#352208]"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      Unlock Greater Profits with Targeted Marketing
    </motion.h2>

    <motion.p
      className="mt-4 text-lg font-light"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
    >
   Elevate your business by executing strategic campaigns aimed at engaging customers and boosting sales. Whether introducing new products, providing discounts, or hosting seasonal promotions, campaigns can drive significant results.
    </motion.p>

    <motion.p
      className="mt-4 text-lg font-light"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      viewport={{ once: true }}
    >
      By employing the right approach, you can draw in new customers, keep your current ones loyal, and enhance your profits. Begin launching campaigns that engage your audience and drive conversions today!
    </motion.p>
  </motion.div>
</div>


<div className="flex flex-col md:flex-row justify-between items-start relative mt-[6rem] md:mt-[10rem] px-4 sm:px-6 md:px-[70px]">
  <div className="text-left ml-0 md:ml-[9rem]">
    <h1 className="pt-[1.5rem] md:pt-[2rem] w-full md:w-[620px] mb-[1rem] capitalize font-[Quicksand] text-[28px] sm:text-[32px] md:text-[40px] text-[#352208] font-medium text-center md:text-left">
    Multiple menu configurations
    </h1>
    <h3 className="w-full md:w-[620px] mb-[1rem] capitalize font-[Quicksand] text-[20px] sm:text-[22px] md:text-[25px] text-[#352208] font-medium text-center md:text-left">
    Create your custom menu!
    </h3>
    <p className="text-[16px] sm:text-[18px] md:text-[20px] mt-[1rem] sm:mt-[2rem] px-2 sm:px-[2rem] md:pl-[2rem] lowercase font-[Quicksand] mb-[1rem] font-[400] w-full md:w-[750px] text-center md:text-left">
    Your menu is a key part of your brand, and we appreciate the significance of expressing your style. With our diverse menu templates, you can customize your menu to match your brand’s look while providing a distinctive online journey for your customers!
    </p>
  </div>

  <div className="relative flex justify-center md:justify-start gap-4 w-full md:w-[50%] mt-6 md:mt-0 px-2 sm:px-0">
    <img
      src={Menu}
      alt="Menu image"
      className="z-[1] w-[48%] sm:w-[45%] md:w-[28%] rounded-[10px] shadow-[0_4px_10px_rgba(0,_0,_0,_0.1)]"
    />
    <img
      src={Kast}
      alt="Kast image"
      className="z-[2] -ml-[20px] sm:-ml-[30px] w-[48%] sm:w-[45%] md:w-[31%] rounded-[10px] shadow-[0_4px_10px_rgba(0,_0,_0,_0.1)]"
    />
  </div>
</div>

<section className="py-16 bg-gray-50 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Become a Listed Vendor</h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Are you a hotel, bar, or restaurant owner? Get discovered by thousands of users actively searching for your services.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {vendorPoints.map((point, index) => (
          <motion.div
            key={index}
            className="flex items-start bg-white rounded-xl p-6 shadow hover:shadow-md transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="mr-4">{point.icon}</div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">{point.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{point.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
      <button
        onClick={() => window.location.href='/register'}
        className="flex items-center justify-center px-8 py-3 bg-white text-[#352208] font-semibold rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100"
      >
        Sign Up
        <svg
          className="w-5 h-5 ml-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </button>
      </div>
    </section>

<div className=" py-12 px-6 mt-20">
<div class="max-w-4xl mx-auto text-center">
    <h2 class="text-3xl font-bold text-[#352208]">Customizable delivery & pickup menu with commission rates that fit your needs!</h2>
    <p class="mt-4 text-lg text-gray-600">Cut down on reliance on delivery platforms and start managing direct online orders for delivery and takeout. Design a dedicated delivery menu for your dine-in and integrate it with your website.</p>
  </div>
</div>

<div className="w-full sm:w-[85%] max-w-[1200px] mx-auto py-[40px] px-[20px] bg-[#e1bb80] shadow-[0_4px_8px_rgba(0,_0,_0,_0.1)] mt-[7rem]">
  <h1 className="text-center text-[#352208] pt-[2rem] mx-auto w-full sm:w-[600px] mb-[1rem] capitalize font-[Quicksand] text-[24px] sm:text-[28px] md:text-[32px] font-medium">
  Gain Access to Exclusive Perks with Our Loyalty Card.
  </h1>

  <p className="text-[#352208] text-[16px] sm:text-[17px] md:text-[19px] mb-[15px] font-[Quicksand] pt-[2rem] font-[400]">
  At our core, we believe in rewarding your loyalty. With our Customer Loyalty Card, each time you shop, you earn a stamp that brings you closer to exclusive benefits. From your favorite drink to a delicious meal, every purchase counts.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[30px]">
    {[
      {
        title: "1. Sign Up",
        content:
          "Join our loyalty program in-store or online. You’ll receive a personalized loyalty card that tracks your visits and rewards.",
      },
      {
        title: "2. Earn Points",
        content:
          "Earn points with every meal! For every $1 spent, you’ll earn 1 point. The more you visit, the more points you collect!",
      },
      {
        title: "3. Redeem Rewards",
        content:
          "Once you accumulate enough points, you can redeem them for discounts, free appetizers, or a special dining experience.",
      },
      {
        title: "4. Exclusive Offers",
        content:
          "Get special discounts, birthday offers, and exclusive menu items as a loyalty member!",
      },
      {
        title: "5. Track Your Progress",
        content:
          "Monitor your points and rewards easily via our mobile app or website to stay updated on your loyalty status.",
      },
      {
        title: "6. Expiration & Terms",
        content:
          "Points may expire after 12 months of inactivity. Be sure to keep enjoying your meals and redeem your rewards before they expire!",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-white p-[20px] sm:p-[25px] rounded-[8px] shadow-[0_4px_8px_rgba(0,_0,_0,_0.1)] transition-transform ease transform duration-[0.3s] hover:translate-y-[-5px] hover:shadow-[0_8px_16px_rgba(0,_0,_0,_0.2)] border-l-[5px] border-l-[#352208]"
      >
        <h2 className="text-[#352208] text-[1.3rem] sm:text-[1.4rem] lg:text-[1.6rem] mb-[15px]">
          {item.title}
        </h2>
        <p className="text-[#666] text-[0.95rem] sm:text-[1rem]">{item.content}</p>
      </div>
    ))}
  </div>

  <div className="bg-[#f9f9f9] p-[20px] sm:p-[25px] rounded-[8px] mt-[40px]">
    <h2 className="text-center text-[#352208] text-[1.5rem] sm:text-[1.6rem] md:text-[2rem] mb-[20px]">
      Examples of Loyalty Rewards
    </h2>
    <div className="flex flex-col sm:flex-row gap-[20px] justify-between mt-[20px]">
      {[
        {
          title: "Free Appetizer",
          content: "Redeem 100 points for a free appetizer of your choice!",
        },
        {
          title: "Discount on Your Bill",
          content: "Get a $10 discount when you reach 200 points.",
        },
        {
          title: "VIP Dining Experience",
          content:
            "For 500 points, enjoy a VIP dinner experience with a personalized chef’s menu.",
        },
      ].map((reward, index) => (
        <div
          key={index}
          className="bg-white p-[20px] rounded-[8px] shadow-[0_4px_8px_rgba(0,_0,_0,_0.1)] flex-1 transition-transform ease transform duration-[0.3s] hover:translate-y-[-5px] hover:shadow-[0_8px_16px_rgba(0,_0,_0,_0.2)]"
        >
          <h3 className="text-[#352208] text-[1.1rem] sm:text-[1.2rem] mb-[10px]">
            {reward.title}
          </h3>
          <p className="text-[#555] text-[0.95rem] sm:text-[1rem]">{reward.content}</p>
        </div>
      ))}
    </div>
  </div>
</div>

<div className="relative w-full max-w-screen-lg mx-auto">
      <h2 className="font-semibold mb-4 text-3xl sm:text-4xl lg:text-5xl mt-12 pl-12 capitalize font-quicksand text-[#352208]"> Explore Our Exclusive Bars </h2>
      <div className="bar-content flex-1 p-5 text-left">
      <p className="font-quicksand font-normal mb-8 lg:text-xl">
        Indulge in our carefully curated selection of cocktails, mocktails, and premium spirits Enjoy a premium bar experience from the comfort of your home! Our platform allows you to browse through a wide selection of drinks from our partnered bars. Simply place an order, and have your favorite beverages delivered straight to your door. Whether you're hosting an event or just unwinding after a long day, we make it easy to get the drinks you love.
      </p>
    </div>
      <div className="relative w-full h-[800px]">
        <img src={images[currentIndex]} alt="carousel" className="w-full h-full object-cover rounded-lg shadow-lg transition-opacity duration-500" />
        <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300"><FaChevronLeft  size={24} /> </button>
     <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300"><FaChevronRight size={24} /> </button>
      </div>
    </div>

<div className="w-full max-w-3xl mx-auto text-center py-10">
      <h2 className="text-[80px] font-semibold mb-6 pt-20 text-[#352208]">What Our Customers Say</h2>
      <div className="flex justify-center gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="flex flex-col items-center cursor-pointer" onClick={() => setSelectedReview(review)}>
            <img
              src={review.image}
              alt={review.name}
              className={`w-20 h-20 object-cover rounded-full border-2 transition-all
                ${selectedReview.id === review.id ? "border-[#352208] scale-110" : "border-gray-300"}`}
            />
            <h4 className="mt-2 text-lg font-semibold">{review.name}</h4>
            <p className="text-gray-500 text-sm">{review.profession}</p>
          </div>
        ))}
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6">
        <p className="text-lg italic">{selectedReview.text}</p>
      </div>
    </div>

    <div className="py-12 px-6  text-[#352208] relative overflow-hidden">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold">Join Us Today</h2>
    <p className="mt-4 text-lg">
      Sign up now and start discovering amazing places instantly. Enjoy exclusive offers and curated recommendations.
    </p>
    <div className="mt-8">
      <button
        onClick={() => window.location.href='/register'}
        className="flex items-center justify-center px-8 py-3 bg-white text-[#352208] font-semibold rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100"
      >
        Sign Up
        <svg
          className="w-5 h-5 ml-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </button>
    </div>
    <div className="mt-6">
      <p className="text-sm italic">
        Join thousands of happy explorers and get early access to the best deals!
      </p>
    </div>
  </div>
</div>



    </>
  )
}

export default Home