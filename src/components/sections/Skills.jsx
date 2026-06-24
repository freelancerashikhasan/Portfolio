import React from 'react';
import { useInView } from 'react-intersection-observer';

const SkillBar = ({ skill, percentage, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, 300 + delay);
      return () => clearTimeout(timer);
    }
  }, [inView, percentage, delay]);

  return (
    <div className="progress-charts" ref={ref}>
      <h6 className="heading heading-h6">{skill}</h6>
      <div className="progress">
        <div 
          className="progress-bar" 
          style={{ 
            width: `${width}%`,
            transition: 'width 1s ease-in-out',
            background: 'linear-gradient(90deg, #6366f1, #a855f7)'
          }}
        >
          <span className="percent-label">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const designSkills = [
    { skill: 'HTML', percentage: 90 },
    { skill: 'CSS', percentage: 90 },
    { skill: 'BOOTSTRAP', percentage: 85 },
    { skill: 'TAILWIND', percentage: 75 },
    { skill: 'VANILA JAVASCRIPT', percentage: 75 },
    { skill: 'jQUERY', percentage: 75 },
    { skill: 'REACT', percentage: 75 },
    { skill: 'NODE JS', percentage: 60 },
    { skill: 'PHP', percentage: 80 },
    { skill: 'LARAVEL', percentage: 85 },
    { skill: 'MYSQL', percentage: 85 },
    { skill: 'MONGODB', percentage: 60 },
  ];

  const devSkills = [
       { skill: 'REACT NATIVE', percentage: 72 },
      { skill: 'MONGODB', percentage: 60 },
      { skill: 'SQLITE', percentage: 60 },
      { skill: 'AXIOS', percentage: 60 },

  ];

  return (
    <div className="tmp-skill-area tmp-section-gapTop py-5" id="about">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="progress-wrapper">
              <div className="content">
                <h2 className="custom-title mb-4">Web Development Skill</h2>
                {designSkills.map((item, index) => (
                  <SkillBar 
                    key={index}
                    skill={item.skill}
                    percentage={item.percentage}
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="progress-wrapper">
              <div className="content">
                <h2 className="custom-title mb-4">App Development Skill</h2>
                {devSkills.map((item, index) => (
                  <SkillBar 
                    key={index}
                    skill={item.skill}
                    percentage={item.percentage}
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;