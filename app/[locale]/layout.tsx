import type { Metadata } from "next";
import "../globals.css";
import { MainNav } from "../components/MainNav";
import { Footer } from "../components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
export const metadata: Metadata = {
  title: "VMoto | Global leader in electric",
  description: "VMoto | Global leader in electric",
  icons: {
    icon: [
      { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { rel: "icon", url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { rel: "icon", url: "/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { rel: "apple-touch-icon", url: "/apple-icon-57x57.png", sizes: "57x57" },
      { rel: "apple-touch-icon", url: "/apple-icon-60x60.png", sizes: "60x60" },
      { rel: "apple-touch-icon", url: "/apple-icon-72x72.png", sizes: "72x72" },
      { rel: "apple-touch-icon", url: "/apple-icon-76x76.png", sizes: "76x76" },
      { rel: "apple-touch-icon", url: "/apple-icon-114x114.png", sizes: "114x114" },
      { rel: "apple-touch-icon", url: "/apple-icon-120x120.png", sizes: "120x120" },
      { rel: "apple-touch-icon", url: "/apple-icon-144x144.png", sizes: "144x144" },
      { rel: "apple-touch-icon", url: "/apple-icon-152x152.png", sizes: "152x152" },
      { rel: "apple-touch-icon", url: "/apple-icon-180x180.png", sizes: "180x180" },
    ],
    other: [{ rel: "manifest", url: "/manifest.json" }],
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await (params as any);
  unstable_setRequestLocale(locale);

  const messages = await getMessages();
  return (
    <html lang="en">
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={` antialiased`}>
          <div className=" relative">{children}</div>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
