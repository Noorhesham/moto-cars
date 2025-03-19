import React from "react";
import { LoginPortal } from "./Portal";

const page = () => {
  return (
    <div
      className=" pt-20"
      style={{
        backgroundImage: `url(/background_850048-no-login.jpg)`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <LoginPortal />
    </div>
  );
};

export default page;
