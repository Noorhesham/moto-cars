import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const HeroBanner = ({ src, title }: { src: string; title?: string }) => {
  return (
    <div className="relative">
      <picture className="block h-screen">
        <img
          className="lazy object-cover object-center w-full h-full entered loaded"
          alt="BANNER WEBSITE 1"
          data-sizes="auto"
          sizes="auto"
          src={src || "/BANNER-WEBSITE-1.webp"}
          data-ll-status="loaded"
        />
      </picture>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-70% to-black to-100%"></div>

      <MaxWidthWrapper noPadding className="absolute !p-0 inset-x-0 bottom-24 flex items-center justify-center w-full">
        <div className="px-4 sm:px-6 w-full">
          <div className="w-full max-w-screen-xl mx-auto">
            <div className="w-full max-w-3xl">
              <div className="text-left text-white">
                <h1 className="text-3xl md:text-5xl font-bold uppercase">{title || "Book a Test Ride"}</h1>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HeroBanner;
