"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { SkewedButton } from "./ButtonCustom";
import styles from "../HeroSlider.module.css";
import { useTranslations } from "next-intl";

export function HeroSlider({ propSlides }: { propSlides?: [{ image: string; cta?: string; title: string }] }) {
  const t = useTranslations("mainSlider.slides");

  const slides = [
    {
      title: "",
      image: "/slide1.jpg",
      cta: t("slide1.cta"),
    },
    {
      title: "",
      image: "/slide2.jpg",
      cta: t("slide2.cta"),
    },
    {
      title: "",
      image: "/slide3.png",
      cta: t("slide3.cta"),
      logo: "/slide3logo.png",
      content: (
        <div>
          <div className="prose porse-lg my-4 flex flex-col items-start max-w-none text-white">
            <p className="flex flex-col items-start">{t("slide3.content.line1")}</p>
            <p className="flex flex-col items-start">{t("slide3.content.line2")}</p>
          </div>
        </div>
      ),
    },
    {
      title: "",
      image: "/slide4.jpg",
      cta: t("slide4.cta"),
      logo: "/logoslide4.png",
      content: (
        <div>
          <div className="prose porse-lg my-4 flex flex-col items-start max-w-none text-white">
            <p className="flex flex-col items-start">{t("slide4.content.line1")}</p>
            <p className="flex flex-col items-start">{t("slide4.content.line2")}</p>
          </div>
        </div>
      ),
    },
    {
      image: "/slide5.jpg",
      logo: "/logoslide5.png",
      cta: t("slide5.cta"),
      content: (
        <div>
          <div className="prose porse-lg my-4 flex flex-col items-start max-w-none text-white">
            <p className="flex flex-col items-start">{t("slide5.content.line1")}</p>
            <p className="flex flex-col items-start">{t("slide5.content.line2")}</p>
          </div>
        </div>
      ),
    },
    {
      title: t("slide6.title"),
      image: "/slide6.jpg",
      cta: t("slide6.cta"),
    },
    {
      title: t("slide8.title"),
      image: "/slide8.jpg",
      cta: t("slide8.cta"),
    },
    {
      title: t("slide9.title"),
      image: "/slide9.jpg",
      cta: t("slide9.cta"),
    },
    {
      title: t("slide10.title"),
      image: "/slide10.jpg",
      cta: t("slide10.cta"),
    },
    {
      title: t("slide11.title"),
      image: "/slide11.jpg",
      cta: t("slide11.cta"),
    },
    {
      title: t("slide12.title"),
      image: "/slide12.jpg",
      cta: t("slide12.cta"),
    },
    {
      title: t("slide13.title"),
      image: "/slide13.jpg",
      cta: t("slide13.cta"),
    },
    {
      title: t("slide14.title"),
      image: "/slide14.jpg",
      cta: t("slide14.cta"),
    },
    {
      title: t("slide15.title"),
      image: "/slide15.jpg",
      cta: t("slide15.cta"),
    },
    {
      title: t("slide16.title"),
      image: "/slide16.jpg",
      cta: t("slide16.cta"),
    },
    {
      title: t("slide17.title"),
      image: "/slide17.jpg",
      cta: t("slide17.cta"),
    },
    {
      title: t("slide19.title"),
      image: "/slide19.jpg",
      cta: t("slide19.cta"),
    },
    {
      title: t("slide20.title"),
      image: "/slide20.jpg",
      cta: t("slide20.cta"),
    },
    {
      title: t("slide21.title"),
      image: "/slide21.jpg",
      cta: t("slide21.cta"),
    },
    {
      title: t("slide22.title"),
      image: "/slide22.jpg",
      cta: t("slide22.cta"),
    },
  ];

  const slidesUsed = propSlides || slides;
  return (
    <div className={` ${styles.heroSlider}  relative heroSlider  h-[100vh] w-full`}>
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={600}
        className="h-full w-full"
      >
        {slidesUsed.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-20 left-24 flex flex-col items-start justify-center px-4 text-center">
                {slide.logo && <img className=" h-[35px]" src={slide.logo} alt="" />}
                <h1 className="mb-8 text-2xl font-bold tracking-[0.2em] text-white sm:text-4xl">{slide.title}</h1>
                {slide.content}
                {slide.cta && (
                  <SkewedButton className="group font-semibold relative   text-sm  text-black transition-transform hover:scale-105">
                    {slide.cta}
                  </SkewedButton>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
