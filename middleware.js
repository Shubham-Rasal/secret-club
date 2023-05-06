import { NextResponse } from 'next/server.js';
import {verify} from './lib/auth.js'
export async function middleware(request) {
  // Middleware runs before the request is sent to the endpoint.
  

  const cookies = request.cookies.getAll();
  console.log("Cookies", cookies);


  //   const check = await verifyPassword("password", "hash");
  //   console.log("Check", check);

}

export const config = {
  matcher: ['/api/login', '/api/hello']
};
