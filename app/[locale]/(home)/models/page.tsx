"use client";
import React, { useState } from "react";
import Image from "next/image";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { vehicleCategories } from "@/app/constants";

const Page = () => {
  const [activeCategory, setActiveCategory] = useState<string>("E-MOTO");

  return (
    <div className=" pt-32">
      <MaxWidthWrapper className="container mx-auto px-4 py-12">
        {/* Categories */}
        <div className="mb-12 space-y-16">
          {Object.keys(vehicleCategories).map((category) => (
            <div key={category} className="space-y-10">
              <h2 className="text-5xl font-bold">{category}</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
                {vehicleCategories[category as keyof typeof vehicleCategories].map((product, index) => (
                  <div key={index} className="group flex flex-col items-center">
                    <div className="flex grow flex-col justify-end leading-[120%] w-[355px] text-black max-md:mt-6 max-md:pl-5">
                      <img src={product.image} alt={product.name} className="object-contain object-center w-full" />
                    </div>
                    <h3 className="mt-4 relative text-center text-sm font-mono tracking-[0.2em] group-hover:before:bg-cyan-200 before:bottom-0 before:h-[3px] before:absolute before:w-full w-fit duration-200 before:duration-200">
                      {product.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
