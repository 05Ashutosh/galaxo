// import { HeroSectionComponent } from "@/components/hero-section";
// import { ExoPlanetComponent } from "@/components/exo-planet";
// import DeveloperCarousel from "@/components/DeveloperCarousel";
// import Story from "@/components/Story";
// const Home = () => {
//   return (
//     <>
//       <HeroSectionComponent />
//       <ExoPlanetComponent />
//       <div className="bg-[#0a0a2a] text-white pt-[5vh] ">
//         <div className="w-[80vw] m-auto">
//           <h2 className="text-4xl font-bold mb-8 text-center ">
//             Narratives from the Edge of Space
//           </h2>
//           <p className="text-center">
//             Dive into the captivating world of exoplanets with our collection of
//             stories that transport you to distant worlds beyond our solar
//             system. Each narrative unveils the mysteries and wonders of these
//             celestial bodies, showcasing the groundbreaking discoveries and
//             adventures of scientists and explorers. Join us on a journey through
//             the cosmos, where each tale invites you to let your imagination
//             soar!
//           </p>

//           {/* Story component in compact view for home page */}
//           <Story planet="Kepler-452b" compact={true} />
//         </div>
//       </div>
//       <DeveloperCarousel />
//     </>
//   );
// };

// export default Home;

import React from "react";
import { HeroSectionComponent } from "@/components/hero-section";
import { ExoPlanetComponent } from "@/components/exo-planet";
import DeveloperCarousel from "@/components/DeveloperCarousel";
import HomeStoryComponent from "@/components/HomeStoryComponent";
import ExoplanetDiscovery from "@/components/ExoplanetDiscovery";

const Home: React.FC = () => {
  return (
    <>
      <HeroSectionComponent />
      <ExoPlanetComponent />
      <ExoplanetDiscovery />
      <DeveloperCarousel />
    </>
  );
};

export default Home;
