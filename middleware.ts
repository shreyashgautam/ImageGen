import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/",
    "/((?!.+\\.[\\w]+$|_next/static|_next/image|favicon.ico).*)", // Protect all except static assets
    "/api/webhooks/clerk",  // Exclude this webhook route from auth protection by removing it from matcher
    "/api/:path*",          // Protect all other API routes
    "/trpc/:path*",         // Protect tRPC routes
  ].filter(path => path !== "/api/webhooks/clerk"), // Remove webhook route from matcher to make it public
};
