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
  const handleOpen = () => {
    setSidebarOpen(true)
  }
  return (
    <>
      <SideBar click={sidebarOpen} close={handleClose} />
      <div className="flex flex-col flex-1 md:pl-64">
        {/* Header part  */}
        <Header handleOpen={handleOpen}/>
        {/* end of header  */}

        <main className="bg-[#F5F6F8] min-h-screen">
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
