import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HomeStoryComponent() {
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const planetName = "Kappler-22b"; // Planet name for the API request

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/make/story/?planet=${encodeURIComponent(
            planetName
          )}`
        );
        setStory(response.data);
      } catch (error) {
        console.error("Error fetching story:", error);
        setError("Failed to fetch the story. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0a0a2a]">
        <p className="text-white">Loading story...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0a0a2a]">
        <p className="text-white">{error}</p>
      </div>
    );
  }

  if (!story) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0a0a2a]">
        <p className="text-white">No story available.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a2a] text-white min-h-screen py-12 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">{story.title}</h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Kepler-22b_versus_Earth.jpg"
          alt={planetName}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h3 className="text-2xl font-semibold mb-2">Planet: {story.planet}</h3>
        <p className="text-gray-300">{story.story}</p>
      </div>
    </div>
  );
}
