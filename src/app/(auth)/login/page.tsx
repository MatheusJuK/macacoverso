"use client";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

// Schemas
const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  senha: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

const signupSchema = z.object({
  nome: z.string().min(2, "Nome muito curto"),
  celular: z.string().min(8, "Celular inválido"),
  email: z.string().email("Email inválido"),
  senha: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

type LoginData = z.infer<typeof loginSchema>;
type SignupData = z.infer<typeof signupSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  const [firebaseError, setFirebaseError] = useState<string | null>(null);

  // Formulários separados
  const loginForm = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const signupForm = useForm<SignupData>({
    resolver: zodResolver(signupSchema),
  });

  const handleLogin = async (data: LoginData) => {
    setFirebaseError("");
    try {
      await signInWithEmailAndPassword(auth, data.email, data.senha);
      router.push("/home");
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (err: any) {
      console.error(err.message);
      setFirebaseError("Email ou senha inválidos.");
    }
  };

  const handleSignup = async (data: SignupData) => {
    setFirebaseError("");
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.senha);
      // Aqui você pode salvar nome e celular no Firestore ou localStorage
      router.push("/home");
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (err: any) {
      console.error(err.message);
      setFirebaseError("Erro ao cadastrar usuário.");
    }
  };

  return (
    <div className="flex flex-col items-center mt-20 px-4">
      <h1 className="text-2xl font-bold mb-4">
        {isSignUp ? "Criar Conta" : "Entrar"}
      </h1>

      {isSignUp ? (
        // ----------- Cadastro -----------
        <form
          onSubmit={signupForm.handleSubmit(handleSignup)}
          className="flex flex-col gap-4 w-full max-w-sm border p-6 rounded shadow"
        >
          <input
            type="text"
            placeholder="Nome"
            {...signupForm.register("nome")}
            className="border px-3 py-2 rounded"
          />
          {signupForm.formState.errors.nome && (
            <p className="text-red-500 text-sm">
              {signupForm.formState.errors.nome.message}
            </p>
          )}

          <input
            type="tel"
            placeholder="Celular"
            {...signupForm.register("celular")}
            className="border px-3 py-2 rounded"
          />
          {signupForm.formState.errors.celular && (
            <p className="text-red-500 text-sm">
              {signupForm.formState.errors.celular.message}
            </p>
          )}

          <input
            type="email"
            placeholder="Email"
            {...signupForm.register("email")}
            className="border px-3 py-2 rounded"
          />
          {signupForm.formState.errors.email && (
            <p className="text-red-500 text-sm">
              {signupForm.formState.errors.email.message}
            </p>
          )}

          <input
            type="password"
            placeholder="Senha"
            {...signupForm.register("senha")}
            className="border px-3 py-2 rounded"
          />
          {signupForm.formState.errors.senha && (
            <p className="text-red-500 text-sm">
              {signupForm.formState.errors.senha.message}
            </p>
          )}

          <Button type="submit">Cadastrar</Button>
          {firebaseError && (
            <p className="text-red-600 text-sm text-center">{firebaseError}</p>
          )}
        </form>
      ) : (
        // ----------- Login -----------
        <form
          onSubmit={loginForm.handleSubmit(handleLogin)}
          className="flex flex-col gap-4 w-full max-w-sm border p-6 rounded shadow"
        >
          <input
            type="email"
            placeholder="Email"
            {...loginForm.register("email")}
            className="border px-3 py-2 rounded"
          />
          {loginForm.formState.errors.email && (
            <p className="text-red-500 text-sm">
              {loginForm.formState.errors.email.message}
            </p>
          )}

          <input
            type="password"
            placeholder="Senha"
            {...loginForm.register("senha")}
            className="border px-3 py-2 rounded"
          />
          {loginForm.formState.errors.senha && (
            <p className="text-red-500 text-sm">
              {loginForm.formState.errors.senha.message}
            </p>
          )}

          <Button type="submit">Entrar</Button>
          {firebaseError && (
            <p className="text-red-600 text-sm text-center">{firebaseError}</p>
          )}
        </form>
      )}

      {/* Botão de alternar entre login/cadastro */}
      <Button
        variant="ghost"
        onClick={() => {
          setFirebaseError(null);
          setIsSignUp(!isSignUp);
        }}
        className="mt-4 text-sm text-blue-600 hover:underline"
      >
        {isSignUp
          ? "Já tem uma conta? Entrar"
          : "Ainda não tem conta? Cadastrar"}
      </Button>
    </div>
  );
}
