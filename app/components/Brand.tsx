"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import MaxWidthWrapper from "./MaxWidthWrapper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SkewedButton } from "./ButtonCustom";
import styles from "../brand.module.css"; // Import as a module
import { Button } from "@/components/ui/button";
import Image from "next/image";
const ambassadors = [
  {
    name: "DUCATI CORSE",
    role: (
      <span className="text-base special w-fit border-b lowercase border-black pr-4">
        OFFICIAL ELECTRIC SCOOTER SUPPLIER 2022/2023-2024
      </span>
    ),
    description:
      "Dario Marchetti, former pro rider and Technical Director of the Ducati DRE Racetrack Academy and DRE Road.",
    image: "/ss1.webp",
  },
  {
    name: "DUCATI CORSE OFF-ROAD",
    role: (
      <span className="text-base  w-fit special border-b lowercase border-black pr-4">
        OFFICIAL ELECTRIC SCOOTER SUPPLIER 2024
      </span>
    ),
    description: "Leading expert in electric motorcycle development with over 15 years of racing experience.",
    image: "/ss3.webp",
  },
  {
    name: "JORGE LORENZO",
    role: <span className="text-base special   w-fit border-b lowercase border-black pr-4">BRAND testimonial</span>,
    description:
      "The five time MotoGp World Champion, lifestyle king, beloved and followed by more than 1.8 million followers on instagram is the company's testimonial and spokesperson for its values.",
    image: "/ss3.webp",
  },
  {
    name: "DARIO MARCHETTI",
    role: <span className="text-base  w-fit special border-b lowercase border-black pr-4">BRAND AMBASSADOR</span>,
    description:
      "Dario Marchetti, former pro rider and Technical Director of the Ducati DRE Racetrack Academy and DRE Road. ",
    image: "/ss2.webp",
  },
];

export function BrandAmbassadors() {
  //@ts-ignore
  const swiperRef = React.useRef<SwiperType>();

  return (
    <section className={`relative brand-ambassadors ${styles.brandambassadors}`}>
      <MaxWidthWrapper noPadding className="relative  flex flex-col items-end">
        <div className="relative max-w-full lg:max-w-[77rem] overflow-hidden">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            slidesPerView={1}
            spaceBetween={32}
            loop={true}
            speed={800}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="!overflow-visible !brand-ambassadors"
          >
            {ambassadors.map((ambassador, i) => (
              <SwiperSlide className=" pb-6" key={i}>
                <div className="bg-white h-full flex flex-col md:flex-row">
                  <div className="relative  h-[300px] w-full  md:h-[580px] md:w-1/2   overflow-hidden">
                    <Image
                      fill
                      src={ambassador.image || "/placeholder.svg"}
                      alt={ambassador.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="bg-white w-full  min-h-[400px] md:w-1/2  md:min-h-fit md:h-full">
                    <div className="h-full flex flex-col justify-start gap-y-6  px-0 lg:px-6 py-12 md:py-24">
                      <div className="flex flex-col gap-5 justify-center">
                        {ambassador.role}

                        <h2 className="text-3xl font-bold  md:text-5xl ">{ambassador.name}</h2>
                        <p className="text-base text-gray-900">{ambassador.description}</p>
                        <SkewedButton className="!w-fit mt-4">Learn more</SkewedButton>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
