import { verify } from "@/lib/auth";

export async function GET(request) {

  // try {

  //   const verified = await verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")
  //   console.log("Verified", verified)

  // } catch (error) {
  //     throw new Error(error)
  // }

  // console.log(process.env.NEXT_JWT_TOKEN_SECRET)

  return new Response("Hello, Next.js!");
}
