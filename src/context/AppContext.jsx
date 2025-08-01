import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <AppContext.Provider value={{ 
      sidebarOpen, 
      setSidebarOpen, 
      currentPage, 
      setCurrentPage 
    }}>
      {children}
    </AppContext.Provider>
  );
};