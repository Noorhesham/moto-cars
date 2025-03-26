"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { SkewedButton } from "@/app/components/ButtonCustom";
import { useTranslations } from "next-intl";

export function FAQ() {
  const [activeTab, setActiveTab] = useState("products");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const t = useTranslations("faq");

  const tabs = [
    { id: "products", label: t("tabs.products") },
    { id: "sustainability", label: t("tabs.sustainability") },
  ];

  const faqs = {
    products: [
      {
        question: t("questions.products.evChoice.question"),
        answer: t("questions.products.evChoice.answer"),
      },
      {
        question: t("questions.products.marketStatus.question"),
        answer: t("questions.products.marketStatus.answer"),
      },
    ],
    sustainability: [
      {
        question: t("questions.sustainability.environmental.question"),
        answer: t("questions.sustainability.environmental.answer"),
      },
    ],
  };

  return (
    <div className=" bg-white pt-32">
      <MaxWidthWrapper noPadding>
        <div className="space-y-8 w-full">
          <div className="space-y-2 w-full">
            <p className="text-sm special uppercase tracking-wider text-gray-600 border-b border-black w-fit">
              {t("title")}
            </p>
            <h1 className="text-5xl font-bold tracking-tight">{t("subtitle")}</h1>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">{t("welcome")}</p>

            <p className="text-gray-600 leading-relaxed">
              {t("contactPrompt")}{" "}
              <Link href="/contact" className="text-blue-600 hover:underline">
                {t("contactPrompt")}
              </Link>
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-4">
            {tabs.map((tab) => (
              <SkewedButton
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded transition-colors ${
                  activeTab === tab.id ? "bg-[#B3E6E8] text-black" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </SkewedButton>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs[activeTab as keyof typeof faqs].map((faq) => (
              <motion.div key={faq.question} initial={false} className="border-b border-gray-200">
                <button
                  onClick={() => setOpenQuestion(openQuestion === faq.question ? null : faq.question)}
                  className="w-full py-4 flex justify-between items-center text-left"
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${openQuestion === faq.question ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openQuestion === faq.question && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-4 text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
