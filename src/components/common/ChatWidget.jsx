import React, { useState } from 'react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Replace with your WhatsApp number (include country code, no plus sign)
  const WHATSAPP_NUMBER = '8801302224451'; // Change this to your actual number
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const message = `Hello! My name is ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage: ${formData.message}`;
    const whatsappLink = `${WHATSAPP_URL}?text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappLink, '_blank');
    
    // Reset form and close chat
    setFormData({ name: '', email: '', message: '' });
    setIsOpen(false);
  };

  return (
    <div 
      className="ready-chatting-option tmp-ready-chat"
      style={{ position: 'fixed', bottom: '100px', right: '30px', zIndex: 999 }}
    >
      <button
        onClick={toggleChat}
        className="chat-toggle-btn"
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: isOpen ? '#ef4444' : 'linear-gradient(135deg, #25D366, #128C7E)',
          border: 'none',
          color: 'white',
          fontSize: '30px',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onMouseEnter={(e) => {
          if (!isOpen) {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 6px 25px rgba(37, 211, 102, 0.6)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isOpen) {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.4)';
          }
        }}
      >
        <i className={isOpen ? 'fas fa-times' : 'fab fa-whatsapp'}></i>
      </button>

      {isOpen && (
        <div 
          className="chat-box"
          style={{
            position: 'absolute',
            bottom: '70px',
            right: '0',
            width: '340px',
            background: '#1a1a2e',
            borderRadius: '20px',
            padding: '25px',
            boxShadow: '0 10px 50px rgba(0,0,0,0.5)',
            color: 'white',
            border: '1px solid rgba(37, 211, 102, 0.2)',
            animation: 'slideUp 0.3s ease',
          }}
        >
          {/* Header with WhatsApp branding */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px',
            marginBottom: '15px',
            paddingBottom: '15px',
            borderBottom: '1px solid rgba(37, 211, 102, 0.2)',
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
            }}>
              <i className="fab fa-whatsapp"></i>
            </div>
            <div>
              <div style={{ fontWeight: '600', fontSize: '16px' }}>
                WhatsApp Chat
              </div>
              <div style={{ color: '#25D366', fontSize: '12px' }}>
                <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#25D366', marginRight: '5px' }}></span>
                Online
              </div>
            </div>
          </div>

          <div style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '15px', lineHeight: '1.6' }}>
            <i className="fas fa-info-circle" style={{ color: '#25D366', marginRight: '5px' }}></i>
            Fill out the form below to start a WhatsApp conversation.
          </div>

          <form onSubmit={handleSubmit}>
            <div className="field mb-3">
              <input
                className="form-control"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'white',
                  borderRadius: '10px',
                  padding: '12px 15px',
                  transition: 'all 0.3s',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#25D366';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                }}
              />
            </div>
            <div className="field mb-3">
              <input
                className="form-control"
                name="email"
                placeholder="Your Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'white',
                  borderRadius: '10px',
                  padding: '12px 15px',
                  transition: 'all 0.3s',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#25D366';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                }}
              />
            </div>
            <div className="field mb-3">
              <textarea
                className="form-control"
                name="message"
                placeholder="Your Message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                required
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'white',
                  borderRadius: '10px',
                  padding: '12px 15px',
                  resize: 'vertical',
                  transition: 'all 0.3s',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#25D366';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                border: 'none',
                padding: '12px',
                borderRadius: '50px',
                color: 'white',
                fontWeight: '600',
                fontSize: '15px',
                width: '100%',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(37, 211, 102, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <i className="fab fa-whatsapp"></i>
              Send via WhatsApp
            </button>
          </form>

          <div style={{ 
            marginTop: '12px', 
            fontSize: '11px', 
            color: '#4a4a6a',
            textAlign: 'center',
          }}>
            <i className="fas fa-lock" style={{ marginRight: '5px', fontSize: '10px' }}></i>
            Your messages are end-to-end encrypted
          </div>
        </div>
      )}

      {/* CSS Animation */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ChatWidget;