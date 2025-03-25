"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { SkewedButton } from "@/app/components/ButtonCustom";

const tabs = [
  { id: "products", label: "PRODUCTS" },
  { id: "sustainability", label: "SUSTAINABILITY" },
];

const faqs = {
  products: [
    {
      question: "Why choose an ev rather than an icev, while purchasing a new vehicle?",
      answer:
        "Electric vehicles offer numerous advantages including lower operating costs, zero direct emissions, quieter operation, and often better performance. They also benefit from government incentives and lower maintenance requirements.",
    },
    {
      question: "What is the current status of the global ev market in the world?",
      answer:
        "The global EV market is experiencing rapid growth, with increasing adoption rates worldwide. Many countries are setting ambitious targets for EV adoption and manufacturers are expanding their electric vehicle lineups.",
    },
    // Add more product FAQs
  ],
  sustainability: [
    {
      question: "How do electric scooters contribute to environmental sustainability?",
      answer:
        "Electric scooters produce zero direct emissions, helping reduce air pollution and combat climate change. They also require less energy and resources to manufacture and maintain compared to traditional vehicles.",
    },
    // Add more sustainability FAQs
  ],
};

export function FAQ() {
  const [activeTab, setActiveTab] = useState("products");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <div className=" bg-white pt-32">
      <MaxWidthWrapper noPadding>
        <div className="space-y-8 w-full">
          <div className="space-y-2 w-full">
            <p className="text-sm special uppercase tracking-wider text-gray-600 border-b border-black w-fit">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h1 className="text-5xl font-bold tracking-tight">UNLOCKING THE WORLD OF ELECTRIC SCOOTERS</h1>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              Welcome to our FAQ page! Here you'll find answers to some of the most common questions we get about our
              electric scooters, both for personal and business use. Whether you're looking for information on our
              products, our policies, or how to get started with electric scooters, we're here to help.
            </p>

            <p className="text-gray-600 leading-relaxed">
              If you can't find the answer to your question here, please don't hesitate to contact us by visiting our{" "}
              <Link href="/contact" className="text-blue-600 hover:underline">
                'Contact Us'
              </Link>{" "}
              page. We're always happy to help!
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
