import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from "../../assets/images/logo.svg"
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation();
  return (
    <header className="container">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Logo</span>
          <img className="h-8 w-auto" src={logo} alt="" />
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className={`h-6 w-6 ${mobileMenuOpen ? 'hidden' : ''}`} aria-hidden="true" />
            <XMarkIcon className={`h-6 w-6 ${mobileMenuOpen ? '' : 'hidden'}`} aria-hidden="true" />

            {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
          </button>
        </div>
        {location.pathname === '/login' ? 
        <div className="hidden lg:flex lg:gap-x-4 items-center">
              <p className='text-[#606060] text-sm'>New to Xpress Rewards?</p>
              <Link to="/register" className='text-primary border border-primary rounded-[4px] py-2 px-4 font-bold text-sm'>Sign Up</Link>
              </div> : 
              <div className="hidden lg:flex lg:gap-x-4 items-center">
                <p className='text-[#606060] text-sm'>Already have an account?</p>
              <Link to="/login" className='text-primary border border-primary rounded-[4px] py-2 px-4 font-bold text-sm'>Sign In</Link>
              </div>

              }
             
      </nav>
      
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Logo</span>
              <img
                className="h-8 w-auto"
                src={logo}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 "
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-5 flow-root">
            <div className="my-6 divide-y divide-gray-500/10">
              <div >
              {location.pathname === '/login' ? 
              <div className="flex items-center gap-4">
              <p className='text-[#606060] text-sm'>New to Xpress Rewards?</p>
              <Link to="/register" className='text-primary border border-primary rounded-[4px] py-2 px-4 font-bold text-sm'>Sign Up</Link>
              </div> : 
              <div className="flex items-center gap-4">
                <p className='text-[#606060] text-sm'>Already have an account?</p>
              <Link to="/login" className='text-primary border border-primary rounded-[4px] py-2 px-4 font-bold text-sm'>Sign In</Link>
              </div>

              }
              
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
