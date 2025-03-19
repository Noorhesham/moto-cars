import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";

interface SpecProps {
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
}

export default function SpecsSection({ specs, locale, title }: { specs: SpecProps[]; locale: string; title?: string }) {
  if (specs.length === 0) return null;
  return (
    <MaxWidthWrapper className=" bg-white text-black">
      <div className="container  ">
        <div className="mb-4">
          <span className="text-base uppercase  special  border-b border-black ">TECH SPECS</span>
        </div>

        {title && <h2 className="text-3xl font-bold mb-8">{title}</h2>}

        <div className="border rounded-sm mt-10 overflow-hidden">
          {specs.map((spec, index) => (
            <div
              key={index}
              className={`grid grid-cols-[1fr_2fr] ${index !== specs.length - 1 ? "border-b" : ""} border-gray-200`}
            >
              <div className="font-semibold p-4 bg-gray-50">{spec.title[locale]}</div>
              <div className="p-4">{spec.description[locale]}</div>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
