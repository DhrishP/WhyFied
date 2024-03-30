import NextAuth from "next-auth";

import authConfig from "@/auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";
import { redirect } from "next/navigation";
const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth?.user;
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  if (isApiAuthRoute) {
    return;
  }
  
  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }
 
  if(!isLoggedIn && nextUrl.pathname === "/"){
    return Response.redirect(new URL("/landing-slider", nextUrl));
  }

  if (!isLoggedIn && !isPublicRoute) {
     Response.redirect(new URL("/landing-slider", nextUrl));
  }
  if (isLoggedIn && nextUrl.pathname === "/") {
    return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
      }
      

      return;
    });
// if (isLoggedIn) {
//   if (nextUrl.pathname === "/") {
//     return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
//   }
// } else {
//   if (nextUrl.pathname === "/") {
//     return Response.redirect(new URL("/landing-slider", nextUrl));
//   } else if (!isPublicRoute) {
//     return Response.redirect(new URL("/landing-slider", nextUrl));
//   }
// }

// Optionally, don't invoke Middleware on some paths

// export default function middleware(req: any) {
//   return null;
// }

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
