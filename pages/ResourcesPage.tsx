
import React from 'react';
import PageContainer from '../components/PageContainer';
import { MOCK_RESOURCES } from '../constants';
import { Resource } from '../types';

const ResourceItem: React.FC<{ resource: Resource }> = ({ resource }) => {
  let iconClass = "fas fa-file-alt"; // Default for articles
  if (resource.type === 'pdf') iconClass = "fas fa-file-pdf text-red-500";
  else if (resource.type === 'template') iconClass = "fas fa-file-invoice text-blue-500";
  else if (resource.type === 'booklist') iconClass = "fas fa-book text-green-500";
  else if (resource.type === 'link') iconClass = "fas fa-link text-purple-500";

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-3">
        <i className={`${iconClass} text-2xl mr-3`}></i>
        <h3 className="text-lg font-semibold text-gray-800">{resource.title}</h3>
      </div>
      {resource.description && <p className="text-sm text-gray-600 mb-3">{resource.description}</p>}
      {resource.content && <p className="text-sm text-gray-700 mb-3 leading-relaxed">{resource.content.substring(0,150)}...</p>}
      {resource.url && resource.url !== '#' && (
        <a 
          href={resource.url} 
          target={resource.type === 'link' ? '_blank' : '_self'} 
          rel="noopener noreferrer"
          className="text-brand-red hover:text-brand-red-dark font-medium text-sm transition-colors"
          download={resource.type === 'pdf' || resource.type === 'template'}
        >
          {resource.type === 'pdf' || resource.type === 'template' ? 'Download' : 'Read More / Visit'} <i className="fas fa-arrow-right ml-1"></i>
        </a>
      )}
       {resource.url === '#' && (
         <span className="text-gray-400 text-sm italic">Link coming soon</span>
       )}
    </div>
  );
};

const ResourcesPage: React.FC = () => {
  const downloadableContent = MOCK_RESOURCES.filter(r => ['pdf', 'template', 'booklist'].includes(r.type));
  const articlesAndLinks = MOCK_RESOURCES.filter(r => ['article', 'link'].includes(r.type));

  return (
    <PageContainer title="Helpful Resources & Materials" className="bg-brand-gray">
      <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
        Access a variety of resources to support your English learning journey, from exam tips and practice materials to insightful articles.
      </p>

      {/* Downloadable Content Section */}
      {downloadableContent.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-brand-red mb-6">Downloadable Materials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloadableContent.map(resource => (
              <ResourceItem key={resource.id} resource={resource} />
            ))}
          </div>
        </section>
      )}

      {/* Blog-style Articles & Links Section */}
      {articlesAndLinks.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold text-brand-red mb-6">Articles & Useful Links</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {articlesAndLinks.map(resource => (
              <ResourceItem key={resource.id} resource={resource} />
            ))}
          </div>
        </section>
      )}
    </PageContainer>
  );
};

export default ResourcesPage;
    