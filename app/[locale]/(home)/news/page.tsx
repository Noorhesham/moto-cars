import { SkewedButton } from "@/app/components/ButtonCustom";
import HeroBanner from "@/app/components/HeroCover";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import Blog from "@/app/models/Blog";
import connect from "@/app/utils/clientPromise";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async ({ params: { locale } }: { params: { locale: string } }) => {
  await connect();
  const blogs = await Blog.find({}).lean().select("-sections -updatedAt -__v");
  console.log(blogs);
  return (
    <div>
      {" "}
      <HeroBanner title="The Experience of Jamil" src={blogs[0].backgroundImage}>
        <Link className=" mt-4" href={`/blog/${blogs[0].title[locale]}`}>
          <SkewedButton className="!text-black">{locale === "en" ? "Read More" : "قراءة المزيد"}</SkewedButton>
        </Link>
      </HeroBanner>
      <MaxWidthWrapper className=" gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((item) => (
          <Link
            key={item._id}
            href={`/blog/${item.slug}`}
            className="group rounded-md  relative  block  h-[450px] overflow-hidden"
          >
            <Image
              src={item.backgroundImage || "/BANNER-VMOTO-APD-GOOD-DESIGN-AWARDS-5.webp"}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute  bottom-0 p-6 flex flex-col justify-between">
              <div>
                {" "}
                <span className="text-white text-sm">
                  {" "}
                  {new Date(item.createdAt).toLocaleDateString("en-US", {
                    weekday: "short", // "Mon", "Tue", etc.
                    year: "numeric", // "2024"
                    month: "short", // "Jul"
                    day: "2-digit", // "08"
                  })}
                </span>
                <h3 className="text-white text-xl font-bold mb-4">{item.title[locale]}</h3>
                <Link href={`/blog/${item.slug}`} className="text-white hover:underline">
                  Read more
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
