// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Link } from "react-router-dom";

// export default function ExoPlanet() {
//   const navigate = useNavigate();

//   // State to hold fetched exoplanets data
//   const [exoplanets, setExoplanets] = useState([]);

//   // Fetch exoplanets from the backend API
//   useEffect(() => {
//     const fetchExoplanets = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8080/exoplanets/all/"
//         );
//         setExoplanets(response.data); // Assuming the API returns an array of exoplanets
//       } catch (error) {
//         console.error("Error fetching exoplanets:", error);
//       }
//     };

//     fetchExoplanets();
//   }, []); // Empty dependency array to ensure it runs once on component mount

//   const handleCardClick = (planetName, imageURL) => {
//     navigate(`/story/`, { state: { imageUrl, planetName } });
//   };

//   return (
//     <div className="bg-[#0a0a2a] text-white pt-8 min-h-screen">
//       <div className="w-[80vw] m-auto">
//         <h2 className="text-4xl font-bold mb-8 text-center">
//           Discover New Worlds
//         </h2>
//         <Link
//           to={`/story/${encodeURIComponent(
//             article.name
//           )}?imageURL=${encodeURIComponent(article.imageURL)}`}
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {exoplanets.map((planet, index) => (
//               <div
//                 key={index}
//                 className="bg-[#1a1a3a] p-4 rounded-lg cursor-pointer"
//                 onClick={() => handleCardClick(planet.name, planet.imageUrl)}
//               >
//                 <img
//                   src={planet.imageURL}
//                   alt={planet.name}
//                   className="w-full h-64 object-cover rounded-md mb-4"
//                 />
//                 <h3 className="text-2xl font-semibold mb-2">{planet.name}</h3>
//                 <p className="text-gray-400">{planet.description}</p>
//               </div>
//             ))}
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function ExoPlanet() {
  const navigate = useNavigate();

  // State to hold fetched exoplanets data
  const [exoplanets, setExoplanets] = useState([]);

  // Fetch exoplanets from the backend API
  useEffect(() => {
    const fetchExoplanets = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/exoplanets/all/"
        );
        setExoplanets(response.data); // Assuming the API returns an array of exoplanets
      } catch (error) {
        console.error("Error fetching exoplanets:", error);
      }
    };

    fetchExoplanets();
  }, []); // Empty dependency array to ensure it runs once on component mount

  return (
    <div className="bg-[#0a0a2a] text-white pt-8 min-h-screen">
      <div className="w-[80vw] m-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Discover New Worlds
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exoplanets.map((planet, index) => (
            <Link
              key={index}
              to={`/story/${encodeURIComponent(
                planet.name
              )}?imageURL=${encodeURIComponent(planet.imageURL)}`}
              className="bg-[#1a1a3a] p-4 rounded-lg cursor-pointer transition-all hover:scale-105"
            >
              <img
                src={planet.imageURL}
                alt={planet.name}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{planet.name}</h3>
              <p className="text-gray-400">{planet.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
