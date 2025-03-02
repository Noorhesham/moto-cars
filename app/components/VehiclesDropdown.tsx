import { useState } from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function VehiclesDropdown({ vehicleCategories, logos }) {
  const [open, setOpen] = useState(false);
  let closeTimeout;

  return (
    <DropdownMenu modal={false} open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          onMouseEnter={() => {
            clearTimeout(closeTimeout);
            setOpen(true);
          }}
          onMouseLeave={() => {
            closeTimeout = setTimeout(() => setOpen(false), 300);
          }}
          variant="ghost"
          size="sm"
          className="hover:underline flex items-center gap-x-1 text-sm font-semibold leading-6"
        >
          Vehicles
          <ChevronDown
            className={`relative !bg-transparent top-[1px] ml-1 h-3 w-3 transition duration-300 
            ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="!w-[98vw] -translate-x-2 !max-w-full"
        onMouseEnter={() => {
          clearTimeout(closeTimeout);
          setOpen(true);
        }}
        onMouseLeave={() => {
          closeTimeout = setTimeout(() => setOpen(false), 300);
        }}
      >
        <div className="w-full bg-white">
          {Object.entries(vehicleCategories).map(([category, vehicles], i) => (
            <div key={category} className="flex flex-col p-6 items-center border-black border-b last:mb-0">
              <div className="w-full justify-center flex items-center">
                <img src={`${logos[i]}`} alt="VMOTO" className="h-8" />
              </div>
              <div className={`grid ${i === 0 ? "grid-cols-6" : "grid-cols-5"} grid-cols-6 mx-auto px-4 w-full gap-4`}>
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
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
