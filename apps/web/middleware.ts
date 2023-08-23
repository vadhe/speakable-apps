import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { supabaseKey, supabaseUrl } from '@speakable-apps/shared/supabase';

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient(
    { req: request, res: res },
    {
      supabaseKey: supabaseKey,
      supabaseUrl: supabaseUrl,
    }
  );
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (request.nextUrl.pathname === '/backoffice' && !session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  if (request.nextUrl.pathname === '/login' && session) {
    return NextResponse.redirect(new URL('/backoffice', request.url));
  }
  return res;
}

export const config = {
  matcher: ['/login/:path*', '/backoffice/:path*'],
};
