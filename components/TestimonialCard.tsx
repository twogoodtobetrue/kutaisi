
import React from 'react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-brand-gray p-6 rounded-lg shadow-md h-full flex flex-col">
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.imageUrl} 
          alt={testimonial.studentName} 
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-brand-red"
        />
        <div>
          <h5 className="text-lg font-semibold text-gray-800">{testimonial.studentName}</h5>
          {testimonial.achievedScore && <p className="text-brand-red text-sm font-medium">{testimonial.achievedScore}</p>}
        </div>
      </div>
      <p className="text-gray-700 italic text-sm flex-grow">"{testimonial.quote}"</p>
    </div>
  );
};

export default TestimonialCard;
    