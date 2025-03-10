"use client";
import Link from "next/link";
import * as React from "react";
import { usePathname } from "next/navigation";
import { ChevronRight, Globe, MapPin, Menu, X } from "lucide-react";
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
import { cn } from "@/lib/utils";
import VehiclesDropdown from "./VehiclesDropdown";
import { business, discover, logos, vehicleCategories } from "../constants";
import { MobileNav } from "./MobileNav";
import Language from "./Language";
import MobileOnly from "./MobileOnly";

export function MainNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const pathname = usePathname();

  return (
    <div className="  ">
      <header
        className={cn(
          `absolute left-1/2 dark -translate-x-1/2 top-10 z-50 sm:max-w-[25rem] md:max-w-6xl lg:max-w-7xl w-full bg-black/90 backdrop-blur-sm
         transition-all rounded-sm bg-black text-gray-100 shadow-md`,
          isScrolling ? "-translate-y-24" : "translate-y-0"
        )}
      >
        <div className="container flex h-20 justify-between items-center px-4">
          <div className="flex gap-4 items-center shrink-0">
            <Link href="/" className="-m-1.5 p-1.5">
              <img src="/logo.png" className="h-8 w-auto" alt="VMOTO" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex justify-end items-center w-full">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem className="!left-[-2rem]">
                  <VehiclesDropdown vehicleCategories={vehicleCategories} logos={logos} />
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Business</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[350px] gap-3 p-4 flex flex-col">
                      {business.map((item) => (
                        <ListItem key={item.title} title={item.title} href={item.href}></ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Discover</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[350px] gap-3 p-4 flex flex-col">
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

            <div className="flex items-center ml-4 space-x-1">
              <Language />
              <Button variant="ghost" size="icon">
                <MapPin className="h-5 w-5" />
                <span className="sr-only">Location</span>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <MobileOnly>
            {" "}
            <div className=" flex items-center">
              <Language />
              <MobileNav />
            </div>
          </MobileOnly>
        </div>
      </header>
    </div>
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
