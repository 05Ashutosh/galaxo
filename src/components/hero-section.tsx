// "use client";

// import { Link } from "react-router-dom";
// import exo from "../assets/exo.png";

// export function HeroSectionComponent() {
//   return (
//     <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-teal-100 to-black">
//       <div className="container mx-auto flex h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
//         <div className="relative z-10 flex flex-col items-center text-center">
//           <h1 className="mb-4 text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl">
//             JOURNEY TO THE
//             <br />
//             EXOPLANETS
//           </h1>
//           <p className="mb-8 max-w-2xl text-xl text-white sm:text-2xl">
//             GET READY TO EMBARK ON A VOYAGE OF
//             <br />
//             ILLUSION, DISCOVERY AND WONDER
//           </p>
//           <Link
//             to="/signup"
//             className="inline-block rounded-full bg-white px-8 py-3 text-lg font-semibold text-teal-600 transition-colors hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 w-60"
//           >
//             START TO EXPLORE
//           </Link>
//         </div>
//       </div>
//       <div className="absolute bottom-0 right-0 z-0 h-full w-2/3 sm:h-full sm:w-1/2">
//         <img
//           src={exo}
//           alt="Astronaut in space"
//           className="opacity-80"
//         />
//       </div>
//     </section>
//   );
// }

// "use client";

// import { Link } from "react-router-dom";
// import exo from "../assets/exo.png";

// export function HeroSectionComponent() {
//   return (
//     <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-teal-100 to-black">
//       <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
//         <div className="relative z-10 flex h-full flex-col justify-center">
//           <h1 className="mb-4 text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl mt-10">
//             JOURNEY TO THE
//             <br />
//             EXOPLANETS
//           </h1>
//           <p className="mb-8 max-w-2xl text-xl text-white sm:text-2xl">
//             GET READY TO EMBARK ON A VOYAGE OF
//             <br />
//             ILLUSION, DISCOVERY AND WONDER
//           </p>
//           <Link
//             to="/signup"
//             className="inline-block rounded-full bg-white px-8 py-3 text-lg font-semibold text-teal-600 transition-colors hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 w-60"
//           >
//             START TO EXPLORE
//           </Link>
//         </div>
//       </div>
//       <div className="absolute bottom-0 right-0 z-0 h-full w-2/3 sm:h-full sm:w-1/2">
//         <img src={exo} alt="Astronaut in space" className="opacity-80" />
//       </div>
//     </section>
//   );
// }

"use client";

import { Link } from "react-router-dom";
import exo from "../assets/exo.png";
import backgroundVideo from "../assets/space-video.mp4"; // Ensure you have the video in the assets folder

export function HeroSectionComponent() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 h-full w-full object-cover"
        src={backgroundVideo}
        autoPlay
        loop
        muted
      />

      {/* Content on top of the video */}
      <div className="container relative z-10 mx-auto flex h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="relative z-20 flex flex-col items-center text-center">
          <h1 className="mb-4 text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl">
            JOURNEY TO THE
            <br />
            EXOPLANETS
          </h1>
          <p className="mb-8 max-w-2xl text-xl text-white sm:text-2xl">
            GET READY TO EMBARK ON A VOYAGE OF
            <br />
            ILLUSION, DISCOVERY AND WONDER
          </p>
          <Link
            to="/signup"
            className="inline-block rounded-full bg-white px-8 py-3 text-lg font-semibold text-teal-600 transition-colors hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 w-60"
          >
            START TO EXPLORE
          </Link>
        </div>
      </div>

      {/* Image on the bottom right
      <div className="absolute bottom-0 right-0 z-0 h-full w-2/3 sm:h-full sm:w-1/2">
        <img
          src={exo}
          alt="Astronaut in space"
          className="opacity-80"
        />
      </div> */}
    </section>
  );
}
