import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import sak from "../assets/sak.jpg";
import aak from "../assets/aak.jpg";
import priyanshu from "../assets/priyanshu.jpg";
import ashu from "../assets/ashu.jpg";
import anu from "../assets/anu.jpg";
import har from "../assets/harshit.jpg";

const developer = [
  {
    name: "Satakshi Suyal",
    role: "Front-end Dev",
    image: sak,
    description:
      "A passionate front-end developer with a flair for creating responsive and user-friendly interfaces.",
  },
  {
    name: "Priyanshu Sharma",
    role: "Designer",
    image: priyanshu,
    description:
      "Creative designer specializing in UI/UX, transforming ideas into visually appealing designs.",
  },
  {
    name: "Ashutosh Singh Bisht",
    role: "Backend Dev",
    image: ashu,
    description:
      "Skilled backend developer focused on building robust and scalable server-side applications.",
  },
  {
    name: "Aakash Joshi",
    role: "Front-end Dev",
    image: aak,
    description:
      "Enthusiastic front-end developer dedicated to optimizing web applications for speed and efficiency.",
  },
  {
    name: "Harshit Joshi",
    role: "Front-end Dev",
    image: har,
    description:
      "Innovative front-end developer who loves coding elegant interfaces and enhancing user experiences.",
  },
  {
    name: "Anukarti Kapil",
    role: "Designer",
    image: anu,
    description:
      "Detail-oriented designer passionate about crafting intuitive and engaging digital experiences.",
  },
];

export default function DeveloperCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPartners = developer.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPartners);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalPartners) % totalPartners
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#0a0a2a] text-white min-h-screen flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold mb-2 text-center">Celestial Odyssey</h2>
      <h3 className="text-3xl font-light italic mb-12 text-blue-300">Team</h3>

      <div className="relative w-[80vw] max-w-7xl">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            className="flex space-x-4"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            {[...Array(4)].map((_, i) => {
              const partnerIndex = (currentIndex + i) % totalPartners;
              const partner = developer[partnerIndex];
              return (
                <motion.div
                  key={i}
                  className="relative group overflow-hidden rounded-lg w-[20vw] h-[30vw]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <h4 className="text-lg font-semibold">{partner.name}</h4>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="text-lg font-semibold mb-2">
                      {partner.name}
                    </h4>
                    <p className="text-sm text-blue-200 mb-2">{partner.role}</p>
                    <p className="text-xs text-center">{partner.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex space-x-2 mt-8">
        {developer.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
