"use client";

import { motion } from "framer-motion";
import MaxWidthWrapper from "./MaxWidthWrapper";
import UrbanForm from "./UrbanForm";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export function CustomerSupport() {
  const t = useTranslations("customerSupport");
  const params = useParams();
  const isRTL = params.locale === "ar";

  return (
    <div className="min-h-screen bg-white py-20">
      <MaxWidthWrapper>
        <div className={`grid md:grid-cols-2 gap-16 items-start ${isRTL ? "dir-rtl" : ""}`}>
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`space-y-8 ${isRTL ? "order-2" : "order-1"}`}
          >
            <div className={`space-y-2 ${isRTL ? "text-right" : "text-left"}`}>
              <p
                className={`text-sm special uppercase tracking-wider text-gray-900 border-b border-black w-fit ${
                  isRTL ? "mr-0" : "ml-0"
                }`}
              >
                {t("title")}
              </p>
              <h1 className="text-5xl font-bold tracking-tight">{t("heading")}</h1>
            </div>

            <div className={`prose max-w-none ${isRTL ? "text-right" : "text-left"}`}>
              <p>{t("description")}</p>
              <ul className={`list-disc mt-3 ${isRTL ? "mr-4" : "ml-4"}`}>
                <li>
                  {t("departments.general")}{" "}
                  <a className="text-[#16a8d8] underline" href="mailto:info@vmoto.com">
                    info@vmoto.com
                  </a>
                </li>
                <li>
                  {t("departments.business")}{" "}
                  <a className="text-[#16a8d8] underline" href="mailto:info@vmoto.com">
                    info@vmoto.com
                  </a>
                </li>
                <li>
                  {t("departments.marketing")}{" "}
                  <a className="text-[#16a8d8] underline" href="mailto:marketing@vmoto.com">
                    marketing@vmoto.com
                  </a>
                </li>
                <li>
                  {t("departments.afterSales")}{" "}
                  <a className="text-[#16a8d8] underline" href="mailto:service@vmoto.com">
                    service@vmoto.com
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Form Column */}
          <div className={`${isRTL ? "order-1" : "order-2"}`}>
            <UrbanForm />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
