import { useEffect, useState } from "react";
import axios from "axios";
import { Play } from "lucide-react";

export default function Story({
  planet = "Kepler-452b",
  imageUrl = "https://en.wikipedia.org/wiki/Kepler-452b#/media/File:Kepler-452b_artist_concept.jpg",
  compact = false, // Add a 'compact' prop for home page version
}) {
  const [storyData, setStoryData] = useState({
    title: "Loading Story...",
    story: "Loading story details...",
  });

  useEffect(() => {
    async function fetchStoryData() {
      try {
        const url = `http://localhost:8080/make/story?planet=${planet}`;
        const response = await axios.get(url);
        const { title, story } = response.data;
        setStoryData({ title, story });
      } catch (error) {
        console.error("Error fetching story data:", error);
      }
    }

    fetchStoryData();
  }, [planet]);

  return (
    <div
      className={`bg-[#0a0a2a] text-white flex items-center justify-center p-4 ${
        compact ? "min-h-[50vh]" : "min-h-screen"
      }`}
    >
      <div className="w-full max-w-5xl">
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
          {/* Left Side: Story Title and Play/Pause Button */}
          <div className="flex-1 mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <h2
                className={`text-2xl font-semibold mr-2 ${
                  compact ? "text-xl" : "text-3xl"
                }`}
              >
                Story Title: {storyData.title}
              </h2>
              <Play className="text-green-400" size={28} />
            </div>
            <p className="text-lg">
              {compact
                ? `${storyData.story.substring(0, 100)}...`
                : storyData.story}
            </p>

            {/* Story Section */}
            {!compact && (
              <div className="mt-8 space-y-4">
                <p>
                  Zara’s journey into the cosmos continued with unexpected
                  twists and turns. Each planet she encountered had secrets, but
                  none more intriguing than this one...
                </p>
                <p>
                  With every new discovery, Zara’s courage was tested, and her
                  understanding of the universe deepened.
                </p>
              </div>
            )}
          </div>

          {/* Right Side: Image */}
          <div className="flex-1">
            <img
              src={imageUrl}
              alt="Story image"
              className="rounded-lg w-full h-auto max-h-[200px] md:max-h-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
