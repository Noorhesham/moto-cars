import AppDownlaoad from "@/app/components/AppDownlaoad";
import Heading from "@/app/components/Heading";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { ProductFeatures } from "@/app/components/ProductFeatuers";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className=" pt-32">
      <MaxWidthWrapper className=" flex flex-col gap-4">
        <Heading text="READY FOR YOUR BUSINESS" />
        <p>
          Sharing is easier with Vmoto: our scooters can be equipped, directly at the production stage, with wiring
          compatible to your sharing platform.
        </p>
      </MaxWidthWrapper>
      <div className=" w-full h-screen relative">
        <div className="absolute  z-20  inset-0 bg-gradient-to-b from-transparent from-70% to-black to-100%"></div>
        <Image fill className="object-cover  object-center w-full h-full" src="/iot1.png" alt="" />{" "}
      </div>{" "}
      <MaxWidthWrapper className=" flex flex-col gap-4">
        <Heading text="VMOTO SMART PLATFORM" />
        <p>
          The 4G APP prepares Vmoto scooters for integration with the third-party computing ecostystem. You can receive
          your fleet solely with integration-ready wiring or already complete with IOT, programmable to your needs.
        </p>
      </MaxWidthWrapper>
      <div className=" w-full h-screen relative">
        <div className="absolute  z-20  inset-0 bg-gradient-to-b from-transparent from-70% to-black to-100%"></div>
        <Image fill className="object-cover  object-center w-full h-full" src="/iot2.png" alt="" />{" "}
        <div className="absolute  z-30 inset-x-0 bottom-24 flex items-center justify-center w-full">
          <div className="px-4 sm:px-6 w-full">
            <div className="w-full max-w-screen-xl mx-auto">
              <div className="w-full max-w-3xl">
                <div className="text-left text-white">
                  <div className="prose porse-lg max-w-none text-white">
                    <p>
                      The CAN-bus standard allows a real-time ad high transmission rate connection. Improved wiring
                      layout enables stability of the electronic control system, promoting better ride management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
      <MaxWidthWrapper className=" flex flex-col gap-4">
        <Heading text="VMOTO SHARING SOLUTIONS" />
        <p>
          We offer a comprehensive and full solution for electric moped sharing business. Our vehicles need low
          maintenance: easy dis-assembling and assembling design, anti vandalism and theft-proof solutions, special ride
          sharing features.
        </p>
      </MaxWidthWrapper>
      <div className=" w-full h-screen relative">
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent from-70% to-black to-100%"></div>
        <Image fill className="object-cover object-center w-full h-full" src="/iot3.png" alt="" />{" "}
        <div className="absolute z-30 inset-x-0 bottom-24 flex items-center justify-center w-full">
          <div className="px-4 sm:px-6 w-full">
            <div className="w-full max-w-screen-xl mx-auto">
              <div className="w-full max-w-3xl">
                <div className="text-left text-white">
                  <div className="prose porse-lg max-w-none text-white">
                    <p>
                      Vmoto APIs enable fleet vehicles to communicate easily with any IT ecosystem, thus simplifying
                      connection with the third-party app and saving a net amount of time and money.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
      <ProductFeatures />
      <div className=" py-3 bg-black">
        <MaxWidthWrapper className="flex flex-col gap-5 !text-white">
          <Heading className=" !text-white" text="VMOTO APP" />
          <img src="/Vmoto-IOT-App-Full.webp" alt="" />
          <p className=" text-white">
            Our vehicles can also be equipped with our proprietary app, which enables connection between you, your
            vehicle and the cloud in a smart and convenient way.
          </p>
          <AppDownlaoad />
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default page;
