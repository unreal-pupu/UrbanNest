import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { AuthProvider } from "./Contex/AuthContext";
import { useAuth } from "./Contex/AuthContext"; 
import Layout from './Layout';
import Home from './Pages/Home';
import Features from './Pages/Features';
import Pricing from './Pages/Pricing';
import Gallery from './Pages/Gallery';
import Service from './Pages/Services';
import Register from './Pages/Register';
import RegisterVendor from './Pages/Registervendor';
import DashboardLayout from './Dashboard/DashboardLayout';
import Dashboard from './Dashboard/Dashpages/Dashboard';
import VendorDashboard from './Dashboard/Dashpages/Vendordash';
import Privacy from './Dashboard/Dashpages/Privacy';
import ContactUs from './Dashboard/Dashpages/ContactUs';
import Deposit from './Dashboard/Dashpages/Deposit';
import Discount from './Dashboard/Dashpages/Discount';
import Order from './Dashboard/Dashpages/Order';
import Login from './Pages/Login';
import ListingManagement from './Dashboard/Dashpages/ListingManagement';
import MenuManagement from './Dashboard/Dashpages/MenuManagement';
import BarMenuManagement from './Dashboard/Dashpages/BarMenuManagement';
import ReservationManagement from './Dashboard/Dashpages/ReservationManagement';
import SupportHelpCenter from './Dashboard/Dashpages/SupportHelpCenter';
import AnalyticsReports from './Dashboard/Dashpages/AnalyticsReports';
import Vendordash from './Dashboard/Dashpages/Vendordash';
import Info from './Dashboard/Dashpages/Info'
import Reservation from './Dashboard/Dashpages/Reservation'
import Support from './Dashboard/Dashpages/Support'
import Hotels from './Dashboard/Dashpages/Hotels'
import FoodVendors from './Dashboard/Dashpages/FoodVendors'
import Favorites from './Dashboard/Dashpages/Favorites'
import Checkout from './Dashboard/Dashpages/Checkout'
import Bars from './Dashboard/Dashpages/Bars'
import Explore from './Dashboard/Dashpages/Explore'
const ProtectedRoute = ({ element, requiredUserType }) => {
  const { isAuthenticated, userType } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={requiredUserType === 'vendor' ? '/registervendor' : '/register'} />;
  }
  if (userType !== requiredUserType) {
    return <Navigate to={userType === 'vendor' ? '/dashboard/vendor' : '/dashboard'} />;
  }
  return element;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'features', element: <Features /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'service', element: <Service /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'registervendor', element: <RegisterVendor /> },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { path: '/dashboard/dashboard', element: <ProtectedRoute element={<Dashboard />} requiredUserType="customer" /> },
      { path: '/dashboard/privacy', element: <ProtectedRoute element={<Privacy />} requiredUserType="customer" /> },
      { path: '/dashboard/order', element: <ProtectedRoute element={<Order />} requiredUserType="customer" /> },
      { path: '/dashboard/deposit', element: <ProtectedRoute element={<Deposit />} requiredUserType="customer" /> },
      { path: '/dashboard/info', element: <ProtectedRoute element={<Info />} requiredUserType="customer" /> },
      { path: '/dashboard/bars', element: <ProtectedRoute element={<Bars />} requiredUserType="customer" /> },
      { path: '/dashboard/hotels', element: <ProtectedRoute element={<Hotels />} requiredUserType="customer" /> },
      { path: '/dashboard/foodvendors', element: <ProtectedRoute element={<FoodVendors />} requiredUserType="customer" /> },
      { path: '/dashboard/checkout', element: <ProtectedRoute element={<Checkout />} requiredUserType="customer" /> },
      { path: '/dashboard/reservation', element: <ProtectedRoute element={<Reservation />} requiredUserType="customer" /> },
      { path: '/dashboard/support', element: <ProtectedRoute element={<Support />} requiredUserType="customer" /> },
      { path: '/dashboard/favorites', element: <ProtectedRoute element={<Favorites />} requiredUserType="customer" /> },
      { path: '/dashboard/explore', element: <ProtectedRoute element={<Explore />} requiredUserType="customer" /> },

      
      { path: '/dashboard/vendor', element: <ProtectedRoute element={<VendorDashboard />} requiredUserType="vendor" /> },
      { path: '/dashboard/vendordash', element: <ProtectedRoute element={<Vendordash />} requiredUserType="vendor" /> },
      { path: '/dashboard/discount', element: <ProtectedRoute element={<Discount />} requiredUserType="vendor" /> },
      { path: '/dashboard/menumanagement', element: <ProtectedRoute element={<MenuManagement />} requiredUserType="vendor" /> },
      { path: '/dashboard/listingmanagement', element: <ProtectedRoute element={<ListingManagement />} requiredUserType="vendor" /> },
      { path: '/dashboard/barmenumanagement', element: <ProtectedRoute element={<BarMenuManagement />} requiredUserType="vendor" /> },
      { path: '/dashboard/supporthelpcenter', element: <ProtectedRoute element={<SupportHelpCenter />} requiredUserType="vendor" /> },
      { path: '/dashboard/reservationmanagement', element: <ProtectedRoute element={<ReservationManagement />} requiredUserType="vendor" /> },
      { path: '/dashboard/analyticsReports', element: <ProtectedRoute element={<AnalyticsReports />} requiredUserType="vendor" /> },
      { path: '/dashboard/contactus', element: <ProtectedRoute element={<ContactUs />} requiredUserType="vendor" /> },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;