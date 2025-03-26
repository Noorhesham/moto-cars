import { BrandAmbassadors } from "@/app/components/Brand";
import Heading from "@/app/components/Heading";
import HeroBanner from "@/app/components/HeroCover";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { useTranslations } from "next-intl";
import React from "react";

const page = () => {
  const t = useTranslations("vmotoTeam");

  const ambassadors = [
    {
      name: t("ambassadors.ivanTeo.name"),
      strong: <strong>{t("ambassadors.ivanTeo.title")}</strong>,
      description: t("ambassadors.ivanTeo.description"),
      image: "/p1.webp",
    },
    {
      name: t("ambassadors.martinZhou.name"),
      strong: <strong>{t("ambassadors.martinZhou.title")}</strong>,
      description: t("ambassadors.martinZhou.description"),
      image: "/p2.webp",
    },
    {
      name: t("ambassadors.blairSergeant.name"),
      strong: <strong>{t("ambassadors.blairSergeant.title")}</strong>,
      description: t("ambassadors.blairSergeant.description"),
      image: "/p3.webp",
    },
    {
      name: t("ambassadors.aaronKidd.name"),
      strong: <strong>{t("ambassadors.aaronKidd.title")}</strong>,
      description: t("ambassadors.aaronKidd.description"),
      image: "/p4.webp",
    },
    {
      name: t("ambassadors.grazianoMilone.name"),
      strong: <strong>{t("ambassadors.grazianoMilone.title")}</strong>,
      description: t("ambassadors.grazianoMilone.description"),
      image: "/p5.webp",
    },
  ];

  return (
    <div>
      <HeroBanner title={t("heroTitle")} src="/FACTORY-AT-NIGHT-2.webp" />
      <MaxWidthWrapper className="flex relative w-full items-center flex-col gap-5">
        <div className="flex flex-col items-start gap-8">
          <Heading text={t("sectionTitle")} />
          <p>{t("description")}</p>
        </div>
        <div className="mt-5">
          <BrandAmbassadors ambassadors={ambassadors} />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
