import { type NextRequest, NextResponse } from "next/server";
import { getFirestore } from "firebase-admin/firestore";
import "@/lib/firebaseAdmin";

const db = getFirestore();

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const doc = await db.collection("macacos").doc(id).get();

  if (!doc.exists) {
    return NextResponse.json(
      { error: "Macaco não encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json({ id: doc.id, ...doc.data() });
}
