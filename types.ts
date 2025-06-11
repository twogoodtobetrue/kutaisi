
export interface Teacher {
  id: string;
  name: string;
  qualifications: string[];
  experienceYears: number;
  specializations: string[];
  imageUrl: string;
}

export interface Course {
  id: string;
  title: string;
  duration: string;
  schedule: string;
  priceRange: string;
  description: string;
  entryRequirements?: string;
  targetAudience?: string; // e.g. Kids & Teens
}

export interface Testimonial {
  id: string;
  studentName: string;
  quote: string;
  imageUrl: string;
  achievedScore?: string; // e.g., "IELTS Band 7.5"
}

export interface CaseStudy {
  id: string;
  title: string;
  studentName: string;
  problem: string;
  solution: string;
  outcome: string;
  beforeScore?: string;
  afterScore?: string;
}

export interface Resource {
  id: string;
  type: 'pdf' | 'template' | 'booklist' | 'article' | 'link';
  title: string;
  description?: string;
  url?: string; // For external links or downloadable files
  content?: string; // For blog-style articles
}

export interface NewsEvent {
  id: string;
  type: 'news' | 'event';
  title: string;
  date?: string; // For events
  description: string;
  imageUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export enum Page {
  Home = '/',
  About = '/about',
  Courses = '/courses',
  SuccessStories = '/success-stories',
  Resources = '/resources',
  NewsEvents = '/news-events',
  Contact = '/contact',
  FAQ = '/faq',
  Register = '/register', // Added for completeness, though not fully implemented
}
    