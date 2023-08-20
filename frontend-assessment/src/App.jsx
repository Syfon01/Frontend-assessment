import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardLayout from './components/Layout/DashboardLayout';
import Login from './pages/Auth/login';
import Register from './pages/Auth/register';
import Dashboard from './pages/Dashboard/index';
import { QueryClient, QueryClientProvider } from 'react-query'; 
import { isUserAuthenticated } from './components/AuthForms/SessionManager'; 
import './App.css';

const queryClient = new QueryClient();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      const authenticated = await isUserAuthenticated();
      setIsAuthenticated(authenticated);
    };

    checkAuthentication();
  }, []);

  if (isAuthenticated === null) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}> 
      <div>
        <Routes>
          <Route 
            path="/"
            element={isAuthenticated ? <DashboardLayout /> : <Navigate to="/login" replace />}
          >
            <Route index element={<Dashboard />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="*" element={<NoMatch />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      </div>
    </QueryClientProvider>
  );
}

function NoMatch() {
  return (
    <div>
      <p className='text-lg'>Nothing to see here!</p>
      <p>Just a friendly display. You can logout or stay on the homepage</p>

    </div>
  );
}
