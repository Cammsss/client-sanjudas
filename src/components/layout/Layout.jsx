import React from 'react';
import { Navbar } from '../navigation/Navbar';
import { Footer } from '../ui/Footer';

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen theme-bg flex flex-col">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="flex-1 overflow-y-auto bg-white/40 backdrop-blur-sm">
        {children}
      </div>
      <Footer />
    </div>
  );
}