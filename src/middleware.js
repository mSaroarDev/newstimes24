import CheckCookieForAuth from "./utils/MiddlewareUtility";

export default function middleware(req) {
  if (req.nextUrl.pathname.startsWith("/admin")) {
    return CheckCookieForAuth(req);
  }
}
