"use client";
import MacacoCarousel from "@/components/macacoCarousel";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <>
      <Toaster position="top-right" richColors className="absolute" />
      <div
        className="flex justify-center items-center min-h-screen bg-cover bg-center relative xl:px-12"
        style={{ backgroundImage: 'url("/bg-home.png")' }}
      >
        <MacacoCarousel />
      </div>
    </>
  );
}
