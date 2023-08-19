// App.js

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardLayout from './components/Layout/DashboardLayout';
import Login from './pages/Auth/login';
import Register from './pages/Auth/register';
import Dashboard from './pages/Dashboard/index';
import { QueryClient, QueryClientProvider } from 'react-query'; // Import React Query
import './App.css';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}> {/* Wrap your app with QueryClientProvider */}
      <div>
        <Routes>
          <Route 
            path="/"
            element={<Navigate to="/login" replace />}
          />
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
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
      <h2>Nothing to see here!</h2>
    </div>
  );
}
