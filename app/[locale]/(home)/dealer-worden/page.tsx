import HeroBanner from "@/app/components/HeroCover";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import UrbanForm from "@/app/components/UrbanForm";
import React from "react";
import { getTranslations } from "next-intl/server";

const Page = async () => {
  const t = await getTranslations("dealer");

  return (
    <div>
      <HeroBanner title={t("hero.title")} src="/become-a-dealer.webp" />
      <MaxWidthWrapper>
        <span className="special border-b border-black text-base">{t("joinUs")}</span>
        <h1 className="text-3xl md:text-5xl font-bold uppercase">{t("networkTitle")}</h1>
        <div className="prose max-w-none">
          <p>{t("networkDescription")}</p>
          <p>{t("businessOpportunity")}</p>
        </div>
      </MaxWidthWrapper>{" "}
      <HeroBanner title={t("hero.title")} title2={t("promise")} src="/become-a-dealer-2.png" />
      <MaxWidthWrapper className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <h2 className="text-3xl md:text-5xl font-bold uppercase">{t("joinRevolution")}</h2>
        <UrbanForm />
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
