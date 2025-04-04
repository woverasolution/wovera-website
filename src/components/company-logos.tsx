import Image from 'next/image';
import { InfiniteSlider } from './ui/infinite-slider';

const companies = [
  {
    name: 'Ethio Dance Fitness',
    logo: '/logos/edf-logo.png',
  },
  {
    name: 'Brewtech GmBh',
    logo: '/logos/brewtech-logo.png',
  },
  {
    name: 'Africa Medical College',
    logo: '/logos/amc-logo.png',
  },
  {
    name: 'INTAPS',
    logo: '/logos/intaps-logo.png',
  },
  
  
  // Add more companies as needed
];

export function CompanyLogos() {
  return (
    <section className="py-24 bg-secondary/5">
      <div className="container">
        <div className="space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-semibold tracking-tight">
              Trusted by Industry Leaders
            </h2>
            <p className="text-muted-foreground">
              Powering innovation across leading companies worldwide
            </p>
          </div>
          
          <InfiniteSlider 
            duration={30} 
            durationOnHover={60}
            gap={48}
            className="py-8"
          >
            {companies.map((company, index) => (
              <div
                key={index}
                className="relative w-[200px] h-16 opacity-70 hover:opacity-100 transition-all duration-300 filter hover:brightness-110"
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
} 