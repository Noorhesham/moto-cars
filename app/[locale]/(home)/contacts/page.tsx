import { CustomerSupport } from "@/app/components/CustomerSupport";
import HeroBanner from "@/app/components/HeroCover";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroBanner
        title="CONTACTS"
        src="/Contacts_VMOTO_2024-07-11-125955_nsje.webp"
      />
      <CustomerSupport />
    </div>
  );
};

export default page;
