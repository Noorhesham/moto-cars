import { SkewedButton } from "@/app/components/ButtonCustom";
import HeroBanner from "@/app/components/HeroCover";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import Link from "next/link";
import React from "react";
import { getTranslations } from "next-intl/server";

const page = async () => {
  const t = await getTranslations("warranty");

  return (
    <div>
      {" "}
      <HeroBanner title={t("title")} src="/vmoto-corporate.webp" />
      <MaxWidthWrapper className="default default overflow-hidden relative">
        <div className="py-14 px-4 sm:px-6 w-full">
          <div className="w-full max-w-screen-xl mx-auto">
            <div className="flex flex-col gap-8">
              <div>
                <span className="text-base font-nebula border-b lowercase border-black pr-4">{t("subtitle")}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold uppercase">{t("heading")}</h1>
              <div className="prose max-w-none">
                <p>{t("welcome")}</p>
                <h2>{t("warrantorTitle")}</h2>
                <p>{t("warrantorIntro")}</p>
                <ul>
                  <li>{t("warrantorLocations.vmotoLimited")}</li>
                  <li>{t("warrantorLocations.vmotoInternational")}</li>
                  <li>{t("warrantorLocations.vmotoEurope")}</li>
                  <li>{t("warrantorLocations.vmotoItaly")}</li>
                </ul>
                <h2>{t("coverageTitle")}</h2>
                <p>{t("coverageDescription")}</p>
                <h2>{t("whatCoversTitle")}</h2>
                <p>{t("whatCoversDescription")}</p>
                <h3>{t("notCoveredTitle")}</h3>
                <ul>
                  <li>{t("notCoveredItems.unauthorized")}</li>
                  <li>{t("notCoveredItems.maintenance")}</li>
                  <li>{t("notCoveredItems.misuse")}</li>
                  <li>{t("notCoveredItems.altered")}</li>
                  <li>{t("notCoveredItems.incidental")}</li>
                </ul>
                <h2>{t("durationTitle")}</h2>
                <p>{t("durationIntro")}</p>
                <ul>
                  <li>{t("durationItems.general")}</li>
                  <li>{t("durationItems.battery")}</li>
                </ul>
                <h2>{t("responsibilitiesTitle")}</h2>
                <p>{t("responsibilitiesIntro")}</p>
                <ul>
                  <li>{t("responsibilitiesItems.understanding")}</li>
                  <li>{t("responsibilitiesItems.maintenance")}</li>
                  <li>{t("responsibilitiesItems.laws")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl md:text-5xl font-bold uppercase">{t("contactTitle")}</h2>
          <div className="prose max-w-none">
            <p>
              {t("contactDescription")}{" "}
              <Link href="/contacts" className="text-cyan-400 underline">
                {t("contactDescription")}
              </Link>
            </p>
          </div>
          <SkewedButton className="w-fit">
            <Link href="/contacts">{t("contactButton")}</Link>
          </SkewedButton>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
