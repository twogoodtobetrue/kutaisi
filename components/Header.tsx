
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_LINKS, APP_NAME } from '../constants';
import { Page } from '../types';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to={Page.Home} className="text-2xl font-bold text-brand-red">
              {APP_NAME}
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out
                  ${location.pathname === link.path ? 'bg-brand-red text-white' : 'text-gray-700 hover:bg-brand-gray hover:text-brand-red'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-red p-2 rounded-md"
              aria-label="Open main menu"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 inset-x-0 bg-white shadow-lg z-40">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150 ease-in-out
                  ${location.pathname === link.path ? 'bg-brand-red text-white' : 'text-gray-700 hover:bg-brand-gray hover:text-brand-red'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
    