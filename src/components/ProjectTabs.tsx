"use client";

interface ProjectTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

// ToDo: Refatorar para usar o componente de botão da Shadcn
export function ProjectTabs({ activeTab, onTabChange }: ProjectTabsProps) {
  return (
    <div className="mt-8 w-full max-w-sm overflow-hidden rounded-md bg-gray-100 p-1 shadow-inner">
      <div className="relative flex">
        {/* Background para indicar que a tab está ativa */}
        <div
          className="bg-laesa absolute inset-y-0 left-0 z-0 w-1/2 transform rounded-md shadow-md transition-all duration-300 ease-out"
          style={{
            transform: `translateX(${
              activeTab === "solutions" ? "0%" : "100%"
            })`,
          }}
        />

        {/* Botões de navegação */}
        <button
          type="button"
          onClick={() => onTabChange("solutions")}
          className={`relative z-10 flex-1 cursor-pointer rounded-md py-2 text-center font-medium transition-all duration-300 ${
            activeTab === "solutions"
              ? "text-white"
              : "text-gray-700 hover:text-gray-900"
          }`}
        >
          Soluções
        </button>

        <button
          type="button"
          onClick={() => onTabChange("articles")}
          className={`relative z-10 flex-1 cursor-pointer rounded-md py-2 text-center font-medium transition-all duration-300 ${
            activeTab === "articles"
              ? "text-white"
              : "text-gray-700 hover:text-gray-900"
          }`}
        >
          Artigos
        </button>
      </div>
    </div>
  );
}
