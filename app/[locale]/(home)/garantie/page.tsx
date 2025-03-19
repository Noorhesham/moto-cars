import { SkewedButton } from "@/app/components/ButtonCustom";
import HeroBanner from "@/app/components/HeroCover";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      {" "}
      <HeroBanner title="Warranty" src="/vmoto-corporate.webp" />
      <MaxWidthWrapper className="default default overflow-hidden relative">
        <div className="py-14 px-4 sm:px-6 w-full">
          <div className="w-full max-w-screen-xl mx-auto">
            <div className="flex flex-col gap-8">
              <div>
                <span className="text-base font-nebula border-b lowercase border-black pr-4">
                  Travel safe and secure
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold uppercase">Vmoto Warranty Information</h1>
              <div className="prose max-w-none">
                <p>
                  Welcome to the Vmoto Warranty Information page. Here you will find all the details regarding the
                  warranty coverage for your Vmoto electric scooter or motorcycle. Understanding your warranty ensures
                  you can enjoy your vehicle with peace of mind, knowing that you are covered for any manufacturing
                  defects and supported by our professional service network.
                </p>
                <h2>Who is the warrantor?</h2>
                <p>This warranty is provided by Vmoto Soco International, with headquarters located at:</p>
                <ul>
                  <li>Vmoto Limited: Level 48, 152-158 St Georges Terrace, Perth, Western Australia 6000, Australia</li>
                  <li>
                    Vmoto International: 15, Zhongxing East Road, Lishui Economic Development Zone, Lishui District,
                    Nanjing 21 1200, Jiangsu Province, China
                  </li>
                  <li>Vmoto Europe: Boekweitstraat 95-97, 2153 GK Nieuw Vennep, The Netherlands</li>
                  <li>Vmoto Italy: Viale Fratelli Casiraghi, 427, 20099 S. San Giovanni, Milan District, Italy</li>
                </ul>
                <h2>Who does this warranty cover?</h2>
                <p>
                  This warranty covers the original purchasers and subsequent owners of Vmoto electric scooters and
                  motorcycles that are imported and sold through authorized Vmoto dealers.
                </p>
                <h2>What does this warranty cover?</h2>
                <p>
                  Vmoto warrants that each product is free from defects in material and workmanship during the warranty
                  period. The warranty covers essential parts such as: battery, hub motor, frame, swing-arm, motor
                  controller, wiring, shock absorbers, brake assemblies, wheels, throttle, fairings, any
                  factory-installed accessories.
                </p>
                <h3>This warranty does not cover:</h3>
                <ul>
                  <li>Products not supplied by Vmoto or unauthorized dealers</li>
                  <li>Routine maintenance, wear and tear, and cosmetic issues</li>
                  <li>Damage caused by misuse, racing, or unauthorized modifications</li>
                  <li>Products with altered or removed identification numbers</li>
                  <li>Incidental or consequential damages (e.g., loss of time, income)</li>
                </ul>
                <h2>Duration of the warranty</h2>
                <p>The warranty period starts from the date of delivery to the original purchaser:</p>
                <ul>
                  <li>General parts: 2 years or 12,500 miles, whichever comes first</li>
                  <li>Battery: 3 years or 30,000 miles, whichever comes first</li>
                </ul>
                <h2>Owner responsibilities</h2>
                <p>Owners are responsible for:</p>
                <ul>
                  <li>Understanding and following the product manual and warranty terms</li>
                  <li>Performing recommended maintenance and servicing</li>
                  <li>Learning and obeying all relevant laws and safety practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl md:text-5xl font-bold uppercase">Contact information</h2>
          <div className="prose max-w-none">
            <p>
              For more information or to contact Vmoto, please visit this <Link href="/contacts" className=" text-cyan-400 underline">page</Link> or contact
              your nearest authorized dealer.
            </p>
          </div>
          <SkewedButton className=" w-fit">
            <Link href="/contacts">Contact Us</Link>
          </SkewedButton>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
