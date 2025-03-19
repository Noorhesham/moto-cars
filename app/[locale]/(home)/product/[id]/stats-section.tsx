import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";

interface StatProps {
  prefix?: string;
  number: string | number;
  specialWord: string;
  unit?: string;
}

export default function StatsSection({ stats, locale }: { stats: StatProps[]; locale: string }) {
  return (
    <div className=" bg-white">
      <MaxWidthWrapper className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-baseline">
                <span className="text-[#a8daec] text-5xl font-light">
                  {stat.prefix && <span>{stat.prefix}</span>}
                  {stat.number}
                </span>
                {stat.unit && <span className="text-black text-2xl ml-2">{stat.unit}</span>}
              </div>
              <div className="text-gray-800 mt-2">{stat.specialWord}</div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
