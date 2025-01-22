import React from 'react';

function Header() {
  return (
    <header>
      <h1>Jinyu Wu</h1>
      <div className="contact-info">
        <div className="contact-item">
          <span role="img" aria-label="phone">📞</span>
          <a href="tel:+16089490772">+1-608-949-0772</a>
        </div>
        <div className="contact-item">
          <span role="img" aria-label="email">📧</span>
          <a href="mailto:jinyuwu6@gmail.com">jinyuwu6@gmail.com</a>
        </div>
        <div className="contact-item">
          <span role="img" aria-label="linkedin">🌐</span>
          <a href="http://www.linkedin.com/in/jwu427">LinkedIn</a>
        </div>
        <div className="contact-item">
          <span role="img" aria-label="location">📍</span>
          <span className="paper-font">New York City, NY</span>
        </div>
      </div>
    </header>
  );
}

export default Header; 