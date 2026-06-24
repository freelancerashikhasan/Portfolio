// src/components/sections/EducationExperience.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import expertImage from '../../assets/images/experiences/ashik-hasan.png';

const EducationExperience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
const educationData = [
  {
    id: 1,
    title: 'Complete Web Development with PHP & Laravel',
    years: '2021',
    description:
      'Completed professional training in PHP, MySQL, and Laravel framework, focusing on REST APIs, authentication, database design, and full-stack web application development.',
  },
  {
    id: 2,
    title: 'React.js Development',
    years: '2022',
    description:
      'Learned modern frontend development with React.js including Hooks, Context API, React Router, state management, and API integration.',
  },
  {
    id: 3,
    title: 'React Native Mobile App Development',
    years: '2023',
    description:
      'Completed hands-on training in React Native for building cross-platform Android and iOS applications with API integration and Firebase services.',
  },
  {
    id: 4,
    title: 'Advanced JavaScript & MERN Concepts',
    years: '2024',
    description:
      'Enhanced skills in JavaScript ES6+, asynchronous programming, API consumption, and modern web development practices.',
  },
];

const trainingData = [
  {
    id: 1,
    institute: 'Creative IT Institute',
    course: 'Professional Web Development with PHP & Laravel',
    year: '2021',
  },
  {
    id: 2,
    institute: 'Programming Hero',
    course: 'Complete React.js Development',
    year: '2022',
  },
  {
    id: 3,
    institute: 'Ustad Platform',
    course: 'React Native App Development',
    year: '2023',
  },
  {
    id: 4,
    institute: 'Creative IT Institute',
    course: 'Advanced JavaScript Development',
    year: '2024',
  },
];

const experiencesData = [
  {
    id: 1,
    company: 'SoftHost IT',
    title: 'Junior Web Developer',
    description:
      'Worked on PHP, Laravel, MySQL, and frontend development. Developed business websites, admin panels, and custom web applications.',
  },
  {
    id: 2,
    company: 'Sabit International',
    title: 'Web & Application Developer',
    description:
      'Developed scalable web applications and mobile solutions using Laravel, React.js, React Native, REST APIs, and modern development practices.',
  },
  {
    id: 3,
    company: 'Masaba IT',
    title: 'Senior Full Stack Developer',
    description:
      'Leading development of web and mobile applications, API architecture, database design, performance optimization, and client project management.',
  },
];

  return (
    <section className="education-experience tmp-section-gapTop" id="resume" ref={ref}>
      <div className="container">
        <div className="section-head mb--50">
          <div className={`section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1 ${inView ? 'visible' : ''}`}>
            <span className="subtitle theme-gradient">Education & Experience</span>
          </div>
          <h2 className={`title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2 ${inView ? 'visible' : ''}`}>
            Empowering Creativity <br /> through
          </h2>
          <p className={`description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3 ${inView ? 'visible' : ''}`}>
            Business consulting consultants provide expert advice and guida
            businesses to help them improve their performance, efficiency, and organizational
          </p>
        </div>

        <div className="row g-5 animation-action-3">
          {educationData.map((item, index) => (
            <div key={item.id} className="col-lg-6 paralax-image col-sm-6">
              <div 
                className={`education-experience-card single-animation tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${index + 1} ${inView ? 'visible' : ''}`}
              >
                <h4 className="edu-sub-title">{item.title}</h4>
                <h2 className="edu-title">{item.years}</h2>
                <div className="tmp-light light-top-left"></div>
                <p className="edu-para">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="experiences-wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="experiences-wrap-left-content">
                <h2 className={`custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1 ${inView ? 'visible' : ''}`}>
                  Experiences
                </h2>

                {experiencesData.map((item, index) => (
                  <div 
                    key={item.id} 
                    className={`experience-content tmp-scroll-trigger tmp-fade-in animation-order-${index + 1} ${inView ? 'visible' : ''}`}
                  >
                    <p className="ex-subtitle theme-gradient">experience</p>
                    <h2 className="ex-name">{item.company}</h2>
                    <h3 className="ex-title">{item.title}</h3>
                    <p className="ex-para">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6 paralax-image">
              <div className="experiences-wrap-right-content">
                <img 
                  className={`tmp-scroll-trigger tmp-zoom-in animation-order-1 ${inView ? 'visible' : ''}`} 
                  src={expertImage} 
                  alt="expert-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;