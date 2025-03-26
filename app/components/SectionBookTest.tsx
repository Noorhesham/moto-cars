import React from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Heading from "./Heading";
import { SkewedButton } from "./ButtonCustom";
import { useTranslations } from "next-intl";

const SectionBookTest = () => {
  const t = useTranslations("sectionBookTest");

  return (
    <MaxWidthWrapper className="flex lg:my-0 my-10 lg:mt-0 mt-10 flex-col gap-6 items-center">
      <Heading text={t("title")} />
      <img src="/LOGO_VMOTO-10 (1).webp" className="w-full block h-full object-cover max-h-[450px]" alt="" />
      <p>{t("description")}</p>
      <SkewedButton className=" mr-auto uppercase">{t("cta")}</SkewedButton>
    </MaxWidthWrapper>
  );
};

export default SectionBookTest;
