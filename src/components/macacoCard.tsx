import Image from "next/image";
import AdocaoSimbolicaModal from "./adoption";

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
      bg-white/95 rounded-2xl  p-4 
      flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2
      transition-all duration-500 max-w-[300px] min-w-[
      300px]
    `}
    >
      <div className="relative sm:w-[80%] h-24 w-30 sm:h-48 rounded-xl">
        <Image
          src={macaco.foto}
          alt={macaco.nome}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority={isActive}
        />
      </div>

      <h2 className="text-xl font-bold mt-3">{macaco.nome}</h2>
      <p className="text-gray-600 italic text-center">{macaco.especie}</p>
      <p className="text-sm mt-2 text-center">{macaco.historia}</p>
      {macaco.disponivel && <AdocaoSimbolicaModal macacoId={macaco.id} />}
    </div>
  );
}
