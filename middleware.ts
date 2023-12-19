import withAuth from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    if (
      req.nextUrl.pathname.startsWith("/admin") &&
      req.nextauth.token?.user?.role !== "ADMIN" &&
      req.nextauth.token?.user?.role !== "SUPER_ADMIN"
    ) {
      return NextResponse.rewrite(new URL("/denied", req.url));
    }
  },

  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/admin/:path*", "/order", "/profile", "/checkout"],
};
