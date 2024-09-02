"use client";

import { useState } from 'react';

const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setMessage('Please enter a valid email address.');
            return;
        }

        try {
            const res = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (res.ok) {
                setMessage('Thank you for your interest! You will receive updates soon.');
                setEmail('');
            } else {
                setMessage('There was an issue submitting your request. Please try again.');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-navy-blue text-white rounded-lg">
            <h2 className="text-2xl mb-4">Stay Updated with ValueBoost</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-md"
                    required
                />
                <button type="submit" className="w-full p-3 bg-light-blue text-white rounded-md">
                    Sign Up
                </button>
            </form>
            {message && <p className="mt-4 text-center">{message}</p>}
        </div>
    );
};

export default SignUpForm;
