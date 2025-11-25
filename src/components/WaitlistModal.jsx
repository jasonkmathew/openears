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
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose} aria-label="Close modal">
                    <X size={24} />
                </button>

                {isSuccess ? (
                    <div className="success-message">
                        <CheckCircle size={64} className="success-icon" />
                        <h3>You're on the list!</h3>
                        <p>Thanks for joining the OpenEars waitlist. We'll be in touch soon.</p>
                        <button className="btn btn-primary" onClick={onClose}>Close</button>
                    </div>
                ) : (
                    <>
                        <h2 className="modal-title">Join the Waitlist</h2>
                        <p className="modal-subtitle">Be the first to know when OpenEars launches on campus.</p>

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
                                ></textarea>
                            </div>

                            {error && <p className="error-message">{error}</p>}

                            <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
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
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2000;
                    backdrop-filter: blur(4px);
                    padding: 1rem;
                }

                .modal-content {
                    background-color: white;
                    border-radius: 1.5rem;
                    padding: 2.5rem;
                    width: 100%;
                    max-width: 500px;
                    position: relative;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                    animation: modalSlideIn 0.3s ease-out;
                }

                @keyframes modalSlideIn {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                .modal-close {
                    position: absolute;
                    top: 1.5rem;
                    right: 1.5rem;
                    background: none;
                    border: none;
                    color: #9CA3AF;
                    cursor: pointer;
                    transition: color 0.2s;
                    padding: 0.25rem;
                }

                .modal-close:hover {
                    color: #1F2937;
                }

                .modal-title {
                    font-size: 1.75rem;
                    font-weight: 700;
                    color: #1F2937;
                    margin-bottom: 0.5rem;
                    text-align: center;
                }

                .modal-subtitle {
                    color: #6B7280;
                    text-align: center;
                    margin-bottom: 2rem;
                }

                .waitlist-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
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
                    font-weight: 500;
                    color: #374151;
                }

                .form-group input,
                .form-group textarea {
                    padding: 0.75rem;
                    border: 1px solid #D1D5DB;
                    border-radius: 0.5rem;
                    font-size: 1rem;
                    transition: border-color 0.2s, box-shadow 0.2s;
                }

                .form-group input:focus,
                .form-group textarea:focus {
                    outline: none;
                    border-color: var(--primary);
                    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
                }

                .btn-block {
                    width: 100%;
                    justify-content: center;
                    margin-top: 0.5rem;
                }

                .error-message {
                    color: #EF4444;
                    font-size: 0.875rem;
                    text-align: center;
                }

                .success-message {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    padding: 2rem 0;
                }

                .success-icon {
                    color: var(--secondary);
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
                        padding: 1.5rem;
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
