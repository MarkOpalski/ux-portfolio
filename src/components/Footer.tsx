import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-[#0E0E0E]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <p className="text-gray-500">
              © {currentYear} Mark Opalski. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-[#4ECDC4] transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-[#4ECDC4] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;