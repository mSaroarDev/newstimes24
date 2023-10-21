import { CreateToken } from "./JWTHelper";

export async function TokenCookie(email, id) {
  const token = await CreateToken(email, id);
  let cookie = {
    "Set-Cookie": `token=${token}; Max-Age=7200; Secure; HttpOnly; Path=/; SameSite=Strict`,
  };

  return cookie;
}
