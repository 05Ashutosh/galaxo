// // "use client";

// // import { useEffect, useState } from "react";

// // export function ExoPlanetComponent({ showAll = false }) {
// //   const [articles, setArticles] = useState([]);

// //   // Fetch data from the backend
// //   useEffect(() => {
// //     const fetchArticles = async () => {
// //       try {
// //         const response = await fetch("http://localhost:8080/exoplanets/all/");
// //         const data = await response.json();

// //         if (Array.isArray(data)) {
// //           setArticles(data);
// //         } else {
// //           console.error("Fetched data is not an array:", data);
// //         }
// //       } catch (error) {
// //         console.error("Error fetching exoplanets:", error);
// //       }
// //     };

// //     fetchArticles();
// //   }, []);

// //   // Function to create a story for a specific planet
// //   const createStory = async (planetName, imageURL) => {
// //     try {
// //       const response = await fetch(
// //         `http://localhost:8080/make/story/?planet=${planetName}`,
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify({ imageURL }), // Send the image URL in the request body
// //         }
// //       );

// //       if (response.ok) {
// //         console.log(`Story successfully created for planet: ${planetName}`);
// //       } else {
// //         console.error(`Failed to create story for planet: ${planetName}`);
// //       }
// //     } catch (error) {
// //       console.error("Error creating story:", error);
// //     }
// //   };

// //   // Determine how many articles to display
// //   const displayedArticles = showAll ? articles : articles.slice(0, 4);

// //   return (
// //     <div className="bg-gradient-to-b from-black to-[#0a0a2a] text-white p-8">
// //       <h2 className="text-4xl font-bold mb-8 text-center">EXPLORE EXOPLANET</h2>
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-[80vw] m-auto">
// //         {displayedArticles.map((article, index) => (
// //           <div key={index} className="flex flex-col">
// //             <img
// //               src={article.imageURL}
// //               alt={article.name}
// //               width={300}
// //               height={200}
// //               className="w-full h-48 object-cover mb-4"
// //             />
// //             <h3 className="text-lg font-semibold">{article.name}</h3>

// //             <div className="text-sm mb-2">{article.description}</div>

// //             {/* Button to trigger story creation */}
// //             <button
// //               onClick={() => createStory(article.name, article.imageURL)} // Pass the planet name and image URL
// //               className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
// //             >
// //               Create Story
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Loader2, Globe, ChevronRight } from "lucide-react";

// interface ExoPlanet {
//   name: string;
//   description: string;
//   imageURL: string;
// }

// export function ExoPlanetComponent({ showAll = false }) {
//   const [articles, setArticles] = useState<ExoPlanet[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         const response = await fetch("http://localhost:8080/exoplanets/all/");
//         const data = await response.json();

//         if (Array.isArray(data)) {
//           setArticles(data);
//         } else {
//           console.error("Fetched data is not an array:", data);
//         }
//       } catch (error) {
//         console.error("Error fetching exoplanets:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchArticles();
//   }, []);

//   const createStory = async (planetName: string, imageURL: string) => {
//     try {
//       const response = await fetch(
//         `http://localhost:8080/make/story/?planet=${planetName}`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ imageURL }),
//         }
//       );

//       if (response.ok) {
//         console.log(`Story successfully created for planet: ${planetName}`);
//         // You could add a success notification here
//       } else {
//         console.error(`Failed to create story for planet: ${planetName}`);
//         // You could add an error notification here
//       }
//     } catch (error) {
//       console.error("Error creating story:", error);
//       // You could add an error notification here
//     }
//   };

//   const displayedArticles = showAll ? articles : articles.slice(0, 4);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-[#0a0a2a]">
//         <Loader2 className="w-12 h-12 text-blue-400 animate-spin" />
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gradient-to-b from-black to-[#0a0a2a] text-white py-16 px-8">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
//           Explore Exoplanets
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {displayedArticles.map((article, index) => (
//             <motion.div
//               key={index}
//               className="bg-[#1c1c3a]/80 rounded-lg overflow-hidden shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:scale-105"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <div className="relative h-48">
//                 <img
//                   src={article.imageURL}
//                   alt={article.name}
//                   // layout="fill"
//                   // objectFit="cover"
//                   className="transition-transform duration-300 hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c3a] to-transparent" />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-2 flex items-center">
//                   <Globe className="mr-2 text-blue-400" />
//                   {article.name}
//                 </h3>
//                 <p className="text-sm text-gray-300 mb-4 line-clamp-3">
//                   {article.description}
//                 </p>
//                 <button
//                   onClick={() => createStory(article.name, article.imageURL)}
//                   className="w-full px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
//                 >
//                   Create Story
//                   <ChevronRight className="ml-2 w-4 h-4" />
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Loader2, Globe, ChevronRight } from "lucide-react";
// import Link from "react-router-dom";

// interface ExoPlanet {
//   name: string;
//   description: string;
//   imageURL: string;
// }

// export function ExoPlanetComponent({ showAll = false }) {
//   const [articles, setArticles] = useState<ExoPlanet[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         const response = await fetch("http://localhost:8080/exoplanets/all/");
//         const data = await response.json();

//         if (Array.isArray(data)) {
//           setArticles(data);
//         } else {
//           console.error("Fetched data is not an array:", data);
//         }
//       } catch (error) {
//         console.error("Error fetching exoplanets:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchArticles();
//   }, []);

//   const displayedArticles = showAll ? articles : articles.slice(0, 4);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-[#0a0a2a]">
//         <Loader2 className="w-12 h-12 text-blue-400 animate-spin" />
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gradient-to-b from-black to-[#0a0a2a] text-white py-16 px-8">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
//           Explore Exoplanets
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {displayedArticles.map((article, index) => (
//             <motion.div
//               key={index}
//               className="bg-[#1c1c3a]/80 rounded-lg overflow-hidden shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:scale-105"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <div className="relative h-48">
//                 <img
//                   src={article.imageURL}
//                   alt={article.name}
//                   className="transition-transform duration-300 hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c3a] to-transparent" />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-2 flex items-center">
//                   <Globe className="mr-2 text-blue-400" />
//                   {article.name}
//                 </h3>
//                 <p className="text-sm text-gray-300 mb-4 line-clamp-3">
//                   {article.description}
//                 </p>
//                 <Link
//                   href={`/story?planet=${encodeURIComponent(
//                     article.name
//                   )}&imageURL=${encodeURIComponent(article.imageURL)}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-full px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
//                 >
//                   Create Story
//                   <ChevronRight className="ml-2 w-4 h-4" />
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Globe, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ExoPlanet {
  name: string;
  description: string;
  imageURL: string;
}

export function ExoPlanetComponent({ showAll = false }) {
  const [articles, setArticles] = useState<ExoPlanet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:8080/exoplanets/all/");
        const data = await response.json();

        if (Array.isArray(data)) {
          setArticles(data);
        } else {
          console.error("Fetched data is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching exoplanets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const displayedArticles = showAll ? articles : articles.slice(0, 4);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-[#0a0a2a]">
        <Loader2 className="w-12 h-12 text-blue-400 animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-black to-[#0a0a2a] text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Explore Exoplanets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedArticles.map((article, index) => (
            <motion.div
              key={index}
              className="bg-[#1c1c3a]/80 rounded-lg overflow-hidden shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48">
                <img
                  src={article.imageURL}
                  alt={article.name}
                  className="transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c3a] to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <Globe className="mr-2 text-blue-400" />
                  {article.name}
                </h3>
                <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                  {article.description}
                </p>
                <Link
                  to={`/story/${encodeURIComponent(
                    article.name
                  )}?imageURL=${encodeURIComponent(article.imageURL)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                >
                  Create Story
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
