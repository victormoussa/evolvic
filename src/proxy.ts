import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * Sends X-Robots-Tag on HTML navigations when ALLOW_INDEXING is not true.
 * Pair with robots.ts + metadata.robots (defense in depth).
 */
export function proxy(_request: NextRequest) {
  const response = NextResponse.next();

  if (process.env.ALLOW_INDEXING !== "true") {
    response.headers.set(
      "X-Robots-Tag",
      "noindex, nofollow, noarchive",
    );
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
