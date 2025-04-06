"use client";

import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { useTranslations } from "next-intl";

const socialLinks = [
  {
    icon: "/Instagram.svg",
    href: "https://www.instagram.com/vmotoksa/profilecard/?igsh=cDZoMnlycDhmcHRx",
    label: "Instagram",
  },
  { icon: "/Facebook.svg", href: "https://www.facebook.com/share/1A5hNgds3W/?mibextid=wwXIfr", label: "Facebook" },
  { icon: "/Linkedin.svg", href: "https://www.linkedin.com/company/vmoto-ksa/", label: "LinkedIn" },
  { icon: "/Youtube.svg", href: "https://www.youtube.com/@VmotoKSA", label: "YouTube" },
  { icon: "/X.svg", href: "https://x.com/vmotoksa?s=21&t=q206AU33SUUY2wDLYlGRGQ", label: "Twitter" },
];

const footerLinks = {
  Vehicles: [{ name: "fullrangevehicles", href: "/models" }],
  Company: [
    { name: "storelocator", href: "/store-locator" },
    { name: "becomeadealer", href: "/dealer-worden" },
  ],
  Services: [
    { name: "manuals", href: "/handleidingen" },
    { name: "warranty", href: "/garanties" },
    { name: "rmi", href: "/service" },
  ],
};

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-black mt-16 text-white">
      <div className="relative px-4 sm:px-6 w-full">
        <div className="w-full max-w-screen-xl mx-auto">
          {/* Newsletter Section */}
          <div className="-mt-4">
            <MaxWidthWrapper className="bg-cyan-200 w-full justify-between lg:flex-row flex-col gap-4 z-40 flex items-center p-6 text-black text-center md:text-left max-w-screen-xl mx-auto gap-y-6 md:flex-row -translate-y-1/4">
              <h3 className="special text-xl font-light tracking-[0.2em] text-black">{t("newsletter.title")}</h3>
              <div className="flex flex-col w-fit items-start gap-4">
                <div className="flex gap-2 items-center">
                  <input
                    type="email"
                    placeholder={t("newsletter.emailPlaceholder")}
                    className="border border-gray-300 px-4 py-2"
                  />
                  <button className="whitespace-nowrap inline-flex h-[42px] items-center justify-center font-medium Metropolis bg-white px-6 py-2 text-black hover:[#d4d4d4]">
                    {t("newsletter.signUp")}
                  </button>
                </div>
                <label className="flex items-center gap-2 text-base text-black Metropolis">
                  <input type="checkbox" className="rounded border-gray-300" />
                  {t("newsletter.privacyPolicy")}
                </label>
              </div>
            </MaxWidthWrapper>
          </div>

          {/* Main Footer */}
          <MaxWidthWrapper className="py-16 !pt-[-36px]">
            <div className="flex flex-col gap-y-12 md:pt-[100px]">
              {/* Top Section with Logos */}
              <div className="flex justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Vmoto</span>
                  <Image src="/logo-2.webp" alt="VMOTO" width={170} height={50} />
                </Link>
                <div className="hidden md:block">
                  <div className="flex gap-x-6">
                    <div>
                      <Image src="/footer1.svg" alt="Ducati" width={79} height={30} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-2 md:block">
                <div className="grid grid-cols-1 gap-8 pb-8 md:grid-cols-2">
                  {/* Social Icons */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      {socialLinks.map((social) => (
                        <Link key={social.label} href={social.href} className="text-sm font-semibold text-gray-100">
                          <img src={social.icon} className="h-12" alt={social.label} />
                          <span className="sr-only">{social.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Footer Links */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {Object.entries(footerLinks).map(([category, links]) => (
                      <div key={category} className="flex flex-col gap-4">
                        <h2 className="text-lg font-semibold text-cyan-200">{t(`links.${category.toLowerCase()}`)}</h2>
                        {links.map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            target={link.href.startsWith("https://swan-vmoto") ? "_blank" : ""}
                            className="text-sm text-gray-400 hover:text-white transition-colors"
                          >
                            {t(`links.${link.name}`)}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Ducati Logo */}
                <div className="flex justify-end items-end pb-8 mb-1.5 md:hidden">
                  <div className="flex flex-col items-end gap-y-6">
                    <div>
                      <Image src="/footer1.svg" alt="Ducati" width={150} height={50} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-8 flex flex-wrap gap-3 items-center justify-between border-t border-gray-800 pt-8 text-sm text-gray-400">
              <p>{t("bottomBar.copyright")}</p>
              <div className="flex gap-4">
                <Link href="/cookies-policy" className="hover:text-white">
                  {t("bottomBar.cookiePolicy")}
                </Link>
                <span>•</span>
                <Link href="/privacy-policy" className="hover:text-white">
                  {t("bottomBar.privacyPolicy")}
                </Link>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </div>
    </footer>
  );
}
