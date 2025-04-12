import Image from "next/image";
import { InfiniteSlider } from "./ui/infinite-slider";

const companies = [
  {
    name: "Ethio Dance Fitness",
    logo: "/logos/edf-logo.png",
  },

  {
    name: "Africa Medical College",
    logo: "/logos/amc-logo.png",
  },
  {
    name: "INTAPS",
    logo: "/logos/intaps-logo.png",
  },
  {
    name: "Brewtech GmBh",
    logo: "/logos/brewtech-logo.png",
  },
  {
    name: "Mowe",
    logo: "/logos/mowe-logo.png",
  },

  {
    name: "DDLMB",
    logo: "/logos/dire-logo.png",
  },

  // Add more companies as needed
];

export function CompanyLogos() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="w-full px-4">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Trusted by Industry Leaders
            </h2>
            <p className="text-muted-foreground mt-2">
              Powering innovation across leading companies worldwide
            </p>
          </div>

          <div className="w-screen overflow-hidden">
            <InfiniteSlider
              duration={30}
              durationOnHover={60}
              gap={5}
              className="w-full"
            >
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 border border-green-200 bg-green-50/80 rounded-xs p-5 px-7"
                >
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={170} 
                    height={70}
                    // className="object-contain w-auto h-[40px] md:h-[60px]"
                  />
                </div>
              ))}
            </InfiniteSlider>
          </div>
        </div>
      </div>
    </section>
  );
}
