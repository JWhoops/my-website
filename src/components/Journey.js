import React from 'react';

function Journey() {
  const journeyPoints = [
    {
      year: '2018',
      title: 'Started CS at UW-Madison',
      description: 'Began my computer science journey at University of Wisconsin-Madison',
      type: 'education'
    },
    {
      year: '2019',
      title: 'First Tech Internship',
      description: 'Software Engineer Intern at Morgridge Institute for Research',
      type: 'work'
    },
    {
      year: '2020',
      title: 'Graduation & First Job',
      description: 'Graduated from UW-Madison and joined iHeartRadio as Associate Software Engineer',
      type: 'milestone'
    },
    {
      year: '2021',
      title: 'Joined Snap Inc.',
      description: 'Took on the role of Software Engineer at Snap Inc., working on user growth',
      type: 'work'
    },
    {
      year: 'Present',
      title: 'Android Developer at Captions.ai',
      description: 'Building innovative mobile experiences at Captions.ai',
      type: 'work'
    }
  ].reverse();

  return (
    <section className="section journey">
      <h2>
        <span role="img" aria-label="journey">🚀</span> My Journey
      </h2>
      <div className="timeline-container">
        <div className="timeline">
          {journeyPoints.map((point, index) => (
            <div key={index} className={`timeline-item ${point.type}`}>
              <div className="timeline-date">
                {point.year}
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey; 