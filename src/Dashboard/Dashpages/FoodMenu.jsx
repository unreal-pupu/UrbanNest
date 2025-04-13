/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from "react-router-dom"; 
import MENU1 from '../../assets/MENU1.jpg'
import MENU2 from '../../assets/MENU2.jpg'
import MENU3 from '../../assets/MENU3.jpg'
import MENU4 from '../../assets/MENU4.jpg'
import MENU5 from '../../assets/MENU5.jpg'
import MENU6 from '../../assets/MENU6.jpg'
import MENU7 from '../../assets/MENU7.jpg'
import MENU8 from '../../assets/MENU8.jpg'
import WEM from '../../assets/WEM.jpg'
import PAS1 from '../../assets/PAS1.jpg'
import PAS2 from '../../assets/PAS2.jpg'
import SAL3 from '../../assets/SAL3.jpg'
import SAL4 from '../../assets/SAL4.jpg'
import SAL5 from '../../assets/SAL5.jpg'
import SAL6 from '../../assets/SAL6.jpg'
import SAL7 from '../../assets/SAL7.jpg'
import SAL8 from '../../assets/SAL8.jpg'
import SAL9 from '../../assets/SAL9.jpg'
import SAL1 from '../../assets/SAL1.jpg'
import PASTA1 from '../../assets/PASTA1.jpg'
import PASTA2 from '../../assets/PASTA2.jpg'
import PASTA3 from '../../assets/PASTA3.jpg'
import PASTA4 from '../../assets/PASTA4.jpg'
import PASTA5 from '../../assets/PASTA5.jpg'
import PASTA6 from '../../assets/PASTA6.jpg'
import PASTA7 from '../../assets/PASTA7.jpg'
import HK from '../../assets/HK.jpg'
import SEA1 from '../../assets/SEA1.jpg'
import SEA2 from '../../assets/SEA2.jpg'
import SEA3 from '../../assets/SEA3.jpg'
import SEA4 from '../../assets/SEA4.jpg'
import SEA5 from '../../assets/SEA5.jpg'
import SEA6 from '../../assets/SEA6.jpg'
import SEA7 from '../../assets/SEA7.jpg'
import SEA8 from '../../assets/SEA8.jpg'
import SEA9 from '../../assets/SEA9.jpg'
import IT1 from '../../assets/IT1.jpg'
import IT2 from '../../assets/IT2.jpg'
import IT3 from '../../assets/IT3.jpg'
import IT4 from '../../assets/IT4.jpg'
import CONT1 from '../../assets/CONT1.jpg'
import CONT2 from '../../assets/CONT2.jpg'
import CONT3 from '../../assets/CONT3.jpg'
import CONT5 from '../../assets/CONT5.jpg'
import CONT6 from '../../assets/CONT6.jpg'
import CONT7 from '../../assets/CONT7.jpg'
import CONT8 from '../../assets/CONT8.jpg'
import CONT10 from '../../assets/CONT10.jpg'
import CONT11 from '../../assets/CONT11.jpg'
import CONT12 from '../../assets/CONT12.jpg'
import CONT13 from '../../assets/CONT13.jpg'
import CONT14 from '../../assets/CONT14.jpg'
import GGGG1 from '../../assets/GGGG1.jpg'
import GGGG2 from '../../assets/GGGG2.jpg'
import GGGG3 from '../../assets/GGGG3.jpg'
import GGGG4 from '../../assets/GGGG4.jpg'
import GGGG5 from '../../assets/GGGG5.jpg'
import GGGG6 from '../../assets/GGGG6.jpg'
import GGGG7 from '../../assets/GGGG7.jpg'
import BBQ from '../../assets/BBQ.jpg'
import Ha from '../../assets/Ha.jpg'
import HL from '../../assets/HL.jpg'
import House from '../../assets/House.jpg'
import QA from '../../assets/QA.jpg'
import CHEF1 from '../../assets/CHEF1.jpg'
import CHEF2 from '../../assets/CHEF2.jpg'
import CHEF3 from '../../assets/CHEF3.jpg'
import CHEF4 from '../../assets/CHEF4.jpg'
import CHEF5 from '../../assets/CHEF5.jpg'
import CHEF6 from '../../assets/CHEF6.jpg'
import CHEF7 from '../../assets/CHEF7.jpg'
import CHEF8 from '../../assets/CHEF8.jpg'
import CHEF9 from '../../assets/CHEF9.jpg'
import QE from '../../assets/QE.jpg'
import Pizzar from '../../assets/Pizzar.jpg'
import QF from '../../assets/QF.jpg'
import AFR1 from '../../assets/AFR1.jpg'
import AFR2 from '../../assets/AFR2.jpg'
import AFR3 from '../../assets/AFR3.jpg'
import AFR4 from '../../assets/AFR4.jpg'
import AFR5 from '../../assets/AFR5.jpg'
import DEST1 from '../../assets/DEST1.jpg'
import DEST2 from '../../assets/DEST2.jpg'
import DEST3 from '../../assets/DEST3.jpg'
import DEST4 from '../../assets/DEST4.jpg'
import DEST5 from '../../assets/DEST5.jpg'
import DEST6 from '../../assets/DEST6.jpg'
import DEST7 from '../../assets/DEST7.jpg'
import DEST8 from '../../assets/DEST8.jpg'



const menuItems = [
    { id: 1, image: MENU1, title: "Grilled Steak" },
    { id: 2, image: MENU2, title: "Seafood Platter" },
    { id: 3, image: MENU3, title: "Pasta Alfredo" },
    { id: 4, image: MENU4, title: "BBQ Ribs" },
    { id: 4, image: MENU4, title: "BBQ Ribs" },
    { id: 4, image: MENU4, title: "BBQ Ribs" },
    { id: 4, image: MENU4, title: "BBQ Ribs" },
    { id: 4, image: MENU4, title: "BBQ Ribs" },
    { id: 4, image: MENU4, title: "BBQ Ribs" },
    { id: 4, image: MENU4, title: "BBQ Ribs" },
    { id: 4, image: MENU4, title: "BBQ Ribs" },
    { id: 4, image: MENU4, title: "BBQ Ribs" },
    { id: 4, image: MENU4, title: "BBQ Ribs" },
    { id: 4, image: MENU4, title: "BBQ Ribs" },
    { id: 4, image: MENU4, title: "BBQ Ribs" },
    { id: 4, image: MENU4, title: "BBQ Ribs" },
    { id: 4, image: MENU4, title: "BBQ Ribs" },
    { id: 4, image: MENU4, title: "BBQ Ribs" },
    { id: 4, image: MENU4, title: "BBQ Ribs" },
    { id: 4, image: MENU4, title: "BBQ Ribs" },
    { id: 4, image: MENU4, title: "BBQ Ribs" },
    { id: 4, image: MENU4, title: "BBQ Ribs" },
    { id: 4, image: MENU4, title: "BBQ Ribs" },
    { id: 4, image: MENU4, title: "BBQ Ribs" },
    { id: 4, image: MENU4, title: "BBQ Ribs" },
    { id: 4, image: MENU4, title: "BBQ Ribs" },
    { id: 4, image: MENU4, title: "BBQ Ribs" },
    { id: 4, image: MENU4, title: "BBQ Ribs" },
    { id: 4, image: MENU4, title: "BBQ Ribs" },
  ];
  
const FoodMenu = () => {
    const navigate = useNavigate();
  

      
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white p-8">
      <h2 className="text-center text-4xl font-bold text-orange-500 mb-10">Our Menu</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {menuItems.map((item) => (
          <div key={item.id} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
            <img src={item.image} alt={item.title} className="w-full h-60 object-cover rounded-t-xl" />

            <div className="p-5 text-center">
              <h3 className="text-2xl font-bold">{item.title}</h3>

              <button
                onClick={() => navigate("/dashboard/cart")}
                className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition"
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default FoodMenu