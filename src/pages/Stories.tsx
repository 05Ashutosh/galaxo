"use client";

import { useEffect, useState } from "react";

export default function StoriesPage() {
  // Using dummy data for now
  const dummyStories = [
    {
      id: 1,
      title: "The Secrets of Kepler-452b",
      planet: "Kepler-452b",
      content:
        "Kepler-452b is often called Earth’s cousin, and its mysteries have captured the imagination of scientists across the globe...",
    },
    {
      id: 2,
      title: "Journey to Proxima Centauri b",
      planet: "Proxima Centauri b",
      content:
        "Located just over 4 light-years away, Proxima Centauri b offers a glimpse into what might be the closest habitable planet beyond our solar system...",
    },
    {
      id: 3,
      title: "Exploring the Unknown on TRAPPIST-1e",
      planet: "TRAPPIST-1e",
      content:
        "TRAPPIST-1e is part of an extraordinary system with seven Earth-sized exoplanets. What mysteries does this world hold?",
    },
    {
      id: 4,
      title: "Unraveling the Atmosphere of GJ 1132 b",
      planet: "GJ 1132 b",
      content:
        "This small planet, located 39 light-years away, presents an interesting study of an atmosphere in flux...",
    },
    {
      id: 5,
      title: "The Harsh Surface of HD 189733 b",
      planet: "HD 189733 b",
      content:
        "With its glass-shard winds and scorching heat, HD 189733 b is a planet unlike any other we've encountered...",
    },
  ];

  const [stories, setStories] = useState([]);

  useEffect(() => {
    // For now, we use dummy data
    setStories(dummyStories);
  }, []);

  return (
    <div className="bg-[#0a0a2a] text-white min-h-screen py-12 px-8">
      <div className="w-[80vw] m-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">All Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-[#1c1c3a] p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-2">{story.title}</h3>
              <p className="mb-4">{story.planet}</p>
              <p className="text-sm">{story.content.slice(0, 100)}...</p>
              <a
                href={`/story/${story.id}`}
                className="text-blue-400 underline mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
