import React, { Fragment, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
// import AuthService from "../services/AuthService";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from '@heroicons/react/24/outline'
import VerifierIcon from "../../assets/images/Icon-Verifiers.svg";
import DealIcon from "../../assets/images/Deals.svg";
import TransactionIcon from "../../assets/images/Icon-Transactions.svg";

const navigation = [
  { name: "Verifiers", path: "/", icon: VerifierIcon },
  { name: "Deals", path: "/deals", icon: DealIcon },
  {
    name: "Transactions",
    path: "/transactions",
    icon: TransactionIcon,
  },
];

const SideBar = ({ click, close }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const registrationData = JSON.parse(localStorage.getItem('registrationData'));
  const user = registrationData.contactEmail;


  const signOut = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  // useEffect(() => {
  //   setLoading(true);
  //   const userData = AuthService.getCurrentUser();
  //   if (userData) {
  //     setUser({
  //       currentUser: userData,
  //     });
  //   }
  //   setLoading(false);
  // }, []);

  return (
    <>
      {/* sidebar for mobile  */}
      <Transition.Root show={click} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-700 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-[#101828]">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 pt-2 -mr-12">
                    <button
                      type="button"
                      className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={close}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>

                <div className="flex items-center flex-shrink-0 px-4">
                  <img className="w-20 h-8" src={logo} alt="Bird" />
                </div>
                <div className="flex-1 h-0 mt-5 overflow-y-auto">
                  <nav className="flex-1 px-2 pb-4 mt-4 space-y-2">
                    {navigation.map((item, index) => {
                      return (
                        <div key={index}>
                          <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                              isActive ? "navbar-link active" : "navbar-link"
                            }
                            end
                          >
                            <img
                              src={item.icon}
                              alt={item.name}
                              className="flex-shrink-0 w-6 h-6 mr-3"
                              aria-hidden="true"
                            />
                            {item.name}
                          </NavLink>
                        </div>
                      );
                    })}
                  </nav>
                </div>
                
              </Dialog.Panel>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
          </div>
        </Dialog>
      </Transition.Root>

      {/*======================================================
      sidebar for desktop
      ==================================================== */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex flex-col flex-grow pt-5 bg-[#101828] overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <img className="w-20 h-8" src={logo} alt="Workflow" />
          </div>
          <div className="flex flex-col flex-1 mt-5">
            <nav className="flex-1 px-2 pb-4 mt-4 space-y-2">
              {navigation.map((item, index) => {
                return (
                  <div key={index}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive ? "navbar-link active" : "navbar-link"
                      }
                      end
                    >
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="flex-shrink-0 w-6 h-6 mr-3"
                        aria-hidden="true"
                      />
                      {item.name}
                    </NavLink>
                  </div>
                );
              })}
            </nav>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default SideBar;
