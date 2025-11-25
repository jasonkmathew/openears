import React, { useState } from 'react';
import { X, Loader2, CheckCircle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const WaitlistModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        additionalInfo: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            await addDoc(collection(db, "waitlist"), {
                ...formData,
                timestamp: serverTimestamp()
            });
            setIsSuccess(true);
            setFormData({ firstName: '', lastName: '', email: '', additionalInfo: '' });
        } catch (err) {
            console.error("Error adding document: ", err);
            setError('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Close modal">
                    <X size={24} />
                </button>

                {isSuccess ? (
                    <div className="success-message">
                        <div className="success-icon-wrapper">
                            <CheckCircle size={48} />
                        </div>
                        <h3>You're on the list!</h3>
                        <p>Thanks for joining the OpenEars waitlist. We'll be in touch soon.</p>
                        <button className="btn btn-primary btn-full" onClick={onClose}>Close</button>
                    </div>
                ) : (
                    <>
                        <div className="modal-header">
                            <img src="/logo.png" alt="OpenEars" className="modal-logo" />
                            <h2 className="modal-title">Join the Waitlist</h2>
                            <p className="modal-subtitle">Be the first to know when OpenEars launches on campus.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="waitlist-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Rocky"
                                        className="form-input"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Bull"
                                        className="form-input"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">USF Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="rocky@usf.edu"
                                    pattern=".+@usf\.edu"
                                    title="Please enter a valid USF email address ending in @usf.edu"
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="additionalInfo">What would you like to see from OpenEars?</label>
                                <textarea
                                    id="additionalInfo"
                                    name="additionalInfo"
                                    value={formData.additionalInfo}
                                    onChange={handleChange}
                                    placeholder="Tell us how we can help..."
                                    rows="3"
                                    className="form-input"
                                ></textarea>
                            </div>

                            {error && <p className="error-message">{error}</p>}

                            <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" /> Joining...
                                    </>
                                ) : (
                                    'Join Waitlist'
                                )}
                            </button>
                        </form>
                    </>
                )}
            </div>

            <style>{`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(31, 41, 55, 0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2000;
                    backdrop-filter: blur(8px);
                    padding: 1rem;
                    animation: fadeIn 0.2s ease-out;
                }

                .modal-content {
                    background-color: white;
                    border-radius: 1.5rem;
                    padding: 3rem;
                    width: 100%;
                    max-width: 480px;
                    position: relative;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                    animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes slideUp {
                    from { transform: translateY(20px) scale(0.95); opacity: 0; }
                    to { transform: translateY(0) scale(1); opacity: 1; }
                }

                .modal-close {
                    position: absolute;
                    top: 1.5rem;
                    right: 1.5rem;
                    background: #F3F4F6;
                    border: none;
                    color: #6B7280;
                    cursor: pointer;
                    transition: all 0.2s;
                    padding: 0.5rem;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .modal-close:hover {
                    background-color: #E5E7EB;
                    color: #1F2937;
                    transform: rotate(90deg);
                }

                .modal-header {
                    text-align: center;
                    margin-bottom: 2rem;
                }

                .modal-logo {
                    width: 48px;
                    height: 48px;
                    object-fit: contain;
                    margin-bottom: 1rem;
                }

                .modal-title {
                    font-size: 1.875rem;
                    font-weight: 800;
                    color: #1F2937;
                    margin-bottom: 0.5rem;
                    letter-spacing: -0.025em;
                }

                .modal-subtitle {
                    color: #6B7280;
                    font-size: 1rem;
                    line-height: 1.5;
                }

                .waitlist-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .form-group label {
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: #374151;
                    margin-left: 0.25rem;
                }

                .form-input {
                    padding: 0.875rem 1rem;
                    border: 2px solid #E5E7EB;
                    border-radius: 0.75rem;
                    font-size: 1rem;
                    transition: all 0.2s;
                    background-color: #F9FAFB;
                    color: #1F2937;
                }

                .form-input:focus {
                    outline: none;
                    border-color: var(--primary);
                    background-color: white;
                    box-shadow: 0 0 0 4px rgba(74, 144, 226, 0.1);
                }

                .form-input::placeholder {
                    color: #9CA3AF;
                }

                .btn-full {
                    width: 100%;
                    justify-content: center;
                    padding: 1rem;
                    font-size: 1rem;
                    margin-top: 0.5rem;
                }

                .error-message {
                    color: #EF4444;
                    font-size: 0.875rem;
                    text-align: center;
                    background-color: #FEF2F2;
                    padding: 0.75rem;
                    border-radius: 0.5rem;
                    border: 1px solid #FECACA;
                }

                .success-message {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    padding: 2rem 0;
                }

                .success-icon-wrapper {
                    width: 80px;
                    height: 80px;
                    background-color: rgba(80, 227, 194, 0.1);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--secondary);
                    margin-bottom: 1rem;
                }

                .success-message h3 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #1F2937;
                }

                .success-message p {
                    color: #6B7280;
                    margin-bottom: 1rem;
                }

                .animate-spin {
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @media (max-width: 640px) {
                    .modal-content {
                        padding: 2rem;
                        margin: 1rem;
                    }
                    .form-row {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default WaitlistModal;
