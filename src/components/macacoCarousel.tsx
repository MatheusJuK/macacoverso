"use client";
import { useEffect, useState, useRef } from "react";
import MacacoCard from "./macacoCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import "./carousel.css";

type Macaco = {
  id: string;
  nome: string;
  especie: string;
  historia: string;
  foto: string;
  disponivel: boolean;
};

export default function MacacoCarousel() {
  const [macacos, setMacacos] = useState<Macaco[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const radius = 1000;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/macacos")
      .then((res) => res.json())
      .then((data) => setMacacos(data));
  }, []);

  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % macacos.length);
  const handlePrev = () =>
    setActiveIndex((prev) => (prev - 1 + macacos.length) % macacos.length);

  const getItemStyle = (index: number) => {
    const totalItems = macacos.length;
    const angleStep = (2 * Math.PI) / totalItems;
    const baseAngle = activeIndex * angleStep * -1;
    let itemAngle = baseAngle + index * angleStep;

    while (itemAngle > Math.PI) itemAngle -= 2 * Math.PI;
    while (itemAngle < -Math.PI) itemAngle += 2 * Math.PI;

    const zIndex = 100 - Math.abs(Math.round(itemAngle * 100));
    const opacity = Math.cos(itemAngle) * 0.5 + 0.5;

    return {
      transform: `rotateY(${itemAngle}rad) translateZ(${radius}px)`,
      zIndex,
      opacity: Math.max(0.3, opacity),
    };
  };

  return (
    <div
      className="carousel-container relative w-full mx-auto h-[600px] sm:h-[650px] md:h-[700px] px-2 sm:px-4"
      ref={containerRef}
    >
      {/* Botões mobile */}
      <div className="flex justify-between items-center mb-4 md:hidden">
        <Button
          onClick={handlePrev}
          size="icon"
          className="rounded-full bg-black/40 hover:bg-black/30 backdrop-blur-sm"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          onClick={handleNext}
          size="icon"
          className="rounded-full bg-black/40 hover:bg-black/30 backdrop-blur-sm"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Botões desktop */}
      <Button
        onClick={handlePrev}
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full z-50 bg-black/40 hover:bg-black/30 backdrop-blur-sm hidden md:block"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <div className="carousel relative w-full h-full">
        <div className="carousel-items w-full h-full">
          {macacos.map((macaco, index) => (
            <div
              key={macaco.id}
              className={`carousel-item ${
                activeIndex === index ? "active" : ""
              }`}
              style={getItemStyle(index)}
            >
              <MacacoCard macaco={macaco} isActive={activeIndex === index} />
            </div>
          ))}
        </div>

        {/* Indicadores */}
        <div className="absolute inset-x-1 bottom-4 flex justify-center gap-1.5 z-50 flex-wrap px-4 max-w-2xl mx-auto">
          {macacos.map((_, index) => (
            <Button
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              variant="outline"
              size="icon"
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 p-0 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-black scale-125"
                  : "bg-black/40 hover:bg-black/70"
              }`}
            />
          ))}
        </div>
      </div>

      <Button
        onClick={handleNext}
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full z-50 bg-black/40 hover:bg-black/30 backdrop-blur-sm hidden md:block"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
}
