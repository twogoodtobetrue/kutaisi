
import { Page, Course, Teacher, Testimonial, CaseStudy, Resource, NewsEvent, FAQItem } from './types';

export const APP_NAME = "Kutaisi English Academy";
export const CONTACT_EMAIL = "info@kutaisienglish.ge";
export const CONTACT_PHONE = "+995 XXX XXX XXX"; // Placeholder
export const WHATSAPP_LINK = "https://wa.me/995XXXXXXXXX"; // Placeholder
export const VIBER_LINK = "viber://chat?number=%2B995XXXXXXXXX"; // Placeholder
export const FACEBOOK_LINK = "https://facebook.com/kutaisienglishacademy"; // Placeholder
export const INSTAGRAM_LINK = "https://instagram.com/kutaisienglishacademy"; // Placeholder
export const YOUTUBE_LINK = "https://youtube.com/kutaisienglishacademy"; // Placeholder

export const NAVIGATION_LINKS = [
  { name: 'Home', path: Page.Home },
  { name: 'About Us', path: Page.About },
  { name: 'Courses', path: Page.Courses },
  { name: 'Success Stories', path: Page.SuccessStories },
  { name: 'Resources', path: Page.Resources },
  { name: 'News & Events', path: Page.NewsEvents },
  { name: 'FAQ', path: Page.FAQ },
  { name: 'Contact', path: Page.Contact },
];

export const MOCK_TEACHERS: Teacher[] = [
  { id: '1', name: 'Nino Sharashidze', qualifications: ['CELTA', 'MA TEFL'], experienceYears: 12, specializations: ['IELTS', 'Academic English'], imageUrl: 'https://picsum.photos/seed/teacher1/300/300' },
  { id: '2', name: 'Giorgi Kapanadze', qualifications: ['DELTA', 'TESOL Certified'], experienceYears: 8, specializations: ['TOEFL', 'Business English'], imageUrl: 'https://picsum.photos/seed/teacher2/300/300' },
  { id: '3', name: 'Mariam Gelashvili', qualifications: ['TESOL', 'BA English Philology'], experienceYears: 5, specializations: ['Cambridge Exams (FCE, CAE)', 'Young Learners'], imageUrl: 'https://picsum.photos/seed/teacher3/300/300' },
  { id: '4', name: 'David Miller', qualifications: ['CELTA', 'Native Speaker'], experienceYears: 10, specializations: ['Speaking & Listening', 'General English'], imageUrl: 'https://picsum.photos/seed/teacher4/300/300' },
];

export const MOCK_COURSES: Course[] = [
  { id: '1', title: 'IELTS Preparation', duration: '10-12 weeks', schedule: '3 classes/week, 2 hours/class', priceRange: '₾800 - ₾1200', description: 'Comprehensive preparation for all sections of the IELTS Academic and General Training tests.', entryRequirements: 'Intermediate (B1) English level or higher.' },
  { id: '2', title: 'TOEFL iBT Preparation', duration: '8-10 weeks', schedule: '3 classes/week, 2 hours/class', priceRange: '₾750 - ₾1100', description: 'Focused training for the TOEFL iBT, covering reading, listening, speaking, and writing skills.', entryRequirements: 'Intermediate (B1) English level or higher.' },
  { id: '3', title: 'Cambridge Exams (FCE/CAE)', duration: '12-16 weeks', schedule: '2-3 classes/week, 2 hours/class', priceRange: '₾900 - ₾1400', description: 'In-depth preparation for Cambridge English Qualifications like B2 First (FCE) and C1 Advanced (CAE).', entryRequirements: 'Relevant English level for the chosen exam (B1+ for FCE, B2+ for CAE).' },
  { id: '4', title: 'General English', duration: 'Flexible (min. 4 weeks)', schedule: '2-3 classes/week, 1.5-2 hours/class', priceRange: '₾600 - ₾900 (per level)', description: 'Improve your overall English proficiency across all skills: speaking, listening, reading, and writing. All levels from A1 to C1.', targetAudience: 'Adults' },
  { id: '5', title: 'Speaking & Listening Workshop', duration: '4-week intensive', schedule: '2 classes/week, 2 hours/class', priceRange: '₾400', description: 'Boost your confidence and fluency in spoken English and improve your listening comprehension skills.', entryRequirements: 'Pre-Intermediate (A2+) English level or higher.' },
  { id: '6', title: 'Kids & Teens Prep (YLE/KET/PET)', duration: 'Varies by program', schedule: '2 classes/week, 1-1.5 hours/class', priceRange: '₾500 - ₾700 (per term)', description: 'Fun and engaging English programs for young learners, preparing them for Cambridge YLE, KET, and PET exams.', targetAudience: 'Children (7-12) and Teens (13-17)' },
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  { id: '1', studentName: 'Mariam L.', quote: "Thanks to the IELTS course, I achieved Band 7.5 and got accepted into my dream university abroad! The teachers were amazing.", imageUrl: 'https://picsum.photos/seed/student1/100/100', achievedScore: "IELTS Band 7.5" },
  { id: '2', studentName: 'Levan K.', quote: "The TOEFL preparation was intense but incredibly effective. I scored 105! Highly recommend this academy.", imageUrl: 'https://picsum.photos/seed/student2/100/100', achievedScore: "TOEFL 105" },
  { id: '3', studentName: 'Ana S.', quote: "I passed my FCE exam with flying colors. The small class sizes and personalized attention made a huge difference.", imageUrl: 'https://picsum.photos/seed/student3/100/100', achievedScore: "Cambridge FCE Grade A" },
];

export const MOCK_CASE_STUDIES: CaseStudy[] = [
  { id: '1', title: "How Mariam Achieved IELTS Band 7.5 in 3 Months", studentName: "Mariam G.", problem: "Mariam needed an IELTS score of 7.0 overall for her Master's application but was struggling with the Writing and Speaking sections, consistently scoring around 6.0.", solution: "Mariam enrolled in our intensive IELTS preparation course, focusing on targeted writing workshops, mock speaking tests with detailed feedback, and personalized study plans.", outcome: "After 3 months of dedicated study and guidance, Mariam achieved an overall Band score of 7.5, with 7.0 in Writing and 7.5 in Speaking.", beforeScore: "IELTS Band 6.0", afterScore: "IELTS Band 7.5" },
];

export const MOCK_RESOURCES: Resource[] = [
  { id: '1', type: 'pdf', title: 'Top 10 IELTS Exam Tips', url: '#', description: 'A downloadable PDF with essential tips for acing your IELTS exam.' },
  { id: '2', type: 'template', title: 'Weekly Study Schedule Template', url: '#', description: 'Organize your exam preparation with this customizable schedule.' },
  { id: '3', type: 'booklist', title: 'Recommended Books for Advanced Learners', url: '#', description: 'A curated list of books to enhance your English skills.' },
  { id: '4', type: 'article', title: 'Managing Exam Stress: 7 Proven Techniques', content: 'Exam stress is common, but manageable. Tip 1: Get enough sleep. Tip 2: Practice mindfulness...' },
  { id: '5', type: 'article', title: '5 Common Speaking Mistakes to Avoid in English Exams', content: 'Mistake 1: Not elaborating enough. Mistake 2: Using too many filler words...' },
  { id: '6', type: 'link', title: 'Official IELTS Website', url: 'https://www.ielts.org', description: 'Visit the official source for IELTS information.' },
];

export const MOCK_NEWS_EVENTS: NewsEvent[] = [
  { id: '1', type: 'event', title: 'New IELTS Evening Batch Starting', date: 'October 15, 2024', description: 'Join our new evening batch for IELTS preparation. Limited seats available! Registration deadline: October 10.', imageUrl: 'https://picsum.photos/seed/event1/400/250' },
  { id: '2', type: 'event', title: 'Free TOEFL Workshop', date: 'September 28, 2024', description: 'Attend our free workshop to learn key strategies for the TOEFL iBT exam. Sign up now!', imageUrl: 'https://picsum.photos/seed/event2/400/250' },
  { id: '3', type: 'news', title: 'Academy Receives Accreditation Update', description: 'We are proud to announce our renewed accreditation, ensuring the highest quality of English language teaching.', imageUrl: 'https://picsum.photos/seed/news1/400/250' },
];

export const MOCK_FAQ_ITEMS: FAQItem[] = [
    { id: '1', question: 'What are the class sizes?', answer: 'We believe in personalized attention. Our group classes have a maximum of 8 students.' },
    { id: '2', question: 'Are the teachers qualified?', answer: 'Yes, all our teachers are certified (CELTA, DELTA, TESOL) and experienced in teaching English for international exams.' },
    { id: '3', question: 'Do you offer online classes?', answer: 'Currently, our primary focus is on in-person classes for the best interactive experience. However, we may offer specific online workshops. Please check our News & Events page.' },
    { id: '4', question: 'How do I know which course is right for me?', answer: 'We recommend booking a free placement test and consultation. Our experts will assess your level and discuss your goals to suggest the most suitable course.' },
    { id: '5', question: 'What are the payment options?', answer: 'We accept payments via bank transfer (TBC Bank, Bank of Georgia) and cash at our office. Installment plans may be available for certain courses.' },
];

    