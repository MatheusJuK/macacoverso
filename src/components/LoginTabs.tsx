"use client";

interface LoginTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

// ToDo: Refatorar para usar o componente de botão da Shadcn
export function LoginTabs({ activeTab, onTabChange }: LoginTabsProps) {
  return (
    <div className="mt-4 w-full max-w-[100%] sm:max-w-sm overflow-hidden rounded-md bg-[#A97449] p-1 shadow-inner border-2 border-black">
      <div className="relative flex">
        {/* Background para indicar que a tab está ativa */}
        <div
          className={`bg-[#5D3A1A] absolute inset-y-0 left-0 z-0 w-1/2 transform shadow-md transition-all duration-300 ease-out ${
            activeTab === "signup" ? "rounded-l-md" : "rounded-r-md"
          }`}
          style={{
            transform: `translateX(${activeTab === "signup" ? "0%" : "100%"})`,
          }}
        />

        {/* Botões de navegação */}
        <button
          type="button"
          onClick={() => onTabChange("signup")}
          className={`relative z-10 flex-1 cursor-pointer rounded-md py-2 text-center font-medium transition-all duration-300 ${
            activeTab === "signup"
              ? "text-black "
              : "text-gray-200 hover:text-gray-900 "
          }`}
        >
          SignUp
        </button>

        <button
          type="button"
          onClick={() => onTabChange("signin")}
          className={`relative z-10 flex-1 cursor-pointer rounded-md py-2 text-center font-medium transition-all duration-300 ${
            activeTab === "signin"
              ? "text-black "
              : "text-gray-200 hover:text-gray-900"
          }`}
        >
          Login
        </button>
      </div>
    </div>
  );
}
