import { MainNav } from "@/app/components/MainNav";
import { Footer } from "@/app/components/Footer";

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"} className=" relative">
      <MainNav />
      {children}
      <Footer />
    </div>
  );
}
