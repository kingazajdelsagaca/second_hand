import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const i18nRouting = createMiddleware({
    locales: ["de", "pl"],
    defaultLocale: "pl",
    localeDetection: true,
  });
  const response = i18nRouting(request);

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(pl|de)/:path*"],
};
