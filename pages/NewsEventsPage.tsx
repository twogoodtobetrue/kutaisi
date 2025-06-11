
import React from 'react';
import PageContainer from '../components/PageContainer';
import { MOCK_NEWS_EVENTS } from '../constants';
import { NewsEvent } from '../types';

const NewsEventCard: React.FC<{ item: NewsEvent }> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row mb-8 transform hover:scale-[1.02] transition-transform duration-300">
      {item.imageUrl && (
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="w-full md:w-1/3 h-48 md:h-auto object-cover"
        />
      )}
      <div className="p-6 flex flex-col justify-between">
        <div>
          <span 
            className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-2 ${item.type === 'event' ? 'bg-brand-red text-white' : 'bg-blue-500 text-white'}`}
          >
            {item.type === 'event' ? 'Event' : 'News'}
          </span>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
          {item.date && <p className="text-sm text-brand-red font-medium mb-2"><i className="fas fa-calendar-alt mr-2"></i>{item.date}</p>}
          <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
        </div>
        {item.type === 'event' && (
           <a href="#/contact" className="mt-4 inline-block text-brand-red hover:text-brand-red-dark font-semibold text-sm">
            Register or Learn More <i className="fas fa-arrow-right ml-1"></i>
          </a>
        )}
      </div>
    </div>
  );
};

const NewsEventsPage: React.FC = () => {
  const upcomingEvents = MOCK_NEWS_EVENTS.filter(item => item.type === 'event' && new Date(item.date || 0) >= new Date()).sort((a,b) => new Date(a.date || 0).getTime() - new Date(b.date || 0).getTime());
  const recentNews = MOCK_NEWS_EVENTS.filter(item => item.type === 'news').slice(0, 3); // Show latest 3 news
  const pastEvents = MOCK_NEWS_EVENTS.filter(item => item.type === 'event' && new Date(item.date || 0) < new Date()).sort((a,b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()).slice(0,2);


  return (
    <PageContainer title="News & Upcoming Events" className="bg-gray-50">
      <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
        Stay updated with the latest happenings at Kutaisi English Academy, including new course announcements, workshops, and important deadlines.
      </p>

      {/* Upcoming Events Section */}
      {upcomingEvents.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-brand-red mb-6">Upcoming Events & Course Starts</h2>
          {upcomingEvents.map(event => (
            <NewsEventCard key={event.id} item={event} />
          ))}
        </section>
      )}

      {/* Recent News Section */}
      {recentNews.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-brand-red mb-6">Latest Academy News</h2>
          {recentNews.map(newsItem => (
            <NewsEventCard key={newsItem.id} item={newsItem} />
          ))}
        </section>
      )}
      
      {/* Past Events Gallery Placeholder */}
       {pastEvents.length > 0 && (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-red mb-6">Highlights from Past Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {pastEvents.map(event => (
                    <div key={event.id} className="bg-white p-4 rounded-lg shadow-md">
                        {event.imageUrl && <img src={event.imageUrl} alt={event.title} className="w-full h-40 object-cover rounded-md mb-3" />}
                        <h4 className="font-semibold text-gray-700">{event.title}</h4>
                        <p className="text-xs text-gray-500">{event.date}</p>
                    </div>
                ))}
            </div>
            <p className="text-center text-gray-600 mt-4 italic">(Placeholder for more past event photos and details)</p>
        </section>
       )}

        {upcomingEvents.length === 0 && recentNews.length === 0 && (
            <div className="text-center py-10">
                <i className="fas fa-bullhorn text-4xl text-gray-400 mb-4"></i>
                <p className="text-xl text-gray-600">No current news or upcoming events.</p>
                <p className="text-gray-500">Please check back soon for updates!</p>
            </div>
        )}

    </PageContainer>
  );
};

export default NewsEventsPage;
    