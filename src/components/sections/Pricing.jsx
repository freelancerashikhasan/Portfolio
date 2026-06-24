import React from 'react';
import { useInView } from 'react-intersection-observer';

const pricingData = [
  {
    id: 1,
    title: 'Website Development',
    price: 'Starting From $199',
    features: [
      'Corporate Website',
      'Portfolio Website',
      'Landing Page',
      'SEO Friendly',
      'Responsive Design',
    ],
    isActive: false,
  },
  {
    id: 2,
    title: 'Web Application',
    price: 'Custom Quote',
    features: [
      'ERP Development',
      'School Management',
      'CMS Solutions',
      'SaaS Applications',
      'API Integration',
    ],
    isActive: true,
  },
  {
    id: 3,
    title: 'Mobile App Development',
    price: 'Starting From $499',
    features: [
      'Android App',
      'iOS App',
      'React Native',
      'Admin Panel',
      'App Store Deployment',
    ],
    isActive: false,
  },
];
const PricingCard = ({ plan, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      className={`col-lg-4 col-md-6 paralax-image`}
      ref={ref}
    >
      <div 
        className={`price-plan-card tmponhover blur-style-two ${plan.isActive ? 'active' : ''}`}
        style={{ 
          opacity: inView ? 1 : 0,
          transition: `opacity 0.6s ease ${index * 0.2}s`,
          padding: '2rem',
          borderRadius: '20px',
          background: plan.isActive ? 'linear-gradient(135deg, #6366f1, #a855f7)' : '#1a1a2e',
          color: 'white',
          height: '100%',
        }}
      >
        <span className="price-sub-title">{plan.title}</span>
        <h3 className="main-price">{plan.price}</h3>
        <p className="per-month">Per Month</p>
        <div className="check-box mt-3">
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {plan.features.map((feature, i) => (
              <li key={i}>
                <div className="check-box-item d-flex align-items-center gap-2 mb-2">
                  <div className="box-icon">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                  <p className="box-para mb-0">{feature}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="tmp-button-here mt-4">
         <a
          href={`https://wa.me/8801302224451?text=${encodeURIComponent(
            `Hello Ashik, I'm interested in your ${plan.title} service.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon"
          style={{
            display: 'inline-block',
            padding: '0px 30px',
            border: '1px solid white',
            borderRadius: '50px',
            color: plan.isActive ? '#6366f1' : 'white',
            background: plan.isActive ? 'white' : 'transparent',
            textDecoration: 'none',
          }}
        >
          <i className="fab fa-whatsapp me-2"></i>
          Get Started
        </a>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <section className="our-price-plan-area tmp-section-gapTop py-5" id="pricing">
      <div className="container">
        <div className="section-head mb-5 text-center">
          <div className="section-sub-title center-title">
            <span className="subtitle theme-gradient">My Price plan</span>
          </div>
          <h2 className="title">Enhancing Collaboration <br /> between Remote</h2>
        </div>
        <div className="row align-items-center">
          {pricingData.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;