import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'


const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <>
    <div className="flex min-h-[85vh] flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[32rem]">
          <div className="bg-white p-8 rounded-lg md:p-10">

            <p className="text-2xl text-primary font-medium mb-1">Welcome Back!</p>
            <p className="text-xs text-[#606060] mb-4">Sign in to your Xpress reward partner’s dashboard</p>
            <hr />
            <form className="mt-8" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-4 text-gray-900">
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
                  />
                </div>
              </div>

              <div className='mt-8'>
                <label htmlFor="password" className="block text-sm font-medium leading-4 text-gray-900">
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
                  />
                   <button type="button" onClick={toggleShowPassword} className="password-button">
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
                    Forgot password? <Link className="font-semibold text-primary hover:text-primary50">Reset it</Link>
                  </span>
                </div>
              </div>

              <div className='mt-8'>
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
  )
}

export default LoginForm

