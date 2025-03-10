import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ar"],
  defaultLocale: "en",
  localePrefix: "always", // Ensure all routes include locale
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"], // Matches all routes except API & static files
};
