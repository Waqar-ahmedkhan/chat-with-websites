"use client"

import { motion } from 'framer-motion';
import { ArrowRight, Globe, MessageSquare, Shield, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center text-center"
    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
  >
    <Icon size={40} className="text-indigo-300 mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-white text-opacity-80">{description}</p>
  </motion.div>
);

const Home = () => {
  const [url, setUrl] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      const processedUrl = url.replace(/^(https?:\/\/)/, '');
      router.push(`/${encodeURIComponent(processedUrl)}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-800 p-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-white text-7xl font-extrabold mb-6 tracking-tight">
          Chat with Any Website
        </h1>
        <p className="text-white text-2xl mb-8 max-w-2xl mx-auto">
          Explore the web through AI-powered conversation. Enter a URL and start chatting!
        </p>
      </motion.div>
      
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-lg mb-12"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="relative mb-4">
          <motion.input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter Website URL"
            className="w-full p-5 rounded-full text-lg bg-white bg-opacity-20 backdrop-blur-md text-white placeholder-white placeholder-opacity-70 border-2 border-white border-opacity-30 focus:outline-none focus:border-opacity-70 transition duration-300"
            whileFocus={{ scale: 1.02 }}
            required
          />
        </div>
        <motion.button
          type="submit"
          className="w-full py-4 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-full shadow-lg hover:from-indigo-600 hover:to-purple-700 transition duration-300 flex items-center justify-center text-lg"
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,255,255,0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Web Adventure <ArrowRight size={24} className="ml-2" />
        </motion.button>
      </motion.form>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <FeatureCard
          icon={MessageSquare}
          title="Interactive Conversations"
          description="Engage in dynamic dialogues with web content, powered by advanced AI."
        />
        <FeatureCard
          icon={Zap}
          title="Instant Insights"
          description="Get quick answers and extract key information from any website effortlessly."
        />
        <FeatureCard
          icon={Shield}
          title="Privacy Focused"
          description="Your conversations and data are protected with state-of-the-art security measures."
        />
      </motion.div>

      <motion.div
        className="text-center text-white text-opacity-90 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <Globe size={64} className="mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Explore the Web Like Never Before</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Our AI-powered chat interface revolutionizes how you interact with websites.
          Discover insights, ask questions, and navigate content with the power of conversation.
        </p>
      </motion.div>

      <motion.div
        className="text-white text-opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <p className="text-sm">
          Created with ❤️ by Waqar Ahmad | © 2024 Chat with Any Website
        </p>
      </motion.div>
    </div>
  );
};

export default Home;