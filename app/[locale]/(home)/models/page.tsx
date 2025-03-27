import React from "react";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { vehicleCategories, CATEGORIESVEHICLES } from "@/app/constants";
import connect from "@/app/utils/clientPromise";
import Product from "@/app/models/Product";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

interface StaticProduct {
  name: string;
  image: string;
}

interface DBProduct {
  _id: string;
  category: string;
  modelImage: string;
  slug: string;
  starter: {
    name: {
      en: string;
      ar: string;
    };
  };
}

interface MatchedProduct extends StaticProduct {
  slug?: string;
  modelImage?: string;
  dbId?: string;
}

const Page = async () => {
  const t = await getTranslations("modelRange");
  await connect();
  const products = await Product.find({}).select("_id category modelImage starter slug").lean();
  const productsObj = JSON.parse(JSON.stringify(products)) as DBProduct[];

  // Create a map of static products with their database matches
  const matchedProducts = CATEGORIESVEHICLES.reduce((acc: Record<string, MatchedProduct[]>, category) => {
    // Get the static products for this category
    const staticProducts = vehicleCategories[category as keyof typeof vehicleCategories] || [];

    // Get the database products for this category
    const dbProducts = productsObj.filter((p) => p.category === category);

    // Match database products with static products based on name
    const matchedCategoryProducts = staticProducts.map((staticProduct) => {
      const dbMatch = dbProducts.find(
        (dbProduct) => dbProduct.starter.name.en.toLowerCase() === staticProduct.name.toLowerCase()
      );

      return dbMatch
        ? {
            ...staticProduct,
            slug: dbMatch.slug,
            modelImage: dbMatch.modelImage || staticProduct.image,
            dbId: dbMatch._id,
          }
        : staticProduct;
    });

    acc[category] = matchedCategoryProducts;
    return acc;
  }, {});

  return (
    <div className="pt-32">
      <MaxWidthWrapper className="container mx-auto px-4 py-12">
        {/* Categories */}
        <div className="mb-12 space-y-16">
          {CATEGORIESVEHICLES.map((category) => {
            const products = matchedProducts[category];
            if (!products?.length) return null;

            const categoryKey = category.toLowerCase().replace("-", "");

            return (
              <div key={category} className="space-y-10">
                <h2 className="text-5xl font-bold">{t(`categories.${categoryKey}`)}</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
                  {products.map((product: MatchedProduct, index: number) => (
                    <Link
                      href={product.slug ? `/product/${product.slug}` : "#"}
                      key={index}
                      className="group flex flex-col items-center hover:scale-105 transition-transform duration-200"
                    >
                      <div className="flex grow flex-col justify-end leading-[120%] w-[355px] text-black max-md:mt-6 max-md:pl-5">
                        <img
                          src={product.modelImage || product.image}
                          alt={product.name}
                          className="object-contain object-center w-full"
                        />
                      </div>
                      <div className="text-center mt-4">
                        <h3 className="relative text-sm font-mono tracking-[0.2em] group-hover:before:bg-cyan-200 before:bottom-0 before:h-[3px] before:absolute before:w-full w-fit duration-200 before:duration-200">
                          {product.name}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
