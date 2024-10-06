import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const IndStory = () => {
  const { planet } = useParams(); // Get the story id from the URL
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/make/story/${planet}`
        );
        setStory(response.data);
      } catch (error) {
        console.error("Error fetching story:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0a0a2a]">
        <p className="text-white">Loading story...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a2a] text-white py-12 px-8">
      {story ? (
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">{story.title}</h2>
          <h3 className="text-xl font-semibold mb-2 text-blue-300">
            Planet: {story.planet}
          </h3>
          <p className="text-gray-300">{story.content}</p>
        </div>
      ) : (
        <p>Story not found</p>
      )}
    </div>
  );
};

export default IndStory;
