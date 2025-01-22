import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'SMS Invites Feature',
      subtitle: 'Growth Initiative at Snap Inc.',
      description: 'Led the development of SMS Invites feature at Snap Inc., resulting in 2.5M new daily users',
      tech: ['Android', 'Kotlin', 'A/B Testing'],
      metrics: '10K DNU/day peak'
    },
    {
      title: 'Off-Platform Sharing',
      description: 'Developed and launched sharing feature from Main Camera, achieving significant user engagement',
      tech: ['Android', 'RxJava', 'Retrofit'],
      metrics: '40K DRU, 2M daily shares'
    },
    {
      title: 'iHeartRadio Billing System',
      description: 'Revamped the Google Play Billing Library implementation',
      tech: ['Android', 'Google Play Billing', 'Kotlin'],
      metrics: 'Improved subscription flow'
    }
  ];

  return (
    <section className="section projects">
      <h2>
        <span role="img" aria-label="projects">💡</span> Featured Projects
      </h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="card" style={{ width: '20rem' }}>
            <div className="card-body">
              <h4 className="card-title">{project.title}</h4>
              <h5 className="card-subtitle">{project.subtitle}</h5>
              <p className="card-text">{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="card-text tech-tag">{tech}</span>
                ))}
              </div>
              <p className="card-text metrics">{project.metrics}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects; 