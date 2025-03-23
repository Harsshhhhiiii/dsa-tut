import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 p-6 text-white">
      {/* Hero Section */}
      <motion.div
        className="text-center py-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold">Master Data Structures & Algorithms</h1>
        <p className="text-lg mt-4">Improve your coding skills with structured problem-solving.</p>
        <Link to="/login">
          <motion.button
            className="mt-6 px-6 py-3 bg-yellow-400 text-black text-lg font-semibold rounded-lg hover:bg-yellow-500 transition"
            whileHover={{ scale: 1.1 }}
          >
            Get Started
          </motion.button>
        </Link>
      </motion.div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 text-center mt-10">
        <motion.div className="bg-white text-black p-6 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
          <h3 className="text-xl font-semibold">Curated DSA Problems</h3>
          <p className="text-sm mt-2">Practice hand-picked coding problems with solutions.</p>
        </motion.div>
        <motion.div className="bg-white text-black p-6 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
          <h3 className="text-xl font-semibold">Video Explanations</h3>
          <p className="text-sm mt-2">Step-by-step video guides for better understanding.</p>
        </motion.div>
        <motion.div className="bg-white text-black p-6 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
          <h3 className="text-xl font-semibold">Interview Preparation</h3>
          <p className="text-sm mt-2">Get ready for coding interviews with structured learning.</p>
        </motion.div>
      </div>

      {/* Call-to-Action */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold">Start Your DSA Journey Today!</h2>
        <Link to="/signup">
          <motion.button
            className="mt-6 px-6 py-3 bg-green-400 text-black text-lg font-semibold rounded-lg hover:bg-green-500 transition"
            whileHover={{ scale: 1.1 }}
          >
            Join Now
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
