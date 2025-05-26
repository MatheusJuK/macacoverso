import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function CuriosidadesPage() {
  const curiosidades = [
    {
      titulo: "Macacos usam ferramentas",
      descricao:
        "Algumas espécies de macacos, como os macacos-prego, usam pedras para quebrar nozes e gravetos para capturar insetos.",
      imagem: "/ferramenta.png",
      alt: "Macaco-prego usando uma pedra como ferramenta",
    },
    {
      titulo: "Comunicação sofisticada",
      descricao:
        "Macacos possuem vocalizações complexas, expressões faciais e gestos para se comunicar entre si.",
      imagem: "/macacoPidao.jpg",
      alt: "Macacos comunicando-se através de gestos",
    },
    {
      titulo: "Hierarquia social",
      descricao:
        "Grupos de macacos seguem hierarquias bem definidas, com líderes que garantem a ordem e a segurança do grupo.",
      imagem: "/gorila.jpg",
      alt: "Grupo de macacos interagindo em ambiente natural",
    },
    {
      titulo: "Memória impressionante",
      descricao:
        "Alguns macacos possuem excelente memória espacial, sendo capazes de lembrar locais onde encontraram alimentos por longos períodos.",
      imagem: "/memoria.png",
      alt: "Macaco observando atentamente a floresta ao seu redor",
    },
  ];

  return (
    <>
      <main className="max-w-4xl mx-auto p-4 mt-[100px]">
        <h1 className="text-3xl font-bold mb-16 text-center">
          Curiosidades sobre Macacos
        </h1>

        <section className="grid gap-6 md:grid-cols-2">
          {curiosidades.map((curio, index) => (
            <Card
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className="hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-green-700"
            >
              <CardContent className="flex flex-col">
                <div className="relative w-full aspect-[16/12] mb-4">
                  <Image
                    src={curio.imagem}
                    alt={curio.alt}
                    fill
                    className="rounded-xl object-bottom"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>
                <h2 className="text-xl font-semibold mb-2">{curio.titulo}</h2>
                <p className="text-gray-700">{curio.descricao}</p>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </>
  );
}
