import React, { useState } from 'react';
import { toast } from 'react-toastify';
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Feedback sent")
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 flex flex-col items-center justify-center p-6 text-white">
      {/* Info Section */}
      <div className="bg-white text-black rounded-lg shadow-lg p-6 mb-6 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center">Contact Me</h2>
        <p className="text-lg mt-4 text-center">I'm Harshit, a Mining Engineering student at IIT BHU with experience in software development and data analysis.</p>
        <p className="text-lg mt-2 text-center">Feel free to reach out for collaboration, projects, or any queries!</p>
        <div className="mt-4 text-center">
          <p>Email: <span className="font-semibold">harshit.student.min21@itbhu.ac.in</span></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/harshit-pandey-815593263/" className="text-blue-500 underline">linkedin.com/in/harshit</a></p>
        </div>
      </div>

      {/* Feedback Form */}
      <div className="bg-white text-black rounded-lg shadow-lg p-6 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center">Feedback</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
