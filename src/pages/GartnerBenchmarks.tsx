import React from 'react';
import CaseStudy from '../components/CaseStudy';

const GartnerBenchmarks = () => {
  return (
    <CaseStudy
      title="Gartner's Benchmarks"
      client="Gartner"
      impact="45% reduction in analysis time and 3.2x increase in user adoption"
      summary="Designed a benchmark UX to help business leaders compare critical performance data against the competition."
      challenge="CFOs needed a more usable model that aligns with budgets across the enterprise, requiring a complete reimagining of how performance data is presented and analyzed."
      leadership="Led a cross-functional team of designers, researchers, and engineers to deliver a transformative solution that redefined how business leaders interact with benchmark data."
      teamExecution="Implemented an agile workflow with rapid prototyping and continuous user feedback, enabling the team to iterate quickly and validate solutions early in the process."
      designInnovation="Created an innovative interface that builds results instantly question by question, with digital-first results and automated PowerPoint generation capabilities."
      strategicImpact="The new benchmark tool has become a cornerstone of Gartner's offering, driving significant improvements in user satisfaction and adoption rates."
      lessonsLearned="The project reinforced the importance of continuous user feedback and the value of focusing on core user needs over feature complexity."
      coverImage="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    />
  );
};

export default GartnerBenchmarks;