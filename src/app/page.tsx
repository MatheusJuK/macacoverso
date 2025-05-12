"use client";
import MacacoCarousel from "@/components/macacoCarousel";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/bg-home.jpg")' }}
    >
      <div className="backdrop-blur-sm bg-black bg-opacity-40 min-h-screen p-6">
        <h1 className="text-4xl text-white text-center font-bold mb-10 drop-shadow-md">
          Conheça os Macacos do Macacoverso 🐒
        </h1>
        <MacacoCarousel />
      </div>
    </div>
  );
}
