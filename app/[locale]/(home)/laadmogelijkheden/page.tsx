import Heading from "@/app/components/Heading";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import VmotoBusinessModel from "@/app/components/Table";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("laadmogelijkheden");

  return (
    <div className=" pt-24">
      <VmotoBusinessModel />
      <MaxWidthWrapper>
        <Heading text={t("title")} />
        <div className=" grid gap-5 mt-5 grid-cols-3 ">
          <div className="">
            <div className=" w-full h-80 relative">
              <Image src={"/v1.jpg"} alt="" fill className={" object-cover"} />
            </div>
          </div>
          <div className="">
            <div className=" w-full h-80 relative">
              <Image src={"/v2.png"} alt="" fill className={" object-cover"} />
            </div>
          </div>
          <div className="">
            <div className=" w-full h-80 relative">
              <Image src={"/v3.jpg"} alt="" fill className={" object-cover"} />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
