
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import ResourcesPage from './pages/ResourcesPage';
import NewsEventsPage from './pages/NewsEventsPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import NotFoundPage from './pages/NotFoundPage';
import { Page } from './types';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={Page.Home} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={Page.About.substring(1)} element={<AboutPage />} /> {/* Remove leading / for relative path */}
          <Route path={Page.Courses.substring(1)} element={<CoursesPage />} />
          <Route path={Page.SuccessStories.substring(1)} element={<SuccessStoriesPage />} />
          <Route path={Page.Resources.substring(1)} element={<ResourcesPage />} />
          <Route path={Page.NewsEvents.substring(1)} element={<NewsEventsPage />} />
          <Route path={Page.Contact.substring(1)} element={<ContactPage />} />
          <Route path={Page.FAQ.substring(1)} element={<FAQPage />} />
          {/* Placeholder for Register page - can be built out similarly */}
          {/* <Route path={Page.Register.substring(1)} element={<div>Register Page Placeholder</div>} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
    