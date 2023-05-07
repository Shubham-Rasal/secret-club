import { sign , verify } from "@/lib/auth";
export async function POST(request) {
  const body = await request.json();
  console.log("Middleware", body);
  const { email, password } = body;
  console.log("Email", email);

  //return new jwt token
  const token = await sign({ email, password });

  request.cookies.set("jwt", token);

  const verified = await verify(token);
  console.log("Verified", verified);

  return new Response("Hello, Next.js!");
}
