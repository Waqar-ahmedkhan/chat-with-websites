"use client"
import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#343a40] from-teal-400 via-blue-500 to-indigo-600 p-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-white text-6xl font-extrabold mb-6 tracking-tight">
          Chat with Any Website
        </h1>
        <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
          Explore the web through conversation. Enter a URL and start chatting!
        </p>
      </motion.div>
      
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-md"
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
            className="w-full p-4 rounded-lg text-lg bg-white bg-opacity-20 backdrop-blur-md text-white placeholder-white placeholder-opacity-70 border-2 border-white border-opacity-30 focus:outline-none focus:border-opacity-70 transition duration-300"
            whileFocus={{ scale: 1.02 }}
            required
          />
        </div>
        <motion.button
          type="submit"
          className="w-full py-3 px-6 bg-white text-indigo-600 font-bold rounded-lg shadow-lg hover:bg-indigo-100 transition duration-300 flex items-center justify-center"
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          Start Chatting <ArrowRight size={20} className="ml-2" />
        </motion.button>
      </motion.form>

      <motion.div
        className="mt-16 text-white text-opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Globe size={48} className="mx-auto mb-4" />
        <p className="text-center max-w-md">
          Dive into the world of AI-powered web exploration. 
          Start your journey by entering a URL above!
        </p>
      </motion.div>

      <motion.div
        className="mt-8 text-white text-opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <p className="text-sm">
          Created by Waqar Ahmad
        </p>
      </motion.div>
    </div>
  );
};

export default Home;