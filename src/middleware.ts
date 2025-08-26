import { NextResponse, type NextRequest } from "next/server";

// TODO: conditionally redirect based on user authentication
// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === "/about") {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
// }

// TODO: implement authentication check
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/login", request.url));
// }
// export const config = {
//   matcher: ["/about/:path*"],
// };

// TODO: set cookies and headers
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const theme = request.cookies.get("theme");
  if (!theme) {
    response.cookies.set("theme", "light");
  }
  response.headers.set("custom-header", "custom-value");
  return response;
}
