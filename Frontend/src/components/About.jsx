import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 flex flex-col items-center justify-center p-6 text-white">
      {/* Intro Section */}
      <div className="bg-white text-black rounded-lg shadow-lg p-6 mb-6 w-full max-w-4xl text-center">
        <h2 className="text-4xl font-bold">About DSATUT</h2>
        <p className="text-lg mt-4">Welcome to DSATUT! I’m Harshit, a Mining Engineering student at IIT BHU, passionate about Data Structures and Algorithms. I have experience in software development and competitive programming, and I'm here to help you master DSA.</p>
      </div>

      {/* Premium Content Promotion */}
      <div className="bg-yellow-400 text-black rounded-lg shadow-lg p-6 w-full max-w-4xl text-center">
        <h2 className="text-3xl font-bold">Unlock Premium DSA Content</h2>
        <p className="text-lg mt-4">Get access to exclusive DSA problems, solutions, and in-depth explanations from beginner to advanced levels.</p>
        <ul className="list-disc text-left mx-auto mt-4 w-3/4">
          <li>Hand-picked problem sets with detailed solutions</li>
          <li>Expert-guided video tutorials</li>
          <li>Advanced problem-solving techniques</li>
          <li>Mock interviews & coding challenges</li>
        </ul>
        <button className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
          <Link to="/">Subscribe Now</Link>
        </button>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white text-black rounded-lg shadow-lg p-6 mt-6 w-full max-w-4xl text-center">
        <h2 className="text-3xl font-bold">Why Choose DSATUT?</h2>
        <p className="text-lg mt-4">Our platform is designed to help you succeed in coding interviews and competitive programming.</p>
        <div className="flex flex-wrap justify-around mt-4">
          <div className="w-1/2 p-4">
            <h3 className="text-xl font-semibold">Structured Roadmap</h3>
            <p className="text-md">Follow a well-defined learning path to master DSA step by step.</p>
          </div>
          <div className="w-1/2 p-4">
            <h3 className="text-xl font-semibold">Industry-Level Problems</h3>
            <p className="text-md">Solve real-world problems asked in FAANG-level interviews.</p>
          </div>
          <div className="w-1/2 p-4">
            <h3 className="text-xl font-semibold">24/7 Support</h3>
            <p className="text-md">Get guidance and help anytime from our expert mentors.</p>
          </div>
          <div className="w-1/2 p-4">
            <h3 className="text-xl font-semibold">Community Driven</h3>
            <p className="text-md">Join a growing community of learners and competitive coders.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;