export default function ExoplanetDiscovery() {
  const methods = [
    {
      name: "Transit Method",
      description: `The Transit Method is one of the most successful ways of finding exoplanets. 
        When a planet passes (or "transits") in front of its host star as seen from Earth, 
        it blocks a small fraction of the star's light, causing a temporary dip in brightness. 
        By observing these tiny dips, astronomers can detect the presence of planets, their sizes, 
        and even estimate their atmospheres.`,
      imageUrl: "https://exoplanets.nasa.gov/internal_resources/1207",
      color: "bg-blue-100",
    },
    {
      name: "Radial Velocity Method",
      description: `This method detects exoplanets by measuring the tiny "wobbles" in a star's motion caused by the gravitational pull of an orbiting planet. 
        When a planet orbits a star, it causes the star to move slightly. 
        By observing the star's light spectrum, we can see changes in its velocity due to the planet's gravity, 
        helping us detect planets that don't cause transits.`,
      imageUrl: "https://exoplanets.nasa.gov/internal_resources/1208",
      color: "bg-green-100",
    },
    {
      name: "Direct Imaging",
      description: `Direct Imaging is an incredibly challenging technique where astronomers capture actual pictures of exoplanets. 
        Because stars are so bright, this method requires special equipment that can block out the light of the star to see the much dimmer planet. 
        It's useful for finding large planets far from their stars.`,
      imageUrl: "https://exoplanets.nasa.gov/internal_resources/1209",
      color: "bg-purple-100",
    },
    {
      name: "Gravitational Microlensing",
      description: `Microlensing occurs when a star passes in front of a more distant star and the gravitational field of the closer star bends the light from the distant one. 
        If the closer star has a planet, it can amplify the light even more. 
        This method is unique because it doesn't require the planet to orbit closely to its star.`,
      imageUrl: "https://exoplanets.nasa.gov/internal_resources/1210",
      color: "bg-yellow-100",
    },
  ];

  return (
    <div className="p-6 bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6 text-center text-blue-300">
          How Do We Find Exoplanets Today?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methods.map((method) => (
            <div
              key={method.name}
              className={`${method.color} border border-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105`}
            >
              <div className="p-4">
                <h2 className="text-xl font-medium mb-2 text-gray-800">
                  {method.name}
                </h2>
                <p className="text-sm text-gray-700 mb-4">
                  {method.description}
                </p>
                <a href={method.imageUrl} className="text-black">
                  Resource
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
