import React from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import AppDownlaoad from "./AppDownlaoad";
import Image from "next/image";
import { useTranslations } from "next-intl";

const VmotoApp = () => {
  const t = useTranslations("vmotoApp");

  return (
    <section className=" bg-black text-white overflow-hidden relative">
      <div className="px-4 sm:px-6 w-full">
        <MaxWidthWrapper noPadding className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MaxWidthWrapper className="flex items-center pt-8 md:pt-0">
            <div className="flex flex-col gap-8">
              <h3 className=" text-3xl lg:text-5xl font-bold">{t("title")}</h3>
              <p>{t("description")}</p>
              <AppDownlaoad />
            </div>
          </MaxWidthWrapper>
          <div className="  max-h-[450px] ">
            <Image
              src={"/Frame-1121_2024-12-11-163328_ysfv.webp"}
              className="block h-full lazy object-contain object-center w-full entered loaded "
              width={650}
              height={450}
              alt="photo"
            />
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default VmotoApp;
