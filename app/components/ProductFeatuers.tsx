"use client";

import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../brand.module.css";

const featureImages = [
  "/solutions1.png",
  "/solutions2.png",
  "/solutions3.png",
  "/solutions4.png",
  "/solutions5.png",
  "/solutions6.png",
  "/solutions7.png",
  "/solutions8.png",
  "/solutions9.png",
  "/solutions10.png",
];

export function ProductFeatures() {
  const t = useTranslations("productFeatures");
  const params = useParams();
  const isRTL = params.locale === "ar";
  const swiperRef = React.useRef<SwiperType>(null);

  // Get features from translations
  const features = [
    {
      title: t("features.smartDisplay.title"),
      description: t("features.smartDisplay.description"),
      image: featureImages[0],
    },
    {
      title: t("features.qrCode.title"),
      description: t("features.qrCode.description"),
      image: featureImages[1],
    },
    {
      title: t("features.mobilePhone.title"),
      description: t("features.mobilePhone.description"),
      image: featureImages[2],
    },
    {
      title: t("features.maintenance.title"),
      description: t("features.maintenance.description"),
      image: featureImages[3],
    },
    {
      title: t("features.repair.title"),
      description: t("features.repair.description"),
      image: featureImages[4],
    },
    {
      title: t("features.battery.title"),
      description: t("features.battery.description"),
      image: featureImages[5],
    },
    {
      title: t("features.covers.title"),
      description: t("features.covers.description"),
      image: featureImages[6],
    },
    {
      title: t("features.frame.title"),
      description: t("features.frame.description"),
      image: featureImages[7],
    },
  ];

  return (
    <section className={`relative brand-ambassadors ${styles.brandambassadors} ${isRTL ? "rtl" : "ltr"}`}>
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
            dir={isRTL ? "rtl" : "ltr"}
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-4">
                  <div className="relative w-full overflow-hidden !h-[400px]">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl text-black font-bold">{feature.title}</h3>
                    <p className="text-black">{feature.description}</p>
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
