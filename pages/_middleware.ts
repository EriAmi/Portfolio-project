import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "../lib/server/callAPI";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  //if (pathname === "/api/auth/verifytoken") return NextResponse.next();
  if (pathname.startsWith("/api/")) return validateAPI(req, pathname);
  return validateRoute(req, pathname);
}
function validateAPI(req: NextRequest, pathname: string): NextResponse {
  return NextResponse.next();
}

function validateRoute(req: NextRequest, pathname: string): NextResponse {
  if (pathname === "/login" || pathname === "/register") return NextResponse.next();
  const token = req.cookies["authToken"];
  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
  verifyToken(token)
    .then((tokenIsValid) => {
      if (!tokenIsValid) return NextResponse.redirect("/login");
      return NextResponse.next();
    })
    .catch((error) => {
      return NextResponse.redirect("/login");
    });

  return NextResponse.next();
}
