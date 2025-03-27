"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLocale, useTranslations } from "next-intl";

import "swiper/css";
import "swiper/css/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

// Define the product type based on your database schema
type Product = {
  _id: string;
  category: string;
  modelImage: string;
  starter: {
    name: {
      en: string;
      ar: string;
    };
  };
};

// Define props for the component
interface ModelRangeProps {
  products: Product[];
}

export function ModelRange({ products }: ModelRangeProps) {
  const t = useTranslations("modelRange");
  const [activeCategory, setActiveCategory] = React.useState<string | null>(null);
  const swiperRef = React.useRef<SwiperType>();
  const locale = useLocale();

  // Group products by category
  const productsByCategory = React.useMemo(() => {
    const grouped: Record<string, Product[]> = {};

    products.forEach((product) => {
      if (!grouped[product.category]) {
        grouped[product.category] = [];
      }
      grouped[product.category].push(product);
    });

    return grouped;
  }, [products]);

  // Set initial active category
  React.useEffect(() => {
    if (products.length > 0 && !activeCategory) {
      const categories = Object.keys(productsByCategory);
      if (categories.length > 0) {
        setActiveCategory(categories[0]);
      }
    }
  }, [products, activeCategory, productsByCategory]);

  const categories = [
    t("categories.eMoto"),
    t("categories.eScooter"),
    t("categories.eFleet"),
    t("categories.chargingSystems"),
  ];

  return (
    <section className="relative py-16">
      <MaxWidthWrapper noPadding className="flex flex-col">
        <h2 className="specail mb-5 w-fit border-b special border-input text-base font-light tracking-[0.2em]">
          {t("title")}
        </h2>
        <div className="flex items-center justify-between">
          {/* Mobile Select */}
          <div className="md:hidden w-[200px]">
            <Select value={activeCategory} onValueChange={setActiveCategory}>
              <SelectTrigger className="w-full bg-transparent border-gray-200">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(productsByCategory).map((category) => (
                  <SelectItem key={category} value={category}>
                    <span className="font-semibold">{category}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Desktop Buttons */}
          <div className="mb-12 hidden md:flex flex-wrap gap-2">
            {Object.keys(productsByCategory).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "relative px-6 py-3 text-sm transition-all",
                  "before:absolute before:inset-0 before:-skew-x-12 before:bg-gray-100",
                  "hover:before:bg-gray-200",
                  activeCategory === category && "before:bg-cyan-200 hover:before:bg-cyan-300"
                )}
              >
                <span className="relative font-semibold z-10">{category}</span>
              </button>
            ))}
          </div>

          <div className="flex gap-3">
            <Button
              size={"lg"}
              variant={"ghost"}
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-gray-100 p-6 transition-colors hover:bg-gray-200"
            >
              <ArrowLeft className="h-8 w-8" />
            </Button>
            <Button
              size={"lg"}
              variant={"ghost"}
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-gray-100 p-6 transition-colors hover:bg-gray-200"
            >
              <ArrowRight className="h-8 w-8" />
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>

      <div
        className={` 
          // productsByCategory[activeCategory]?.length > 3 ? "lg:ml-[10.5rem]" : "ml-0"
        relative  flex flex-col overflow-hidden items-end`}
      >
        <div className="relative max-w-full lg:mr-[-9rem] overflow-hidden">
          <Swiper
            modules={[Navigation, Autoplay]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            key={activeCategory}
            slidesPerView={1}
            spaceBetween={32}
            loop={productsByCategory[activeCategory]?.length > 3}
            speed={800}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView:
                  productsByCategory[activeCategory]?.length > 3 ? 3.8 : productsByCategory[activeCategory]?.length,
              },
            }}
            className="!overflow-visible"
          >
            {productsByCategory[activeCategory]?.map((product) => (
              <SwiperSlide key={product.slug}>
                <div className="group flex flex-col items-center relative">
                  <Link  href={`/product/${product.slug}`} className="w-full relative aspect-[3/2] lg:h-56 lg:aspect-square overflow-hidden">
                    <Image
                      fill
                      src={product.modelImage || "/placeholder.svg"}
                      alt={product.starter.name[locale]}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                  <h3
                    className="mt-4 relative group-hover:before:bg-cyan-200 before:bottom-0 before:h-[3px] before:absolute
                    before:w-full w-fit duration-200 text-center before:duration-200 text-center font-mono tracking-[0.2em]"
                  >
                    {product.starter.name[locale]}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
