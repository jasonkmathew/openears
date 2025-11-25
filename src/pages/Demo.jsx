import React, { useState } from 'react';
import { MessageCircle, BookOpen, Smile, Users, Send, Search, Heart, ThumbsUp } from 'lucide-react';

const Demo = () => {
    const [activeTab, setActiveTab] = useState('chat');

    return (
        <div className="demo-page">
            <div className="container">
                <div className="demo-header">
                    <h1 className="demo-title">Experience OpenEars</h1>
                    <p className="demo-subtitle">
                        Try out our interactive prototype to see how students can connect, share, and support each other.
                    </p>
                </div>

                <div className="demo-interface">
                    <div className="demo-tabs">
                        <button
                            className={`demo-tab ${activeTab === 'chat' ? 'active' : ''}`}
                            onClick={() => setActiveTab('chat')}
                        >
                            <MessageCircle size={20} />
                            <span>Peer Chat</span>
                        </button>
                        <button
                            className={`demo-tab ${activeTab === 'resources' ? 'active' : ''}`}
                            onClick={() => setActiveTab('resources')}
                        >
                            <BookOpen size={20} />
                            <span>Resources</span>
                        </button>
                        <button
                            className={`demo-tab ${activeTab === 'mood' ? 'active' : ''}`}
                            onClick={() => setActiveTab('mood')}
                        >
                            <Smile size={20} />
                            <span>Mood Tracker</span>
                        </button>
                        <button
                            className={`demo-tab ${activeTab === 'forum' ? 'active' : ''}`}
                            onClick={() => setActiveTab('forum')}
                        >
                            <Users size={20} />
                            <span>Community</span>
                        </button>
                    </div>

                    <div className="demo-content">
                        {activeTab === 'chat' && <ChatDemo />}
                        {activeTab === 'resources' && <ResourcesDemo />}
                        {activeTab === 'mood' && <MoodDemo />}
                        {activeTab === 'forum' && <ForumDemo />}
                    </div>
                </div>
            </div>

            <style>{`
        .demo-page {
          padding-top: 100px;
          padding-bottom: 5rem;
          background-color: #F3F4F6;
          min-height: 100vh;
        }

        .demo-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .demo-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 1rem;
        }

        .demo-subtitle {
          color: var(--text-muted);
          font-size: 1.125rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .demo-interface {
          background-color: white;
          border-radius: 1.5rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          overflow: hidden;
          max-width: 1000px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          height: 700px;
        }

        .demo-tabs {
          display: flex;
          background-color: white;
          border-bottom: 1px solid var(--border);
          padding: 0 1rem;
        }

        .demo-tab {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1.25rem 1.5rem;
          background: none;
          border: none;
          border-bottom: 3px solid transparent;
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.2s;
        }

        .demo-tab:hover {
          color: var(--primary);
          background-color: rgba(74, 144, 226, 0.05);
        }

        .demo-tab.active {
          color: var(--primary);
          border-bottom-color: var(--primary);
        }

        .demo-content {
          flex: 1;
          overflow-y: auto;
          background-color: #FAFAFA;
        }

        /* Chat Demo Styles */
        .chat-container {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .chat-messages {
          flex: 1;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          overflow-y: auto;
        }

        .message {
          display: flex;
          flex-direction: column;
          max-width: 70%;
        }

        .message.received {
          align-self: flex-start;
        }

        .message.sent {
          align-self: flex-end;
          align-items: flex-end;
        }

        .message-bubble {
          padding: 1rem 1.25rem;
          border-radius: 1rem;
          font-size: 0.95rem;
          line-height: 1.5;
          position: relative;
        }

        .message.received .message-bubble {
          background-color: white;
          border-bottom-left-radius: 0.25rem;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
          border: 1px solid var(--border);
        }

        .message.sent .message-bubble {
          background-color: var(--primary);
          color: white;
          border-bottom-right-radius: 0.25rem;
        }

        .message-time {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
          padding: 0 0.5rem;
        }

        .chat-input-area {
          padding: 1.5rem;
          background-color: white;
          border-top: 1px solid var(--border);
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .chat-input {
          flex: 1;
          padding: 0.875rem 1.25rem;
          border: 1px solid var(--border);
          border-radius: 9999px;
          outline: none;
          transition: border-color 0.2s;
        }

        .chat-input:focus {
          border-color: var(--primary);
        }

        .send-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: var(--primary);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          transition: background-color 0.2s;
        }

        .send-btn:hover {
          background-color: var(--primary-dark);
        }

        /* Resources Demo Styles */
        .resources-container {
          padding: 2rem;
        }

        .resources-search {
          position: relative;
          margin-bottom: 2rem;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .search-input {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          font-size: 1rem;
          outline: none;
        }

        .resource-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .resource-card {
          background-color: white;
          border-radius: 1rem;
          padding: 1.5rem;
          border: 1px solid var(--border);
          transition: transform 0.2s;
          cursor: pointer;
        }

        .resource-card:hover {
          transform: translateY(-3px);
          border-color: var(--primary);
        }

        .resource-tag {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background-color: rgba(80, 227, 194, 0.15);
          color: #2E8B73;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .resource-title {
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--text-main);
        }

        .resource-desc {
          font-size: 0.875rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }

        .resource-link {
          color: var(--primary);
          font-weight: 600;
          font-size: 0.875rem;
        }

        /* Mood Demo Styles */
        .mood-container {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .mood-question {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 2rem;
          text-align: center;
        }

        .mood-selector {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .mood-option {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          opacity: 0.6;
          transition: all 0.2s;
          background: none;
          border: none;
        }

        .mood-option:hover, .mood-option.selected {
          opacity: 1;
          transform: scale(1.1);
        }

        .mood-emoji {
          font-size: 3rem;
        }

        .mood-label {
          font-weight: 600;
          font-size: 0.875rem;
        }

        .mood-chart-placeholder {
          width: 100%;
          background-color: white;
          padding: 1.5rem;
          border-radius: 1rem;
          border: 1px solid var(--border);
        }

        .chart-title {
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .chart-bars {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          height: 150px;
          gap: 0.5rem;
        }

        .chart-bar {
          width: 100%;
          background-color: var(--primary);
          border-radius: 4px;
          opacity: 0.8;
        }

        .chart-labels {
          display: flex;
          justify-content: space-between;
          margin-top: 0.5rem;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        /* Forum Demo Styles */
        .forum-container {
          padding: 0;
        }

        .forum-header {
          padding: 1.5rem 2rem;
          border-bottom: 1px solid var(--border);
          background-color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .forum-list {
          display: flex;
          flex-direction: column;
        }

        .forum-item {
          padding: 1.5rem 2rem;
          border-bottom: 1px solid var(--border);
          background-color: white;
          transition: background-color 0.2s;
          cursor: pointer;
        }

        .forum-item:hover {
          background-color: #F9FAFB;
        }

        .forum-meta {
          display: flex;
          gap: 0.75rem;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .forum-tag {
          color: var(--primary);
          font-weight: 600;
        }

        .forum-title {
          font-weight: 700;
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
          color: var(--text-main);
        }

        .forum-preview {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .forum-stats {
          display: flex;
          gap: 1.5rem;
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .stat {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        @media (max-width: 768px) {
          .demo-tabs {
            overflow-x: auto;
          }
          
          .demo-tab span {
            white-space: nowrap;
          }
          
          .demo-interface {
            height: 80vh;
            border-radius: 0;
          }
        }
      `}</style>
        </div>
    );
};

const ChatDemo = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi there! I've been feeling really overwhelmed with finals coming up.", sender: 'received', time: '10:30 AM' },
        { id: 2, text: "I completely understand. It's a super stressful time for everyone. Have you been taking any breaks?", sender: 'sent', time: '10:32 AM' },
        { id: 3, text: "Not really, I feel guilty when I'm not studying. But I'm so tired.", sender: 'received', time: '10:33 AM' },
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages([...messages, { id: Date.now(), text: input, sender: 'sent', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
        setInput('');

        // Simulate reply
        setTimeout(() => {
            setMessages(prev => [...prev, { id: Date.now(), text: "It's important to rest too! Your brain needs downtime to process information. Maybe try a 15 min walk?", sender: 'received', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
        }, 2000);
    };

    return (
        <div className="chat-container">
            <div className="chat-messages">
                <div className="message received">
                    <div className="message-bubble">
                        Welcome to OpenEars Peer Chat! You are now connected with a peer supporter. This chat is anonymous and confidential.
                    </div>
                    <div className="message-time">System • 10:29 AM</div>
                </div>
                {messages.map(msg => (
                    <div key={msg.id} className={`message ${msg.sender}`}>
                        <div className="message-bubble">{msg.text}</div>
                        <div className="message-time">{msg.time}</div>
                    </div>
                ))}
            </div>
            <div className="chat-input-area">
                <input
                    type="text"
                    className="chat-input"
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <button className="send-btn" onClick={handleSend}>
                    <Send size={20} />
                </button>
            </div>
        </div>
    );
};

const ResourcesDemo = () => {
    return (
        <div className="resources-container">
            <div className="resources-search">
                <Search className="search-icon" size={20} />
                <input type="text" className="search-input" placeholder="Search for resources, articles, or services..." />
            </div>

            <div className="resource-grid">
                <div className="resource-card">
                    <span className="resource-tag">Campus Service</span>
                    <h3 className="resource-title">USF Counseling Center</h3>
                    <p className="resource-desc">Professional counseling services available to all registered students. Walk-ins welcome.</p>
                    <span className="resource-link">View Details →</span>
                </div>
                <div className="resource-card">
                    <span className="resource-tag">Article</span>
                    <h3 className="resource-title">Managing Exam Anxiety</h3>
                    <p className="resource-desc">5 practical tips to stay calm and focused during finals week.</p>
                    <span className="resource-link">Read Article →</span>
                </div>
                <div className="resource-card">
                    <span className="resource-tag">Hotline</span>
                    <h3 className="resource-title">24/7 Crisis Support</h3>
                    <p className="resource-desc">Immediate help for urgent mental health crises. Available anytime.</p>
                    <span className="resource-link">Get Help Now →</span>
                </div>
                <div className="resource-card">
                    <span className="resource-tag">Wellness</span>
                    <h3 className="resource-title">Mindfulness Workshop</h3>
                    <p className="resource-desc">Weekly group sessions at the Student Center every Tuesday.</p>
                    <span className="resource-link">Register →</span>
                </div>
            </div>
        </div>
    );
};

const MoodDemo = () => {
    const [selectedMood, setSelectedMood] = useState(null);

    return (
        <div className="mood-container">
            <h2 className="mood-question">How are you feeling today?</h2>

            <div className="mood-selector">
                {['Great', 'Good', 'Okay', 'Bad', 'Awful'].map((mood, i) => (
                    <button
                        key={mood}
                        className={`mood-option ${selectedMood === mood ? 'selected' : ''}`}
                        onClick={() => setSelectedMood(mood)}
                    >
                        <span className="mood-emoji">{['😄', '🙂', '😐', '😔', '😫'][i]}</span>
                        <span className="mood-label">{mood}</span>
                    </button>
                ))}
            </div>

            <div className="mood-chart-placeholder">
                <h3 className="chart-title">Weekly Mood Trends</h3>
                <div className="chart-bars">
                    <div className="chart-bar" style={{ height: '60%' }}></div>
                    <div className="chart-bar" style={{ height: '80%' }}></div>
                    <div className="chart-bar" style={{ height: '40%' }}></div>
                    <div className="chart-bar" style={{ height: '50%' }}></div>
                    <div className="chart-bar" style={{ height: '70%' }}></div>
                    <div className="chart-bar" style={{ height: '90%' }}></div>
                    <div className="chart-bar" style={{ height: '65%' }}></div>
                </div>
                <div className="chart-labels">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                </div>
            </div>
        </div>
    );
};

const ForumDemo = () => {
    return (
        <div className="forum-container">
            <div className="forum-header">
                <h3>Recent Discussions</h3>
                <button className="btn btn-primary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>New Post</button>
            </div>

            <div className="forum-list">
                <div className="forum-item">
                    <div className="forum-meta">
                        <span className="forum-tag">Academic Stress</span>
                        <span>• Posted 2 hours ago</span>
                    </div>
                    <h4 className="forum-title">Anyone else feeling burned out?</h4>
                    <p className="forum-preview">I've been studying non-stop for 3 days and I feel like nothing is sticking anymore. How do you guys deal with this?</p>
                    <div className="forum-stats">
                        <span className="stat"><Heart size={16} /> 24</span>
                        <span className="stat"><MessageCircle size={16} /> 12 comments</span>
                    </div>
                </div>

                <div className="forum-item">
                    <div className="forum-meta">
                        <span className="forum-tag">Social Anxiety</span>
                        <span>• Posted 5 hours ago</span>
                    </div>
                    <h4 className="forum-title">Tips for making friends as a transfer student</h4>
                    <p className="forum-preview">Just moved here and finding it hard to break into existing friend groups. Any advice?</p>
                    <div className="forum-stats">
                        <span className="stat"><Heart size={16} /> 45</span>
                        <span className="stat"><MessageCircle size={16} /> 18 comments</span>
                    </div>
                </div>

                <div className="forum-item">
                    <div className="forum-meta">
                        <span className="forum-tag">Wellness</span>
                        <span>• Posted 1 day ago</span>
                    </div>
                    <h4 className="forum-title">Best quiet spots on campus?</h4>
                    <p className="forum-preview">Looking for somewhere peaceful to meditate or just decompress between classes.</p>
                    <div className="forum-stats">
                        <span className="stat"><Heart size={16} /> 32</span>
                        <span className="stat"><MessageCircle size={16} /> 8 comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Demo;
