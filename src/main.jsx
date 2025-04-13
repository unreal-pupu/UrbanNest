import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './Contex/AuthContext'; // ✅ Make sure path is correct

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> {/* ✅ Wrap the app */}
      <App />
    </AuthProvider>
  </StrictMode>
);