import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const currentUrl = request.nextUrl;
  const hostHeader = request.headers.get("host") || "";
  const forwardedProto = request.headers.get("x-forwarded-proto") || "https";

  // Skip redirects in local/dev
  if (hostHeader.startsWith("localhost")) {
    return NextResponse.next();
  }

  let targetHostname = hostHeader;
  if (hostHeader === "woverasolutions.com") {
    targetHostname = "www.woverasolutions.com";
  }

  const needsProtoRedirect = forwardedProto !== "https";
  const needsHostRedirect = hostHeader !== targetHostname;

  if (needsProtoRedirect || needsHostRedirect) {
    const redirectUrl = new URL(currentUrl.href);
    redirectUrl.protocol = "https:";
    redirectUrl.hostname = targetHostname;
    return NextResponse.redirect(redirectUrl, 308);
  }

  return NextResponse.next();
}

// Run on all routes except static assets and verification files
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap|og.html|google.*\\.html|.*\\.(png|jpg|jpeg|webp|svg|gif|ico)).*)",
  ],
};
