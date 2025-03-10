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

export function BrandAmbassadors({ ambassadors, imgonly }: { ambassadors?: any[]; imgonly?: boolean }) {
  //@ts-ignore
  const swiperRef = React.useRef<SwiperType>();

  return (
    <section className={`relative brand-ambassadors ${styles.brandambassadors}`}>
      <MaxWidthWrapper noPadding className="relative  flex flex-col items-end">
        <div className="relative max-w-full lg:max-w-[81rem] overflow-hidden">
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
            slidesPerView={imgonly ? 2 : 1}
            spaceBetween={50}
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
                {imgonly ? (
                  <div className=" relative block overflow-hidden  h-[450px] aspect-video w-full">
                    <Image className=" object-cover" fill src={ambassador.image} alt="" />
                  </div>
                ) : (
                  <div className="bg-white h-full flex flex-col md:flex-row">
                    <div className="relative  h-[300px] w-full  md:h-[580px] md:w-1/2   overflow-hidden">
                      <Image
                        fill
                        src={ambassador.image || "/placeholder.svg"}
                        alt={ambassador.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    {
                      <div className="bg-white w-full  min-h-[400px] md:w-1/2  md:min-h-fit md:h-full">
                        <div className="h-full flex flex-col justify-start gap-y-6  px-0 lg:px-6 py-12 md:py-24">
                          <div className="flex flex-col gap-5 justify-center">
                            {ambassador.role}
                            <h2 className="text-3xl font-bold  md:text-5xl ">{ambassador.name}</h2>
                            {ambassador.strong && ambassador.strong}
                            <p className="text-base text-gray-900">{ambassador.description}</p>
                            {!ambassador.strong && <SkewedButton className="!w-fit mt-4">Learn more</SkewedButton>}
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
