import { BrandAmbassadors } from "@/app/components/Brand";
import Heading from "@/app/components/Heading";
import { HeroSlider } from "@/app/components/MainSlider";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import ModelCustom from "@/app/components/ModelCustom";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSlider
        propSlides={[
          {
            image: "/VMOTO-NEW-HQ.jpg",
            title: `Factory next opening`,
          },
          {
            image: "/FACTORY-2.jpg",
            title: `Factory present day`,
          },
        ]}
      />
      <MaxWidthWrapper className=" flex flex-col gap-5">
        <Heading text="OUR FACTORY: THE HEART OF ELECTRIC INNOVATION" />
        <p>
          Encompassing a sprawling 30,000 square meters in Nanjing, our <strong>state-of-the-art factory</strong> stands
          as the heart of innovation in electric motorcycles and mopeds. Here, precision meets passion, as advanced
          manufacturing technologies harmonize with a commitment to sustainability.&nbsp;
        </p>
        <p>
          From the meticulous assembly lines to the bustling research labs, every corner echoes with the hum of progress
          and the dedication of our skilled workforce. It's more than a manufacturing facility; it's a beacon of
          excellence, driving forward our mission to <strong>redefine urban mobility</strong> with eco-friendly
          solutions.
        </p>
        <p>
          At Vmoto, our mission is to <strong>lead the charge in sustainable transportation</strong> through
          cutting-edge technology, unmatched performance, and a relentless pursuit of innovation. We are dedicated to
          creating eco-friendly vehicles that not only meet but exceed the expectations of modern urban mobility,
          ensuring a cleaner, greener future for all.
        </p>
        <ModelCustom
          btn={
            <div className=" cursor-pointer w-full mt-5 relative">
              {" "}
              <div className="bg-black/40 h-full w-full inset-0 absolute" />
              <img src="/COVER-FACTORY.webp" alt="" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-gray-600/90 h-20 w-20 rounded-full flex items-center justify-center">
                  <svg
                    width={24}
                    height={24}
                    className="h-8 w-8 ml-1 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.25 5.65273C5.25 4.79705 6.1674 4.25462 6.91716 4.66698L18.4577 11.0143C19.2349 11.4417 19.2349 12.5584 18.4577 12.9858L6.91716 19.3331C6.1674 19.7455 5.25 19.203 5.25 18.3474V5.65273Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          }
          content={
            <div className="relative w-full aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/JCzmNSXWt98"
                title="Vmoto launches the new video of the factory"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          }
        />
      </MaxWidthWrapper>
      <BrandAmbassadors
        imgonly
        ambassadors={[{ image: "/fab1.webp" }, { image: "/fab2.webp" }, { image: "/fab3.webp" }]}
      />
    </div>
  );
};

export default page;
