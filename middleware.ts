import acceptLanguage from "accept-language";
import { NextRequest, NextResponse } from "next/server";
import { cookieName, fallbackLng, languages } from "./app/i18n/settings";
// Without a defined matcher, this one line applies next-auth
// to the entire project
export { default } from "next-auth/middleware";

// Applies next-auth only to matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/category",
    "/dashboard/contact-us",
    "/dashboard/faq",
    "/dashboard/founder-message",
    "/dashboard/packages",
    "/dashboard/products",
    "/dashboard/sub-category",
    "/dashboard/video-tutorial",
    "/dashboard/category/add-new",
    "/dashboard/contact-us/add-new",
    "/dashboard/faq/add-new",
    "/dashboard/founder-message/add-new",
    "/dashboard/packages/add-new",
    "/dashboard/products/add-new",
    "/dashboard/sub-category/add-new",
    "/dashboard/video-tutorial/add-new",
    "/((?!api|_next/image|assets|favicon.ico|sw.js).*)",
  ],
};

acceptLanguage.languages(languages);

// export const config = {
//   matcher: ["/((?!api|_next/image|assets|favicon.ico|sw.js).*)"],
// };

export function middleware(req: NextRequest) {
  let lng;
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName)?.value);
  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  if (!lng) lng = fallbackLng;

  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    );
  }

  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer") as string | URL);
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    );
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next();
}
