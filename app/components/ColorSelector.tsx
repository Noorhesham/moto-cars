"use client";

import { useState } from "react";
import Image from "next/image";
import { SkewedButton } from "./ButtonCustom";
import MaxWidthWrapper from "./MaxWidthWrapper";

interface Color {
  color: string;
  image: string;
}

interface ColorSelectorProps {
  title: string;
  colors: Color[];
  leafletUrl?: string;
  stats: {
    prefix: string;
    number: string;
    specialWord: string;
    unit: string;
  }[];
}

export default function ColorSelector({ title, colors, leafletUrl, stats }: ColorSelectorProps) {
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <div className="bg-white text-black ">
      <MaxWidthWrapper className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-4">
          {" "}
          <div className="flex flex-col gap-y-6">
            {" "}
            <div className="mb-4">
              <span className="special border-b border-black">OVERVIEW</span>
            </div>{" "}
            <h2 className="text-5xl font-bold mb-12">{title}</h2>
            <div className="">
              <div className="border flex gap-x-4 px-5 py-4">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    className={`w-12 h-12 flex items-center p-1  duration-150 justify-center ${
                      selectedColor === index ? "border-2 border-gray-400" : ""
                    }`}
                    onClick={() => setSelectedColor(index)}
                    aria-label={`Select color ${index + 1}`}
                  >
                    <div className="w-full h-full" style={{ backgroundColor: color.color }} />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="flex gap-4">
                <SkewedButton className=" !text-black">FIND A DEALER</SkewedButton>
                {leafletUrl && <SkewedButton className="!before:bg-gray-100 !text-black">LEAFLET</SkewedButton>}
              </div>
            </div>
          </div>
          <div className="relative w-full h-[500px]">
            <Image
              src={colors[selectedColor]?.image || "/placeholder.svg"}
              alt="Product color"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>{" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-x-12 gap-y-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col justify-center items-center gap-y-2 bg-white p-8 shadow-2xl">
              <div className="flex items-end gap-2">
                <span className="text-[#a8daec] text-5xl font-bold ">
                  {stat.prefix && <span className="text-2xl font-bold">{stat.prefix}</span>}
                  {stat.number}
                </span>
                {stat.unit && <span className="text-black text-2xl ml-2">{stat.unit}</span>}
              </div>
              <div className="font-semibold text-[#333333]">{stat.specialWord}</div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
