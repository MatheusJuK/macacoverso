import { NextResponse } from "next/server";
import { getFirestore } from "firebase-admin/firestore";
import "@/lib/firebaseAdmin"; // Inicialização do Admin

const db = getFirestore();

export async function GET() {
  const snapshot = await db
    .collection("macacos")
    .orderBy("createdAt", "desc")
    .get();
  const macacos = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return NextResponse.json(macacos);
}
