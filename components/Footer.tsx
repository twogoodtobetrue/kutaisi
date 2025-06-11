
import React from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME, CONTACT_EMAIL, CONTACT_PHONE, FACEBOOK_LINK, INSTAGRAM_LINK, YOUTUBE_LINK } from '../constants';
import { Page } from '../types';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* Academy Info */}
          <div>
            <h5 className="text-xl font-bold text-white mb-4">{APP_NAME}</h5>
            <p className="text-sm mb-2">Your path to international English success starts here.</p>
            <p className="text-sm">Kutaisi, Georgia</p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link to={Page.Home} className="hover:text-brand-red transition-colors">Home</Link></li>
              <li><Link to={Page.About} className="hover:text-brand-red transition-colors">About Us</Link></li>
              <li><Link to={Page.Courses} className="hover:text-brand-red transition-colors">Courses</Link></li>
              <li><Link to={Page.Contact} className="hover:text-brand-red transition-colors">Contact</Link></li>
              <li><Link to={Page.FAQ} className="hover:text-brand-red transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Contact Us</h5>
            <ul className="space-y-2 text-sm">
              <li><i className="fas fa-phone mr-2 text-brand-red"></i> {CONTACT_PHONE}</li>
              <li><i className="fas fa-envelope mr-2 text-brand-red"></i> <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-brand-red transition-colors">{CONTACT_EMAIL}</a></li>
              {/* Add WhatsApp/Viber if needed */}
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-red transition-colors text-2xl"><i className="fab fa-facebook-f"></i></a>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-red transition-colors text-2xl"><i className="fab fa-instagram"></i></a>
              <a href={YOUTUBE_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-red transition-colors text-2xl"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} {APP_NAME}. All Rights Reserved.</p>
          <p className="mt-1">Designed with <i className="fas fa-heart text-brand-red"></i> for Georgian Students.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
    