import React from 'react';
import { HOMEPAGE_CONTENT, COURSES, TESTIMONIALS } from '../constants';
import Layout from '../components/Layout';
import PageContainer from '../components/PageContainer';
import CourseCard from '../components/CourseCard';
import TestimonialCard from '../components/TestimonialCard';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <PageContainer>
        {/* Hero Section */}
        <section className="hero min-h-[600px] bg-gradient-to-r from-blue-600 to-blue-800 text-white flex items-center">
          <div className="container mx-auto px-6 py-20">
            <h1 className="text-5xl font-bold mb-6">
              {HOMEPAGE_CONTENT.hero.headline}
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              {HOMEPAGE_CONTENT.hero.intro}
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              {HOMEPAGE_CONTENT.hero.ctaButton}
            </button>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Featured Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {COURSES.slice(0, 3).map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </div>
            <div className="text-center mt-12">
              <a href="/courses" className="text-blue-600 font-semibold hover:text-blue-700">
                View All Courses →
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {TESTIMONIALS.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8">
              Book your free placement test today and take the first step towards achieving your English language goals.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Book Free Placement Test
            </button>
          </div>
        </section>
      </PageContainer>
    </Layout>
  );
};

export default HomePage;
    