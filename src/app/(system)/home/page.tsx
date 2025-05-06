"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { LogoutButton } from "@/components/LogoutButton";

export default function HomePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      /* 
      router.push("/login"); // redireciona se não estiver logado
      */
    }
  }, [loading, user]);

  if (loading) return <p>Carregando...</p>;

  return (
    <>
      <h1 className="text-center mt-20 text-2xl">Bem-vindo, {user?.email}!</h1>
      <LogoutButton />
    </>
  );
}
