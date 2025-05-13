"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ou troque por ícones que preferir
import { Button } from "./ui/button";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Macacos", href: "#macacos" },
    { name: "Missão", href: "#missao" },
    { name: "Adoção", href: "#adocao" },
    { name: "Visitas", href: "#visitas" },
    { name: "Doação", href: "#doacao" },
    { name: "Contato", href: "#contato" },
    { name: "Curiosidades", href: "#curiosidades" },
  ];

  return (
    <header className="bg-[#3b2f26] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
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
              className="hover:text-yellow-300 transition-colors font-medium"
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
              className="block text-white hover:text-yellow-300 font-medium"
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
