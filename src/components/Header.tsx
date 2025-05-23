"use client";
import { useState } from "react";
import { usePathname } from "next/navigation"; // Importa o hook usePathname do Next.js
import { Menu, X } from "lucide-react"; // ou troque por ícones que preferir
import { Button } from "./ui/button";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Obtém o caminho atual da URL

  const links = [
    { name: "Macacos", href: "/" },
    { name: "Missão", href: "/mission" },
    { name: "Doação", href: "/donations" },
    { name: "Contato", href: "/contact" },
    { name: "Curiosidades", href: "/curiosities" },
  ];

  return (
    <header className="bg-[#3b2f26] text-green-400 shadow-md fixed top-0 z-50 w-full">
      <div className="max-w-[90rem] mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">Macacoverso</h1>

        {/* Desktop menu */}
        <nav
          className="hidden md:flex gap-6"
          aria-label="Menu de navegação principal"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={
                pathname === link.href
                  ? "text-yellow-300"
                  : "hover:text-yellow-300"
              }
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile menu Button */}
        <Button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Abrir ou fechar menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav
          className="md:hidden bg-[#3b2f26] px-6 pb-4 space-y-3"
          aria-label="Menu mobile"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`block font-medium ${
                pathname === link.href
                  ? "text-yellow-300"
                  : "hover:text-yellow-300"
              }`}
              onClick={() => setMenuOpen(false)} // Fecha o menu após clique
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
