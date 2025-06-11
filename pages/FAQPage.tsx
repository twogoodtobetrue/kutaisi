
import React, { useState } from 'react';
import PageContainer from '../components/PageContainer';
import { MOCK_FAQ_ITEMS } from '../constants';
import { FAQItem } from '../types';

interface FAQAccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQAccordionItem: React.FC<FAQAccordionItemProps> = ({ item, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200">
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 px-2 text-left font-medium text-gray-700 hover:bg-brand-gray focus:outline-none transition-colors duration-150"
          onClick={toggleOpen}
          aria-expanded={isOpen}
        >
          <span>{item.question}</span>
          <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'} text-brand-red transition-transform duration-300`}></i>
        </button>
      </h2>
      {isOpen && (
        <div className="py-5 px-4 text-gray-600 bg-white leading-relaxed">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQPage: React.FC = () => {
  const [openFAQId, setOpenFAQId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQId(openFAQId === id ? null : id);
  };

  return (
    <PageContainer title="Frequently Asked Questions" className="bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        {MOCK_FAQ_ITEMS.map(item => (
          <FAQAccordionItem 
            key={item.id} 
            item={item} 
            isOpen={openFAQId === item.id} 
            toggleOpen={() => toggleFAQ(item.id)} 
          />
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-gray-700 mb-2">Can't find the answer you're looking for?</p>
        <a href="#/contact" className="text-brand-red hover:text-brand-red-dark font-semibold">
          Contact Us Directly <i className="fas fa-arrow-right ml-1"></i>
        </a>
      </div>
    </PageContainer>
  );
};

export default FAQPage;
    