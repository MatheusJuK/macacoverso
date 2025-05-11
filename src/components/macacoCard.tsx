import Image from "next/image";
import { Button } from "./ui/button";

type Macaco = {
  id: string;
  nome: string;
  especie: string;
  idade: number;
  descricao: string;
  fotoUrl: string;
};

export default function MacacoCard({ macaco }: { macaco: Macaco }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center max-w-sm mx-auto">
      <Image
        src={macaco.fotoUrl}
        alt={macaco.nome}
        width={300}
        height={300}
        className="rounded-xl object-cover"
      />
      <h2 className="text-xl font-bold mt-2">{macaco.nome}</h2>
      <p className="text-gray-600 italic">{macaco.especie}</p>
      <p className="text-sm mt-1">{macaco.descricao}</p>
      <p className="text-sm text-gray-500 mt-1">Idade: {macaco.idade} anos</p>
      <Button className="mt-3 bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition">
        Adote Simbolicamente
      </Button>
    </div>
  );
}
