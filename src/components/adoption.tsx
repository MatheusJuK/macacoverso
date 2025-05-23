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
import { useState, useEffect } from "react";
import { auth, db } from "@/lib/firebaseClient";
import { doc, getDoc, updateDoc } from "firebase/firestore";

interface Props {
  macacoId: string;
  onAdotar: (adotadoPor: string) => void;
}

export default function AdocaoSimbolicaModal({ macacoId, onAdotar }: Props) {
  const [open, setOpen] = useState(false);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const user = auth.currentUser;

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userDocRef);
        if (userSnap.exists()) {
          const userData = userSnap.data();
          setNome(userData.displayName || userData.name || "");
          setEmail(userData.email || "");
        }

        if (open) {
          fetchUserData();
        }
      }
    };

    fetchUserData();
  }, [open, user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/macacos/${macacoId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          adotadoPor: user ? user.displayName : "",
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao registrar adoção");
      }

      alert("Obrigado pela sua adoção simbólica!");
      onAdotar(user ? user.displayName || nome : "");
      setOpen(false);
    } catch (err) {
      console.error(err);
      alert("Erro ao registrar adoção.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setOpen(true)}
          variant="default"
          className="bg-[#977036] hover:bg-[#866129] font-bold py-2 px-4 rounded"
        >
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Seu nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
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
