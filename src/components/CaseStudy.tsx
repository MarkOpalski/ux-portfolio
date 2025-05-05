import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface CaseStudyProps {
  title: string;
  client: string;
  impact: string;
  summary: string;
  challenge: string;
  leadership: string;
  teamExecution: string;
  designInnovation: string;
  strategicImpact: string;
  lessonsLearned: string;
  coverImage: string;
}

const TableOfContents = () => {
  const [activeSection, setActiveSection] = useState('summary');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const sections = [
    { id: 'summary', label: 'Overview' },
    { id: 'challenge', label: 'Challenge' },
    { id: 'leadership', label: 'Approach' },
    { id: 'execution', label: 'Execution' },
    { id: 'innovation', label: 'Innovation' },
    { id: 'impact', label: 'Impact' },
    { id: 'lessons', label: 'Lessons' },
  ];

  return (
    <nav className="hidden lg:block sticky top-8 w-64 h-fit">
      <ul className="space-y-2">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block py-2 px-4 text-sm transition-colors rounded-md ${
                activeSection === id
                  ? 'bg-[#1A1A1A] text-[#4ECDC4]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const CaseStudy: React.FC<CaseStudyProps> = ({
  title,
  client,
  impact,
  summary,
  challenge,
  leadership,
  teamExecution,
  designInnovation,
  strategicImpact,
  lessonsLearned,
  coverImage,
}) => {
  return (
    <div className="min-h-screen bg-[#121212] text-white pt-24">
      <div className="container mx-auto px-6">
        <div className="flex gap-16">
          <TableOfContents />
          
          <div className="flex-1 max-w-4xl">
            {/* Header */}
            <div className="mb-16 animate-fade-in">
              <div className="text-[#4ECDC4] text-sm font-medium mb-4">{client}</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
              <p className="text-2xl text-gray-300">{impact}</p>
            </div>

            {/* Cover Image */}
            <div className="aspect-video rounded-xl overflow-hidden mb-16 animate-fade-in">
              <img src={coverImage} alt={title} className="w-full h-full object-cover" />
            </div>

            {/* Executive Summary */}
            <section id="summary" className="mb-24">
              <h2 className="text-3xl font-bold mb-8">Executive Summary</h2>
              <div className="bg-[#1A1A1A] p-8 rounded-xl mb-8">
                <p className="text-xl text-[#4ECDC4]">{summary}</p>
              </div>
              <div className="prose prose-invert max-w-none text-lg leading-relaxed">
                <p className="text-gray-300">{summary}</p>
              </div>
            </section>

            {/* The Challenge */}
            <section id="challenge" className="mb-24">
              <h2 className="text-3xl font-bold mb-8">The Challenge</h2>
              <div className="prose prose-invert max-w-none text-lg leading-relaxed">
                <p className="text-gray-300">{challenge}</p>
              </div>
            </section>

            {/* Leadership Approach */}
            <section id="leadership" className="mb-24">
              <h2 className="text-3xl font-bold mb-8">Leadership Approach</h2>
              <div className="prose prose-invert max-w-none text-lg leading-relaxed">
                <p className="text-gray-300">{leadership}</p>
              </div>
            </section>

            {/* Team Enablement and Execution */}
            <section id="execution" className="mb-24">
              <h2 className="text-3xl font-bold mb-8">Team Enablement and Execution</h2>
              <div className="prose prose-invert max-w-none text-lg leading-relaxed">
                <p className="text-gray-300">{teamExecution}</p>
              </div>
            </section>

            {/* Design Quality and Innovation */}
            <section id="innovation" className="mb-24">
              <h2 className="text-3xl font-bold mb-8">Design Quality and Innovation</h2>
              <div className="prose prose-invert max-w-none text-lg leading-relaxed">
                <p className="text-gray-300">{designInnovation}</p>
              </div>
            </section>

            {/* Strategic Impact */}
            <section id="impact" className="mb-24">
              <h2 className="text-3xl font-bold mb-8">Strategic Impact</h2>
              <div className="prose prose-invert max-w-none text-lg leading-relaxed">
                <p className="text-gray-300">{strategicImpact}</p>
              </div>
            </section>

            {/* Lessons Learned */}
            <section id="lessons" className="mb-24">
              <h2 className="text-3xl font-bold mb-8">Lessons Learned</h2>
              <div className="prose prose-invert max-w-none text-lg leading-relaxed">
                <p className="text-gray-300">{lessonsLearned}</p>
              </div>
            </section>

            {/* Back to Work */}
            <div className="mt-16 mb-24 border-t border-[#2A2A2A] pt-16">
              <Link 
                to="/#work" 
                className="inline-flex items-center text-[#4ECDC4] hover:text-white transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                  />
                </svg>
                Back to Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;