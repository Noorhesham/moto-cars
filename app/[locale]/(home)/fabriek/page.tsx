import { BrandAmbassadors } from "@/app/components/Brand";
import Heading from "@/app/components/Heading";
import { HeroSlider } from "@/app/components/MainSlider";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import ModelCustom from "@/app/components/ModelCustom";
import { VideoThumbnailModal } from "@/app/components/VideoModel";
import React from "react";
import { getTranslations } from "next-intl/server";

const page = async () => {
  const t = await getTranslations("factory");

  return (
    <div>
      <HeroSlider
        propSlides={[
          {
            image: "/VMOTO-NEW-HQ.jpg",
            title: t("slides.nextOpening"),
          },
          {
            image: "/FACTORY-2.jpg",
            title: t("slides.presentDay"),
          },
        ]}
      />
      <MaxWidthWrapper className=" flex flex-col gap-5">
        <Heading text={t("title")} />
        <p>{t("description1")}</p>
        <p>{t("description2")}</p>
        <p>{t("description3")}</p>

        <VideoThumbnailModal thumbnail="/COVER-FACTORY.webp" videoUrl="https://www.youtube.com/embed/JCzmNSXWt98" />
      </MaxWidthWrapper>
      <BrandAmbassadors
        imgonly
        ambassadors={[{ image: "/fab1.webp" }, { image: "/fab2.webp" }, { image: "/fab3.webp" }]}
      />
    </div>
  );
};

export default page;
