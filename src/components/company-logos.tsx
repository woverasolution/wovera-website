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
    <section className="w-full py-12 md:py-24 md:pb-40">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary">
              Trusted by Industry Leaders
            </h2>
            <p className="text-muted-foreground">
              Powering innovation across leading companies worldwide
            </p>
          </div>

          <div className="relative w-full md:w-[80%] mx-auto">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="w-full overflow-hidden">
              <InfiniteSlider
                duration={30}
                durationOnHover={60}
                gap={45}
                className="w-full"
              >
                {companies.map((company, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300"
                  >
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={140}
                      height={70}
                    />
                  </div>
                ))}
              </InfiniteSlider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
