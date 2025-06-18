import { type NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const { pathname } = req.nextUrl;

  const isPublic = pathname.startsWith("/login");

  if (!token && !isPublic) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  if (token && isPublic) {
    return NextResponse.redirect(new URL("/mission", req.url));
  }

  if (token) {
    try {
      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/missao",
    "/visitas",
    "/doacao",
    "/contato",
    "/curiosidades",
    "/login",
  ],
};
