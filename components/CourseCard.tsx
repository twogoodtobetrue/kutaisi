import React from 'react';
import { Link } from 'react-router-dom';
import { Course } from '../types';
import { Page } from '../types';


interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.target}</p>
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-700">
            <span className="font-semibold mr-2">Duration:</span>
            {course.details.duration}
          </div>
          <div className="flex items-center text-gray-700">
            <span className="font-semibold mr-2">Schedule:</span>
            {course.details.schedule}
          </div>
          <div className="flex items-center text-gray-700">
            <span className="font-semibold mr-2">Level:</span>
            {course.details.entryLevel}
          </div>
        </div>
        <p className="text-gray-600 mb-6">{course.content}</p>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
    