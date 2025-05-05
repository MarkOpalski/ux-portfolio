import React from 'react';
import { Link } from 'react-router-dom';

interface Metric {
  label: string;
  value: string;
}

interface ProjectCardProps {
  title: string;
  client: string;
  description: string;
  metrics: Metric[];
  image?: string;
  link?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title,
  client,
  description,
  metrics,
  image,
  link,
  index
}) => {
  return (
    <div className={`group relative rounded-xl overflow-hidden bg-[#1A1A1A] transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl ${
      index % 2 === 0 ? 'md:translate-y-8' : ''
    }`}>
      {image && (
        <div className="h-56 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-8">
        <div className="mb-6">
          <span className="text-[#4ECDC4] text-sm font-medium">{client}</span>
          <h3 className="text-2xl font-bold text-white mt-2">{title}</h3>
        </div>
        
        <p className="text-gray-300 mb-8">{description}</p>
        
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric, i) => (
            <div key={i} className="bg-[#232323] p-4 rounded-lg">
              <div className="text-[#4ECDC4] text-2xl font-bold">{metric.value}</div>
              <div className="text-gray-400 text-sm mt-1">{metric.label}</div>
            </div>
          ))}
        </div>
        
        {link && (
          <div className="mt-8">
            <Link 
              to={link}
              className="inline-flex items-center text-[#4ECDC4] hover:text-white transition-colors"
            >
              View Case Study
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;