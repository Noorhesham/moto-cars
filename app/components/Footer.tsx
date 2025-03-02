"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const socialLinks = [
  { icon: "/Instagram.svg", href: "https://www.instagram.com/vmotoofficial", label: "Instagram" },
  { icon: "/Facebook.svg", href: "https://www.facebook.com/vmotosoco", label: "Facebook" },
  { icon: "/Linkedin.svg", href: "https://www.linkedin.com/company/vmotosoco-officialpage", label: "LinkedIn" },
  { icon: "/Youtube.svg", href: "https://www.youtube.com/c/VmotoSoco", label: "YouTube" },
  { icon: "/X.svg", href: "https://x.com/vmotosoco", label: "Twitter" },
];

const footerLinks = {
  Vehicles: [{ name: "Full-range Vehicles", href: "https://vmoto.com/models" }],
  Company: [
    { name: "Store Locator", href: "https://vmoto.com/store-locator" },
    { name: "Become a dealer", href: "https://vmoto.com/become-a-dealer" },
    { name: "Investor Centre", href: "https://vmoto.com/investor-centre" },
  ],
  Services: [
    { name: "Manuals", href: "https://vmoto.com/manuels-dutilisation" },
    { name: "Warranty", href: "https://vmoto.com/garanties" },
    { name: "RMI", href: "https://swan-vmoto.softway.it/service/" },
    { name: "Content Portal", href: "https://vmoto.com/content-portal" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-black relative mt-40 text-white">
      {/* Newsletter Section */}
      <div className="-mt-4">
        <MaxWidthWrapper className="bg-cyan-200 w-full justify-between lg:flex-row flex-col gap-4 absolute -top-24 left-1/2 -translate-x-1/2 z-40 flex items-center p-6">
          <h3 className="special text-xl font-light tracking-[0.2em] text-black">JOIN THE VMOTO NEWSLETTER</h3>
          <div className="flex flex-col w-fit items-start gap-4">
            <div className="flex gap-2 items-center">
              <input type="email" placeholder="Email" className="rounded-md border border-gray-300 px-4 py-2" />
              <button className="rounded-md bg-black px-6 py-2 text-white">SIGN UP</button>
            </div>
            <label className="flex items-center gap-2 text-sm text-black">
              <input type="checkbox" className="rounded border-gray-300" />I accept the Privacy Policy
            </label>
          </div>
        </MaxWidthWrapper>
      </div>

      {/* Main Footer */}
      <MaxWidthWrapper className="py-16 !pt-32">
        <div className="flex flex-col gap-y-12 md:pt-[100px]">
          {/* Top Section with Logos */}
          <div className="flex justify-between">
            <Link href="https://vmoto.com/" className="-m-1.5 p-1.5">
              <span className="sr-only">Vmoto</span>
              <Image src="/logo.png" alt="VMOTO" width={150} height={50} />
            </Link>
            <div className="hidden md:block">
              <div className="flex gap-x-6">
                <div>
                  <Image src="/footer1.svg" alt="Ducati" width={150} height={50} />
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
                      <img src={social.icon} className="h-12 " />
                      <span className="sr-only">{social.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Footer Links */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {Object.entries(footerLinks).map(([category, links]) => (
                  <div key={category} className="flex flex-col gap-4">
                    <h2 className="text-lg font-semibold text-cyan-400">{category}</h2>
                    {links.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        target={link.href.startsWith("https://swan-vmoto") ? "_blank" : ""}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
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
          <p>© 2025 Vmoto Limited - All rights reserved</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">
              Cookie Policy
            </Link>
            <span>•</span>
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
