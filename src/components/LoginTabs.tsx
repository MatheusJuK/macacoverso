"use client";

interface LoginTabsProps {
  activeTab: boolean;
  onTabChange: (tab: boolean) => void;
}

// ToDo: Refatorar para usar o componente de botão da Shadcn
export function LoginTabs({ activeTab, onTabChange }: LoginTabsProps) {
  return (
    <div className="mt-8 w-full max-w-sm overflow-hidden rounded-md bg-gray-100 p-1 shadow-inner">
      <div className="relative flex">
        {/* Background para indicar que a tab está ativa */}
        <div
          className="absolute inset-y-0 left-0 z-0 w-1/2 transform rounded-md shadow-md transition-all duration-300 ease-out"
          style={{
            transform: `translateX(${activeTab === true ? "0%" : "100%"})`,
          }}
        />

        {/* Botões de navegação */}
        <button
          type="button"
          onClick={() => onTabChange(true)}
          className={`relative z-10 flex-1 cursor-pointer rounded-md py-2 text-center font-medium transition-all duration-300 ${
            activeTab === true
              ? "text-white"
              : "text-gray-700 hover:text-gray-900"
          }`}
        >
          Sign Up
        </button>

        <button
          type="button"
          onClick={() => onTabChange(false)}
          className={`relative z-10 flex-1 cursor-pointer rounded-md py-2 text-center font-medium transition-all duration-300 ${
            activeTab === false
              ? "text-white"
              : "text-gray-700 hover:text-gray-900"
          }`}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
