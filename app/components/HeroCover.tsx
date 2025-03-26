import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { SkewedButton } from "./ButtonCustom";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";

const HeroBanner = ({
  src,
  title,
  title2,
  title3,
  btns = false,
  children,
}: {
  src: string;
  title?: string;
  title2?: string;
  title3?: string;
  btns?: boolean;
  children?: React.ReactNode;
}) => {
  const locale = useLocale();
  const isRTL = locale === "ar";

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

      <MaxWidthWrapper
        noPadding
        className={` ${isRTL ? "right-10" : "left-10"} absolute !p-0 bottom-24 flex items-center justify-center w-full`}
      >
        <div className={`px-4 flex flex-col gap-5 sm:px-6 w-full ${isRTL ? "items-end" : "items-start"}`}>
          <div className="w-full max-w-screen-xl mx-auto">
            <div className={`w-full max-w-3xl ${isRTL ? "ml-auto" : "ml-auto"}`}>
              <div className={`text-white ${isRTL ? "text-right" : "text-left"}`}>
                <h1 className="text-3xl md:text-5xl text-start font-bold uppercase">{title || "Book a Test Ride"}</h1>
                <p className="text-xl font-thin mt-2">{title2}</p>
                {children && children}
              </div>
            </div>
          </div>
          {btns && (
            <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : "flex-row"}`}>
              <SkewedButton className="before:bg-white !text-black">
                <Link href={"/book-a-test-ride"}>BOOK A TEST RIDE</Link>
              </SkewedButton>
              <SkewedButton className="!text-black">
                <Link href={"/store-locator"} className="uppercase">
                  store-locator
                </Link>
              </SkewedButton>
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HeroBanner;
