import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: "Jason Mathew",
    role: "Project Lead / Developer",
    responsibilities: "Oversees project direction, manages development in Flutter, integrates Firebase backend.",
    image: "https://ui-avatars.com/api/?name=Jason+Mathew&background=4A90E2&color=fff",
    socials: {
      github: "https://github.com/jasonkmathew",
      linkedin: "https://www.linkedin.com/in/jasonkmathew/",
      email: "jasonkmathewbusiness@gmail.com"
    }
  },
  {
    name: "Kenn Nguyen",
    role: "UX/UI Designer",
    responsibilities: "Designs user interface and experience in Figma, creates wireframes and prototypes.",
    image: "https://ui-avatars.com/api/?name=Kenn+Nguyen&background=50E3C2&color=fff"
  },
  {
    name: "Ava Tran",
    role: "Research & Outreach",
    responsibilities: "Conducts student surveys, organizes pilot testing, manages campus outreach.",
    image: "https://ui-avatars.com/api/?name=Ava+Tran&background=F5A623&color=fff"
  },
  {
    name: "Simon Nassif",
    role: "Technical Support / QA",
    responsibilities: "Tests app features, documents bugs, supports Firebase integration.",
    image: "https://ui-avatars.com/api/?name=Simon+Nassif&background=9B59B6&color=fff"
  }
];

const Team = () => {
  return (
    <section id="team" className="section team-section">
      <div className="container">
        <h2 className="section-title">Meet the Team</h2>
        <p className="section-subtitle">
          Passionate students working together to make a difference in mental health on campus.
        </p>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="member-image-wrapper">
                <img src={member.image} alt={member.name} className="member-image" />
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-responsibilities">{member.responsibilities}</p>

              <div className="member-socials">
                {member.socials?.github && (
                  <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Github">
                    <Github size={18} />
                  </a>
                )}
                {member.socials?.linkedin && (
                  <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                )}
                {member.socials?.email && (
                  <a href={`mailto:${member.socials.email}`} className="social-link" aria-label="Email">
                    <Mail size={18} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="advisor-section">
          <p className="advisor-text">
            <strong>Faculty Advisor:</strong> TBD (USF Faculty Mentor)
          </p>
        </div>
      </div>

      <style>{`
        .team-section {
          background-color: var(--background);
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .team-card {
          background-color: white;
          padding: 2rem;
          border-radius: 1rem;
          text-align: center;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-5px);
        }

        .member-image-wrapper {
          width: 100px;
          height: 100px;
          margin: 0 auto 1.5rem;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid white;
          box-shadow: 0 0 0 2px var(--primary);
        }

        .member-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .member-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.25rem;
        }

        .member-role {
          color: var(--primary);
          font-weight: 600;
          font-size: 0.875rem;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .member-responsibilities {
          color: var(--text-muted);
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
        }

        .member-socials {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .social-link {
          color: var(--text-muted);
          transition: color 0.2s;
        }

        .social-link:hover {
          color: var(--primary);
        }

        .advisor-section {
          text-align: center;
          padding: 1.5rem;
          background-color: rgba(74, 144, 226, 0.05);
          border-radius: 0.5rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .advisor-text {
          color: var(--text-main);
        }
      `}</style>
    </section>
  );
};

export default Team;
