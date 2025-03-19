import HeroBanner from "@/app/components/HeroCover";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import UrbanForm from "@/app/components/UrbanForm";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroBanner title="Become a dealer" src="/become-a-dealer.webp" />
      <MaxWidthWrapper>
        <span className="special border-b border-black text-base">Join Us</span>
        <h1 className="text-3xl md:text-5xl font-bold uppercase">A network, a way to live</h1>
        <div className="prose max-w-none">
          <p>
            65 countries, over 100,000 customers enjoying the ride and support of our ever-expanding dealer network:
            become part of the change.
          </p>
          <p>
            With Vmoto, you will have the opportunity to live an exciting personal and professional experience, joining
            a business with great potential and the prospect of making a real difference.
          </p>
        </div>
      </MaxWidthWrapper>{" "}
      <HeroBanner
        title2="Ours is a promise to the more than 1,500 dealers worldwide and more than 100,000 consumers who have already chosen us. Vmoto is constantly working to make a difference in urban commuting."
        src="/become-a-dealer-2.png"
      />
      <MaxWidthWrapper className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <h2 className="text-3xl md:text-5xl font-bold uppercase">Join the Urban Electric Revolution</h2>
        <UrbanForm />
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
