import React from 'react';
import { MessageCircle, Users, BookOpen, Smile, Lock, Activity } from 'lucide-react';

const features = [
    {
        icon: <MessageCircle size={32} />,
        title: "Anonymous Chats",
        description: "Connect one-on-one with peers in a safe, anonymous environment to share your thoughts and feelings without judgment."
    },
    {
        icon: <Users size={32} />,
        title: "Moderated Discussion Boards",
        description: "Join community discussions on various topics, moderated to ensure a supportive and respectful atmosphere."
    },
    {
        icon: <BookOpen size={32} />,
        title: "Resource Hub",
        description: "Access a curated library of mental health resources, articles, and campus support services tailored for students."
    },
    {
        icon: <Smile size={32} />,
        title: "Mood Tracking",
        description: "Track your daily mood and identify patterns over time to better understand your emotional well-being."
    },
    {
        icon: <Activity size={32} />,
        title: "Journaling Tools",
        description: "Private digital journaling to express yourself, reflect on your day, and practice mindfulness."
    },
    {
        icon: <Lock size={32} />,
        title: "Privacy First",
        description: "Your data is secure. We prioritize your privacy and anonymity above all else, adhering to strict ethical standards."
    }
];

const Features = () => {
    return (
        <section id="features" className="section features-section">
            <div className="container">
                <h2 className="section-title">Key Features</h2>
                <p className="section-subtitle">
                    Everything you need to support your mental health journey, all in one app.
                </p>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon-wrapper">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .features-section {
          background-color: white;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          padding: 2rem;
          border-radius: 1rem;
          background-color: var(--background);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid transparent;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
          border-color: var(--border);
          background-color: white;
        }

        .feature-icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          border-radius: 1rem;
          background-color: rgba(74, 144, 226, 0.1);
          color: var(--primary);
          margin-bottom: 1.5rem;
        }

        .feature-card:nth-child(2n) .feature-icon-wrapper {
          background-color: rgba(80, 227, 194, 0.1);
          color: var(--secondary);
        }

        .feature-card:nth-child(3n) .feature-icon-wrapper {
          background-color: rgba(245, 166, 35, 0.1);
          color: var(--accent);
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: var(--text-main);
        }

        .feature-description {
          color: var(--text-muted);
          line-height: 1.6;
        }
      `}</style>
        </section>
    );
};

export default Features;
