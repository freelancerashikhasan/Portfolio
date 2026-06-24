// src/App.jsx
import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';

import './App.css';
import Header from './components/layout/Header';
import Banner from './components/sections/Banner';
import Services from './components/sections/Services';
import Counter from './components/sections/Counter';
import Skills from './components/sections/Skills';
import LatestServices from './components/sections/LatestServices';
import EducationExperience from './components/sections/EducationExperience';
import SupportedCompanies from './components/sections/SupportedCompanies';
import Portfolio from './components/sections/Portfolio';
import MySkills from './components/sections/MySkills';
import Pricing from './components/sections/Pricing';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Blog from './components/sections/Blog';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import ChatWidget from './components/common/ChatWidget';
import IntroVideo from './components/common/IntroVideo';
import DemoModal from './components/common/DemoModal';

function App() {
 

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          <Banner />
          <Services />
          <Counter />
          <Skills />
          <LatestServices />
          <EducationExperience />
          {/* <SupportedCompanies /> */}
          <Portfolio />
          <MySkills />
          <Pricing />
          <Testimonials />
          <Contact />
          <Blog />
        </main>
        <Footer />
        <ScrollToTop />
        <ChatWidget />
        {/* <IntroVideo />
        <DemoModal /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;