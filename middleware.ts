// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  if (request.nextUrl.pathname.startsWith("/assets/video")) {
    response.headers.set(
      "Cache-Control",
      "public, max-age=31536000, s-maxage=31536000, immutable"
    );
  }

  return response;
}

export const config = {
  matcher: "/assets/video/:path*",
};
