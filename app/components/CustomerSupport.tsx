"use client";

import { motion } from "framer-motion";

import MaxWidthWrapper from "./MaxWidthWrapper";
import UrbanForm from "./UrbanForm";

export function CustomerSupport() {
  return (
    <div className="min-h-screen bg-white py-20">
      <MaxWidthWrapper>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div className="space-y-2">
              <p className="text-sm special uppercase tracking-wider text-gray-900 border-b border-black w-fit">
                CUSTOMER SUPPORT
              </p>
              <h1 className="text-5xl font-bold tracking-tight">CONNECT WITH OUR EXPERT SUPPORT</h1>
            </div>

            <div className="prose max-w-none">
              <p>
                For inquiries or further information about our cutting-edge products and services, please fill the form
                and contact directly our Customer Support, or use our listed contact details. We have a team of amazing
                humans who'd love to help you.
              </p>
              <ul className=" list-disc mt-3">
                <li>
                  General &amp; Corporate department:{" "}
                  <a className=" text-[#16a8d8] underline" href="mailto:info@vmoto.com">
                    info@vmoto.com
                  </a>
                </li>
                <li>
                  Business Cooperation department:{" "}
                  <a className=" text-[#16a8d8] underline" href="mailto:info@vmoto.com">
                    info@vmoto.com
                  </a>
                  &nbsp;&nbsp;
                </li>
                <li>
                  Marketing department:{" "}
                  <a className=" text-[#16a8d8] underline" href="mailto:marketing@vmoto.com">
                    marketing@vmoto.com
                  </a>
                </li>
                <li>
                  After Sales Service department:{" "}
                  <a className=" text-[#16a8d8] underline" href="mailto:service@vmoto.com">
                    service@vmoto.com
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          <UrbanForm />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
