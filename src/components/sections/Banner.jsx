import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ReactTyped } from "react-typed";
import bannerImage from '../../assets/images/banner/user.png';
import CV from '../../assets/pdf/Ashik_Hasan.pdf';

const Banner = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const typedStrings = [
    ' Web Developer.',
    ' App Developer.',
    ' Freelancer.',
  ];

  return (
    <section className="tmp-banner-one-area add-pattern" id="home">
      <div className="container">
        <div className="banner-one-main-wrapper py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="banner-right-content text-center">
                <img 
                  src={bannerImage} 
                  alt="banner-img" 
                  className={`tmp-scroll-trigger tmp-zoom-in animation-order-1 ${inView ? 'visible' : ''}`}
                  ref={ref}
                />
                <h2 className="banner-big-text-1 up-down">APP DEVELOPER</h2>
                <h2 className="banner-big-text-2 up-down-2">WEB DEVELOPER</h2>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="inner">
                <span className="sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">Hello</span>
                <h1 className="title tmp-scroll-trigger tmp-fade-in animation-order-2 mt-4">
                  i'm Ashik Hasan <br /> A
                  <span className="header-caption">
                    <ReactTyped 
                      strings={typedStrings}
                      typeSpeed={50}
                      backSpeed={30}
                      loop
                    />
                  </span>
                </h1>
                <p className="disc tmp-scroll-trigger tmp-fade-in animation-order-3">
                  Passionate Web & App Developer specializing in creating modern, responsive, and user-friendly digital experiences. I build high-quality websites and mobile applications with a focus on performance, functionality, and clean design, helping businesses and individuals bring their ideas to life.
                </p>
                <div className="button-area-banner-one tmp-scroll-trigger tmp-fade-in animation-order-4">
                  <a
                    className="tmp-btn hover-icon-reverse btn-border btn-md tmp-modern-button radius-round download-icon"
                    href={CV}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-file-pdf me-2"></i>
                    View Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;