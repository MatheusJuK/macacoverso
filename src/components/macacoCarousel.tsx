"use client";
import { useEffect, useState } from "react";
import MacacoCard from "./macacoCard";

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

  useEffect(() => {
    fetch("/api/macacos")
      .then((res) => res.json())
      .then((data) => setMacacos(data));
  }, []);

  return (
    <div className="flex justify-center gap-8 py-10 overflow-x-auto">
      {macacos.map((macaco) => (
        <MacacoCard key={macaco.id} macaco={macaco} />
      ))}
    </div>
  );
}
