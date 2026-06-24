// src/components/common/DemoModal.jsx
import React, { useState } from 'react';

const DemoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dark');

  const darkDemos = [
    { id: 1, title: 'Main Demo', image: 'home-1.png', link: 'index.html' },
    { id: 2, title: 'Demo 02', image: 'home-2.png', link: 'index-02.html' },
    { id: 3, title: 'Demo 03', image: 'home-3.png', link: 'index-03.html' },
    { id: 4, title: 'Demo 04', image: 'home-4.png', link: 'index-04.html' },
    { id: 5, title: 'Demo 05', image: 'home-5.png', link: 'index-05.html' },
    { id: 6, title: 'Demo 06', image: 'home-6.png', link: 'index-06.html' },
    { id: 7, title: 'Demo 07', image: 'home-7.png', link: 'index-07.html' },
    { id: 8, title: 'Demo 08', image: 'home-8.png', link: 'index-08.html' },
    { id: 9, title: 'Demo 09', image: 'home-9.png', link: 'index-09.html' },
    { id: 10, title: 'Demo 10', image: 'home-10.png', link: 'index-10.html' },
    { id: 11, title: 'Demo 11', image: 'home-11.png', link: 'index-11.html' },
    { id: 12, title: 'Demo 12', image: 'home-12.png', link: 'index-12.html' },
    { id: 13, title: 'Demo 13', image: 'home-13.png', link: 'index-13.html' },
    { id: 14, title: 'Demo 14', image: 'home-14.png', link: 'index-14.html' },
    { id: 15, title: 'Demo 15', image: 'home-15.png', link: 'index-15.html' },
    { id: 16, title: 'Demo 16', image: 'home-16.png', link: 'index-16.html' },
    { id: 17, title: 'Demo 17', image: 'home-17.png', link: 'index-17.html' },
    { id: 18, title: 'Demo 21', image: 'coming-soon.png', link: '#' },
  ];

  const lightDemos = [
    { id: 1, title: 'Main Demo', image: 'home-1-white.png', link: 'index-white.html' },
    { id: 2, title: 'Demo 02', image: 'home-2-white.png', link: 'index-02-white.html' },
    { id: 3, title: 'Demo 03', image: 'home-3-white.png', link: 'index-03-white.html' },
    { id: 4, title: 'Demo 04', image: 'home-4-white.png', link: 'index-04-white.html' },
    { id: 5, title: 'Demo 05', image: 'home-5-white.png', link: 'index-05-white.html' },
    { id: 6, title: 'Demo 06', image: 'home-6-white.png', link: 'index-06-white.html' },
    { id: 7, title: 'Demo 07', image: 'home-7-white.png', link: 'index-07-white.html' },
    { id: 8, title: 'Demo 08', image: 'home-8-white.png', link: 'index-08-white.html' },
    { id: 9, title: 'Demo 09', image: 'home-9-white.png', link: 'index-09-white.html' },
    { id: 10, title: 'Demo 10', image: 'home-10-white.png', link: 'index-10-white.html' },
    { id: 11, title: 'Demo 11', image: 'home-11-white.png', link: 'index-11-white.html' },
    { id: 12, title: 'Demo 12', image: 'home-12-white.png', link: 'index-12-white.html' },
    { id: 13, title: 'Demo 13', image: 'home-13-white.png', link: 'index-13-white.html' },
    { id: 14, title: 'Demo 14', image: 'home-14-white.png', link: 'index-14-white.html' },
    { id: 15, title: 'Demo 15', image: 'home-15-white.png', link: 'index-15-white.html' },
    { id: 16, title: 'Demo 16', image: 'home-16-white.png', link: 'index-16-white.html' },
    { id: 17, title: 'Demo 17', image: 'home-17-white.png', link: 'index-17-white.html' },
    { id: 18, title: 'Demo 21', image: 'coming-soon-white.png', link: '#' },
  ];

  return (
    <>
      {/* Trigger Button */}
      <div className="demo-button-wrapper" style={{ position: 'fixed', right: '20px', bottom: '200px', zIndex: 999 }}>
        <div className="buy-theme">
          <a href="https://themeforest.net/item/virtuo-personal-portfolio-html-template/57833271" target="_blank" rel="noopener noreferrer">
            <div className="theme-wrapper">
              <div>
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.9854 19.9999C11.479 19.9999 11.8791 19.5998 11.8791 19.1063C11.8791 18.6127 11.479 18.2126 10.9854 18.2126C10.4919 18.2126 10.0918 18.6127 10.0918 19.1063C10.0918 19.5998 10.4919 19.9999 10.9854 19.9999Z" fill="white" />
                  <path d="M16.1233 13.0134L11.0833 13.5539C10.9895 13.5633 10.9427 13.4477 11.0177 13.3883L15.9483 9.54819C16.267 9.28572 16.4732 8.87952 16.3857 8.44208C16.2983 7.77341 15.7452 7.33597 15.0453 7.42346L9.68658 8.20773C9.59284 8.22023 9.54285 8.1015 9.61784 8.04213L14.9297 3.98639C15.9764 3.17087 16.0639 1.57107 15.1047 0.639933C14.2329 -0.231832 12.8331 -0.203711 11.9613 0.668055L3.403 9.37634C3.08429 9.72629 2.93743 10.1919 3.02492 10.6855C3.17178 11.4729 3.95605 11.9948 4.74345 11.851L9.3585 10.9105C9.45849 10.8886 9.5116 11.023 9.42724 11.0792L4.30913 14.357C3.66859 14.7632 3.378 15.4912 3.5811 16.2192C3.7842 17.1785 4.74658 17.7315 5.67771 17.5003L13.3299 15.6162C13.4174 15.5943 13.4799 15.6943 13.4236 15.763L12.23 17.2378C11.9113 17.644 12.4331 18.1971 12.8706 17.8784L16.8013 14.6475C17.5012 14.0664 17.0357 12.929 16.1326 13.0165L16.1233 13.0134Z" fill="white" />
                </svg>
              </div>
            </div>
          </a>
        </div>
        <div className="all-demo show-demo" onClick={() => setIsOpen(true)}>
          <div className="demos">
            <div className="theme-wrapper">
              <div>34+ Pre-built sites</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="demo-modal-area" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.9)',
          zIndex: 9999,
          overflow: 'auto',
          padding: '40px 20px',
        }}>
          <div className="wrapper" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="tmp-modal-inner" style={{ background: '#1a1a2e', borderRadius: '20px', padding: '40px' }}>
              <div className="close-icon" style={{ textAlign: 'right' }}>
                <button 
                  className="demo-close-btn" 
                  onClick={() => setIsOpen(false)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                    fontSize: '24px',
                    cursor: 'pointer',
                  }}
                >
                  <span><i className="fa-sharp fa-light fa-xmark"></i></span>
                </button>
              </div>
              <div className="demo-top text-center" style={{ marginBottom: '30px' }}>
                <h4 className="title" style={{ color: 'white', fontSize: '28px' }}>Virtuo</h4>
                <p className="subtitle" style={{ color: '#94a3b8', maxWidth: '600px', margin: '10px auto' }}>
                  A personal portfolio website is your digital resume—a place to showcase your work, skills, and achievements.
                </p>
              </div>

              <ul className="popuptab-area nav nav-tabs" style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '10px',
                marginBottom: '30px',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                paddingBottom: '15px',
              }}>
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'dark' ? 'active' : ''}`}
                    onClick={() => setActiveTab('dark')}
                    style={{
                      padding: '10px 30px',
                      borderRadius: '50px',
                      background: activeTab === 'dark' ? 'linear-gradient(90deg, #6366f1, #a855f7)' : 'transparent',
                      color: activeTab === 'dark' ? 'white' : '#94a3b8',
                      border: activeTab === 'dark' ? 'none' : '1px solid rgba(255,255,255,0.2)',
                      cursor: 'pointer',
                    }}
                  >
                    Dark Demo
                  </button>
                </li>
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'light' ? 'active' : ''}`}
                    onClick={() => setActiveTab('light')}
                    style={{
                      padding: '10px 30px',
                      borderRadius: '50px',
                      background: activeTab === 'light' ? 'linear-gradient(90deg, #6366f1, #a855f7)' : 'transparent',
                      color: activeTab === 'light' ? 'white' : '#94a3b8',
                      border: activeTab === 'light' ? 'none' : '1px solid rgba(255,255,255,0.2)',
                      cursor: 'pointer',
                    }}
                  >
                    Light Demo
                  </button>
                </li>
              </ul>

              <div className="tab-content">
                <div className={`tab-pane ${activeTab === 'dark' ? 'show active' : ''}`}>
                  <div className="row">
                    {(activeTab === 'dark' ? darkDemos : lightDemos).map((demo) => (
                      <div key={demo.id} className="col-lg-4 col-md-6 col-12" style={{ marginBottom: '20px' }}>
                        <div className="single-demo">
                          <div className="inner">
                            <div className="thumbnail" style={{ position: 'relative', overflow: 'hidden', borderRadius: '10px' }}>
                              <a href={demo.link} target="_blank" rel="noopener noreferrer">
                                <img 
                                  className="w-100" 
                                  src={`/assets/images/demo/${demo.image}`} 
                                  alt={demo.title}
                                  style={{ transition: 'transform 0.3s ease' }}
                                />
                                <span className="overlay-content" style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                  background: 'rgba(99,102,241,0.8)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  opacity: 0,
                                  transition: 'opacity 0.3s ease',
                                }}>
                                  <span className="overlay-text" style={{ color: 'white', fontWeight: '600' }}>
                                    View Demo <i className="feather-external-link"></i>
                                  </span>
                                </span>
                              </a>
                            </div>
                            <div className="inner" style={{ marginTop: '10px', textAlign: 'center' }}>
                              <h3 className="title" style={{ color: 'white', fontSize: '16px' }}>
                                <a href={demo.link} style={{ color: 'white', textDecoration: 'none' }}>
                                  {demo.title}
                                </a>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DemoModal;