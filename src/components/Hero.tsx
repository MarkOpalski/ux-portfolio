import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const animateText = () => {
      if (headingRef.current) {
        headingRef.current.style.opacity = '1';
        headingRef.current.style.transform = 'translateY(0)';
      }
      setTimeout(() => {
        if (subheadingRef.current) {
          subheadingRef.current.style.opacity = '1';
          subheadingRef.current.style.transform = 'translateY(0)';
        }
      }, 300);
    };

    animateText();
  }, []);

  return (
    <section id="top" className="h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[#121212] z-[-1]"></div>
      <div 
        className="absolute inset-0 opacity-5 z-[-1]" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 50% 50%, #4ECDC4 0%, transparent 50%)',
          filter: 'blur(60px)',
          transform: 'translateZ(0)'
        }}
      ></div>
      
      <div className="container mx-auto px-6">
        <h1 
          ref={headingRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 opacity-0 transform translate-y-8 transition-all duration-700"
        >
          Mark <span className="text-[#4ECDC4]">Opalski</span>
        </h1>
        <p 
          ref={subheadingRef}
          className="text-xl md:text-2xl text-gray-300 max-w-2xl opacity-0 transform translate-y-8 transition-all duration-700 delay-300"
        >
          Independent AI/UX Consultant based in New York, helping businesses unlock growth and competitive advantage through strategic design and innovation.
        </p>
        
        <div className="mt-12 opacity-0 transform translate-y-8 transition-all duration-700 delay-500"
             style={{ opacity: 1, transform: 'translateY(0)' }}>
          <a href="#contact" className="px-8 py-3 bg-[#4ECDC4] text-[#121212] rounded-full font-medium hover:bg-[#3DB9B0] transition-all">
            Let's Connect
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-0 right-0 flex justify-center">
        <a 
          href="#about" 
          className="text-white flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Scroll to About section"
        >
          <span className="mb-2 text-sm">Scroll</span>
          <div className="w-5 h-9 border-2 border-white rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-scroll-down"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;