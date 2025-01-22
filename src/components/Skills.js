import React from 'react';

function Skills() {
  return (
    <section className="section skills">
      <h2>
        <span role="img" aria-label="skills">🛠️</span> Skills
      </h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h4>Languages</h4>
          <ul>
            <li>Kotlin</li>
            <li>Java</li>
            <li>Python</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="skill-category">
          <h4>Android Development</h4>
          <ul>
            <li>Android SDK</li>
            <li>Jetpack Compose</li>
            <li>MVVM Architecture</li>
            <li>Material Design</li>
          </ul>
        </div>
        <div className="skill-category">
          <h4>Tools & Frameworks</h4>
          <ul>
            <li>Git</li>
            <li>Firebase</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills; 