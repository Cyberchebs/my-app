"use client"
import Feed from '@/components/Feed';
import Sidebar from '@/components/Sidebar';
  import {  useState } from 'react';

const page = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);


  return (
    <div >
      <button onClick={toggleSidebar}  className="lg:hidden fixed bottom-6 right-6 bg-black text-white px-6 py-3 rounded-full shadow-lg z-50 flex items-center gap-2 hover:bg-gray-800 transition-colors">
        filter
      </button>
      <div className="flex flex-row">
         <Sidebar
          isOpen={sidebarOpen}
          onClose={closeSidebar}
        />
      <Feed/>
      </div>
    </div>
  )
}

export default page