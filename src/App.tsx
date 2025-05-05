import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GartnerBenchmarks from './pages/GartnerBenchmarks';
import HypeCycle from './pages/HypeCycle';
import DecisionMatrices from './pages/DecisionMatrices';
import './cursor.css';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Mark Opalski - AI/UX Consultant";
    
    // Add custom cursor
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    
    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    
    document.addEventListener('mousemove', moveCursor);
    
    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-grow');
      });
      
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-grow');
      });
    });
    
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
    
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="bg-[#121212] text-white min-h-screen">
            <Header />
            <main>
              <Hero />
              <About />
              <Work />
              <Contact />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/case-study/gartner-benchmarks" element={<GartnerBenchmarks />} />
        <Route path="/case-study/hype-cycle" element={<HypeCycle />} />
        <Route path="/case-study/decision-matrices" element={<DecisionMatrices />} />
      </Routes>
    </Router>
  );
}

export default App;