import { BrandAmbassadors } from "@/app/components/Brand";
import Heading from "@/app/components/Heading";
import HeroBanner from "@/app/components/HeroCover";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import React from "react";
const ambassadors = [
  {
    name: "Ivan Teo",
    strong: <strong>Finance Director at Vmoto.</strong>,
    description:
      "A finance executive with over 19 years of experience in international businesses, including automotive, manufacturing, mining, and retail. A Chartered Accountant with significant Western and Asian experience. Holds a Bachelor of Commerce from the University of Adelaide. Currently responsible for financial operations and strategic financial planning at Vmoto.",
    image: "/p1.webp",
  },
  {
    name: "Martin Zhou",
    strong: <strong>Non-Executive Director at Vmoto.</strong>,
    description:
      "Experienced motorcycle industry executive with over 36 years in roles at national and international companies in China and Japan. Instrumental in Honda Japan's strategic acquisition and cooperation with China's Sundiro Group, facilitating technical and product development agreements. Graduate of Shandong University, specializing in internal combustion engines, and holds an MBA from Yamaguchi University. Currently in the role of Non-Executive Director at Vmoto.",
    image: "/p2.webp",
  },
  {
    name: "Blair Sergeant",
    strong: <strong>Non-Executive Director at Vmoto.</strong>,
    description:
      "Experienced public company executive with roles as managing director, finance director, and non-executive director across diverse industries. Chartered Secretary and Associate of the Australian Certified Practising Accountants. Holds a Bachelor of Business and Post Graduate Diploma in Corporate Administration from Curtin University. Currently in the role of Non-Executive Director at Vmoto.",
    image: "/p3.webp",
  },
  {
    name: "Aaron Kidd",
    strong: <strong>Non-Executive Director at Vmoto.</strong>,
    description: `Over 15 years in M&A and capital markets at global banks and private equity, specializing in natural resources and energy transition. Started at Goldman Sachs, led Credit Suisse's Perth office, now heads Zephyr Capital in Perth. Holds Bachelor of Laws (Hons) and Bachelor of Commerce (Hons: Corporate and Investment Finance) from University of Western Australia, with honors and academic awards. Currently in the role of Non-Executive Director at Vmoto.`,
    image: "/p4.webp",
  },
  {
    name: "Graziano Milone",
    strong: <strong>CMO &amp; President of Strategic Business Development at Vmoto.</strong>,
    description: `Over 15 years in M&A and capital markets at global banks and private equity, specializing in natural resources and energy transition. Started at Goldman Sachs, led Credit Suisse's Perth office, now heads Zephyr Capital in Perth. Holds Bachelor of Laws (Hons) and Bachelor of Commerce (Hons: Corporate and Investment Finance) from University of Western Australia, with honors and academic awards. Currently in the role of Non-Executive Director at Vmoto.`,
    image: "/p5.webp",
  },
];
const page = () => {
  return (
    <div>
      <HeroBanner title="VMOTO PEOPLE" src="/FACTORY-AT-NIGHT-2.webp" />
      <MaxWidthWrapper className="flex relative w-full  items-center flex-col gap-5">
        <div className="flex flex-col items-start gap-8">
          <Heading text="OUR MANAGEMENT TEAM" />
          <p>
            Our swift progress can be attributed to a visionary management team that excels in research and innovation.
            Comprising visionaries, creatives, entrepreneurs, and mobility enthusiasts, our team is dedicated to
            revolutionizing transportation. Their commitment to creating a sustainable lifestyle drives our focus on
            delivering top-quality and high-performance products. By prioritizing sustainability, our team ensures that
            Vmoto remains at the forefront of urban mobility, consistently pushing the boundaries of what's possible in
            electric vehicle technology.
          </p>{" "}
        </div>
        <div className=" mt-5">
          <BrandAmbassadors ambassadors={ambassadors} />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
