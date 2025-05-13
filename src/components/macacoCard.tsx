import Image from "next/image";
import { Button } from "./ui/button";

type Macaco = {
  id: string;
  nome: string;
  especie: string;
  historia: string;
  foto: string;
  disponivel: boolean;
};

export default function MacacoCard({
  macaco,
  isActive,
}: {
  macaco: Macaco;
  isActive?: boolean;
}) {
  return (
    <div
      className={`
      bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 
      flex flex-col items-center w-[300px] transform -translate-x-1/2 -translate-y-1/2
      transition-all duration-500
      ${isActive ? "shadow-xl ring-2 ring-white/20" : ""}
    `}
    >
      <div className="relative w-[80%] h-48 rounded-xl overflow-hidden">
        <Image
          src={macaco.foto}
          alt={macaco.nome}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 320px"
          priority={isActive}
        />
      </div>

      <h2 className="text-xl font-bold mt-3">{macaco.nome}</h2>
      <p className="text-gray-600 italic">{macaco.especie}</p>
      <p className="text-sm mt-2 text-center line-clamp-2">{macaco.historia}</p>

      {macaco.disponivel && (
        <Button
          variant="default"
          className="mt-4 bg-green-600 hover:bg-green-700 text-white"
        >
          Adote Simbolicamente
        </Button>
      )}
    </div>
  );
}
