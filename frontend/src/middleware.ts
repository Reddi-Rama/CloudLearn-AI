import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = [
  "/dashboard",
  "/profile",
  "/notifications",
  "/settings",
  "/certificates",
  "/payment",
];

export function middleware(
  request: NextRequest,
) {
  const token =
    request.cookies.get("token");

  const isProtected =
    protectedRoutes.some((route) =>
      request.nextUrl.pathname.startsWith(route)
    );

  if (
    isProtected &&
    !token
  ) {
    return NextResponse.redirect(
      new URL(
        "/login",
        request.url,
      ),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/notifications/:path*",
    "/settings/:path*",
    "/certificates/:path*",
    "/payment/:path*",
  ],
};