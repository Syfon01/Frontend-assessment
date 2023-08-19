import { Routes, Route, Outlet, Link,  Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardLayout from "./components/Layout/DashboardLayout";
import Login from "./pages/Auth/login"
import Register from "./pages/Auth/register"
import Dashboard from "./pages/Dashboard/index"

export default function App() {
  const registrationData = JSON.parse(localStorage.getItem('registrationData'));

  const isNewUser = registrationData?.contactEmail 
  return (
    <div>
    <Routes>
      {!isNewUser ? (
        <Route path="/" element={<Navigate to="/login" replace />} />
      ) : (
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      )}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>

    <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
  </div>
);
}



function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

