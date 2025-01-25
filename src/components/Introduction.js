import React from 'react';
import profileImage from '../assets/profile.png'; // Changed from .jpg to .png

function Introduction() {
  const quickFacts = [
    {
      title: 'Current Focus',
      subtitle: '🎯 Android Development',
      text: 'Building innovative mobile experiences at Captions'
    },
    {
      title: 'Interests',
      subtitle: '🎵 Arts & Creation',
      text: 'Content Creator | Singing, Hip-hop Dancing, Running | Electronic & Chinese Music Enthusiast'
    },
    {
      title: 'Impact',
      subtitle: '🌟 User Growth',
      text: '2.5M+ new users acquired through features'
    }
  ];

  return (
    <section className="section introduction">
      <h2>
        <span role="img" aria-label="wave">👋</span> Hello, World!
      </h2>
      <div className="intro-section">
        <div className="profile-image">
          <img 
            src={profileImage} 
            alt="Jinyu Wu"
            className="profile-img"
          />
        </div>
        <div className="intro-text">
          <p className="lead">
            I'm a passionate Android Developer currently crafting mobile experiences at Captions. 
            With a journey that spans from UW-Madison to Snap Inc., I've been fortunate to work 
            on products that impact millions of users daily.
          </p>
          <p>
            My expertise lies in building scalable Android applications, with a particular focus on 
            user growth and engagement features. Beyond coding, I'm a content creator who enjoys sharing 
            experiences and connecting with others through various creative mediums. I'm deeply interested 
            in mobile technology and its potential to transform how we connect and communicate.
          </p>
        </div>
      </div>
      <div className="quick-facts">
        {quickFacts.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-body">
              <h4 className="card-title">{card.title}</h4>
              <h5 className="card-subtitle">{card.subtitle}</h5>
              <p className="card-text">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Introduction; 