
import React, { useState, FormEvent } from 'react';
import { useLocation } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import { CONTACT_EMAIL, CONTACT_PHONE, WHATSAPP_LINK, VIBER_LINK, FACEBOOK_LINK, INSTAGRAM_LINK, YOUTUBE_LINK } from '../constants';

interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  courseInterest: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const location = useLocation();
  const interestedCourseFromState = location.state?.interestedCourse || '';

  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    phone: '',
    courseInterest: interestedCourseFromState,
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(false);
    setSubmitError(null);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
        setSubmitError("Please fill in all required fields (Name, Email, Message).");
        return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
        setSubmitError("Please enter a valid email address.");
        return;
    }

    // Simulate form submission
    console.log('Form data submitted:', formData);
    // In a real app, you'd send this to a backend API.
    // For now, just show a success message.
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', courseInterest: '', message: '' });
    }, 1000);
  };

  return (
    <PageContainer title="Get In Touch With Us" className="bg-gray-50">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form Section */}
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-brand-red mb-6">Send Us a Message</h2>
          {isSubmitted && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
              <strong className="font-bold">Success!</strong>
              <span className="block sm:inline"> Your message has been sent. We'll get back to you soon.</span>
            </div>
          )}
           {submitError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {submitError}</span>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name <span className="text-red-500">*</span></label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red sm:text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address <span className="text-red-500">*</span></label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red sm:text-sm" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
              <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red sm:text-sm" />
            </div>
            <div>
              <label htmlFor="courseInterest" className="block text-sm font-medium text-gray-700">Course Interest</label>
              <select name="courseInterest" id="courseInterest" value={formData.courseInterest} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red sm:text-sm">
                <option value="">Select a course (optional)</option>
                <option value="IELTS Preparation">IELTS Preparation</option>
                <option value="TOEFL Preparation">TOEFL Preparation</option>
                <option value="Cambridge Exams">Cambridge Exams (PET/FCE/CAE/CPE)</option>
                <option value="General English">General English</option>
                <option value="Speaking & Listening Workshop">Speaking & Listening Workshop</option>
                <option value="Academic Writing Skills">Academic Writing Skills</option>
                <option value="Kids & Teens Prep">Kids & Teens Prep</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message <span className="text-red-500">*</span></label>
              <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red sm:text-sm"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-red hover:bg-brand-red-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red transition-colors">
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info & Map Section */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold text-brand-red mb-4">Contact Information</h2>
            <address className="not-italic text-gray-700 space-y-2">
              <p><i className="fas fa-map-marker-alt mr-3 text-brand-red"></i>123 Academy Street, Kutaisi, Georgia (Example Address)</p>
              <p><i className="fas fa-phone mr-3 text-brand-red"></i><a href={`tel:${CONTACT_PHONE}`} className="hover:text-brand-red">{CONTACT_PHONE}</a></p>
              <p><i className="fas fa-envelope mr-3 text-brand-red"></i><a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-brand-red">{CONTACT_EMAIL}</a></p>
              <p><i className="fab fa-whatsapp mr-3 text-brand-red"></i><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red">Chat on WhatsApp</a></p>
              <p><i className="fab fa-viber mr-3 text-brand-red"></i><a href={VIBER_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red">Chat on Viber</a></p>
            </address>
            <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                    <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-red text-2xl"><i className="fab fa-facebook-f"></i></a>
                    <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-red text-2xl"><i className="fab fa-instagram"></i></a>
                    <a href={YOUTUBE_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-red text-2xl"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
             <h2 className="text-2xl font-semibold text-brand-red p-6 pb-0">Our Location</h2>
            {/* Google Maps Embed Placeholder */}
            <div className="w-full h-72 bg-gray-300 flex items-center justify-center text-gray-500">
              <p><i className="fas fa-map-marked-alt text-4xl mr-2"></i> Google Maps Placeholder (Kutaisi)</p>
            </div>
             <p className="p-4 text-sm text-gray-600">We are conveniently located in the heart of Kutaisi. Visit us for a consultation or to enroll in a course.</p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ContactPage;
    