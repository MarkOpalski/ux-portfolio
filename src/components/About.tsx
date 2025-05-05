import React from 'react';
import { Rocket, Trophy, Users, BarChart3, Settings } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#161616]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 relative">
            <span className="text-[#4ECDC4]">/</span> About
          </h2>
          
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              I help businesses unlock growth, market leadership, and competitive advantage through strategic design and innovation. My expertise lies in aligning design with business objectives, ensuring that experience strategy is a core driver of success—not just an afterthought.
            </p>
            
            <p>
              I work directly with executive teams, founders, and product leaders to create market-defining solutions that optimize operations, enhance customer engagement, and drive measurable business impact.
            </p>
            
            <h3 className="text-2xl font-semibold text-white mt-12 mb-6">What I Deliver:</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[#4ECDC4] mr-3">
                  <Rocket size={24} />
                </span>
                <span><strong className="text-white">Strategic Innovation</strong> – Translating insights into actionable strategies that fuel business growth.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4ECDC4] mr-3">
                  <Trophy size={24} />
                </span>
                <span><strong className="text-white">Market Leadership</strong> – Elevating brands by creating category-defining experiences.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4ECDC4] mr-3">
                  <Users size={24} />
                </span>
                <span><strong className="text-white">Executive Partnership</strong> – Collaborating with C-suite leaders to shape product vision and execution.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4ECDC4] mr-3">
                  <BarChart3 size={24} />
                </span>
                <span><strong className="text-white">Customer-Centric Growth</strong> – Leveraging research and behavioral insights to drive engagement and retention.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4ECDC4] mr-3">
                  <Settings size={24} />
                </span>
                <span><strong className="text-white">Scalable Design Systems</strong> – Ensuring long-term success through structured, repeatable frameworks.</span>
              </li>
            </ul>
            
            <h3 className="text-2xl font-semibold text-white mt-12 mb-6">Who I've Worked With:</h3>
            
            <p>
              I've partnered with Fortune 500 companies, high-growth startups, and government organizations, including:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              <div className="px-4 py-3 bg-[#1E1E1E] rounded-md text-white text-center">Gartner</div>
              <div className="px-4 py-3 bg-[#1E1E1E] rounded-md text-white text-center">Lockheed Martin</div>
              <div className="px-4 py-3 bg-[#1E1E1E] rounded-md text-white text-center">MetLife</div>
              <div className="px-4 py-3 bg-[#1E1E1E] rounded-md text-white text-center">Pfizer</div>
              <div className="px-4 py-3 bg-[#1E1E1E] rounded-md text-white text-center">Citibank</div>
              <div className="px-4 py-3 bg-[#1E1E1E] rounded-md text-white text-center">The Met</div>
            </div>
            
            <p className="mt-6">
              These collaborations have delivered transformational business results, helping companies outpace competitors, future-proof their offerings, and build loyal customer bases.
            </p>
            
            <h3 className="text-2xl font-semibold text-white mt-12 mb-6">How I Work:</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[#4ECDC4] mr-3">
                  <Settings size={20} className="mt-1" />
                </span>
                <span>I align design strategy with business goals to ensure impact at every level.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4ECDC4] mr-3">
                  <Settings size={20} className="mt-1" />
                </span>
                <span>I integrate human-centered insights into product and service roadmaps to drive sustained growth.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4ECDC4] mr-3">
                  <Settings size={20} className="mt-1" />
                </span>
                <span>I craft scalable, innovative solutions that turn market challenges into competitive advantages.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;