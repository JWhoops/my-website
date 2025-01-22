import React from 'react';

function Header() {
  const contactItems = [
    { icon: '📞', label: 'phone', content: '+1-608-949-0772', href: 'tel:+16089490772' },
    { icon: '📧', label: 'email', content: 'jinyuwu6@gmail.com', href: 'mailto:jinyuwu6@gmail.com' },
    { icon: '🌐', label: 'linkedin', content: 'LinkedIn', href: 'http://www.linkedin.com/in/jwu427' },
    { icon: '📍', label: 'location', content: 'New York City, NY' }
  ];

  return (
    <header>
      <h1>Jinyu Wu</h1>
      <div className="contact-info">
        {contactItems.map((item, index) => (
          <div key={index} className="contact-item">
            <span role="img" aria-label={item.label}>{item.icon}</span>
            {item.href ? (
              <a href={item.href}>{item.content}</a>
            ) : (
              <span className="paper-font">{item.content}</span>
            )}
          </div>
        ))}
      </div>
    </header>
  );
}

export default Header; 