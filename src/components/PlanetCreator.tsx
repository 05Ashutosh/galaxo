"use client";

import { useState, useRef, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Droplets, Wind, Sun } from "lucide-react";

export default function PlanetCreator() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [planetCharacteristics, setPlanetCharacteristics] = useState({
    size: 1,
    hasWater: false,
    hasAtmosphere: false,
    atmosphereDensity: 1,
    inHabitableZone: false,
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "#000033";
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      drawStars(ctx);
    }
  }, []);

  const drawStars = (ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * ctx.canvas.width;
      const y = Math.random() * ctx.canvas.height;
      const radius = Math.random() * 1.5;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fillStyle = "white";
      ctx.fill();
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (ctx) {
      ctx.strokeStyle = "#4fd1c5";
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    }
  };

  const handleCharacteristicChange = (
    characteristic: string,
    value: number | boolean
  ) => {
    setPlanetCharacteristics((prev) => ({ ...prev, [characteristic]: value }));
  };

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
    // Implement search functionality here
  };

  const getSizeDescription = (size: number) => {
    if (size < 0.8) return "Smaller than Earth";
    if (size > 1.2) return "Larger than Earth";
    return "Similar to Earth";
  };

  const getAtmosphereDescription = (density: number) => {
    if (density < 0.8) return "Thinner than Earth's";
    if (density > 1.2) return "Thicker than Earth's";
    return "Similar to Earth's";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a2a] to-[#1a1a4a] text-white p-8 flex justify-center items-center">
      <div className="w-[80vw]">
        <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Exoplanet Creator
        </h1>
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Drawing Board */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Planet Sketch</h2>
            <div className="relative">
              <canvas
                ref={canvasRef}
                width={500}
                height={500}
                onMouseDown={startDrawing}
                onMouseUp={stopDrawing}
                onMouseMove={draw}
                className="w-full h-auto border border-gray-600 rounded-lg cursor-crosshair shadow-lg"
              />
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 p-2 rounded">
                <p className="text-sm">Click and drag to draw your planet</p>
              </div>
            </div>
          </div>

          {/* Planet Characteristics Form */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Planet Characteristics</h2>
            <div className="space-y-6 bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg">
              <div>
                <label className="block mb-2">Planet Size (Earth = 1)</label>
                <Slider
                  value={[planetCharacteristics.size]}
                  onValueChange={([value]) =>
                    handleCharacteristicChange("size", value)
                  }
                  min={0.1}
                  max={10}
                  step={0.1}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm">
                  <span>
                    {planetCharacteristics.size.toFixed(1)}x Earth's size
                  </span>
                  <span className="text-blue-300">
                    {getSizeDescription(planetCharacteristics.size)}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Droplets className="mr-2 h-5 w-5 text-blue-400" />
                  <label>Water Present</label>
                </div>
                <Switch
                  checked={planetCharacteristics.hasWater}
                  onCheckedChange={(checked) =>
                    handleCharacteristicChange("hasWater", checked)
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Wind className="mr-2 h-5 w-5 text-green-400" />
                  <label>Atmosphere Present</label>
                </div>
                <Switch
                  checked={planetCharacteristics.hasAtmosphere}
                  onCheckedChange={(checked) =>
                    handleCharacteristicChange("hasAtmosphere", checked)
                  }
                />
              </div>

              {planetCharacteristics.hasAtmosphere && (
                <div>
                  <label className="block mb-2">
                    Atmosphere Density (Earth = 1)
                  </label>
                  <Slider
                    value={[planetCharacteristics.atmosphereDensity]}
                    onValueChange={([value]) =>
                      handleCharacteristicChange("atmosphereDensity", value)
                    }
                    min={0.1}
                    max={10}
                    step={0.1}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm">
                    <span>
                      {planetCharacteristics.atmosphereDensity.toFixed(1)}x
                      Earth's atmosphere density
                    </span>
                    <span className="text-blue-300">
                      {getAtmosphereDescription(
                        planetCharacteristics.atmosphereDensity
                      )}
                    </span>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Sun className="mr-2 h-5 w-5 text-yellow-400" />
                  <label>In Habitable Zone</label>
                </div>
                <Switch
                  checked={planetCharacteristics.inHabitableZone}
                  onCheckedChange={(checked) =>
                    handleCharacteristicChange("inHabitableZone", checked)
                  }
                />
              </div>

              <div>
                <label className="block mb-2">Search Similar Planets</label>
                <div className="flex">
                  <Button
                    onClick={handleSearch}
                    className="ml-2 bg-blue-600 hover:bg-blue-700"
                  >
                    PROBE
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
