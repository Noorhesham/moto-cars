import { BrandAmbassadors } from "@/app/components/Brand";
import Heading from "@/app/components/Heading";
import { HeroSlider } from "@/app/components/MainSlider";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import ModelCustom from "@/app/components/ModelCustom";
import { VideoThumbnailModal } from "@/app/components/VideoModel";
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

        <VideoThumbnailModal thumbnail="/COVER-FACTORY.webp" videoUrl="https://www.youtube.com/embed/JCzmNSXWt98" />
      </MaxWidthWrapper>
      <BrandAmbassadors
        imgonly
        ambassadors={[{ image: "/fab1.webp" }, { image: "/fab2.webp" }, { image: "/fab3.webp" }]}
      />
    </div>
  );
};

export default page;
