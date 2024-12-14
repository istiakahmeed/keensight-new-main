"use client";

import React, { useState } from 'react';
import axios from 'axios';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState<'success' | 'error'>();
  const [loading, setLoading] = useState(false);  // Track loading state

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);  // Start loading when the form is submitted
    setStatusMessage('');  // Clear previous messages
    try {
      // Update the URL here to include the full path
      const response = await axios.post('https://keensight-new.pages.dev/api/subscribe', { email });
      if (response.status === 200) {
        setStatusMessage(response.data.message);
        setStatusType('success');
      }
    } catch (error) {
      setStatusMessage('Subscription failed. Please try again.');
      setStatusType('error');
    } finally {
      setLoading(false);  // Stop loading after the request finishes
    }
  };
  

  return (
    <div className="text-center">
      <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
        Stay Ahead with Industry Insights
      </h4>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        Join our community to receive the latest updates and expert analyses on AI, data analytics, and technology trends.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="email"
          placeholder="Email Address"
          className="p-2 w-full md:w-64 rounded-md border border-gray-300 dark:border-gray-700 shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className={`flex rounded-full px-5.5 py-2.5 text-white duration-500 ease-in-out ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-teal-700 hover:bg-transparent hover:text-black hover:border border-black dark:bg-teal-600 dark:hover:bg-white dark:hover:text-black'
          }`}
          disabled={loading}  // Disable button while loading
        >
          {loading ? 'Submitting...' : 'Subscribe'}  {/* Show loading text */}
        </button>
      </form>

      {/* Show status message */}
      {statusMessage && (
        <div
          className={`mt-6 p-4 rounded-md text-lg font-semibold shadow-md ${
            statusType === 'success'
              ? 'text-black dark:text-white'
              : 'bg-red-100 text-red-800 border border-red-300'
          }`}
        >
          {statusMessage}
        </div>
      )}

      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 italic">
        We respect your privacy and are committed to protecting your personal information.
      </p>
    </div>
  );
};

export default Newsletter;
