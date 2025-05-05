import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrollPosition > 20 ? 'bg-[#121212]/90 backdrop-blur-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#top" className="text-white font-medium text-lg tracking-tight transition-colors hover:text-[#4ECDC4]">
          Mark Opalski
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#work" className="text-gray-300 hover:text-white transition-colors">Work</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          <div className="flex space-x-4 ml-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#121212] flex flex-col justify-center items-center transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        <nav className="flex flex-col space-y-8 text-center">
          <a 
            href="#about" 
            className="text-2xl text-white hover:text-[#4ECDC4] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#work" 
            className="text-2xl text-white hover:text-[#4ECDC4] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Work
          </a>
          <a 
            href="#contact" 
            className="text-2xl text-white hover:text-[#4ECDC4] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <div className="flex space-x-8 justify-center mt-8">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#4ECDC4] transition-colors">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#4ECDC4] transition-colors">
              <Linkedin size={28} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;