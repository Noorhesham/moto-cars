import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/components/app-sidebar";
import { Toaster } from "@/components/ui/toaster";
import { ModeToggle } from "@/app/components/mode-toggle";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import Language from "@/app/components/Language";
import { SessionProvider } from "next-auth/react";
import SessionProviderClient from "@/app/components/SessionProviderClient";

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main lang={locale} dir={locale === "en" ? "ltr" : "rtl"} className="w-full">
        <SessionProviderClient>
          <SidebarProvider>
            <Toaster /> <AppSidebar className="z-[50]" side={locale === "en" ? "left" : "right"} />
            <div className="flex w-full flex-col">
              <header className="flex h-16 shrink-0 items-center justify-between border-b px-4">
                <div className="flex items-center gap-2">
                  <SidebarTrigger className="-ml-1" />
                  <Separator orientation="vertical" className="mx-2 h-4" />
                  <h1 className="text-xl font-semibold">V-moto</h1>
                </div>
                <div className="flex items-center gap-4">
                  <ModeToggle />
                  <Language />
                </div>
              </header>
              <SidebarInset className="w-full">{children}</SidebarInset>
            </div>{" "}
          </SidebarProvider>
        </SessionProviderClient>
      </main>
    </ThemeProvider>
  );
}
