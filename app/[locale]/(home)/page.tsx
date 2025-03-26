import { BrandAmbassadors } from "@/app/components/Brand";
import { HeroSlider } from "@/app/components/MainSlider";
import { ModelRange } from "@/app/components/ModalCustom";
import { NewsSlider } from "@/app/components/news-swiper";
import SectionBookTest from "@/app/components/SectionBookTest";
import VmotoApp from "@/app/components/VmotoApp";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { getEntities } from "@/app/actions/actions";
// import Product from "@/app/models/Product";

export default async function Home() {
  const t = await getTranslations("home");

  const news = [
    {
      title: t("news.eicma2024.title"),
      date: t("news.eicma2024.date"),
      image: "/news1.webp",
      link: "/news/eicma-2024",
    },
    {
      title: t("news.vmotoEbixon.title"),
      date: t("news.vmotoEbixon.date"),
      image: "/news2.webp",
      link: "/news/vmoto-ebixon-launch",
    },
    {
      title: t("news.eicmaRidingFest.title"),
      date: t("news.eicmaRidingFest.date"),
      image: "/news3.webp",
      link: "/news/eicma-riding-fest",
    },
    {
      title: t("news.partnership.title"),
      date: t("news.partnership.date"),
      image: "/news4.webp",
      link: "/news/partnership",
    },
    {
      title: t("news.sustainableMobility.title"),
      date: t("news.sustainableMobility.date"),
      image: "/news5.webp",
      link: "/news/sustainable-mobility",
    },
    {
      title: t("news.innovation.title"),
      date: t("news.innovation.date"),
      image: "/news6.webp",
      link: "/news/innovation",
    },
  ];

  const ambassadors = [
    {
      name: t("ambassadors.ducatiCorse.name"),
      role: (
        <span className="text-base special w-fit border-b lowercase border-black pr-4">
          {t("ambassadors.ducatiCorse.role")}
        </span>
      ),
      description: t("ambassadors.ducatiCorse.description"),
      image: "/ss1.webp",
    },
    {
      name: t("ambassadors.ducatiCorseOffRoad.name"),
      role: (
        <span className="text-base  w-fit special border-b lowercase border-black pr-4">
          {t("ambassadors.ducatiCorseOffRoad.role")}
        </span>
      ),
      description: t("ambassadors.ducatiCorseOffRoad.description"),
      image: "/ss3.webp",
    },
    {
      name: t("ambassadors.jorgeLorenzo.name"),
      role: (
        <span className="text-base special w-fit border-b lowercase border-black pr-4">
          {t("ambassadors.jorgeLorenzo.role")}
        </span>
      ),
      description: t("ambassadors.jorgeLorenzo.description"),
      image: "/ss3.webp",
    },
    {
      name: t("ambassadors.darioMarchetti.name"),
      role: (
        <span className="text-base w-fit special border-b lowercase border-black pr-4">
          {t("ambassadors.darioMarchetti.role")}
        </span>
      ),
      description: t("ambassadors.darioMarchetti.description"),
      image: "/ss2.webp",
    },
  ];
  // const products = await Product.find({}).select("color starter category");
  // console.log(products);
  return (
    <main className="">
      <HeroSlider />
      <ModelRange />
      <BrandAmbassadors ambassadors={ambassadors} />
      <SectionBookTest />
      <VmotoApp />
      <NewsSlider news={news} />
    </main>
  );
}
