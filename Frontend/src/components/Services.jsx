import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const [questions, setQuestions] = useState([]);
  const [bookmarked, setBookmarked] = useState(new Set());

  useEffect(() => {
    fetch("/dsa.json") // Fetching from public folder
      .then((response) => response.json())
      .then((data) => {
        const filteredQuestions = data.data.flatMap((section) =>
          section.sub_steps.flatMap((sub) =>
            sub.topics.map((topic) => ({
              id: topic.id,
              title: topic.title,
              link: topic.p1_link,
              ytLink: topic.yt_link,
            }))
          )
        );
        setQuestions(filteredQuestions);
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  const toggleBookmark = (id) => {
    setBookmarked((prev) => {
      const newBookmarks = new Set(prev);
      if (newBookmarks.has(id)) {
        newBookmarks.delete(id);
      } else {
        newBookmarks.add(id);
      }
      return newBookmarks;
    });
  };

  const clearBookmarks = () => setBookmarked(new Set());

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white flex flex-col items-center">
      <motion.h2
        className="text-4xl font-bold text-center mb-6 text-blue-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        DSA Questions Sheet
      </motion.h2>

      <button
        onClick={clearBookmarks}
        className="mb-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        Clear Bookmarks
      </button>

      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="w-full border border-gray-700 rounded-lg">
          <thead className="bg-gray-800">
            <tr>
              <th className="py-3 px-4 border border-gray-700 text-left">#</th>
              <th className="py-3 px-4 border border-gray-700 text-left">Question</th>
              <th className="py-3 px-4 border border-gray-700 text-left">Links</th>
              <th className="py-3 px-4 border border-gray-700 text-left">Bookmark</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((q, index) => (
              <motion.tr
                key={q.id}
                className={`bg-gray-800 hover:bg-gray-700 transition ${bookmarked.has(q.id) ? "border-l-4 border-yellow-400" : ""}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <td className="py-3 px-4 border border-gray-700">{index + 1}</td>
                <td className="py-3 px-4 border border-gray-700">{q.title}</td>
                <td className="py-3 px-4 border border-gray-700">
                  <a href={q.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Solve</a>
                  {q.ytLink && (
                    <a href={q.ytLink} target="_blank" rel="noopener noreferrer" className="ml-4 text-red-400 hover:underline">Watch</a>
                  )}
                </td>
                <td className="py-3 px-4 border border-gray-700">
                  <button
                    onClick={() => toggleBookmark(q.id)}
                    className={`px-3 py-1 rounded ${bookmarked.has(q.id) ? "bg-yellow-400 text-black" : "bg-gray-600 text-white"} hover:bg-yellow-500 transition`}
                  >
                    {bookmarked.has(q.id) ? "★" : "☆"}
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Services;