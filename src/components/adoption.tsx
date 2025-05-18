"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function AdocaoSimbolicaModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)} variant="default">
          Adotar simbolicamente
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Adoção Simbólica</DialogTitle>
          <DialogDescription>
            Preencha os dados para apadrinhar um dos nossos macacos resgatados
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Aqui você pode enviar para a API ou Firebase
            setOpen(false);
            alert("Obrigado pela sua adoção simbólica!");
          }}
          className="space-y-4"
        >
          <Input placeholder="Seu nome completo" required />
          <Input type="email" placeholder="Seu e-mail" required />
          <DialogFooter>
            <Button type="submit" className="w-full">
              Confirmar Adoção
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
