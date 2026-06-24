// PortfolioModal.js
import React from 'react';

const PortfolioModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100"
      style={{
        background: "rgba(0,0,0,.92)",
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
            maxWidth: "1000px",
            width: "100%",
            borderRadius: "20px",
            overflow: "hidden",
            position: "relative",
            margin: "20px auto",
            boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "rgba(239,68,68,0.9)",
              color: "white",
              border: "none",
              borderRadius: "50%",
              width: "45px",
              height: "45px",
              fontSize: "28px",
              cursor: "pointer",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#ef4444";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(239,68,68,0.9)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            ×
          </button>

          {/* Full size image display for 1980x1080 */}
          <div style={{ 
            position: 'relative',
            width: '100%',
            height: 'auto',
            maxHeight: '70vh',
            overflow: 'hidden',
            background: '#0a0a1a',
          }}>
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '70vh',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>

          <div className="p-4" style={{ padding: "30px !important" }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <h2 className="text-white mb-2" style={{ fontSize: "1.75rem", fontWeight: '700' }}>
                  {project.title}
                </h2>
                <p style={{ color: '#6366f1', fontSize: '1rem', marginBottom: '15px', fontWeight: '500' }}>
                  {project.category}
                </p>
              </div>
            </div>

            {project.description && (
              <p style={{ 
                color: '#e2e8f0', 
                lineHeight: '1.8', 
                marginBottom: '20px',
                fontSize: '1.05rem',
              }}>
                {project.description}
              </p>
            )}

            {project.technologies && (
              <div className="mb-4">
                <h5 style={{ color: 'white', marginBottom: '12px', fontSize: '1rem', fontWeight: '600' }}>
                  <i className="fa-solid fa-code me-2" style={{ color: '#6366f1' }}></i>
                  Technologies Used:
                </h5>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      style={{
                        background: '#2d2d4a',
                        color: '#c4b5fd',
                        padding: '6px 18px',
                        borderRadius: '20px',
                        fontSize: '14px',
                        border: '1px solid rgba(99,102,241,0.2)',
                        transition: 'all 0.3s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#6366f1';
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#2d2d4a';
                        e.currentTarget.style.color = '#c4b5fd';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-4 pt-3 border-top" style={{ borderColor: "#2d2d4a !important" }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{
                      background: '#6366f1',
                      color: 'white',
                      borderRadius: '50px',
                      padding: '10px 28px',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontWeight: '500',
                      boxShadow: '0 4px 15px rgba(99,102,241,0.3)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#818cf8';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 6px 25px rgba(99,102,241,0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#6366f1';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(99,102,241,0.3)';
                    }}
                  >
                    <i className="fa-solid fa-globe"></i>
                    Live Demo
                  </a>
                )}
                
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light"
                    style={{
                      borderRadius: '50px',
                      padding: '10px 28px',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      border: '2px solid #4a4a6a',
                      color: '#94a3b8',
                      fontWeight: '500',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.borderColor = '#6366f1';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.borderColor = '#4a4a6a';
                      e.currentTarget.style.color = '#94a3b8';
                    }}
                  >
                    <i className="fa-brands fa-github"></i>
                    View Code
                  </a>
                )}

                {project.caseStudyLink && (
                  <a
                    href={project.caseStudyLink}
                    className="btn btn-outline-light"
                    style={{
                      borderRadius: '50px',
                      padding: '10px 28px',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      border: '2px solid #4a4a6a',
                      color: '#94a3b8',
                      fontWeight: '500',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.borderColor = '#6366f1';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.borderColor = '#4a4a6a';
                      e.currentTarget.style.color = '#94a3b8';
                    }}
                  >
                    <i className="fa-solid fa-file-lines"></i>
                    Case Study
                  </a>
                )}
              </div>
            </div>

            <div className="mt-3">
              <button
                onClick={onClose}
                style={{
                  color: '#94a3b8',
                  background: 'transparent',
                  border: 'none',
                  padding: '8px 0',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
              >
                <i className="fa-solid fa-arrow-left"></i>
                Back to Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;