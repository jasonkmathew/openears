import React from 'react';
import { ArrowRight, Shield, Users, Heart } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="badge">
                        <span className="badge-dot"></span>
                        Coming to USF Campus
                    </div>
                    <h1 className="hero-title">
                        You Are <span className="highlight">Not Alone.</span><br />
                        We Are Here to Listen.
                    </h1>
                    <p className="hero-description">
                        OpenEars is a peer-driven mobile platform designed to connect students,
                        promote mental wellness, and reduce stigma around seeking help.
                        Anonymous. Safe. Supportive.
                    </p>
                    <div className="hero-actions">
                        <button className="btn btn-primary">
                            Join the Waitlist <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                        </button>
                        <button className="btn btn-outline">
                            Learn More
                        </button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <Shield className="stat-icon" size={24} />
                            <span>Anonymous & Secure</span>
                        </div>
                        <div className="stat-item">
                            <Users className="stat-icon" size={24} />
                            <span>Peer Support</span>
                        </div>
                        <div className="stat-item">
                            <Heart className="stat-icon" size={24} />
                            <span>Mental Wellness</span>
                        </div>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="app-mockup">
                        {/* Placeholder for app screenshot or illustration */}
                        <div className="mockup-screen">
                            <div className="mockup-header">
                                <div className="mockup-time">9:41</div>
                                <div className="mockup-status">
                                    <span>5G</span>
                                    <span>100%</span>
                                </div>
                            </div>
                            <div className="mockup-content">
                                <div className="chat-bubble received">
                                    Hey, I've been feeling really stressed about finals lately. 😓
                                </div>
                                <div className="chat-bubble sent">
                                    I totally get that. It's a tough time of year. Want to talk about it?
                                </div>
                                <div className="chat-bubble received">
                                    Yeah, that would be really helpful. Thanks for listening.
                                </div>
                                <div className="typing-indicator">
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                            <div className="mockup-footer">
                                <div className="input-field">Type a message...</div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="blob blob-1"></div>
                    <div className="blob blob-2"></div>
                </div>
            </div>

            <style>{`
        .hero {
          padding-top: 140px; /* Header height + spacing */
          padding-bottom: 5rem;
          overflow: hidden;
          position: relative;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background-color: rgba(80, 227, 194, 0.1);
          color: #2E8B73;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background-color: var(--secondary);
          border-radius: 50%;
        }

        .hero-title {
          font-size: 3.5rem;
          line-height: 1.1;
          font-weight: 800;
          margin-bottom: 1.5rem;
          color: var(--text-main);
        }

        .highlight {
          color: var(--primary);
          position: relative;
        }
        
        .highlight::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 12px;
          background-color: rgba(80, 227, 194, 0.3);
          z-index: -1;
          transform: rotate(-1deg);
        }

        .hero-description {
          font-size: 1.25rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
          max-width: 540px;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .hero-stats {
          display: flex;
          gap: 2rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          color: var(--text-main);
        }

        .stat-icon {
          color: var(--primary);
        }

        .hero-image {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .app-mockup {
          width: 300px;
          height: 600px;
          background-color: white;
          border-radius: 40px;
          border: 12px solid #1F2937;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          position: relative;
          z-index: 10;
          overflow: hidden;
        }

        .mockup-screen {
          height: 100%;
          background-color: #F3F4F6;
          display: flex;
          flex-direction: column;
        }

        .mockup-header {
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .mockup-content {
          flex: 1;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .chat-bubble {
          padding: 0.75rem 1rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          max-width: 85%;
          line-height: 1.4;
        }

        .received {
          background-color: white;
          align-self: flex-start;
          border-bottom-left-radius: 0.25rem;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }

        .sent {
          background-color: var(--primary);
          color: white;
          align-self: flex-end;
          border-bottom-right-radius: 0.25rem;
        }

        .typing-indicator {
          display: flex;
          gap: 4px;
          padding: 0.5rem 1rem;
          background-color: white;
          align-self: flex-start;
          border-radius: 1rem;
          width: fit-content;
        }

        .typing-indicator span {
          width: 6px;
          height: 6px;
          background-color: #9CA3AF;
          border-radius: 50%;
          animation: bounce 1.4s infinite ease-in-out both;
        }

        .typing-indicator span:nth-child(1) { animation-delay: -0.32s; }
        .typing-indicator span:nth-child(2) { animation-delay: -0.16s; }

        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }

        .mockup-footer {
          padding: 1rem;
          background-color: white;
          border-top: 1px solid #E5E7EB;
        }

        .input-field {
          background-color: #F3F4F6;
          padding: 0.75rem;
          border-radius: 9999px;
          color: #9CA3AF;
          font-size: 0.875rem;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          z-index: 1;
          opacity: 0.6;
        }

        .blob-1 {
          width: 300px;
          height: 300px;
          background-color: #C6F6D5; /* Light Green */
          top: -20px;
          right: -20px;
        }

        .blob-2 {
          width: 250px;
          height: 250px;
          background-color: #BEE3F8; /* Light Blue */
          bottom: -20px;
          left: -20px;
        }

        @media (max-width: 960px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }

          .hero-description, .section-subtitle {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-stats {
            justify-content: center;
          }
          
          .highlight::after {
            left: 50%;
            transform: translateX(-50%) rotate(-1deg);
            width: 120%;
          }
        }
        
        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-stats {
            flex-direction: column;
            gap: 1rem;
            align-items: center;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
