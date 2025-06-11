
import React from 'react';

interface PageContainerProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({ title, children, className = "" }) => {
  return (
    <div className={`py-12 md:py-16 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-12 text-center">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
    