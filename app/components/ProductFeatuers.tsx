"use client";

import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SkewedButton } from "./ButtonCustom";
import styles from "../brand.module.css";
const features = [
  {
    title: "Smart display",
    description: "With display protector from antivandalism",
    image: "/solutions1.png",
  },
  {
    title: "QR code position and protector",
    description: "You know the location of the vehicle at any time",
    image: "/solutions2.png",
  },
  {
    title: "Mobile Phone Carrier",
    description: "Facilitates driving even for the user who is not familiar with the roadways",
    image: "/solutions3.png",
  },
  {
    title: "5 minutes maintenance",
    description: "Patented single screw battery change for easy maintenance",
    image: "/solutions4.png",
  },
  {
    title: "Easy Repair",
    description: "The fairings can be easily removed to reach the electronic components",
    image: "/solutions5.png",
  },
  {
    title: "Latest CATL NCM lithium battery",
    description: "Adaptable to different models and with longer cycle of 1500",
    image: "/solutions6.png",
  },
  {
    title: "Special designed covers",
    description: "Protect alla the cables from vandalism",
    image: "/solutions7.png",
  },
  {
    title: "Special designed covers",
    description: "Protect alla the cables from vandalism",
    image: "/solutions8.png",
  },
  {
    title: "Special exposed frame",
    description: "Better protection of the vehicle body from fallen and breakage",
    image: "/solutions9.png",
  },
  {
    title: "Special exposed frame",
    description: "Better protection of the vehicle body from fallen and breakage",
    image: "/solutions10.png",
  },
];

export function ProductFeatures() {
  const swiperRef = React.useRef<SwiperType>();

  return (
    <section className={`relative brand-ambassadors ${styles.brandambassadors}`}>
      {" "}
      <MaxWidthWrapper>
        <div className="relative">
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
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 3.2,
                spaceBetween: 40,
              },
            }}
            loop={true}
            speed={800}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="!pb-12"
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-4">
                  <div className="relative w-full overflow-hidden !h-[400px] ">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl text-black font-bold">{feature.title}</h3>
                    <p className=" text-black">{feature.description}</p>
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
