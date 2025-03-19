import { BrandAmbassadors } from "@/app/components/Brand";
import { HeroSlider } from "@/app/components/MainSlider";
import { ModelRange } from "@/app/components/ModalCustom";
import { NewsSlider } from "@/app/components/news-swiper";
import SectionBookTest from "@/app/components/SectionBookTest";
import VmotoApp from "@/app/components/VmotoApp";
import Image from "next/image";

const news = [
  {
    title: "EICMA 2024",
    date: "Nov 2024",
    image: "/news1.webp",
    link: "/news/eicma-2024",
  },
  {
    title: "Vmoto and Ebixon: a great success for the launch event in Malaysia.",
    date: "May 2024",
    image: "/news2.webp",
    link: "/news/vmoto-ebixon-launch",
  },
  {
    title: "Vmoto to be Official Electric Scooter Supplier of EICMA Riding Fest.",
    date: "Apr 2024",
    image: "/news3.webp",
    link: "/news/eicma-riding-fest",
  },
  {
    title: "New Partnership Announcement",
    date: "Mar 2024",
    image: "/news4.webp",
    link: "/news/partnership",
  },
  {
    title: "Sustainable Urban Mobility Solutions",
    date: "Feb 2024",
    image: "/news5.webp",
    link: "/news/sustainable-mobility",
  },
  {
    title: "Innovation in Electric Vehicle Technology",
    date: "Jan 2024",
    image: "/news6.webp",
    link: "/news/innovation",
  },
];
const ambassadors = [
  {
    name: "DUCATI CORSE",
    role: (
      <span className="text-base special w-fit border-b lowercase border-black pr-4">
        OFFICIAL ELECTRIC SCOOTER SUPPLIER 2022/2023-2024
      </span>
    ),
    description:
      "Dario Marchetti, former pro rider and Technical Director of the Ducati DRE Racetrack Academy and DRE Road.",
    image: "/ss1.webp",
  },
  {
    name: "DUCATI CORSE OFF-ROAD",
    role: (
      <span className="text-base  w-fit special border-b lowercase border-black pr-4">
        OFFICIAL ELECTRIC SCOOTER SUPPLIER 2024
      </span>
    ),
    description: "Leading expert in electric motorcycle development with over 15 years of racing experience.",
    image: "/ss3.webp",
  },
  {
    name: "JORGE LORENZO",
    role: <span className="text-base special   w-fit border-b lowercase border-black pr-4">BRAND testimonial</span>,
    description:
      "The five time MotoGp World Champion, lifestyle king, beloved and followed by more than 1.8 million followers on instagram is the company's testimonial and spokesperson for its values.",
    image: "/ss3.webp",
  },
  {
    name: "DARIO MARCHETTI",
    role: <span className="text-base  w-fit special border-b lowercase border-black pr-4">BRAND AMBASSADOR</span>,
    description:
      "Dario Marchetti, former pro rider and Technical Director of the Ducati DRE Racetrack Academy and DRE Road. ",
    image: "/ss2.webp",
  },
];
export default function Home() {
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
