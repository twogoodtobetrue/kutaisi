
import React from 'react';
import { Link } from 'react-router-dom';
import { Course } from '../types';
import { Page } from '../types';


interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full transform hover:scale-105 transition-transform duration-300">
      <img src={`https://picsum.photos/seed/${course.id}/600/400`} alt={course.title} className="w-full h-48 object-cover"/>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-brand-red mb-2">{course.title}</h3>
        <p className="text-sm text-gray-600 mb-1"><i className="fas fa-clock mr-2"></i><strong>Duration:</strong> {course.duration}</p>
        <p className="text-sm text-gray-600 mb-1"><i className="fas fa-calendar-alt mr-2"></i><strong>Schedule:</strong> {course.schedule}</p>
        <p className="text-sm text-gray-600 mb-3"><i className="fas fa-lari-sign mr-2"></i><strong>Price:</strong> {course.priceRange}</p>
        <p className="text-gray-700 text-sm mb-4 flex-grow">{course.description}</p>
        {course.entryRequirements && <p className="text-xs text-gray-500 mt-auto mb-1"><strong>Entry:</strong> {course.entryRequirements}</p>}
        {course.targetAudience && <p className="text-xs text-gray-500 mt-auto mb-3"><strong>For:</strong> {course.targetAudience}</p>}
        <Link
          to={Page.Contact} // Or a specific registration page if available: Page.Register
          state={{ interestedCourse: course.title }}
          className="mt-auto bg-brand-red hover:bg-brand-red-dark text-white font-semibold py-2 px-4 rounded-md text-center transition-colors duration-150 w-full"
        >
          Book Placement Test
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
    