import MacacoCarousel from "@/components/macacoCarousel";

async function getMacacos() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL || ""}/api/macacos`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Falha ao buscar os macacos");
  }

  return res.json();
}

export default async function Home() {
  const macacos = await getMacacos();

  return (
    <main className="min-h-screen bg-green-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        🐒 Bem-vindo ao Macacoverso!
      </h1>
      <MacacoCarousel macacos={macacos} />
    </main>
  );
}
