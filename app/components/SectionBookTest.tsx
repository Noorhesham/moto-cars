import React from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Heading from "./Heading";
import { SkewedButton } from "./ButtonCustom";

const SectionBookTest = () => {
return (
    <MaxWidthWrapper className="flex lg:my-0 my-10 lg:mt-0 mt-10 flex-col gap-6 items-center">
    <Heading text="Global leader in electric mobility solutions" />
    <img src="/LOGO_VMOTO-10 (1).webp" className="w-full block h-full object-cover max-h-[450px]" alt="" />
    <p>
      As a leader in electric scooter manufacturing, we provide daily green mobility solutions for urban commuters
      and commercial operations worldwide. Plus, we always have promotions to make your switch to electric even
      easier.
    </p>
    <SkewedButton className=" mr-auto uppercase">Book A Test Ride</SkewedButton>
  </MaxWidthWrapper>
);
};

export default SectionBookTest;
