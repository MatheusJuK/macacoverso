export const runtime = "nodejs";
import { NextResponse } from "next/server";
import "@/lib/firebaseAdmin"; // Inicialização do Admin
import { adminDb } from "@/lib/firebaseAdmin"; // Importando a instância do Firestore

export async function GET() {
  try {
    const snapshot = await adminDb.collection("macacos").get();
    const macacos = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return NextResponse.json(macacos);
  } catch (error) {
    console.error("Erro ao buscar macacos:", error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}

// export async function POST() {
//   const snapshot = await db.collection("macacos").get();

//   if (!snapshot.empty) {
//     return NextResponse.json(
//       { message: "Já existem macacos no banco. Seed não executado." },
//       { status: 400 }
//     );
//   }

//   const dados = [
//     {
//       nome: "Chico",
//       especie: "Macaco-prego",
//       foto: "https://commons.wikimedia.org/wiki/Sapajus_apella#/media/File:Cebus_apella_01.jpg",
//       historia:
//         "Resgatado de um circo onde era mantido acorrentado e forçado a fazer truques.",
//       disponivel: true,
//     },
//     {
//       nome: "Luna",
//       especie: "Mico-leão-dourado",
//       foto: "https://upload.wikimedia.org/wikipedia/commons/8/87/Golden_lion_tamarin_portrait3.jpg",
//       historia:
//         "Encontrada em uma feira ilegal de animais silvestres em São Paulo.",
//       disponivel: true,
//     },
//     {
//       nome: "Tico",
//       especie: "Bugio",
//       foto: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Alouatta_guariba.jpg",
//       historia:
//         "Sofria maus-tratos em uma casa onde era mantido como pet ilegal.",
//       disponivel: true,
//     },
//     {
//       nome: "Zeca",
//       especie: "Macaco-aranha",
//       foto: "https://commons.wikimedia.org/wiki/File:BrownSpiderMonkey_(edit2).jpg",
//       historia:
//         "Resgatado de cativeiro em péssimas condições em uma fazenda abandonada.",
//       disponivel: true,
//     },
//     {
//       nome: "Nina",
//       especie: "Macaco-narigudo",
//       foto: "https://commons.wikimedia.org/wiki/File:Proboscis_monkey_(Nasalis_larvatus)_female_Labuk_Bay.jpg",
//       historia:
//         "Foi resgatada de um zoológico clandestino no sudeste asiático.",
//       disponivel: false,
//     },
//     {
//       nome: "Kiko",
//       especie: "Sagui-de-tufo-branco",
//       foto: "https://commons.wikimedia.org/wiki/File:Common_marmoset_-_Callithrix_jacchus.jpg",
//       historia: "Recuperado de tráfico internacional de animais no aeroporto.",
//       disponivel: true,
//     },
//     {
//       nome: "Tita",
//       especie: "Uacari-branco",
//       foto: "https://commons.wikimedia.org/wiki/File:Cacajao_calvus_Amazonia_2.jpg",
//       historia:
//         "Foi encontrada faminta e machucada em uma área de desmatamento.",
//       disponivel: false,
//     },
//     {
//       nome: "Juba",
//       especie: "Mandril",
//       foto: "https://commons.wikimedia.org/wiki/File:Mandril.jpg",
//       historia:
//         "Sobreviveu a uma longa jornada ilegal por rodovias brasileiras.",
//       disponivel: true,
//     },
//     {
//       nome: "Sol",
//       especie: "Langur-dourado",
//       foto: "https://commons.wikimedia.org/wiki/File:Golden_langur.jpg",
//       historia: "Foi resgatada de um zoológico clandestino na Índia.",
//       disponivel: true,
//     },
//     {
//       nome: "Maru",
//       especie: "Macaco-de-gibraltar",
//       foto: "https://commons.wikimedia.org/wiki/File:Macaca_sylvanus,_Ouzoud_Falls,_Morocco,_20250126_1128_7323.jpg",
//       historia:
//         "Foi abandonado por traficantes de animais e resgatado por ONGs.",
//       disponivel: true,
//     },
//     {
//       nome: "Guto",
//       especie: "Macaco-veludo",
//       foto: "https://commons.wikimedia.org/wiki/File:Saimiri_sciureus_254640208.jpg",
//       historia:
//         "Mantido por anos em uma gaiola minúscula até ser resgatado pela polícia ambiental.",
//       disponivel: false,
//     },
//     {
//       nome: "Bia",
//       especie: "Colobus-preto-e-branco",
//       foto: "https://upload.wikimedia.org/wikipedia/commons/7/72/Black_and_white_colobus_monkey_%2813945312952%29.jpg",
//       historia:
//         "Ficou com sequelas após maus-tratos em um zoológico ilegal no interior.",
//       disponivel: true,
//     },
//     {
//       nome: "Rafa",
//       especie: "Dril",
//       foto: "https://commons.wikimedia.org/wiki/File:Drill_Monkey.jpg",
//       historia:
//         "Tinha sinais de desnutrição severa quando foi localizado por um biólogo voluntário.",
//       disponivel: true,
//     },
//     {
//       nome: "Lua",
//       especie: "Macaco-barrigudo",
//       foto: "https://commons.wikimedia.org/wiki/File:Lagothrix_lagotricha2.JPG",
//       historia:
//         "Vivendo em cativeiro ilegal desde bebê, foi libertada e passou por reabilitação.",
//       disponivel: false,
//     },
//     {
//       nome: "Wukong.Jr",
//       especie: "Macaco japonês",
//       foto: "https://commons.wikimedia.org/wiki/File:Macaca_fuscata_juvenile_yawning.jpg",
//       historia:
//         "Trazido ilegalmente como filhote para o Brasil, foi resgatado no litoral.",
//       disponivel: true,
//     },
//   ];

//   const batch = db.batch();
//   for (const macaco of dados) {
//     const ref = db.collection("macacos").doc();
//     batch.set(ref, macaco);
//   }

//   await batch.commit();
//   return NextResponse.json({ message: "Macacos adicionados com sucesso." });
// }
