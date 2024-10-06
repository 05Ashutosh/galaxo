"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Star, Loader2 } from "lucide-react";

export default function StoriesPage() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/list/allstories"
        );
        setStories(response.data);
      } catch (error) {
        console.error("Error fetching stories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0a0a2a]">
        <Loader2 className="w-12 h-12 text-blue-400 animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a2a] text-white min-h-screen py-12 px-8 bg-[url('/stars-bg.jpg')] bg-cover bg-fixed">
      <div className="w-[90vw] max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Cosmic Chronicles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-[#1c1c3a]/80 p-6 rounded-lg shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-[#1c1c3a]/90"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold">{story.title}</h3>
                <Star className="text-yellow-400" />
              </div>
              <p className="mb-4 text-blue-300 font-semibold">{story.planet}</p>
              <p className="text-sm text-gray-300">{story.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
