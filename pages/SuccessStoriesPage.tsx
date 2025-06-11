
import React from 'react';
import PageContainer from '../components/PageContainer';
import TestimonialCard from '../components/TestimonialCard';
import { MOCK_TESTIMONIALS, MOCK_CASE_STUDIES } from '../constants';

const SuccessStoriesPage: React.FC = () => {
  // Simple non-interactive carousel display for now
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % MOCK_TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + MOCK_TESTIMONIALS.length) % MOCK_TESTIMONIALS.length);
  };
  
  // Auto-scroll testimonials (optional)
   React.useEffect(() => {
    const timer = setTimeout(() => {
      nextTestimonial();
    }, 5000); // Change testimonial every 5 seconds
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTestimonial]);


  return (
    <PageContainer title="Student Success Stories" className="bg-gray-50">
      {/* Testimonial Carousel Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-brand-red mb-8 text-center">Hear From Our Graduates</h2>
        {MOCK_TESTIMONIALS.length > 0 && (
          <div className="relative max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl">
            <TestimonialCard testimonial={MOCK_TESTIMONIALS[currentTestimonial]} />
            {MOCK_TESTIMONIALS.length > 1 && (
              <>
                <button 
                  onClick={prevTestimonial}
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-brand-red text-white p-2 rounded-full shadow-md hover:bg-brand-red-dark focus:outline-none"
                  aria-label="Previous testimonial"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-brand-red text-white p-2 rounded-full shadow-md hover:bg-brand-red-dark focus:outline-none"
                  aria-label="Next testimonial"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </>
            )}
             <div className="flex justify-center mt-4">
                {MOCK_TESTIMONIALS.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full mx-1 focus:outline-none ${currentTestimonial === index ? 'bg-brand-red' : 'bg-gray-300 hover:bg-gray-400'}`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
          </div>
        )}
      </section>

      {/* Case Studies Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-brand-red mb-8 text-center">In-Depth Case Studies</h2>
        <div className="space-y-12">
          {MOCK_CASE_STUDIES.map(study => (
            <div key={study.id} className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-3">{study.title}</h3>
              <p className="text-gray-600 mb-2"><strong>Student:</strong> {study.studentName}</p>
              {study.beforeScore && study.afterScore && (
                <div className="flex justify-around items-center bg-brand-gray p-4 rounded-md mb-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Before</p>
                    <p className="text-lg font-semibold text-brand-red">{study.beforeScore}</p>
                  </div>
                  <div className="text-4xl text-gray-400">&rarr;</div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">After</p>
                    <p className="text-lg font-semibold text-green-600">{study.afterScore}</p>
                  </div>
                </div>
              )}
              <p className="text-gray-700 mb-2"><strong>Challenge:</strong> {study.problem}</p>
              <p className="text-gray-700 mb-2"><strong>Our Approach:</strong> {study.solution}</p>
              <p className="text-gray-700 font-semibold"><strong>Outcome:</strong> {study.outcome}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Gallery Placeholder */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-brand-red mb-8 text-center">Moments of Success</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map(i => (
            <img key={i} src={`https://picsum.photos/seed/ceremony${i}/400/300`} alt={`Certificate Ceremony ${i}`} className="rounded-lg shadow-md object-cover w-full h-48 hover:opacity-80 transition-opacity"/>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-4 italic">(Placeholder for certificate ceremony photos)</p>
      </section>

      {/* University Acceptance Letters Placeholder */}
      <section>
        <h2 className="text-2xl font-semibold text-brand-red mb-8 text-center">Our Students' Achievements</h2>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <i className="fas fa-university text-4xl text-brand-red mb-4"></i>
            <p className="text-gray-700">Many of our students have been accepted into prestigious universities worldwide. We are proud of their achievements!</p>
            <p className="text-sm text-gray-500 mt-2">(Displaying university acceptance letters with permission is planned)</p>
        </div>
      </section>
    </PageContainer>
  );
};

export default SuccessStoriesPage;
    