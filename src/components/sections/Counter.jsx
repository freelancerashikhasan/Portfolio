import React from 'react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-minimal.css';

const Counter = () => {
  const [counters, setCounters] = React.useState({
    experience: 0,
    projects: 0,
    apps: 0,
    reviews: 0,
    clients: 0,
  });

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCounters({
        experience: 5,
        projects: 120,
        apps: 50,
        reviews: 200,
        clients: 100,
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="counter-area py-5">
      <div className="container">
        <div className="row g-5 animation-action-3">
          <div className="col-12 col-lg-6 col-xl-6 col-xxl-6 paralax-image">
            <div className="year-of-expariance-wrapper bg-blur-style-one">
              <div className="year-expariance-wrap with-flex">
                <h2 className="counter year-number">
                  <Odometer value={counters.experience} format="d" />
                </h2>
                <h3 className="year-title">
                  Years Of <br /> Experience
                </h3>
              </div>

              <p className="year-para">
                I specialize in building modern websites and mobile
                applications using the latest technologies. My goal is to
                create fast, scalable, and user-friendly digital solutions
                that help businesses grow and succeed online.
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="counter-area-right-content">
              <div className="row g-5">
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="counter-card tmponhover active">
                    <h3 className="counter counter-title">
                      <Odometer value={counters.projects} format="d" />+
                    </h3>
                    <p className="counter-para">Projects Completed</p>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="counter-card tmponhover">
                    <h3 className="counter counter-title">
                      <Odometer value={counters.apps} format="d" />+
                    </h3>
                    <p className="counter-para">Apps & Websites Launched</p>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="counter-card tmponhover">
                    <h3 className="counter counter-title">
                      <Odometer value={counters.reviews} format="d" />+
                    </h3>
                    <p className="counter-para">Positive Reviews</p>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="counter-card tmponhover">
                    <h3 className="counter counter-title">
                      <Odometer value={counters.clients} format="d" />+
                    </h3>
                    <p className="counter-para">Satisfied Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Counter;
