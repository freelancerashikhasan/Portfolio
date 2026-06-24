import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import ecommercePortfolio from '../../assets/images/blog/laravel_react_erp.png';
import ecommercePortfolio2 from '../../assets/images/blog/school_erp_blog.png';
import appImage from '../../assets/images/blog/react_native_mobile.png';
import developer_entrepreneur_journey from '../../assets/images/blog/developer_entrepreneur_journey.png';
import web_security_practices from '../../assets/images/blog/web_security_practices.png';
import ai_ml_web_dev from '../../assets/images/blog/ai_ml_web_dev.png';
import schoolManagementPortfolio from '../../assets/images/latest-portfolio/school_management_portfolio.png';
import socialOrgPortfolio from '../../assets/images/latest-portfolio/social_org_portfolio.png';


const blogData = [
  {
    id: 1,
    image: ecommercePortfolio,
    author: 'Ashik Hasan',
    comments: 12,
    title: 'How I Built a School & College ERP Used by 20+ Institutions',
    content: `
      Developing a complete School & College ERP was one of the most challenging
      and rewarding projects of my career. The system manages admissions,
      attendance, examinations, accounting, payroll, SMS notifications, and
      academic reporting from a single dashboard.

      Today, more than 20 educational institutions use this software daily.
      The goal was to simplify administration and improve operational efficiency
      through automation and modern technology.

      Key features of the ERP include:
      • Student Information System (SIS)
      • Automated Attendance Tracking
      • Online Examination Portal
      • Fee Management & Accounting
      • Staff Payroll System
      • Parent-Teacher Communication
      • Report Card Generation
      • SMS & Email Notifications

      The system is built with scalability in mind, supporting multiple branches
      and thousands of users simultaneously. Security was a top priority,
      implementing role-based access control and data encryption.
    `,
  },
  {
    id: 2,
    image: ecommercePortfolio2,
    author: 'Ashik Hasan',
    comments: 8,
    title: 'Building Modern ERP Solutions with Laravel and React',
    content: `
      Laravel and React are a powerful combination for building scalable ERP
      applications. Laravel provides a robust backend while React delivers
      a fast and responsive user experience.

      In my ERP projects, I focus on performance, security, reporting,
      role-based permissions, and clean architecture to ensure long-term
      maintainability.

      Why this stack works:
      • Laravel's Eloquent ORM for database operations
      • React's component-based architecture
      • RESTful API integration
      • JWT authentication for security
      • Real-time updates with WebSockets
      • Comprehensive dashboard analytics

      The combination allows rapid development while maintaining high
      performance standards. I've successfully delivered multiple enterprise
      projects using this technology stack.
    `,
  },
  {
    id: 3,
    image: appImage,
    author: 'Ashik Hasan',
    comments: 15,
    title: 'Why React Native Is My Preferred Mobile Development Framework',
    content: `
      React Native allows businesses to launch Android and iOS applications
      from a single codebase, reducing development time and costs.

      I use React Native to build high-performance mobile apps with modern UI,
      API integrations, push notifications, authentication systems, and
      real-time features.

      Benefits of React Native:
      • Cross-platform compatibility
      • Hot reloading for faster development
      • Native performance
      • Large ecosystem of libraries
      • Reusable components
      • Cost-effective development

      Recently, I've built several production apps including e-commerce,
      healthcare, and educational platforms using React Native, all with
      excellent user ratings and performance metrics.
    `,
  },
  {
    id: 4,
    image: ai_ml_web_dev,
    author: 'Ashik Hasan',
    comments: 10,
    title: 'The Future of Web Development: AI and Machine Learning Integration',
    content: `
      Artificial Intelligence and Machine Learning are revolutionizing web
      development. From intelligent chatbots to personalized user experiences,
      AI is becoming an essential part of modern web applications.

      In my recent projects, I've integrated AI capabilities including:
      • Intelligent search algorithms
      • Predictive analytics
      • Automated content recommendations
      • Natural Language Processing (NLP)
      • Computer vision for image recognition
      • Chatbots with conversational AI

      The integration of AI doesn't replace developers but enhances our
      capabilities, allowing us to build smarter, more intuitive applications.
      I'm excited to explore more AI-powered solutions in future projects.
    `,
  },
  {
    id: 5,
    image: web_security_practices,
    author: 'Ashik Hasan',
    comments: 7,
    title: 'Essential Security Practices for Modern Web Applications',
    content: `
      Security is paramount in web development. Over the years, I've learned
      that implementing robust security measures early in the development
      process saves time and protects users' data.

      Critical security practices I follow:
      • HTTPS encryption for all communications
      • Input validation and sanitization
      • SQL injection prevention
      • Cross-Site Scripting (XSS) protection
      • CSRF token implementation
      • Regular security audits
      • Data encryption at rest
      • Secure authentication with JWT or OAuth
      • Rate limiting and DDoS protection

      By following these practices, I've successfully protected applications
      from various security threats and maintained user trust.
    `,
  },
  {
    id: 6,
    image: developer_entrepreneur_journey,
    author: 'Ashik Hasan',
    comments: 20,
    title: 'From Developer to Entrepreneur: My Journey and Lessons Learned',
    content: `
      Transitioning from being a developer to an entrepreneur was a significant
      step in my career. It required not just technical skills but also
      business acumen, leadership, and resilience.

      Key lessons from my journey:
      • Focus on solving real problems
      • Build a strong network
      • Invest in continuous learning
      • Embrace failure as part of growth
      • Stay user-centric in product development
      • Build a reliable team
      • Maintain work-life balance

      Today, I run my own software company where we deliver innovative
      solutions to clients worldwide. The journey has been challenging but
      incredibly rewarding.
    `,
  },
];

const BlogModal = ({ blog, onClose }) => {
  if (!blog) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100"
      style={{
        background: "rgba(0,0,0,.9)",
        zIndex: 9999,
        overflow: "auto",
        padding: "20px 0",
      }}
      onClick={onClose}
    >
      <div
        className="container h-100 d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div
          style={{
            background: "#1a1a2e",
            maxWidth: "900px",
            width: "100%",
            borderRadius: "20px",
            overflow: "hidden",
            position: "relative",
            margin: "20px auto",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              background: "#ef4444",
              color: "white",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              fontSize: "24px",
              cursor: "pointer",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            ×
          </button>

          <img
            src={blog.image}
            alt={blog.title}
            className="w-100"
            style={{ height: "400px", objectFit: "cover" }}
          />

          <div className="p-4" style={{ padding: "30px !important" }}>
            <div className="d-flex gap-4 mb-3" style={{ color: "#94a3b8" }}>
              <span>
                <i className="fa-regular fa-user me-2"></i>
                {blog.author}
              </span>
              <span>
                <i className="fa-regular fa-comments me-2"></i>
                {blog.comments} Comments
              </span>
            </div>

            <h2 className="text-white mb-4" style={{ fontSize: "1.75rem" }}>
              {blog.title}
            </h2>

            <div
              style={{
                color: "#e2e8f0",
                lineHeight: "1.9",
                whiteSpace: "pre-line",
                fontSize: "1.05rem",
              }}
            >
              {blog.content}
            </div>

            <div className="mt-4 pt-3 border-top" style={{ borderColor: "#2d2d4a !important" }}>
              <button
                onClick={onClose}
                className="btn btn-outline-light"
                style={{
                  borderRadius: "50px",
                  padding: "10px 30px",
                  transition: "all 0.3s",
                }}
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogCard = ({ blog, index }) => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleOpenModal = (e) => {
    if (e) e.preventDefault();
    setSelectedBlog(blog);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedBlog(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="col-xl-4 col-lg-6 col-md-6 col-12" ref={ref}>
        <div
          className="blog-card-style-two tmponhover"
          style={{
            opacity: inView ? 1 : 0,
            transition: `opacity 0.6s ease ${index * 0.2}s`,
            background: '#1a1a2e',
            borderRadius: '15px',
            overflow: 'hidden',
            height: '100%',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}
        >
          <div className="blog-card-img" style={{ position: 'relative', overflow: 'hidden' }}>
            <img
              src={blog.image}
              alt={blog.title}
              className="w-100"
              style={{
                height: '250px',
                objectFit: 'cover',
                transition: 'transform 0.5s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
            <div
              style={{
                position: 'absolute',
                top: '15px',
                left: '15px',
                background: '#6366f1',
                color: 'white',
                padding: '5px 15px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 'bold',
              }}
            >
              {blog.comments > 10 ? 'Popular' : 'Featured'}
            </div>
          </div>
          <div className="blog-content-wrap p-4">
            <div className="blog-tags mb-3">
              <ul className="d-flex gap-3 list-unstyled" style={{ color: '#94a3b8', fontSize: '14px', margin: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <i className="fa-regular fa-user"></i> {blog.author}
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <i className="fa-regular fa-comments"></i> {blog.comments}
                </li>
              </ul>
            </div>
            <h3 className="blog-title" style={{ color: 'white', fontSize: '1.25rem', lineHeight: '1.4' }}>
              <span
                onClick={handleOpenModal}
                style={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }}
              >
                {blog.title}
              </span>
            </h3>
            <p className="mt-2" style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>
              {blog.content.substring(0, 100)}...
            </p>
            <div className="tmp-button-here mt-3">
              <button
                className="btn btn-outline-light"
                onClick={handleOpenModal}
                style={{
                  borderRadius: '50px',
                  padding: '8px 25px',
                  fontSize: '14px',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#6366f1';
                  e.currentTarget.style.borderColor = '#6366f1';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'white';
                  e.currentTarget.style.color = 'white';
                }}
              >
                Read More <i className="fa-solid fa-arrow-right ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {selectedBlog && (
        <BlogModal blog={selectedBlog} onClose={handleCloseModal} />
      )}
    </>
  );
};

const Blog = () => {
  return (
    <section className="blog-and-news-are tmp-section-gap py-5" id="blog">
      <div className="container">
        <div className="section-head mb-5 text-center">
          <div className="section-sub-title center-title">
            <span className="subtitle theme-gradient" style={{ color: '#6366f1', fontWeight: '600' }}>
              Blog and news
            </span>
          </div>
          <h2 className="title" style={{ color: 'white', fontSize: '2.5rem' }}>
            Elevating Personal Branding through <br /> Powerful Portfolios
          </h2>
          <p className="mt-3" style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
            Insights, tutorials, and stories from my development journey
          </p>
        </div>
        <div className="row g-4">
          {blogData.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;