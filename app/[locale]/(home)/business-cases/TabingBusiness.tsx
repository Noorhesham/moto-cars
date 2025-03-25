"use client";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";

const TabingBusiness = ({ categories, businessCases }: { categories: string[]; businessCases: any[] }) => {
  const [activeTab, setActiveTab] = React.useState(categories[0]);
  const locale = useLocale();

  // Filter business cases based on active category
  const filteredBusinessCases = useMemo(() => {
    if (activeTab === "All") {
      return businessCases;
    }
    return businessCases.filter((item) => item.category === activeTab);
  }, [businessCases, activeTab]);

  return (
    <div>
      <div className="flex gap-4 overflow-x-auto pb-2 mb-4">
        {/* Add "All" category if not already included */}

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={cn(
              "relative px-6 py-3 text-sm transition-all",
              "before:absolute before:inset-0 before:-skew-x-12 before:bg-gray-100",
              "hover:before:bg-gray-200",
              activeTab === category && "before:bg-cyan-200 hover:before:bg-cyan-300"
            )}
          >
            <span className="relative font-semibold z-10">{category}</span>
          </button>
        ))}
      </div>

      {filteredBusinessCases.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">No business cases found in this category.</p>
        </div>
      ) : (
        <div className="gap-10 grid my-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredBusinessCases.map((item) => (
            <Link
              key={item._id}
              href={`/business-cases/${item.slug}`}
              className="group rounded-md relative block h-[450px] overflow-hidden"
            >
              <Image
                src={item.backgroundImage || "/placeholder.svg"}
                alt={item.title[locale]}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-6 flex flex-col justify-between">
                <div>
                  <span className="text-white text-sm">
                    {new Date(item.createdAt).toLocaleDateString("en-US", {
                      weekday: "short",
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-4">{item.title[locale]}</h3>
                  <span className="text-white hover:underline">Read more</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default TabingBusiness;
