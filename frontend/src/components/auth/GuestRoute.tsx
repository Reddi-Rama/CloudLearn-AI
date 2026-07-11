import {
  NextResponse,
} from "next/server";

import type {
  NextRequest,
} from "next/server";

const protectedRoutes =
  [
    "/dashboard",
    "/profile",
    "/courses",
    "/lessons",
    "/assessments",
    "/certificates",
    "/notifications",
    "/settings",
    "/payment",
    "/programming",
  ];

export function middleware(
  request: NextRequest,
) {
  const token =
    request.cookies.get(
      "cloudlearn-token",
    );

  const path =
    request.nextUrl
      .pathname;

  const protectedRoute =
    protectedRoutes.some(
      (
        route,
      ) =>
        path.startsWith(
          route,
        ),
    );

  if (
    protectedRoute &&
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

export const config =
  {
    matcher:
      [
        "/dashboard/:path*",
        "/profile/:path*",
        "/courses/:path*",
        "/lessons/:path*",
        "/assessments/:path*",
        "/certificates/:path*",
        "/notifications/:path*",
        "/settings/:path*",
        "/payment/:path*",
        "/programming/:path*",
      ],
  };