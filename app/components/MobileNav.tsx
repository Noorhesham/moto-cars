"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { logos, vehicleCategories, business, discover } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [showVehicles, setShowVehicles] = React.useState(false);
  const [showBusiness, setShowBusiness] = React.useState(false);
  const [showDiscover, setShowDiscover] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setShowVehicles(false);
    setShowBusiness(false);
    setShowDiscover(false);
  };

  const handleVehiclesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowVehicles(true);
    setShowBusiness(false);
    setShowDiscover(false);
  };

  const handleBusinessClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowBusiness(true);
    setShowVehicles(false);
    setShowDiscover(false);
  };

  const handleDiscoverClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDiscover(true);
    setShowVehicles(false);
    setShowBusiness(false);
  };

  const handleBackClick = () => {
    setShowVehicles(false);
    setShowBusiness(false);
    setShowDiscover(false);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  const vehiclesVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  return (
    <div className="relative xl:hidden">
      <Button variant="ghost" size="icon" onClick={handleToggle} className="xl:hidden">
        <svg
          width="24"
          height="24"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
        >
          <path
            d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
        <span className="sr-only">Toggle menu</span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 mt-2 w-[97vw] bg-white shadow-lg z-50"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <nav className="py-1">
              <Link
                href="/vehicles"
                onClick={handleVehiclesClick}
                className="flex items-center justify-between px-4 py-2 text-sm text-gray-900 font-semibold hover:bg-gray-100"
              >
                Vehicles
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/business"
                onClick={handleBusinessClick}
                className="flex items-center justify-between px-4 py-2 text-sm text-gray-900 font-semibold hover:bg-gray-100"
              >
                Business
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/discover"
                onClick={handleDiscoverClick}
                className="flex items-center justify-between px-4 py-2 text-sm text-gray-900 font-semibold hover:bg-gray-100"
              >
                Discover
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/partnership"
                className="block px-4 py-2 text-sm text-gray-900 font-semibold hover:bg-gray-100"
              >
                Partnership & Testimonials
              </Link>
              <Link href="/contacts" className="block px-4 py-2 text-sm text-gray-900 font-semibold hover:bg-gray-100">
                Contacts
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showVehicles && (
          <motion.div
            className="absolute right-0 mt-2 w-[97vw] max-h-[500px] overflow-y-scroll bg-white shadow-lg z-50"
            variants={vehiclesVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="py-1">
              <div className="flex items-center px-4 py-2 border-b border-gray-200">
                <Button variant="ghost" onClick={handleBackClick} className="mr-2 text-black">
                  <ArrowLeft className="h-5 w-5 mr-1" />
                </Button>
                <img src={logos[0] || "/placeholder.svg"} alt="E-MOTO" className="h-6 mx-auto" />
              </div>
              {Object.entries(vehicleCategories).map(([category, vehicles], i) => (
                <div key={category} className="flex flex-col p-6 items-center border-black border-b last:mb-0">
                  <div className="w-full justify-center flex items-center">
                    <img src={`${logos[i]}`} alt="VMOTO" className="h-8" />
                  </div>
                  <div className="grid grid-cols-2 mx-auto px-4 w-full gap-4">
                    {vehicles.map((vehicle) => (
                      <Link
                        key={vehicle.name}
                        href={`/vehicles/${vehicle.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className="group"
                      >
                        <div className="h-[100px] w-full relative mb-2">
                          <Image
                            src={vehicle.image || "/placeholder.svg"}
                            alt={vehicle.name}
                            fill
                            className="object-contain transition-transform group-hover:scale-105"
                          />
                        </div>
                        <p className="mt-2 truncate text-sm text-center w-full font-medium uppercase">{vehicle.name}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBusiness && (
          <motion.div
            className="absolute right-0 mt-2 w-[97vw] max-h-[500px] overflow-y-scroll bg-white shadow-lg z-50"
            variants={vehiclesVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="py-1">
              <div className="flex items-center px-4 py-2 border-b border-gray-200">
                <Button variant="ghost" onClick={handleBackClick} className="mr-2 text-black">
                  <ArrowLeft className="h-5 w-5 mr-1" />
                </Button>
                <span className="text-lg font-semibold">Business</span>
              </div>
              {business.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-900 font-semibold hover:bg-gray-100"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showDiscover && (
          <motion.div
            className="absolute right-0 mt-2 w-[97vw] max-h-[500px] overflow-y-scroll bg-white shadow-lg z-50"
            variants={vehiclesVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="py-1">
              <div className="flex items-center px-4 py-2 border-b border-gray-200">
                <Button variant="ghost" onClick={handleBackClick} className="mr-2 text-black">
                  <ArrowLeft className="h-5 w-5 mr-1" />
                </Button>
                <span className="text-lg font-semibold">Discover</span>
              </div>
              {discover.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-900 font-semibold hover:bg-gray-100"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
