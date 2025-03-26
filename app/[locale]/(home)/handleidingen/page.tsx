import HeroBanner from "@/app/components/HeroCover";
import React from "react";
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("handleidingen");

  return (
    <div>
      <HeroBanner title={t("title")} src="/vmoto-corporate.webp" />
    </div>
  );
};

export default page;
