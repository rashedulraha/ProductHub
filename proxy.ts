import { type NextRequest, NextResponse } from "next/server"

const protectedRoutes = ["/add-item"]
const authRoutes = ["/login"]

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const authCookie = request.cookies.get("auth")

  // Redirect to login if accessing protected routes without auth
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!authCookie) {
      const loginUrl = new URL("/login", request.url)
      loginUrl.searchParams.set("redirect", pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  // Redirect to items if authenticated user tries to access login
  if (authRoutes.some((route) => pathname.startsWith(route))) {
    if (authCookie) {
      return NextResponse.redirect(new URL("/items", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
