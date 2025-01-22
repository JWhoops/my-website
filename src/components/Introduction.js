import React from 'react';
import profileImage from '../assets/profile.png'; // Changed from .jpg to .png

function Introduction() {
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
            I'm a passionate Android Developer currently crafting mobile experiences at Captions.ai. 
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
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Current Focus</h4>
            <h5 className="card-subtitle">🎯 Android Development</h5>
            <p className="card-text">
              Building innovative mobile experiences at Captions.ai
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Interests</h4>
            <h5 className="card-subtitle">🎵 Arts & Creation</h5>
            <p className="card-text">
              Content Creator | Singing, Hip-hop Dancing, Running | Electronic & Chinese Music Enthusiast
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Impact</h4>
            <h5 className="card-subtitle">🌟 User Growth</h5>
            <p className="card-text">
              2.5M+ new users acquired through features
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction; 