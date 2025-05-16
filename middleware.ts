import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/",
    "/((?!.+\\.[\\w]+$|_next/static|_next/image|favicon.ico).*)",
    "/api/:path*",
    "/trpc/:path*",
  ],
};

