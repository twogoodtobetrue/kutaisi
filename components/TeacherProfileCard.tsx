
import React from 'react';
import { Teacher } from '../types';

interface TeacherProfileCardProps {
  teacher: Teacher;
}

const TeacherProfileCard: React.FC<TeacherProfileCardProps> = ({ teacher }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:shadow-xl transition-shadow duration-300">
      <img 
        src={teacher.imageUrl} 
        alt={teacher.name} 
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-brand-red"
      />
      <h4 className="text-xl font-semibold text-gray-800 mb-1">{teacher.name}</h4>
      <p className="text-brand-red text-sm mb-2">{teacher.qualifications.join(', ')}</p>
      <p className="text-gray-600 text-sm mb-1"><strong>Experience:</strong> {teacher.experienceYears} years</p>
      <p className="text-gray-600 text-sm"><strong>Specializes in:</strong> {teacher.specializations.join(', ')}</p>
    </div>
  );
};

export default TeacherProfileCard;
    