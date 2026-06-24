// src/components/sections/Testimonials.jsx
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useInView } from 'react-intersection-observer';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      id: 1,
      username: 'Md. Rahman',
      role: 'Principal, Educational Institute',
      message:
        'Our school has been using the management system developed by Ashik for several years. The software has made student, attendance, examination, and fee management much easier.',
    },
    {
      id: 2,
      username: 'Mohammad Hossain',
      role: 'Managing Director',
      message:
        'Ashik developed a custom ERP solution for our organization. His technical expertise, professionalism, and support exceeded our expectations.',
    },
    {
      id: 3,
      username: 'Abdullah Al Mamun',
      role: 'Business Owner',
      message:
        'The e-commerce platform he built for us is fast, secure, and easy to manage. We are very satisfied with the quality of his work.',
    },
    {
      id: 4,
      username: 'Tanvir Ahmed',
      role: 'CEO, Startup Company',
      message:
        'Ashik delivered our web application using Laravel and React with excellent performance. The project was completed on time and within budget.',
    },
    {
      id: 5,
      username: 'Mahmudul Hasan',
      role: 'Organization Secretary',
      message:
        'The organization management software developed by Ashik helped us automate member management, accounting, and reporting processes efficiently.',
    },
    {
      id: 6,
      username: 'Fahim Hasan',
      role: 'Mobile App Client',
      message:
        'Our React Native mobile application was developed professionally with a modern design and smooth performance. Highly recommended developer.',
    },
  ];


  return (
    <section className="testimonial tmp-section-gapTop" ref={ref}>
      <div className="testimonial-wrapper animation-action-3">
        <div className="container">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <div 
                  className={`testimonial-inner-style-two single-animation tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${index + 1} ${inView ? 'visible' : ''}`}
                >
                  <div className="testimonial-header">
                   
                    <h5 className="ts-header">
                      <span className="text-color-primary">{testimonial.username}</span> {testimonial.role}
                    </h5>
                  </div>
                  <div className="testimonial-body">
                    <p className="discription">{testimonial.message}</p>
                  </div>
                  <div className="tmp-light light-left"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="testimonial-btn-next-prev">
            <div className="swiper-button-next">
              {/* <i className="fa-solid fa-arrow-right"></i> */}
            </div>
            <div className="swiper-button-prev">
              {/* <i className="fa-solid fa-arrow-left"></i> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;