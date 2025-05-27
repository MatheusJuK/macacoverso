"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { auth, db } from "@/lib/firebaseClient";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { onAuthStateChanged, type User } from "firebase/auth";

export default function Contact() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const fetchUserData = useCallback(async (currentUser: User) => {
    const userDocRef = doc(db, "users", currentUser.uid);
    const userSnap = await getDoc(userDocRef);
    if (userSnap.exists()) {
      const userData = userSnap.data();
      setNome(userData.displayName || userData.name || "");
      setEmail(userData.email || "");
    }
  }, []);

  useEffect(() => {
    if (user) {
      fetchUserData(user);
    }
  }, [user, fetchUserData]);

  const webhookURL =
    "https://discord.com/api/webhooks/1375618069484797964/IXSYXb-JLiEYHMeCE71O7JzBhLYQesZ7se7j7ZV7pexGEn30Y8UdL48LpRPaz1vtYjvm";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);

    try {
      const payload = {
        username: "Contato Macacoverso",
        embeds: [
          {
            title: "Nova mensagem de contato",
            fields: [
              { name: "Nome", value: nome || "Não informado" },
              { name: "Email", value: email || "Não informado" },
              { name: "Mensagem", value: mensagem || "Não informado" },
            ],
            color: 0x00ff00,
          },
        ],
      };

      const response = await fetch(webhookURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar mensagem");
      }

      toast.success("Mensagem enviada com sucesso!", {
        description: "Sua mensagem foi enviada e será lida em breve.",
        action: {
          label: "Fechar",
          onClick: () => toast.dismiss(),
        },
      });
      console.log("Mensagem enviada com sucesso!");

      setMensagem("");
      if (user) {
        fetchUserData(user);
      }
    } catch (err) {
      console.error(err);
      toast.error("Erro ao enviar mensagem", {
        description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
        action: {
          label: "Fechar",
          onClick: () => toast.dismiss(),
        },
      });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" richColors />

      <Card className="md:max-w-2xl max-w-[80%] mx-auto mt-[12rem] p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Contato</h1>
        <p className="mb-6 text-center">
          Quer falar algo para a equipe? Preencha abaixo:
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="nome"
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            aria-required="true"
            readOnly
          />
          <Input
            name="email"
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-required="true"
            readOnly
          />
          <Textarea
            name="mensagem"
            placeholder="Sua mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            rows={2}
            required
            className="resize-y max-h-[15rem]"
            aria-required="true"
          />
          <Button
            type="submit"
            className="w-full disabled:opacity-50"
            disabled={enviando}
            aria-busy={enviando}
          >
            {enviando ? "Enviando..." : "Enviar"}
          </Button>
        </form>
      </Card>
    </>
  );
}
