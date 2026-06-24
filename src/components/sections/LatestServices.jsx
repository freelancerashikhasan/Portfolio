// src/components/sections/LatestServices.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import latestServiceImage from '../../assets/images/services/latest-services-user-image.png';

const LatestServices = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const servicesData = [
    {
      id: 1,
      title: 'Custom Web Development',
      description: 'I develop fast, responsive, and user-friendly websites using modern technologies, ensuring seamless performance, scalability, and an excellent user experience across all devices.',
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'I build high-quality Android and iOS applications that combine intuitive design with robust functionality, helping businesses connect with customers anytime, anywhere.',
    },
    {
      id: 3,
      title: 'Full-Stack Digital Solutions',
      description: 'From frontend design to backend development, I provide complete web and app solutions tailored to your business needs, delivering secure, scalable, and future-ready products.',
    },
  ];

  return (
    <section className="latest-service-area tmp-section-gapTop" ref={ref}>
      <div className="container">
        <div className="section-head mb--50">
          <div className={`section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1 ${inView ? 'visible' : ''}`}>
            <span className="subtitle theme-gradient">Latest Service</span>
          </div>
          <h2 className={`title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2 ${inView ? 'visible' : ''}`}>
           Building Digital Experiences, <br /> One Project at a Time
          </h2>
          <p className={`description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3 ${inView ? 'visible' : ''}`}>
            I create modern, high-performance websites and mobile applications that help businesses grow, engage users, 
            and achieve their goals. From responsive web solutions to cross-platform mobile apps, I turn ideas into powerful digital products.
          </p>
        </div>

        <div className="row animation-action-2">
          <div className="col-lg-6 order-2 order-lg-1">
            {servicesData.map((service, index) => (
              <div key={service.id} className="paralax-image">
                <div 
                  className={`service-card-v2 active single-animation tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${index + 1} ${inView ? 'visible' : ''}`}
                >
                  <h2 className="service-card-num">
                    <span>0{service.id}.</span>{service.title}
                  </h2>
                  <p className="service-para">{service.description}</p>
                  <div className="tmp-light light-center"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-6 paralax-image order-1 order-lg-2">
            <div className="service-card-user-image tmponhover single-animation active">
              <img 
                className={`tmp-scroll-trigger tmp-zoom-in animation-order-1 ${inView ? 'visible' : ''}`} 
                src={latestServiceImage} 
                alt="latest-user-image"
              />
              <div className="tmp-light light-top-left"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestServices;