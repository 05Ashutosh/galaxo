import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Loader2 } from "lucide-react";

interface StoryData {
  planet: string;
  title: string;
  story: string;
}

interface StoryProps {
  planet?: string;
  compact?: boolean;
}

const Story: React.FC<StoryProps> = ({
  planet: propPlanet,
  compact = false,
}) => {
  const [storyData, setStoryData] = useState<StoryData | null>(null);
  const [loading, setLoading] = useState(true);
  const { planet: paramPlanet } = useParams<{ planet: string }>();
  const location = useLocation();
  const imageURL = new URLSearchParams(location.search).get("imageURL");

  const planetName = propPlanet || paramPlanet;

  useEffect(() => {
    const fetchStory = async () => {
      if (!planetName) return;

      try {
        const response = await fetch(
          `http://localhost:8080/make/story/?planet=${encodeURIComponent(
            planetName
          )}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch story");
        }
        const data = await response.json();
        setStoryData(data);
      } catch (error) {
        console.error("Error fetching story:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, [planetName]);

  const handleAudioDownload = () => {
    const audioURL = `http://localhost:8080/audio/?planet=${encodeURIComponent(
      planetName || ""
    )}`;
    const link = document.createElement("a");
    link.href = audioURL;
    link.setAttribute("download", `${planetName}_story_audio.mp3`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-[#0a0a2a]">
        <Loader2 className="w-12 h-12 text-blue-400 animate-spin" />
      </div>
    );
  }

  if (!storyData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-[#0a0a2a] text-white p-8">
        <h1 className="text-3xl font-bold mb-4">Error</h1>
        <p>Failed to load story data.</p>
      </div>
    );
  }

  if (compact) {
    return (
      <div className="bg-[#1c1c3a]/80 rounded-lg p-6 backdrop-blur-sm my-8">
        <h3 className="text-2xl font-bold mb-4">{storyData.title}</h3>
        <p className="text-sm leading-relaxed line-clamp-3">
          {storyData.story}
        </p>
        {/* Add a "Read More" link or button here if needed */}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0a0a2a] text-white p-8 pt-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          {storyData.title}
        </h1>
        {imageURL && (
          <div className="mb-8">
            <img
              src={imageURL}
              alt={storyData.planet}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        )}
        <div className="bg-[#1c1c3a]/80 rounded-lg p-6 backdrop-blur-sm">
          <p className="text-lg leading-relaxed whitespace-pre-wrap">
            {storyData.story}
          </p>
        </div>
        {/* Add the Download Audio Button */}
        <div className="mt-6 text-center">
          <button
            onClick={handleAudioDownload}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
          >
            Download Audio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Story;
