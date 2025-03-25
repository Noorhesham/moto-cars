import HeroBanner from "@/app/components/HeroCover";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import Business from "@/app/models/Business";
import connect from "@/app/utils/clientPromise";
import React from "react";
import TabingBusiness from "./TabingBusiness";

const page = async () => {
  await connect();
  const blogs = await Business.find({}).lean().select("-sections -updatedAt -__v");
  console.log(blogs);
  const categories = ["All", "FOOD AND EXPRESS DELIVERY", `RIDE SHARING`, `PUBLIC SERVICES`];
  return (
    <div>
      {" "}
      <HeroBanner title="Business Cases" src={"/AdobeStock_440299419.webp"} />
      <MaxWidthWrapper>
        <div className="space-y-8 w-full">
          <div className="space-y-2 w-full">
            <p className="text-sm special uppercase tracking-wider text-gray-600 border-b border-black w-fit">
              Business Cases
            </p>
            <h1 className="text-5xl font-bold tracking-tight">Business Cases</h1>
          </div>

          <div className="prose max-w-none">
            <p>
              We equip our top-performing vehicles with the best solutions tailored to each specific need. Our scooters
              are highly <strong>adaptable</strong> and can be <strong>customized</strong> to meet your exact
              requirements.
            </p>
            <p>
              <strong>Vmoto fleets</strong> are designed for <strong>maximum safety</strong> and{" "}
              <strong>performance</strong>, making them ideal for urban express deliveries,{" "}
              <strong>food delivery</strong>, <strong>ride-sharing</strong>, and perfectly suited for public and
              government agencies.
            </p>
          </div>

          <TabingBusiness businessCases={blogs} categories={categories} />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
