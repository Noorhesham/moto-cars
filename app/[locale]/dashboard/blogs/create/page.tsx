import React from "react";
import { BlogForm } from "./BlogForm";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";

const page = () => {
  return (
    <MaxWidthWrapper>
      <BlogForm />
    </MaxWidthWrapper>
  );
};

export default page;
