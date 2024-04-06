// middleware.js
import { withMiddlewareAuthRequired, getSession } from '@auth0/nextjs-auth0/edge';
import { NextResponse } from 'next/server';

export const config = {
  matcher: '/dashboard/:path*',
};

export default withMiddlewareAuthRequired({
  returnTo: '/dashboard',
  // Custom middleware is provided with the `middleware` config option
  async middleware(req) { return NextResponse.next(); }
});