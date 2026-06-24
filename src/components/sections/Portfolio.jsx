import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import PortfolioModal from '../modals/PortfolioModal';

// Import images (all 1980x1080)
import ecommercePortfolio from '../../assets/images/latest-portfolio/ecommerce_portfolio_v2.png';
import erpPortfolio from '../../assets/images/latest-portfolio/erp_portfolio.png';
import schoolManagementPortfolio from '../../assets/images/latest-portfolio/school_management_portfolio.png';
import socialOrgPortfolio from '../../assets/images/latest-portfolio/social_org_portfolio.png';

const portfolioData = [
  {
    id: 1,
    image: ecommercePortfolio,
    title: 'Digital Transformation Advisors',
    category: 'Development Coaches',
    description: 'Strategic digital transformation consulting for modern businesses. Helping organizations leverage technology to drive growth and innovation.',
    technologies: ['React', 'Node.js', 'AI', 'Analytics'],
    liveLink: 'https://deshchina.com',

  },
  {
    id: 2,
    image: erpPortfolio,
    title: 'Enterprise Resource Planning System',
    category: 'Development App',
    description: 'Comprehensive ERP solution for medium to large enterprises. Streamlines operations, improves efficiency, and provides real-time insights.',
    technologies: ['Laravel', 'React', 'MySQL', 'Redis'],
    // liveLink: 'https://erp-demo.com',
   
  },
  {
    id: 3,
    image: schoolManagementPortfolio,
    title: 'School Management Platform',
    category: 'Web Design',
    description: 'Complete school management system with parent-teacher communication, attendance tracking, and academic performance monitoring.',
    technologies: ['React', 'Laravel', 'PostgreSQL', 'WebSockets'],
    liveLink: 'https://sbdc.edu.bd',
   
  },
  {
    id: 4,
    image: socialOrgPortfolio,
    title: 'Social Organization Platform',
    category: 'App Development',
    description: 'Social platform connecting organizations with volunteers. Features event management, skill matching, and community engagement tools.',
    technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB'],
    liveLink: 'https://psvobd.com',
 
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="latest-portfolio-area custom-column-grid tmp-section-gapTop py-5" id="portfolio">
      <div className="container">
        <div className="section-head mb-5 text-center">
          <div className="section-sub-title center-title">
            <span className="subtitle theme-gradient" style={{ color: '#6366f1', fontWeight: '600' }}>
              Latest Portfolio
            </span>
          </div>
          <h2 className="title" style={{ color: 'white', fontSize: '2.5rem' }}>
            Transforming Ideas into <br /> Exceptional
          </h2>
          <p className="description section-sm" style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
            Business consulting consultants provide expert advice and guidance
            businesses to help them improve their performance, efficiency, and organizational
          </p>
        </div>

        <div className="row animation-action-3" ref={ref}>
          {portfolioData.map((project, index) => (
            <div 
              key={project.id} 
              className="col-lg-6 col-sm-6 paralax-image"
            >
              <div 
                className="latest-portfolio-card tmp-hover-link"
                style={{ 
                  opacity: inView ? 1 : 0,
                  transition: `opacity 0.6s ease ${index * 0.2}s`,
                  cursor: 'pointer',
                  background: '#1a1a2e',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  padding: '15px',
                  marginBottom: '30px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                  height: '100%',
                }}
                onClick={() => handleProjectClick(project)}
              >
                <div className="portfoli-card-img tmponhover single-animation active">
                  <div className="img-box v2" style={{ position: 'relative', overflow: 'hidden', borderRadius: '10px' }}>
                    <img 
                      className="w-100" 
                      src={project.image}
                      alt={project.title}
                      style={{ 
                        cursor: 'pointer',
                        width: '100%',
                        height: '300px',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        transition: 'transform 0.5s ease',
                        borderRadius: '10px',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.08)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                    {/* Overlay gradient for better text readability if needed */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '50%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                        pointerEvents: 'none',
                      }}
                    />
                  </div>
                </div>
                <div className="portfolio-card-content-wrap d-flex justify-content-between align-items-center mt-3">
                  <div className="content-left" style={{ flex: 1 }}>
                    <h3 className="portfolio-card-title" style={{ 
                      color: 'white', 
                      fontSize: '1.1rem',
                      marginBottom: '5px',
                      fontWeight: '600',
                    }}>
                      <span style={{ cursor: 'pointer', color: 'white' }}>
                        {project.title}
                      </span>
                    </h3>
                    <p className="portfoli-card-para" style={{ 
                      color: '#94a3b8',
                      fontSize: '0.9rem',
                      margin: 0,
                    }}>
                      {project.category}
                    </p>
                  </div>
                  <div 
                    className="tmp-arrow-icon-btn"
                    style={{
                      background: '#6366f1',
                      width: '45px',
                      height: '45px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      flexShrink: 0,
                      marginLeft: '15px',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#818cf8';
                      e.currentTarget.style.transform = 'rotate(45deg)';
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(99,102,241,0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#6366f1';
                      e.currentTarget.style.transform = 'rotate(0deg)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project);
                    }}
                  >
                    <div className="btn-inner">
                      <i className="tmp-icon fa-solid fa-arrow-up-right" style={{ 
                        color: 'white', 
                        fontSize: '20px',
                        transition: 'transform 0.3s',
                      }}></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PortfolioModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </div>
  );
};

export default Portfolio;