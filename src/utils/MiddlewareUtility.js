import { VerifyToken } from "./JWTHelper";
import { NextResponse } from "next/server";

export default async function CheckCookieForAuth(req) {
  try {
    let token = req.cookies.get("token");
    let payload = await VerifyToken(token["value"]);
    const reqHeaders = new Headers(req.headers);
    reqHeaders.set("email", payload["email"]);
    reqHeaders.set("id", payload["id"]);
    return NextResponse.next({
      request: { headers: reqHeaders },
    });
  } catch (err) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
