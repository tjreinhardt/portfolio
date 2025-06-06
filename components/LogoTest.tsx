import React from 'react';

const LogoTest = () => {
  return (
    <div className="p-8 bg-[rgb(36,36,36)] min-h-screen">
      <h2 className="text-white text-2xl mb-8 text-center">Breme AI Logo Concepts</h2>
      
      <div className="space-y-8">
        {/* Concept 1: Network/Data Flow */}
        <div className="bg-[#1a1a1a] p-6 rounded-lg">
          <h3 className="text-[#F7AB0A] mb-4">Concept 1: Network Data Hub</h3>
          <img src="/logos/breme-logo-concept-1.svg" alt="Breme Logo Concept 1" className="mb-4" />
          <p className="text-gray-300 text-sm">Features: Central data hub with network connections, represents POS integration and data flow</p>
        </div>

        {/* Concept 2: Circuit Board */}
        <div className="bg-[#1a1a1a] p-6 rounded-lg">
          <h3 className="text-[#F7AB0A] mb-4">Concept 2: Tech Circuit Board</h3>
          <img src="/logos/breme-logo-concept-2.svg" alt="Breme Logo Concept 2" className="mb-4" />
          <p className="text-gray-300 text-sm">Features: Circuit board design with &quot;NEXT-GEN POS&quot; tagline, tech-focused</p>
        </div>

        {/* Concept 3: Modern B Icon */}
        <div className="bg-[#1a1a1a] p-6 rounded-lg">
          <h3 className="text-[#F7AB0A] mb-4">Concept 3: Modern B Icon</h3>
          <img src="/logos/breme-logo-concept-3.svg" alt="Breme Logo Concept 3" className="mb-4" />
          <p className="text-gray-300 text-sm">Features: Clean geometric B with tech accents, &quot;AI • FOOD • DATA&quot; tagline</p>
        </div>

        {/* Header sizes test */}
        <div className="bg-[#1a1a1a] p-6 rounded-lg">
          <h3 className="text-[#F7AB0A] mb-4">Header Navigation Size Test</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img src="/logos/breme-logo-concept-1.svg" alt="Logo 1" className="w-16 h-8" />
              <img src="/logos/breme-logo-concept-2.svg" alt="Logo 2" className="w-16 h-8" />
              <img src="/logos/breme-logo-concept-3.svg" alt="Logo 3" className="w-16 h-8" />
            </div>
            <p className="text-gray-300 text-sm">How they look at header navigation size (64x32px)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoTest; 