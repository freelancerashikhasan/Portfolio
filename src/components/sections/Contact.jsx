import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [contactMethod, setContactMethod] = useState('whatsapp');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
const handleSubmit = (e) => {
  e.preventDefault();

  const message = `
New Project Inquiry

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
  `;

  if (contactMethod === 'whatsapp') {
    const phone = '8801302224451'; 
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  } else {
    const email = 'mail.ashikhasan@gmail.com';
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      formData.subject || 'New Project Inquiry'
    )}&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoUrl;
  }
};


  return (
    <section className="get-in-touch-area tmp-section-gapTop py-5" id="contacts">
      <div className="container">
        <div className="contact-get-in-touch-wrap" ref={ref}>
          <div className="get-in-touch-wrapper position-relative overflow-hidden" style={{ 
            background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
            borderRadius: '20px',
            padding: '3rem'
          }}>
            <div className="row g-5 align-items-center">
              <div className="col-lg-5">
                <div className="section-head text-align-left">
                  <div className="section-sub-title">
                    <span className="subtitle theme-gradient">GET IN TOUCH</span>
                  </div>
                  <h2 className="title" style={{ color: 'white' }}>Elevate your brand with Me</h2>
                  <p className="description" style={{ color: '#94a3b8' }}>
                    Have a project in mind, a question, or just want to say hello? Feel free to reach out! I'm always open to discussing.
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="contact-inner">
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-lg-6">
                        <input
                          className="form-control"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          style={{ 
                            background: 'rgba(255,255,255,0.1)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            color: 'white',
                            padding: '12px'
                          }}
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          className="form-control"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          style={{ 
                            background: 'rgba(255,255,255,0.1)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            color: 'white',
                            padding: '12px'
                          }}
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          className="form-control"
                          name="email"
                          placeholder="Your Email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          style={{ 
                            background: 'rgba(255,255,255,0.1)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            color: 'white',
                            padding: '12px'
                          }}
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          className="form-control"
                          name="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          style={{ 
                            background: 'rgba(255,255,255,0.1)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            color: 'white',
                            padding: '12px'
                          }}
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          className="form-control"
                          name="message"
                          placeholder="Your Message"
                          rows="4"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          style={{ 
                            background: 'rgba(255,255,255,0.1)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            color: 'white',
                            padding: '12px',
                            resize: 'vertical'
                          }}
                        />
                      </div>
                      <div className="col-lg-12">
                        <div className="col-lg-12">
                        <h6 className="text-white mb-3">Choose Contact Method</h6>

                        <div className="row g-3">
                          <div className="col-md-6">
                            <div
                              onClick={() => setContactMethod('whatsapp')}
                              style={{
                                cursor: 'pointer',
                                border:
                                  contactMethod === 'whatsapp'
                                    ? '2px solid #25D366'
                                    : '1px solid rgba(255,255,255,0.15)',
                                borderRadius: '15px',
                                padding: '20px',
                                background:
                                  contactMethod === 'whatsapp'
                                    ? 'rgba(37,211,102,0.08)'
                                    : 'rgba(255,255,255,0.05)',
                                transition: '0.3s',
                              }}
                            >
                              <div className="d-flex align-items-center">
                                <div
                                  style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    background: '#25D366',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: '15px',
                                  }}
                                >
                                  <i
                                    className="fab fa-whatsapp"
                                    style={{ color: '#fff', fontSize: '30px' }}
                                  ></i>
                                </div>

                                <div>
                                  <h5 className="text-white mb-1">WhatsApp</h5>
                                  <p
                                    className="mb-0"
                                    style={{ color: '#94a3b8', fontSize: '14px' }}
                                  >
                                    Send message directly to WhatsApp
                                  </p>
                                </div>

                                {contactMethod === 'whatsapp' && (
                                  <i
                                    className="fa-solid fa-circle-check ms-auto"
                                    style={{
                                      color: '#25D366',
                                      fontSize: '24px',
                                    }}
                                  ></i>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div
                              onClick={() => setContactMethod('email')}
                              style={{
                                cursor: 'pointer',
                                border:
                                  contactMethod === 'email'
                                    ? '2px solid #6366f1'
                                    : '1px solid rgba(255,255,255,0.15)',
                                borderRadius: '15px',
                                padding: '20px',
                                background:
                                  contactMethod === 'email'
                                    ? 'rgba(99,102,241,0.08)'
                                    : 'rgba(255,255,255,0.05)',
                                transition: '0.3s',
                              }}
                            >
                              <div className="d-flex align-items-center">
                                <div
                                  style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    background:
                                      'linear-gradient(135deg,#6366f1,#a855f7)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: '15px',
                                  }}
                                >
                                  <i
                                    className="fa-solid fa-envelope"
                                    style={{ color: '#fff', fontSize: '24px' }}
                                  ></i>
                                </div>

                                <div>
                                  <h5 className="text-white mb-1">Email</h5>
                                  <p
                                    className="mb-0"
                                    style={{ color: '#94a3b8', fontSize: '14px' }}
                                  >
                                    Send email directly to my inbox
                                  </p>
                                </div>

                                {contactMethod === 'email' && (
                                  <i
                                    className="fa-solid fa-circle-check ms-auto"
                                    style={{
                                      color: '#6366f1',
                                      fontSize: '24px',
                                    }}
                                  ></i>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <button                          type="submit"
                          disabled={isSubmitting}
                          className="btn btn-primary"
                          style={{
                            padding: '12px 40px',
                            borderRadius: '50px',
                            background: 'linear-gradient(90deg, #6366f1, #a855f7)',
                            border: 'none',
                            color: 'white',
                            fontWeight: '500',
                            width: '100%',
                          }}
                        >
                          {isSubmitting ? 'Sending...' : 'Appointment Now'}
                        </button>
                      </div>
                      {submitStatus && (
                        <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'} mt-3`}>
                          {submitStatus.message}
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;