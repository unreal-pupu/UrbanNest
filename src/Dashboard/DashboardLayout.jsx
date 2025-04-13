import React from 'react';
import { useAuth } from '../Contex/AuthContext'; 
import Vendorsidebar from './Vendorsidebar';  
import Sidebar from './Sidebar';  
import { Outlet } from 'react-router-dom';  

const DashboardLayout = () => {
  const { userType } = useAuth(); 

  return (
    <div className="flex">
      {userType === 'vendor' ? <Vendorsidebar /> : <Sidebar />}

      <div className="flex-1 p-6">
        <Outlet /> 
      </div>
    </div>
  );
};

export default DashboardLayout;