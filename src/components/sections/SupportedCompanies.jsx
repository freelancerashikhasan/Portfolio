// src/components/sections/SupportedCompanies.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

const SupportedCompanies = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const companies = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div className="our-supported-company-area tmp-section-gapTop" ref={ref}>
      <div className="container">
        <div className="row justify-content-center">
          {companies.map((num, index) => (
            <div key={num} className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div 
                className={`support-company-logo tmp-scroll-trigger tmp-fade-in animation-order-${index + 1} ${inView ? 'visible' : ''}`}
              >
                <img 
                  src={`/assets/images/our-supported-company/company-logo-${num}.svg`} 
                  alt={`Virtuo - Personal Portfolio HTML Template`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportedCompanies;