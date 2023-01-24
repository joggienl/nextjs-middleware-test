import {NextResponse as NextRespons} from 'next/server';

export async function middleware() {
  return NextRespons.next();
}
