
import React from 'react';
import PageContainer from '../components/PageContainer';
import CourseCard from '../components/CourseCard';
import { MOCK_COURSES } from '../constants';

const CoursesPage: React.FC = () => {
  return (
    <PageContainer title="Our English Language Courses" className="bg-brand-gray">
      <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
        Explore our wide range of English courses designed to meet your specific needs, from international exam preparation to general language improvement. Each course is crafted to provide you with the skills and confidence to succeed.
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_COURSES.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <div className="mt-12 text-center p-8 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-brand-red mb-4">Not Sure Which Course is Right for You?</h3>
        <p className="text-gray-700 mb-6">
          We offer a free placement test and consultation to help you determine your current English level and discuss your learning goals. Our experts will guide you to the most suitable program.
        </p>
        <a 
            href="#/contact" // Directing to contact page, HashRouter will handle it
            className="bg-brand-red hover:bg-brand-red-dark text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors"
        >
            Book Your Free Placement Test
        </a>
      </div>
    </PageContainer>
  );
};

export default CoursesPage;
    