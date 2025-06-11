export interface SiteConfig {
  name: string;
  email: string;
  phone: string;
  address: string;
  officeHours: {
    weekdays: string;
    saturday: string;
  };
  socialMedia: {
    whatsapp: string;
    viber: string;
  };
}

export interface HomePageContent {
  hero: {
    headline: string;
    intro: string;
    ctaButton: string;
  };
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  certifications?: string[];
}

export interface AboutContent {
  story: {
    title: string;
    content: string;
  };
  differentiators: Array<{
    title: string;
    description: string;
  }>;
  team: TeamMember[];
  stats: {
    examSuccess: string;
    recommendation: string;
  };
}

export interface CourseDetails {
  duration: string;
  schedule: string;
  entryLevel: string;
  fee: string;
}

export interface Course {
  title: string;
  target: string;
  content: string;
  details: CourseDetails;
}

export interface Testimonial {
  name: string;
  achievement: string;
  quote: string;
}

export interface SuccessStory {
  spotlight: {
    title: string;
    content: string;
  };
}

export interface Resource {
  title: string;
  link: string;
  type?: string;
}

export interface NewsEvent {
  title: string;
  date: string;
  time?: string;
  description: string;
  ctaText: string;
  link: string;
}

export interface FAQItem {
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
    