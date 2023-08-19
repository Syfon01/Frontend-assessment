import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve registration data from localStorage
    const registrationData = JSON.parse(localStorage.getItem('registrationData'));

    if (registrationData) {
      console.log(registrationData)
      console.log(formData)
      // Check if the provided email and password match the registration data

      if (
        formData.email === registrationData.contactEmail &&
        formData.password === registrationData.password

      ) {
        navigate('/dashboard');

        toast.success('Login successful!');
      } else {
        toast.error('Invalid email or password. Please try again.');
      }
    } else {
      toast.error('No registration data found. Please register first.');
    }
  };

  return (
    <>
      <div className="flex min-h-[85vh] flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[32rem]">
          <div className="bg-white p-8 rounded-lg md:p-10">
            <p className="text-2xl text-primary font-medium mb-1">Welcome Back!</p>
            <p className="text-xs text-[#606060] mb-4">
              Sign in to your Xpress reward partner’s dashboard
            </p>
            <hr />
            <form className="mt-8" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="form-input"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mt-8">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="flex mt-2">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    className="password-control"
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="password-button"
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5 text-gray-700" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-gray-700" />
                    )}
                  </button>
                </div>
              </div>

              <div className="mt-3">
                <div className="text-sm leading-6">
                  <span className="text-sm text-[#606060]">
                    Forgot password?{' '}
                    <Link className="font-semibold text-primary hover:text-primary50">
                      Reset it
                    </Link>
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="flex w-full justify-center bg-primary px-3 py-4 rounded shadow text-sm leading-6 text-white font-medium hover:bg-primary50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
