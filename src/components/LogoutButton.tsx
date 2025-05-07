"use client";

import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
    >
      Sair
    </button>
  );
}
