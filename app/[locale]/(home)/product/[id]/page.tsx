import { notFound } from "next/navigation";
import Image from "next/image";
import connect from "@/app/utils/clientPromise";
import Product from "@/app/models/Product";
import HeroBanner from "@/app/components/HeroCover";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { SkewedButton } from "@/app/components/ButtonCustom";
import SectionBookTest from "@/app/components/SectionBookTest";
import ColorSelector from "@/app/components/ColorSelector";
import StatsSection from "./stats-section";
import SpecsSection from "./specs";
import { VideoThumbnailModal } from "@/app/components/VideoModel";
import Link from "next/link";

interface ProductPageProps {
  params: {
    slug: string;
    locale: string;
  };
}

async function getProduct(slug: string) {
  await connect();
  const product = await Product.findOne({ slug }).lean();
  if (!product) {
    return null;
  }

  // Convert Mongoose document to plain object and handle _id
  return JSON.parse(JSON.stringify(product));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.id);
  if (!product) {
    notFound();
  }

  const locale = params.locale;
  const formattedStats = [
    {
      number: product.stats[0]?.number || "125",
      specialWord: product.stats[0]?.specialWord[locale] || "Top Speed",
      unit: "Km/h",
      prefix: product.stats[0]?.prefix[locale] || "",
    },
    {
      number: product.stats[1]?.number || "9",
      specialWord: product.stats[1]?.specialWord[locale] || "Engine Power",
      unit: "kW",
      prefix: product.stats[1]?.prefix[locale] || "",
    },
    {
      number: product.stats[2]?.number || "180",
      specialWord: product.stats[2]?.specialWord[locale] || "Range*",
      unit: "Km",
      prefix: product.stats[2]?.prefix[locale] || "",
    },
  ];
  console.log(product);
  return (
    <main className=" text-white">
      {/* Hero Section */}
      <div>
        <div className=""></div>
      </div>
      <HeroBanner
        title3={product.starter.title[locale]}
        btns
        title2={product.starter.subtitle[locale]}
        src={product.starter.backgroundImage}
        title={product.starter.name[locale]}
      />

      {/* Top Features Section */}
      <section className="bg-black py-16">
        <MaxWidthWrapper>
          <h2 className="text-5xl font-bold mb-12 uppercase">{product.titleFeatures[locale]}</h2>
          <div className="grid gap-8">
            {product.features.map((feature: any, index: number) => (
              <div
                style={{
                  background: "radial-gradient(circle, rgba(120,120,120,0.5) 0%, rgba(12,12,12,1) 100%)",
                }}
                key={index}
                className={`flex flex-col md:flex-row md:h-[440px] bg-[#0c0c0c]`}
              >
                <div
                  className={`${
                    index % 2 === 1 ? "order-1 md:order-2" : ""
                  } md:w-1/2 h-full flex justify-center items-center p-6 `}
                >
                  <div className="text-base " dangerouslySetInnerHTML={{ __html: feature.description[locale] }} />
                </div>
                <div
                  className={`${
                    index % 2 === 1 ? "order-2 md:order-1" : ""
                  }  md:w-1/2 h-[250px] md:h-full w-full relative`}
                >
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={`Feature ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Color Options Section */}
      <ColorSelector
        stats={formattedStats}
        title={product.colorTitle[locale]}
        colors={product.colors}
        leafletUrl={product.leaflet}
      />

      {/* Financial Services Section */}
      <section className=" bg-white text-black">
        <MaxWidthWrapper className="bg-white pb-8 border-gray-400 border-b border-l border-r h-full flex flex-col md:flex-row">
          <div className="bg-white w-full  min-h-[300px] md:w-2/3  md:min-h-fit md:h-full">
            <div>
              <h2 className="text-2xl font-bold uppercase mb-4">FINANCIAL SERVICES</h2>
              <p className="text-gray-700 mb-8">
                Join the world of Vmoto with our innovative financing solutions, meticulously tailored to meet the
                diverse needs of each country. Discover and select your favorite model, then visit your trusted local
                dealer for a personalized experience.
              </p>
            </div>
          </div>
          <div className="h-[300px] w-full -mt-20  md:order-last md:h-[250px] md:w-1/3  relative ">
            {" "}
            <Image fill src="/vmoto-financial-servicesL.webp" alt="" />
          </div>
        </MaxWidthWrapper>
      </section>
      {product.videourl && product.videoThumbnail && (
        <MaxWidthWrapper>
          <VideoThumbnailModal thumbnail={product.videoThumbnail} videoUrl={product.videourl} />
        </MaxWidthWrapper>
      )}

      {/* European Design Section */}
      <section className=" ">
        <MaxWidthWrapper>
          <div className="">
            <span className=" text-black mb-6 special border-b border-black">Gallery</span>
            <h2 className="text-3xl md:text-5xl font-bold uppercase  text-black">{product.ImageTitle[locale]}</h2>
            <p className="prose text-black mt-5 max-w-none">
              Sleek lines and a modern aesthetic define the {product.starter.name.en}. Every detail is crafted with
              precision and style to create a vehicle that stands out on the road.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {product.images.map((image: string, index: number) => (
              <div key={index} className="relative w-full h-80 aspect-ratio: 1 / 1;">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Design detail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
      <div
        className="py-24 text-white"
        style={{
          background: "linear-gradient(to top right, rgba(0,0,0,1) 50%, rgb(5, 65, 90) 100%)",
        }}
      >
        <div className="px-4 sm:px-6 w-full">
          <div className="w-full max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center">
                <div className="flex flex-col text-center justify-center md:justify-start md:text-left gap-8">
                  <h2 className="text-3xl md:text-5xl font-bold uppercase">GET IN TOUCH</h2>
                  <div className="prose max-w-none">
                    <p>
                      Find your nearest dealer to explore Vmoto's range of innovative electric solutions. Experience
                      cutting-edge design, quality, and performance and get the personal assistance you deserve.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center md:justify-end md:items-end">
                <SkewedButton className=" !text-black uppercase">Find a dealer</SkewedButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <SpecsSection specs={product.specs} locale={locale} />

      <MaxWidthWrapper className="flex flex-col gap-4">
        <div className="text-base text-black " dangerouslySetInnerHTML={{ __html: product.content[locale] }} />{" "}
        <div className="flex items-center gap-2">
          <SkewedButton className=" !text-black">
            <Link href={"/book-a-test-ride"}>FIND A DEALER</Link>
          </SkewedButton>{" "}
          {product.leaflet && (
            <SkewedButton className="!before:bg-white !text-black">
              <Link href={product.leaflet} className=" uppercase">
                SEE THE LEAFLET
              </Link>{" "}
            </SkewedButton>
          )}
        </div>
      </MaxWidthWrapper>

      {/* Book Test Ride Section */}
    </main>
  );
}
