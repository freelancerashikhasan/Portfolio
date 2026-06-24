import React from 'react';
import { useInView } from 'react-intersection-observer';

const servicesData = [
  {
    icon: 'fa-code',
    title: 'Web Development',
    projects: '120+ Projects'
  },
  {
    icon: 'fa-mobile-screen-button',
    title: 'App Development',
    projects: '80+ Projects'
  },
  {
    icon: 'fa-laptop-code',
    title: 'Frontend Development',
    projects: '100+ Projects'
  },
  {
    icon: 'fa-server',
    title: 'Backend Development',
    projects: '90+ Projects'
  }
];
const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="service-area tmp-section-gap py-5" id="service">
      <div className="container">
        <div className="row justify-content-center" ref={ref}>
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="col-lg-3 col-md-4 col-sm-6"
            >
              <div 
                className={`service-card-v1 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${index + 1} tmp-link-animation`}
                style={{ opacity: inView ? 1 : 0 }}
              >
                <div className="service-card-icon">
                  <i className={`fa-light ${service.icon}`}></i>
                </div>
                <h4 className="service-title">
                  <a href="service-details.html">{service.title}</a>
                </h4>
                <p className="service-para">{service.projects}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;