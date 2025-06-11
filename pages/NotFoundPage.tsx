
import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../types';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center px-4 py-12 bg-gray-100">
      <i className="fas fa-exclamation-triangle text-6xl text-brand-red mb-6"></i>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to={Page.Home}
        className="bg-brand-red hover:bg-brand-red-dark text-white font-semibold py-3 px-6 rounded-md transition-colors duration-150 text-lg"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
    