
import React from 'react';
import PageContainer from '../components/PageContainer';
import TeacherProfileCard from '../components/TeacherProfileCard';
import { MOCK_TEACHERS } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <PageContainer title="About Kutaisi English Academy">
      {/* Founder Story Section */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://picsum.photos/seed/founder/600/400" alt="Academy Founder" className="rounded-lg shadow-xl w-full" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-brand-red mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Kutaisi English Academy was founded with a singular vision: to provide Georgian students with world-class English language education and unlock doors to global opportunities. Recognizing the growing need for high-quality preparation for international exams like IELTS, TOEFL, and Cambridge assessments, we set out to create an academy that combines expert teaching, personalized support, and a motivating learning environment.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our founder, a passionate educator with extensive experience in the TEFL field, witnessed firsthand the transformative power of English proficiency. This inspired the creation of an academy dedicated to helping students in Kutaisi and beyond achieve their academic and professional aspirations on the international stage.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="mb-16 text-center bg-brand-gray py-12 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-brand-red mb-4">Our Mission</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          "Empowering Georgian students to succeed on the international stage through exceptional English language education and comprehensive exam preparation."
        </p>
      </section>

      {/* Differentiators Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-brand-red mb-8 text-center">What Makes Us Different</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl text-brand-red mb-3"><i className="fas fa-users-cog"></i></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Small Class Sizes</h3>
            <p className="text-gray-600">Maximum 8 students per class ensuring personalized attention and active participation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl text-brand-red mb-3"><i className="fas fa-user-tie"></i></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Certified & Experienced Teachers</h3>
            <p className="text-gray-600">Our instructors hold CELTA, DELTA, or TESOL certifications with proven track records.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl text-brand-red mb-3"><i className="fas fa-chart-line"></i></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalized Learning Plans</h3>
            <p className="text-gray-600">We tailor our approach to your specific needs and learning style for optimal results.</p>
          </div>
        </div>
      </section>

      {/* Teacher Profiles Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-brand-red mb-8 text-center">Meet Our Expert Teachers</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MOCK_TEACHERS.map(teacher => (
            <TeacherProfileCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </section>
      
      {/* Statistics Box Section */}
      <section className="text-center bg-brand-red text-white py-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-2">85%</h2>
        <p className="text-lg">of our students achieve their target score or higher in international exams.</p>
      </section>
    </PageContainer>
  );
};

export default AboutPage;
    