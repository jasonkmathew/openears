import React from 'react';
import { Calendar, Code, CheckCircle, Rocket } from 'lucide-react';

const phases = [
    {
        title: "Planning & Design",
        weeks: "Weeks 1–3",
        description: "Define requirements, create wireframes, finalize UI/UX design.",
        icon: <Calendar size={24} />,
        status: "completed"
    },
    {
        title: "Development",
        weeks: "Weeks 4–9",
        description: "Build core features (chat, discussion board, mood tracker, resource hub).",
        icon: <Code size={24} />,
        status: "active"
    },
    {
        title: "Testing & Feedback",
        weeks: "Weeks 10–12",
        description: "Conduct pilot tests, fix bugs, adjust UI based on student feedback.",
        icon: <CheckCircle size={24} />,
        status: "upcoming"
    },
    {
        title: "Launch & Evaluation",
        weeks: "Weeks 13–15",
        description: "Present prototype, gather final feedback, prepare final report.",
        icon: <Rocket size={24} />,
        status: "upcoming"
    }
];

const Timeline = () => {
    return (
        <section id="timeline" className="section timeline-section">
            <div className="container">
                <h2 className="section-title">Project Roadmap</h2>
                <p className="section-subtitle">
                    Our semester-long journey to bring OpenEars to life.
                </p>

                <div className="timeline">
                    {phases.map((phase, index) => (
                        <div key={index} className={`timeline-item ${phase.status}`}>
                            <div className="timeline-marker">
                                <div className="timeline-icon">
                                    {phase.icon}
                                </div>
                            </div>
                            <div className="timeline-content">
                                <span className="phase-weeks">{phase.weeks}</span>
                                <h3 className="phase-title">{phase.title}</h3>
                                <p className="phase-description">{phase.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .timeline-section {
          background-color: white;
        }

        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 24px; /* Half of marker width (48px) */
          width: 2px;
          background-color: var(--border);
        }

        .timeline-item {
          position: relative;
          padding-left: 80px;
          margin-bottom: 3rem;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-marker {
          position: absolute;
          left: 0;
          top: 0;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: white;
          border: 2px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
          color: var(--text-muted);
        }

        .timeline-item.completed .timeline-marker {
          background-color: var(--secondary);
          border-color: var(--secondary);
          color: white;
        }

        .timeline-item.active .timeline-marker {
          background-color: var(--primary);
          border-color: var(--primary);
          color: white;
          box-shadow: 0 0 0 4px rgba(74, 144, 226, 0.2);
        }

        .timeline-content {
          background-color: var(--background);
          padding: 1.5rem;
          border-radius: 1rem;
          border: 1px solid transparent;
          transition: all 0.3s ease;
        }

        .timeline-item.active .timeline-content {
          border-color: var(--primary);
          background-color: white;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }

        .phase-weeks {
          display: inline-block;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .timeline-item.completed .phase-weeks {
          color: var(--secondary);
        }

        .phase-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--text-main);
        }

        .phase-description {
          color: var(--text-muted);
        }

        @media (max-width: 640px) {
          .timeline::before {
            left: 20px;
          }
          
          .timeline-marker {
            width: 40px;
            height: 40px;
          }
          
          .timeline-item {
            padding-left: 60px;
          }
        }
      `}</style>
        </section>
    );
};

export default Timeline;
