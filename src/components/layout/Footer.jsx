import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-area footer-style-one-wrapper bg-color-footer" style={{ background: '#0a0a0a' }}>
      <div className="container">
        <div className="footer-main footer-style-one py-5">
          <div className="row g-5">
            <div className="col-lg-5 col-md-6">
              <div className="single-footer-wrapper">
                <div className="logo">
                  <Link to="/">
                    <img src={logo} alt="Virtuo" style={{ height: '100px' }} />
                  </Link>
                </div>
                <p className="description" style={{ color: '#94a3b8', marginTop: '1rem' }}>
                  <span>Get Ready</span> To Create Great
                </p>
                {/* <form action="#" className="newsletter-form-1 mt-4">
                  <div className="input-group">
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="form-control"
                      style={{
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: 'white',
                        padding: '12px',
                        borderRadius: '50px 0 0 50px',
                      }}
                    />
                    <span className="input-group-text" style={{
                      background: 'linear-gradient(90deg, #6366f1, #a855f7)',
                      border: 'none',
                      borderRadius: '0 50px 50px 0',
                      padding: '0 20px',
                    }}>
                      <i className="fa-regular fa-envelope" style={{ color: 'white' }}></i>
                    </span>
                  </div>
                </form> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-footer-wrapper quick-link-wrap">
                <h5 className="ft-title" style={{ color: 'white', marginBottom: '1rem' }}>Quick Link</h5>
                <ul className="ft-link list-unstyled">
                  {['About Me', 'Service', 'Contact Me', 'Blog Post', 'Pricing'].map((item, index) => (
                    <li key={index} style={{ marginBottom: '0.5rem' }}>
                      <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-wrapper contact-wrap">
                <h5 className="ft-title" style={{ color: 'white', marginBottom: '1rem' }}>Contact</h5>
                <ul className="ft-link list-unstyled">
                  <li style={{ marginBottom: '0.5rem', color: '#94a3b8' }}>
                    <span className="ft-icon me-2"><i className="fa-solid fa-envelope"></i></span>
                    <a href="mailto:mail.ashikhasan@gmail.com" style={{ color: '#94a3b8', textDecoration: 'none' }}>
                      mail.ashikhasan@gmail.com
                    </a>
                  </li>
                  {/* <li style={{ marginBottom: '0.5rem', color: '#94a3b8' }}>
                    <span className="ft-icon me-2"><i className="fa-solid fa-location-dot"></i></span>
                    3891 Ranchview Dr. Richardson
                  </li> */}
                  <li style={{ marginBottom: '0.5rem', color: '#94a3b8' }}>
                    <span className="ft-icon me-2"><i className="fa-solid fa-phone"></i></span>
                    <a href="tel:01245789321" style={{ color: '#94a3b8', textDecoration: 'none' }}>
                      +8801302224451
                    </a>
                  </li>
                </ul>
                <div className="social-link footer d-flex gap-3 mt-3">
                  <a href="https://www.instagram.com/ashik112002/" style={{ color: '#94a3b8' }}><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/ashik-hasan-280489263?utm_source=share_via&utm_content=profile&utm_medium=member_android" style={{ color: '#94a3b8' }}><i className="fa-brands fa-linkedin-in"></i></a>
                  <a href="#" style={{ color: '#94a3b8' }}><i className="fa-brands fa-twitter"></i></a>
                  <a href="https://www.facebook.com/ashik.hasan.75470/" style={{ color: '#94a3b8' }}><i className="fa-brands fa-facebook-f"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area-one" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '1rem 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-wrapper d-flex justify-content-between align-items-center flex-wrap">
                <p className="copy-right-para mb-0" style={{ color: '#94a3b8' }}>
                  © <a href="#" style={{ color: '#6366f1', textDecoration: 'none' }}>Ashik Hasan</a> {currentYear} | All Rights Reserved
                </p>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;