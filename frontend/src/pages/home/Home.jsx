import React, { useState } from 'react';
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import { Menu, Search } from 'lucide-react';

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <div className='flex flex-col h-screen'>
      {/* Mobile header */}
      <header className="lg:hidden flex justify-between items-center p-4 bg-purple-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
        <button onClick={toggleSidebar} className="p-2">
          <Menu size={24} />
        </button>
        <button onClick={toggleSearch} className="p-2 ">
          <Search size={24} />
        </button>
      </header>

      {/* Search bar for mobile */}
      {isSearchOpen && (
        <div className="lg:hidden p-4 bg-purple-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 ">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded-lg"
          />
        </div>
      )}

      <div className='flex flex-1 sm:h-[450px] md:h-[550px] overflow-hidden bg-purple-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20'>
        {/* Sidebar */}
        <div className={`
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
          fixed lg:relative inset-y-0 left-0 z-30
          w-64
          transition-transform duration-300 ease-in-out
          bg-purple-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20
        `}>
          <Sidebar />
        </div>

        {/* Overlay for mobile when sidebar is open */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={toggleSidebar}
          ></div>
        )}

        {/* Main content area */}
        <main className="flex-1 overflow-hidden">
          <MessageContainer />
        </main>
      </div>
    </div>
  );
};

export default Home;