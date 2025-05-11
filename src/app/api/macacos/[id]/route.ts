import { type NextRequest, NextResponse } from "next/server";
import { getFirestore } from "firebase-admin/firestore";
import "@/lib/firebaseAdmin";

const db = getFirestore();

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const doc = await db.collection("macacos").doc(params.id).get();

  if (!doc.exists) {
    return NextResponse.json(
      { error: "Macaco não encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json({ id: doc.id, ...doc.data() });
}
