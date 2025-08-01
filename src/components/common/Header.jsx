import React, { useContext } from 'react';
import { Bell, Menu } from 'lucide-react';
import { AppContext } from '../../context/AppContext';
import { AuthContext } from '../../context/AuthContext';

const Header = () => {
  const { setSidebarOpen } = useContext(AppContext);
  const { user } = useContext(AuthContext);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-4">
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-gray-500 hover:text-gray-700 lg:hidden"
        >
          <Menu size={24} />
        </button>

        <div className="flex items-center space-x-4">
          <Bell className="text-gray-400 hover:text-gray-600 cursor-pointer" size={20} />
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">{user?.name?.[0]}</span>
            </div>
            <span className="text-sm font-medium text-gray-700">{user?.name}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;