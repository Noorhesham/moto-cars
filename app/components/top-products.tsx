import { getTopProducts } from "../actions/actions";
import { getTranslations } from "next-intl/server";

export default async function TopProducts({ locale }: { locale: string }) {
  const products = await getTopProducts();

  const t = await getTranslations("dashboard");

  return (
    <div className="space-y-4">
      {products.map((product, index) => {
        const name = typeof product.name === "object" ? product.name[locale] : product.name;
        const percentage = Math.round((product.totalCount / (products[0]?.totalCount || 1)) * 100);

        return (
          <div key={index} className="flex items-center">
            <div className="w-full">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{name}</span>
                <span className="text-sm font-medium">{percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
              </div>
              <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                <span>
                  {t("features")}: {product.featuresCount}
                </span>
                <span>
                  {t("colors")}: {product.colorsCount}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
