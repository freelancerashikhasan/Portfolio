// src/components/sections/MySkills.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

const MySkills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

const skillsData = [
  {
    id: 1,
    icon: 'fa-building',
    title: 'ERP Systems',
    done: '15+ Done',
    description:
      'Development of custom ERP solutions including HRM, Payroll, Inventory Management, Accounting, Sales, Purchase, and Business Automation systems.',
  },
  {
    id: 2,
    icon: 'fa-cart-shopping',
    title: 'E-Commerce Solutions',
    done: '25+ Done',
    description:
      'Building complete e-commerce platforms with product management, payment gateway integration, order tracking, inventory control, and customer management.',
  },
  {
    id: 3,
    icon: 'fa-layer-group',
    title: 'SaaS Applications',
    done: '12+ Done',
    description:
      'Creating scalable Software as a Service (SaaS) platforms with subscription management, multi-tenant architecture, user roles, and cloud deployment.',
  },
  {
    id: 4,
    icon: 'fa-newspaper',
    title: 'CMS Development',
    done: '20+ Done',
    description:
      'Developing custom content management systems and business portals with advanced content publishing, media management, and user permissions.',
  },
  {
    id: 5,
    icon: 'fa-mobile-screen',
    title: 'Mobile Applications',
    done: '30+ Done',
    description:
      'Cross-platform Android and iOS applications built with React Native, featuring API integration, authentication, push notifications, and real-time data.',
  },
  {
    id: 6,
    icon: 'fa-users',
    title: 'Social & Organization Platforms',
    done: '10+ Done',
    description:
      'Management systems for organizations, associations, educational institutes, NGOs, and social communities with member and event management.',
  },
  {
    id: 7,
    icon: 'fa-graduation-cap',
    title: 'Education Management',
    done: '8+ Done',
    description:
      'School, college, coaching center, and learning management systems with student, teacher, attendance, and result management features.',
  },
  {
    id: 8,
    icon: 'fa-hospital',
    title: 'Healthcare Systems',
    done: '6+ Done',
    description:
      'Hospital, clinic, and diagnostic management software including patient records, appointments, billing, and reporting modules.',
  },
  {
    id: 9,
    icon: 'fa-globe',
    title: 'Business Websites',
    done: '50+ Done',
    description:
      'Corporate websites, portfolios, landing pages, and custom business solutions built with modern UI/UX and SEO-friendly architecture.',
  },
    {
    id: 10,
    icon: 'fa-school',
    title: 'School & College Management System',
    done: '20+ Institutions',
    description:
      'Designed and developed a complete education management system currently used by more than 20 schools and colleges. Features include student admission, attendance tracking, examination management, results processing, fee collection, payroll, accounting, SMS notifications, and parent portals.',
  }
];

  return (
    <section className="my-skill tmp-section-gapTop" ref={ref}>
      <div className="container">
        <div className="section-head text-align-left mb--50">
          <div className={`section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1 ${inView ? 'visible' : ''}`}>
            <span className="subtitle theme-gradient">My Expertise</span>
          </div>
         <h2 className="title split-collab ...">
          Software Solutions <br /> I Build & Deliver
        </h2>
        </div>

        <div className="services-widget v1">
          {skillsData.map((skill, index) => (
            <div 
              key={skill.id} 
              className={`service-item ${index === 0 ? 'current' : ''} tmp-scroll-trigger tmp-fade-in animation-order-${index + 1} ${inView ? 'visible' : ''}`}
            >
              <div className="my-skill-card">
                <div className="card-icon">
                  <i className={`fa-light ${skill.icon}`}></i>
                </div>
                <div className="card-title">
                  <h3 className="main-title">{skill.title}</h3>
                  <p className="sub-title">{skill.done}</p>
                </div>
                <p className="card-para">{skill.description}</p>
              
              </div>
              <button className="service-link modal-popup"></button>
            </div>
          ))}
          <div className="active-bg wow fadeInUp mleave"></div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;