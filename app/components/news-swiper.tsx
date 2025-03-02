"use client";

import * as React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { SkewedButton } from "./ButtonCustom";
import MaxWidthWrapper from "./MaxWidthWrapper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../HeroSlider.module.css"; // Import as a module

export function NewsSlider({ news }: { news: any }) {
  //@ts-ignore
  const swiperRef = React.useRef<SwiperType>();

  return (
    <section className={` ${styles.heroSlider} heroSlider relative py-16`}>
      <MaxWidthWrapper noPadding className="flex flex-col">
        <h3 className="special mb-2 w-fit border-b border-black text-base font-light tracking-[0.2em]">NEWS</h3>
        <h2 className=" mb-4 lg:mb-8 text-3xl lg:text-5xl font-bold">LATEST NEWS</h2>

        <div className="relative  max-w-full overflow-hidden">
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
            spaceBetween={50}
            loop={true}
            speed={800}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!overflow-visible news-slider"
          >
            {news.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="group relative   h-[450px] overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <span className="text-white text-sm">{item.date}</span>
                    <div>
                      <h3 className="text-white text-xl font-bold mb-4">{item.title}</h3>
                      <a href={item.link} className="text-white hover:underline">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-12 flex justify-start">
          <SkewedButton>READ ALL NEWS</SkewedButton>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
