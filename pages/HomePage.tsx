
import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../types';
import { MOCK_COURSES, MOCK_TESTIMONIALS } from '../constants';
import CourseCard from '../components/CourseCard';
import TestimonialCard from '../components/TestimonialCard';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-32 md:py-48 text-white" 
        style={{ backgroundImage: "url('https://picsum.photos/seed/kutaisibg/1920/1080')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Your Path to International English Success Starts Here
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Welcome to Kutaisi's premier private English academy, specializing in international exam preparation. We help Georgian students achieve their dreams through expert IELTS, TOEFL, and Cambridge exam preparation.
          </p>
          <Link
            to={Page.Contact}
            state={{ interestedCourse: "General Inquiry" }}
            className="bg-brand-red hover:bg-brand-red-dark text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105"
          >
            Join Our Next Prep Course
          </Link>
        </div>
      </section>

      {/* Introduction / Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Why Choose Kutaisi English Academy?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-brand-red text-5xl mb-4"><i className="fas fa-users"></i></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Small Class Sizes</h3>
              <p className="text-gray-600">Max 8 students per class for personalized attention and effective learning.</p>
            </div>
            <div className="p-6">
              <div className="text-brand-red text-5xl mb-4"><i className="fas fa-chalkboard-teacher"></i></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Certified Teachers</h3>
              <p className="text-gray-600">Learn from CELTA, DELTA, and TESOL qualified experienced instructors.</p>
            </div>
            <div className="p-6">
              <div className="text-brand-red text-5xl mb-4"><i className="fas fa-tasks"></i></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalized Learning</h3>
              <p className="text-gray-600">Tailored study plans to meet your individual goals and learning pace.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 bg-brand-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Popular Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_COURSES.slice(0, 3).map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to={Page.Courses}
              className="bg-brand-red hover:bg-brand-red-dark text-white font-semibold py-3 px-6 rounded-md transition-colors duration-150"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">What Our Students Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {MOCK_TESTIMONIALS.slice(0,3).map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
           <div className="text-center mt-12">
            <Link
              to={Page.SuccessStories}
              className="text-brand-red hover:text-brand-red-dark font-semibold py-3 px-6 transition-colors duration-150"
            >
              Read More Success Stories <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
    