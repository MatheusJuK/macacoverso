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

export default function MacacoCard({ macaco }: { macaco: Macaco }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center max-w-sm mx-auto">
      <div className="relative w-full h-64 rounded-xl overflow-hidden">
        <Image
          src={macaco.foto}
          alt={macaco.nome}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>

      <h2 className="text-xl font-bold mt-2">{macaco.nome}</h2>
      <p className="text-gray-600 italic">{macaco.especie}</p>
      <p className="text-sm mt-1 text-center">{macaco.historia}</p>

      {macaco.disponivel && (
        <Button className="mt-3 bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition">
          Adote Simbolicamente
        </Button>
      )}
    </div>
  );
}
