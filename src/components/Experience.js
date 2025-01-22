import React from 'react';

function Experience() {
  const experiences = [
    {
      company: "Snap Inc.",
      position: "Software Engineer, Android",
      period: "Oct 2021 - Present",
      location: "Remote",
      emoji: "👻", // Snapchat ghost emoji
      achievements: [
        "Led growth initiatives for Snapchat with key features such as Off-Platform Sharing and SMS Invites",
        "Acquired 2.5M new daily users through SMS Invites, peaking at 10K DNU/day",
        "Launched Off-Platform Sharing from the Main Camera, achieving 40K DRU, 2M link shares per day",
        "Reduced Off-Platform Export Failure Rate from 11% down to 4%",
        "Delivered 31 data-backed features in 18 months through A/B testing",
        "Interviewed multiple candidates"
      ]
    },
    {
      company: "iHeartRadio",
      position: "Associate Software Engineer, Android",
      period: "Jun 2020 - Oct 2021",
      location: "Nashville, TN",
      emoji: "📻", // Radio emoji
      achievements: [
        "Maintained the iHeartRadio Android app, focusing on user lifecycle and subscriptions",
        "Developed features for the iHeartRadio app to enhance user experience",
        "Revamped the iHeartRadio Google Play Billing Library",
        "Earned the 2021 iHeartRadio Hackweek Most Entertaining Award"
      ]
    },
    {
      company: "UW-Madison IoT Systems Research Center",
      position: "Student Engineer",
      period: "Dec 2019 - May 2020",
      location: "Madison, WI",
      emoji: "🔬", // Research/lab emoji
      achievements: [
        "Developed an end-to-end application enabling Python/R algorithm execution without requiring environment setup",
        "Engineered a Docker container encapsulating Python and R runtimes",
        "Learned Electron and Docker from scratch in just 3 weeks"
      ]
    },
    {
      company: "Morgridge Institute for Research",
      position: "Software Engineer Intern",
      period: "Apr 2019 - Dec 2019",
      location: "Madison, WI",
      emoji: "🧬", // DNA/research emoji
      achievements: [
        "Boosted data recovery speed by 90%, salvaging over 40,000 invalid records",
        "Engineered a Node.js-based gene analyzer algorithm"
      ]
    }
  ];

  return (
    <section className="section experience">
      <h2>
        <span role="img" aria-label="experience">💼</span> Experience
      </h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="company">
              <span role="img" aria-label={exp.company}>{exp.emoji}</span> {exp.company}
            </div>
            <div className="position">
              {exp.position} ({exp.period}) - {exp.location}
            </div>
            <ul>
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience; 