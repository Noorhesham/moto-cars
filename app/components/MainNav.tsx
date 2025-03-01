"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Globe, MapPin, Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import useIsMobile from "../hooks/useIsMobile";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
const logos = ["/logoveichles1.svg", "logoveichles2.svg", "logoveichles3.svg"];
const vehicleCategories = {
  "E-MOTO": [
    { name: "TC WANDERER PRO", image: "/tc-wanderer-pro.png" },
    { name: "TC MAX", image: "/tc-max.png" },
    { name: "STASH", image: "/stash.png" },
    { name: "TS STREET HUNTER PRO", image: "/ts-street-hunter.png" },
    { name: "ON-R", image: "/on-r.png" },
    { name: "OFF-R", image: "/off-r.png" },
  ],
  "E-SCOOTER": [
    { name: "CUX PRO", image: "/cux-pro.png" },
    { name: "CITI", image: "/citi.png" },
    { name: "CPX", image: "/cpx.png" },
    { name: "CPX PRO", image: "/cpx-pro.png" },
    { name: "CPX EXPLORER", image: "/cpx-explorer.png" },
  ],
  "E-FLEET": [
    { name: "VS1", image: "/vs1.png" },
    { name: "VS2 CITI", image: "/vs2-citi.png" },
    { name: "VS3", image: "/vs3.png" },
    { name: "CPX-D", image: "/cpx-d.png" },
    { name: "CUX PRO", image: "/cux-pro-fleet.png" },
  ],
};

const business = [
  {
    title: "Fleet Solutions",
    href: "/business/fleet",
    description: "Electric vehicle fleet management for businesses.",
  },
  {
    title: "Dealerships",
    href: "/business/dealerships",
    description: "Join our growing network of VMOTO dealerships.",
  },
];

const discover = [
  {
    title: "Technology",
    href: "/discover/technology",
    description: "Explore our cutting-edge electric vehicle technology.",
  },
  {
    title: "Sustainability",
    href: "/discover/sustainability",
    description: "Our commitment to a sustainable future.",
  },
];

export function MainNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const [lastScrollPosition, setLastScrollPosition] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(lastScrollPosition < window.scrollY);
      setLastScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPosition]);

  const pathname = usePathname();

  return (
    <header
      className={cn(
        `fixed left-1/2 dark -translate-x-1/2 top-10 z-50 max-w-7xl w-full bg-black/90  backdrop-blur-sm
         transition-all w-full rounded-sm bg-black text-gray-100 shadow-md`,
        isScrolling ? "-translate-y-24" : "translate-y-0"
      )}
    >
      <div className="container flex h-20 justify-between items-center px-4">
        <div className="flex gap-4 items-center shrink-0">
          <Link href="/" className=" -m-1.5 p-1.5 ">
            <img src="/logo.png" className="h-8 w-auto" alt="VMOTO" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="flex justify-end items-center w-full">
          <div className="hidden xl:flex ">
            <NavigationMenu className="hidden  lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem className="!left-[-2rem]">
                  <DropdownMenu modal={false} open={open} onOpenChange={setOpen}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setTimeout(() => setOpen(false), 300)}
                        variant="ghost"
                        size="sm"
                        className="hover:underline flex items-center gap-x-1 text-sm font-semibold leading-6"
                      >
                        Vehicles{" "}
                        <ChevronDown
                          className={`relative !bg-transparent top-[1px] ml-1 h-3 w-3 transition duration-300 
                          ${open && "rotate-180"}`}
                          aria-hidden="true"
                        />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className=" !w-[98vw] -translate-x-2 !max-w-full">
                      <div className="w-full  bg-white ">
                        {Object.entries(vehicleCategories).map(([category, vehicles], i) => (
                          <div
                            key={category}
                            className=" flex flex-col p-6 items-center border-black  border-b  last:mb-0"
                          >
                            <div className=" w-full justify-center flex items-center">
                              <img src={`${logos[i]}`} alt="VMOTO" className=" h-8" />
                            </div>
                            <div
                              className={`grid  ${
                                i === 0 ? "grid-cols-6" : "grid-cols-5"
                              } grid-cols-6 mx-auto px-4 w-full gap-4`}
                            >
                              {vehicles.map((vehicle) => (
                                <Link
                                  key={vehicle.name}
                                  href={`/vehicles/${vehicle.name.toLowerCase().replace(/\s+/g, "-")}`}
                                  className="group"
                                >
                                  <div className=" h-[100px] w-full   relative mb-2">
                                    <Image
                                      src={vehicle.image || "/placeholder.svg"}
                                      alt={vehicle.name}
                                      fill
                                      className="object-contain transition-transform group-hover:scale-105"
                                    />
                                  </div>
                                  <p className="mt-2 truncate text-sm text-center w-full font-medium uppercase">
                                    {vehicle.name}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Business</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className=" w-[350px] gap-3 p-4 flex flex-col">
                      {business.map((item) => (
                        <ListItem key={item.title} title={item.title} href={item.href}></ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Discover</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className=" w-[350px] gap-3 p-4 flex flex-col">
                      {discover.map((item) => (
                        <ListItem key={item.title} title={item.title} href={item.href}></ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/partnership" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Partnership & Testimonials
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contacts" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contacts</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex flex-1 items-center justify-end space-x-1">
              <nav className="flex items-center ">
                <Button variant="ghost" size="icon" className="">
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">Language</span>
                </Button>
                <Button variant="ghost" size="icon" className="">
                  <MapPin className="h-5 w-5" />
                  <span className="sr-only">Location</span>
                </Button>
              </nav>

              {/* Mobile Navigation */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon" className="">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full bg-black/95 ">
                  <nav className=" ">
                    <Link
                      href="/vehicles"
                      className="flex items-center  text-sm font-semibold leading-6"
                      onClick={() => setIsOpen(false)}
                    >
                      Vehicles
                    </Link>
                    <Link
                      href="/business"
                      className="flex items-center  text-sm font-semibold leading-6"
                      onClick={() => setIsOpen(false)}
                    >
                      Business
                    </Link>
                    <Link
                      href="/discover"
                      className="flex items-center  text-sm font-semibold leading-6"
                      onClick={() => setIsOpen(false)}
                    >
                      Discover
                    </Link>
                    <Link
                      href="/partnership"
                      className="flex items-center  text-sm font-semibold leading-6"
                      onClick={() => setIsOpen(false)}
                    >
                      Partnership & Testimonials
                    </Link>
                    <Link
                      href="/contacts"
                      className="flex items-center  text-sm font-semibold leading-6"
                      onClick={() => setIsOpen(false)}
                    >
                      Contacts
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
