import { type NextRequest, NextResponse } from "next/server";
import { adminDb } from "@/lib/firebaseAdmin";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const doc = await adminDb.collection("macacos").doc(id).get();

  if (!doc.exists) {
    return NextResponse.json(
      { error: "Macaco não encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json({ id: doc.id, ...doc.data() });
}

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  try {
    const body = await req.json();
    const { adotadoPor } = body;

    const macacoRef = adminDb.collection("macacos").doc(id);
    const doc = await macacoRef.get();

    if (!doc.exists) {
      return NextResponse.json(
        { error: "Macaco não encontrado para atualizar" },
        { status: 404 }
      );
    }

    await macacoRef.update({
      disponivel: false,
      adotadoPor: adotadoPor ?? "Desconhecido",
    });

    return NextResponse.json({ message: "Adoção registrada com sucesso!" });
  } catch (error) {
    console.error("Erro ao atualizar macaco:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar macaco" },
      { status: 500 }
    );
  }
}
