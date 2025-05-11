"use client";

import { useState } from "react";
import { auth, googleProvider } from "@/lib/firebaseClient";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  type UserCredential,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { ProjectTabs } from "@/components/ProjectTabs";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<"signup" | "signin">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleTabChange = (tab: string) => {
    if (tab === "solutions") setActiveTab("signup");
    else if (tab === "articles") setActiveTab("signin");
  };

  const handleAuth = async () => {
    try {
      let userCredential: UserCredential;

      if (activeTab === "signin") {
        userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      } else {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(userCredential.user, { displayName: name });
      }

      const token = await userCredential.user.getIdToken();
      document.cookie = `token=${token}; path=/`;
      router.push("/");
    } catch (err) {
      if (err instanceof Error) {
        alert(`Erro: ${err.message}`);
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const token = await result.user.getIdToken();
      document.cookie = `token=${token}; path=/`;
      router.push("/");
    } catch (err) {
      if (err instanceof Error) {
        alert(`Erro com Google: ${err.message}`);
      }
    }
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: "url(/macacoversoLogin.png)" }}
    >
      <div className="rounded-2xl bg-[#A97449] bg-opacity-90 p-8 shadow-2xl w-full max-w-md">
        {/* Tabs */}
        <ProjectTabs
          activeTab={activeTab === "signup" ? "solutions" : "articles"}
          onTabChange={handleTabChange}
        />

        {/* Form */}
        <div className="mt-6 space-y-4">
          {activeTab === "signup" && (
            <input
              type="text"
              placeholder="Nome"
              className="w-full rounded-xl bg-[#5D3A1A] p-3 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-green-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl bg-[#5D3A1A] p-3 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-green-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            className="w-full rounded-xl bg-[#5D3A1A] p-3 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-green-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            onClick={handleAuth}
            className="w-full rounded-xl bg-green-700 py-3 text-white font-semibold hover:bg-green-800 transition"
          >
            {activeTab === "signin" ? "Entrar" : "Cadastrar"}
          </Button>

          {/* Google Login */}
          <Button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 rounded-xl border border-white py-3 text-white hover:bg-white hover:text-[#5D3A1A] transition"
          >
            <FcGoogle className="text-xl" />
            Entrar com Google
          </Button>
        </div>
      </div>
    </div>
  );
}
