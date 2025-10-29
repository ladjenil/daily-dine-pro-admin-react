// src/components/ForgotPasswordCard.js

import React, { useState } from 'react';

const SpinnerIcon = () => (
    <svg
      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );

const ForgotPasswordCard = ({ onShowLogin, config }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      
      // Reset form after a delay
      setTimeout(() => {
        setSuccess(false);
        setEmail('');
      }, 3000);
    }, 1500);
  };

  return (
    <div
      id="forgotPasswordCard"
      className="login-card glass-effect rounded-2xl p-8 w-full max-w-md relative z-10"
    >
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
            ></path>
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Reset Password</h1>
        <p className="text-white text-opacity-80">
          Enter your email to receive reset instructions
        </p>
      </div>

      <form id="forgotPasswordForm" className="space-y-6" onSubmit={handleSubmit} style={{ opacity: success ? 0.5 : 1 }}>
        <div>
          <label htmlFor="resetEmail" className="block text-sm font-medium text-white mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="resetEmail"
            name="resetEmail"
            required
            className="input-focus w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          id="resetButton"
          className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          disabled={loading}
        >
          {loading ? (
            <>
              <SpinnerIcon />
              Sending...
            </>
          ) : (
            <>
              Send Reset Link
              <svg
                className="inline-block w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                ></path>
              </svg>
            </>
          )}
        </button>
        <div className="text-center">
          <button
            type="button"
            id="backToLoginLink"
            className="text-sm text-white text-opacity-80 hover:text-opacity-100 transition-colors"
            onClick={onShowLogin}
          >
            ← Back to Login
          </button>
        </div>
      </form>

      {/* Reset Success Message */}
      {success && (
        <div
          id="resetSuccessMessage"
          className="mt-6 p-4 bg-green-500 bg-opacity-20 border border-green-400 border-opacity-30 rounded-lg"
        >
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-green-400 mr-2"
              fill="none"
  
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span className="text-green-400 text-sm">
              Reset link sent! Check your email for instructions.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPasswordCard;