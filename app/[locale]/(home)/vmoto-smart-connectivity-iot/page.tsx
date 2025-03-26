import AppDownlaoad from "@/app/components/AppDownlaoad";
import Heading from "@/app/components/Heading";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { ProductFeatures } from "@/app/components/ProductFeatuers";
import Image from "next/image";
import React from "react";
import { getTranslations } from "next-intl/server";

const page = async () => {
  const t = await getTranslations("vmotoSmartConnectivity");

  return (
    <div className="pt-32">
      <MaxWidthWrapper className="flex flex-col gap-4">
        <Heading text={t("title")} />
        <p>{t("description")}</p>
      </MaxWidthWrapper>
      <div className="w-full h-screen relative">
        <div className="absolute z-20 inset-0 bg-gradient-to-b from-transparent from-70% to-black to-100%"></div>
        <Image fill className="object-cover object-center w-full h-full" src="/iot1.png" alt="" />
      </div>
      <MaxWidthWrapper className="flex flex-col gap-4">
        <Heading text={t("platformTitle")} />
        <p>{t("platformDescription")}</p>
      </MaxWidthWrapper>
      <div className="w-full h-screen relative">
        <div className="absolute z-20 inset-0 bg-gradient-to-b from-transparent from-70% to-black to-100%"></div>
        <Image fill className="object-cover object-center w-full h-full" src="/iot2.png" alt="" />
        <div className="absolute z-30 inset-x-0 bottom-24 flex items-center justify-center w-full">
          <div className="px-4 sm:px-6 w-full">
            <div className="w-full max-w-screen-xl mx-auto">
              <div className="w-full max-w-3xl">
                <div className="text-left text-white">
                  <div className="prose porse-lg max-w-none text-white">
                    <p>{t("canbusDescription")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MaxWidthWrapper className="flex flex-col gap-4">
        <Heading text={t("solutionsTitle")} />
        <p>{t("solutionsDescription")}</p>
      </MaxWidthWrapper>
      <div className="w-full h-screen relative">
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent from-70% to-black to-100%"></div>
        <Image fill className="object-cover object-center w-full h-full" src="/iot3.png" alt="" />
        <div className="absolute z-30 inset-x-0 bottom-24 flex items-center justify-center w-full">
          <div className="px-4 sm:px-6 w-full">
            <div className="w-full max-w-screen-xl mx-auto">
              <div className="w-full max-w-3xl">
                <div className="text-left text-white">
                  <div className="prose porse-lg max-w-none text-white">
                    <p>{t("apiDescription")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductFeatures />
      <div className="py-3 bg-black">
        <MaxWidthWrapper className="flex flex-col gap-5 !text-white">
          <Heading className="!text-white" text={t("appTitle")} />
          <img src="/Vmoto-IOT-App-Full.webp" alt="" />
          <p className="text-white">{t("appDescription")}</p>
          <AppDownlaoad />
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default page;
