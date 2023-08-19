import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import { Bars3Icon} from '@heroicons/react/24/outline'
import SideBar from "./SideBar";
import Header from "./Header";


const DashboardLayout = ({ user }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleClose = () => {
    setSidebarOpen(false)
  }

  return (
    <>
      <SideBar click={sidebarOpen} close={handleClose} />
      <div className="flex flex-col flex-1 md:pl-64">
        {/* Header part  */}
        <div className="sticky top-0 z-10 flex flex-shrink-0 h-16 bg-white shadow md:hidden">
          <button
            type="button"
            className="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        {/* end of header  */}

        <main className="bg-[#FCFCFD] min-h-screen">
          <Header/>
          <div className="py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
