// "use client";

// export function ExoPlanetComponent() {
//   const articles = [
//     {
//       image: "/placeholder.svg?height=200&width=300",
//       category: "Interviews",
//       date: "Nov 20, 2023",
//       title: "Californian essentials with Jillian Rocco",
//     },
//     {
//       image: "/placeholder.svg?height=200&width=300",
//       category: "Community",
//       date: "Nov 20, 2023",
//       title: "Desert island essentials with Rachael Olsen",
//     },
//     {
//       image: "/placeholder.svg?height=200&width=300",
//       category: "Flex Space",
//       date: "Nov 20, 2023",
//       title: "How Autex Acoustics® is innovating sustainable,",
//     },
//     {
//       image: "/placeholder.svg?height=200&width=300",
//       category: "News Article",
//       date: "Nov 20, 2023",
//       title: "International Day of Education with Amy Leong",
//     },
//   ];

//   return (
//     <div className="bg-gradient-to-b from-black to-[#0a0a2a] text-white p-8 ">
//       <h2 className="text-4xl font-bold mb-8 text-center">EXPLORE EXOPLANET</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-[80vw] m-auto">
//         {articles.map((article, index) => (
//           <div key={index} className="flex flex-col">
//             <img
//               src={article.image}
//               alt={article.title}
//               width={300}
//               height={200}
//               className="w-full h-48 object-cover mb-4"
//             />
//             <div className="text-sm mb-2">
//               {article.category} • {article.date}
//             </div>
//             <h3 className="text-lg font-semibold">{article.title}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";

export function ExoPlanetComponent({ showAll = false }) {
  const [articles, setArticles] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/api/exoplanets"); // Adjust the API endpoint as needed
        const data = await response.json();

        // Check if data is an array
        if (Array.isArray(data)) {
          setArticles(data);
        } else {
          console.error("Fetched data is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching exoplanets:", error);
      }
    };

    fetchArticles();
  }, []);

  // Determine how many articles to display
  const displayedArticles = showAll ? articles : articles.slice(0, 4);

  return (
    <div className="bg-gradient-to-b from-black to-[#0a0a2a] text-white p-8">
      <h2 className="text-4xl font-bold mb-8 text-center">EXPLORE EXOPLANET</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-[80vw] m-auto">
        {displayedArticles.map((article, index) => (
          <div key={index} className="flex flex-col">
            <img
              src={article.image}
              alt={article.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">{article.name}</h3>

            <div className="text-sm mb-2">{article.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
