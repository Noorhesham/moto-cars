import { MainNav } from "@/app/components/MainNav";
import { Footer } from "@/app/components/Footer";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <div className=" relative">
      <MainNav />
      {children}
      <Footer />
    </div>
  );
}
