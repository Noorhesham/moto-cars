import Image from "next/image";
import { HeroSlider } from "../components/MainSlider";
import { ModelRange } from "../components/ModalCustom";
import { BrandAmbassadors } from "../components/Brand";
import { SkewedButton } from "../components/ButtonCustom";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { NewsSlider } from "../components/news-swiper";
import Heading from "../components/Heading";
import AppDownlaoad from "../components/AppDownlaoad";
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
      <MaxWidthWrapper className="flex lg:my-0 my-10 lg:mt-0 mt-10 flex-col gap-6 items-center">
        <Heading text="Global leader in electric mobility solutions" />
        <img src="/LOGO_VMOTO-10 (1).webp" className="block h-full object-cover min-h-[450px]" alt="" />
        <p>
          As a leader in electric scooter manufacturing, we provide daily green mobility solutions for urban commuters
          and commercial operations worldwide. Plus, we always have promotions to make your switch to electric even
          easier.
        </p>
        <SkewedButton className=" mr-auto">Book A Test Ride</SkewedButton>
      </MaxWidthWrapper>
      <section className=" bg-black">
        <MaxWidthWrapper noPadding className="grid grid-cols-1 items-center md:grid-cols-2 gap-8">
          <MaxWidthWrapper className="flex text-white flex-col gap-6">
            <h3 className=" text-3xl lg:text-5xl font-bold">VMOTO APP</h3>
            <p>For those who seek a connection with the world around them</p>
            <AppDownlaoad />
          </MaxWidthWrapper>
          <div className=" w-full min-h-[450px] relative">
            <img src={"/Frame-1121_2024-12-11-163328_ysfv.webp"} className=" object-contain object-right" alt="photo" />
          </div>
        </MaxWidthWrapper>
      </section>
      <NewsSlider news={news} />
    </main>
  );
}
