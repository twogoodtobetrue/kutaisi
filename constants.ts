import { Page, Course, Teacher, Testimonial, CaseStudy, Resource, NewsEvent, FAQItem } from './types';

export const SITE_CONFIG = {
  name: "Kutaisi English Academy",
  email: "2022theenglishacademy@gmail.com",
  phone: "+995 574 13 05 05",
  address: "Javakhishvili Street 24, Kutaisi, Georgia",
  officeHours: {
    weekdays: "Monday - Friday: 10:00 - 19:00",
    saturday: "Saturday: 11:00 - 15:00"
  },
  socialMedia: {
    whatsapp: "+995 574 13 05 05",
    viber: "+995 574 13 05 05"
  }
};

export const HOMEPAGE_CONTENT = {
  hero: {
    headline: "Your Path to International English Success Starts Here",
    intro: "Welcome to Kutaisi English Academy, the premier private language school in the heart of Kutaisi. We specialize in preparing ambitious students like you for high-stakes international English exams, including IELTS, TOEFL, and the full suite of Cambridge qualifications. Our mission is to provide you with the skills, confidence, and strategy to achieve your academic and professional goals on the world stage.",
    ctaButton: "Join Our Next Prep Course"
  }
};

export const ABOUT_CONTENT = {
  story: {
    title: "Our Story: Bridging Georgian Talent with Global Opportunity",
    content: "Kutaisi English Academy was founded by Lana Chkhartishvili, a passionate educator who saw the immense potential of Georgian students. Her vision was to create a center of excellence in Kutaisi—a place that would bridge the gap between local ambition and international success. We started with a simple mission: to stop students from feeling unprepared for world-class exams and to give them the tools to compete and thrive globally."
  },
  differentiators: [
    {
      title: "Small, Focused Groups",
      description: "We believe in quality over quantity. Our small group sizes (max 8 students) ensure you get the individual attention you deserve, can ask questions freely, and actively participate in every class."
    },
    {
      title: "Experienced, Certified Teachers",
      description: "Our team isn't just fluent in English; they are certified professionals with qualifications like CELTA and TEFL. They are mentors who understand the exams inside-out and are dedicated to your success."
    },
    {
      title: "A Personalized Approach",
      description: "You are not just a number at our academy. We begin with a detailed placement test to understand your strengths and weaknesses, allowing us to create a learning path that is tailored just for you."
    }
  ],
  team: [
    {
      name: "Lana Chkhartishvili",
      role: "Founding Director & Senior Instructor",
      bio: "With over 15 years of experience in English language teaching and a Master's degree in Education, Lana is the driving force behind the academy. She specializes in IELTS and Cambridge exam strategy and is passionate about helping every student unlock their potential.",
      certifications: ["MA in Education", "CELTA"]
    },
    {
      name: "Teo Tsikarishvili",
      role: "Lead English Language Instructor",
      bio: "Teo holds a Bachelor's degree in English Language and Literature and is an expert in grammar and academic writing. Her patient and structured teaching style helps students build a rock-solid foundation for exam success.",
      certifications: ["BA in English", "TKT (Teaching Knowledge Test)"]
    },
    {
      name: "Gio Chkhartishvili",
      role: "TEFL Certified Instructor",
      bio: "Gio brings a modern, dynamic energy to the classroom. With a background in Information Technology and a Gold TEFL certification, he is known for his tech-integrated teaching methods that make learning engaging and effective. He is proficient in both English and Russian.",
      certifications: ["TEFL (Gold Certificate)", "Bachelor's in IT"]
    },
    {
      name: "Nato Babunashvili",
      role: "Academy Administrator",
      bio: "Nato is the welcoming face and organizational heart of our academy. From your first inquiry to your final certificate, she ensures your learning journey is smooth and stress-free. For any questions about schedules, payments, or resources, Nato is here to help."
    }
  ],
  stats: {
    examSuccess: "85% of our students achieve their target exam score or higher on their first attempt.",
    recommendation: "Rated 100% Recommended by 37+ student reviews on our platform."
  }
};

export const COURSES = [
  {
    title: "IELTS Preparation",
    target: "Students aiming to study, work, or immigrate to an English-speaking country.",
    content: "Master all four modules (Listening, Reading, Writing, Speaking), learn advanced test-taking strategies, practice with authentic exam materials, and receive personalized feedback on your writing and speaking.",
    details: {
      duration: "12 Weeks",
      schedule: "Mon/Wed/Fri, 18:00-20:00",
      entryLevel: "B1+ (Intermediate)",
      fee: "Contact for pricing"
    }
  },
  {
    title: "TOEFL iBT Preparation",
    target: "Students applying to universities in the USA, Canada, and other institutions that accept TOEFL scores.",
    content: "Integrated skills practice for the unique TOEFL format, academic vocabulary building, note-taking strategies for lectures, and timed practice for all sections.",
    details: {
      duration: "10 Weeks",
      schedule: "Tue/Thu, 17:00-19:00",
      entryLevel: "B1+ (Intermediate)",
      fee: "Contact for pricing"
    }
  },
  {
    title: "Cambridge Exams (FCE, CAE, CPE)",
    target: "Learners seeking an internationally recognized certificate of their English proficiency for academic or professional purposes.",
    content: "In-depth preparation for B2 First, C1 Advanced, or C2 Proficiency exams, focusing on Use of English, complex grammar, and formal writing and speaking structures.",
    details: {
      duration: "16 Weeks",
      schedule: "Contact for schedules",
      entryLevel: "B2, C1, or C2 (based on exam)",
      fee: "Contact for pricing"
    }
  },
  {
    title: "General English",
    target: "Anyone looking to improve their overall English communication skills for travel, work, or personal development.",
    content: "A balanced focus on speaking, listening, reading, writing, grammar, and vocabulary, in a communicative and interactive environment.",
    details: {
      duration: "Ongoing monthly enrollment",
      schedule: "Flexible options available",
      entryLevel: "A1 (Beginner) to C1 (Advanced)",
      fee: "Contact for pricing"
    }
  }
];

export const TESTIMONIALS = [
  {
    name: "Nino G.",
    achievement: "Achieved IELTS Band 7.5",
    quote: "The personalized feedback at Kutaisi English Academy was a game-changer for my writing score. I got a 7.0 in Writing, which I never thought was possible! Thank you, Lana and the team. I couldn't have achieved my goal without them!"
  },
  {
    name: "Davit L.",
    achievement: "Achieved TOEFL 105",
    quote: "I needed a high TOEFL score for my Master's application in the US. The small group and Gio's dynamic lessons made learning fun and effective. I highly recommend them to anyone serious about their exam."
  }
];

export const SUCCESS_STORIES = {
  spotlight: {
    title: "How Mariam Got Band 7.5 in IELTS",
    content: "Mariam came to us with a goal of Band 7.0 but struggled with confidence in the Speaking test and structuring her Writing Task 2 essays. Through our intensive 12-week IELTS course, she participated in weekly mock speaking tests with direct feedback from Teo. Our specialized writing workshops helped her master essay structures. The result? She not only met her goal but exceeded it, scoring an incredible 7.5 overall and an 8.0 in Speaking. Mariam is now preparing to start her Master's in International Relations in London."
  }
};

export const RESOURCES = {
  blogArticles: [
    {
      title: "How to Manage Exam Stress and Stay Focused",
      link: "#"
    },
    {
      title: "5 Common Mistakes to Avoid in the IELTS Speaking Test",
      link: "#"
    },
    {
      title: "Top 10 Tips & Tricks for the TOEFL Reading Section",
      link: "#"
    }
  ],
  downloads: [
    {
      title: "Your Ultimate 8-Week IELTS Study Planner",
      type: "PDF",
      link: "#"
    }
  ]
};

export const NEWS_EVENTS = {
  upcoming: [
    {
      title: "IELTS Evening Prep Course",
      date: "June 15th",
      description: "Limited spots are available. Registration closes on June 10th.",
      ctaText: "Register Now",
      link: "#"
    },
    {
      title: "Academic Writing Workshop",
      date: "June 5th",
      time: "14:00-16:00",
      description: "Free workshop open to all current and prospective students.",
      ctaText: "Book Your Spot",
      link: "#"
    }
  ]
};

export const FAQ = [
  {
    question: "How long does it take to prepare for IELTS?",
    answer: "It depends on your current English level and your target score. For a student at a B1 (Intermediate) level aiming for a 6.5-7.0, our intensive 12-week course is typically sufficient. We determine the best path for you after a free placement test."
  },
  {
    question: "Do you offer individual (one-on-one) lessons?",
    answer: "Yes, we do! We offer private lessons tailored to your specific needs, whether it's for general English improvement or intensive preparation for a specific exam module. Contact us to discuss a personalized plan."
  },
  {
    question: "What is your refund policy?",
    answer: "Our refund policy is outlined in our student agreement. In general, course fees are non-refundable after the course has started, but we can offer credit for a future course in exceptional circumstances. Please contact our administrator for full details."
  },
  {
    question: "Do you offer online classes?",
    answer: "Yes! We offer both in-person classes at our academy in Kutaisi and live online classes via Zoom, so you can learn from anywhere in Georgia."
  },
  {
    question: "How do I register for a course?",
    answer: "You can start by booking a free placement test on our website. After the test, you can register in person at our office or complete the registration form online. Payment can be made via bank transfer or at our office."
  }
];

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

    