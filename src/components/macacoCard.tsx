"use client";
import Image from "next/image";
import AdocaoSimbolicaModal from "./adoption";
import { useState } from "react";

type Macaco = {
  id: string;
  nome: string;
  especie: string;
  historia: string;
  foto: string;
  disponivel: boolean;
  adotadoPor: string;
};

export default function MacacoCard({
  macaco,
  isActive,
}: {
  macaco: Macaco;
  isActive?: boolean;
}) {
  const [disponivel, setDisponivel] = useState(macaco.disponivel);
  const [adotadoPor, setAdotadoPor] = useState(macaco.adotadoPor);

  const handleAdoption = (adotadoPor: string) => {
    setDisponivel(false);
    setAdotadoPor(adotadoPor);
  };

  return (
    <div
      className={`
      bg-white/95 rounded-2xl  p-4 
      flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2
      transition-all duration-500 max-w-[320px] min-w-[220px] md:min-w-[260px]
    `}
    >
      <div className="relative sm:w-[100%] h-24 w-40 sm:h-48 rounded-xl">
        <Image
          src={macaco.foto}
          alt={macaco.nome}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-xl object-top"
          priority={isActive}
        />
      </div>

      <h2 className="text-xl font-bold mt-3">{macaco.nome}</h2>
      <p className="text-gray-600 italic text-center">{macaco.especie}</p>
      <p className="text-sm mt-2 text-center">{macaco.historia}</p>
      {disponivel ? (
        <AdocaoSimbolicaModal macacoId={macaco.id} onAdotar={handleAdoption} />
      ) : (
        <p className="font-bold mt-2">
          Adotado por <br />{" "}
          <span className="text-green-600 ">{adotadoPor}</span>
        </p>
      )}
    </div>
  );
}
