import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
const path = request.nextUrl.pathname;
const isPublicPath = path === "/login" || path === "/signup";

const token = request.cookies.get('token')?.value || '';

if (!token && !isPublicPath) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
}

if (token && isPublicPath) {
    const profileUrl = new URL("/profile", request.url);
    return NextResponse.redirect(profileUrl);       
}}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/',
        '/profile',
        '/profile/:path*',
        '/login',
        '/signup',
    ]
}