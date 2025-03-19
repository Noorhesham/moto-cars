import { CustomerSupport } from "@/app/components/CustomerSupport";
import HeroBanner from "@/app/components/HeroCover";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import UrbanForm from "@/app/components/UrbanForm";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Link href={"https://www.google.com/maps?q=37.895446746399685,32.5030517578125"}>
        <HeroBanner title=" " src="/Screenshot 2025-03-19 223017.png" />
      </Link>
     <CustomerSupport/>
    </div>
  );
};

export default page;
