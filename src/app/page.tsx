"use client";
import MacacoCarousel from "@/components/macacoCarousel";

export default function Home() {
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center relative xl:px-12"
      style={{ backgroundImage: 'url("/bg-home.png")' }}
    >
      <MacacoCarousel />
    </div>
  );
}
