import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import logo from '../../assets/images/logo/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#service', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#resume', label: 'Resume' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contacts', label: 'Contact' },
    { href: '#blog', label: 'Blog' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`tmp-header-area-start header-one header--sticky ${isScrolled ? 'header--sticky-active' : ''}`}
      style={{ backgroundColor: isScrolled ? '#0a0a0a' : 'transparent' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-content d-flex justify-content-between align-items-center py-3">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="Virtuo" style={{ height: '120px' }} />
                </Link>
              </div>

              <nav className="tmp-mainmenu-nav d-none d-xl-block">
                <ul className="tmp-mainmenu nav nav-pills">
                  {navLinks.map((link, index) => (
                    <li key={index} className="nav-item">
                      <a className="smoth-animation" href={link.href}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="tmp-header-right d-flex align-items-center gap-3">
                <div className="social-share-wrapper d-none d-md-block">
                  <div className="social-link d-flex gap-2">
                    <a href="https://www.instagram.com/ashik112002/"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/ashik-hasan-280489263?utm_source=share_via&utm_content=profile&utm_medium=member_android"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://www.facebook.com/ashik.hasan.75470/"><i className="fa-brands fa-facebook-f"></i></a>
                  </div>
                </div>

                {/* <button 
                  className="theme-toggle btn btn-link"
                  onClick={toggleTheme}
                  style={{ color: 'white' }}
                >
                  <i className={`fa-solid ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
                </button> */}

                <button 
                  className="hamberger-menu d-block d-xl-none btn btn-link"
                  onClick={toggleMobileMenu}
                  style={{ color: 'white' }}
                >
                  <i className="fa-light fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="tmp-popup-mobile-menu active">
          <div className="inner">
            <div className="header-top d-flex justify-content-between align-items-center p-3">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="Virtuo" style={{ height: '30px' }} />
                </Link>
              </div>
              <button 
                className="close-button btn btn-link"
                onClick={toggleMobileMenu}
                style={{ color: 'white' }}
              >
                <i className="fa-sharp fa-light fa-xmark"></i>
              </button>
            </div>

            <ul className="tmp-mainmenu onepagenav-click p-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a className="smoth-animation" href={link.href} onClick={toggleMobileMenu}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="social-wrapper p-3">
              <span className="subtitle">find with me</span>
              <div className="social-link d-flex gap-2 mt-2">
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;