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
  {
    name: 'Dire Dawa Land Development and Management Bureau',
    logo: '/logos/ddldmb-logo.jpeg',
  },
  
  
  // Add more companies as needed
];

export function CompanyLogos() {
  return (
    <section className="relative py-12 md:py-24 w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-slate-100/90 to-slate-50/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.4)_100%)]" />
      <div className="container px-4 md:px-6 relative">
        <div className="space-y-4 md:space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
              Trusted by Industry Leaders
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Powering innovation across leading companies worldwide
            </p>
          </div>
          
          <InfiniteSlider 
            duration={30} 
            durationOnHover={60}
            gap={24}
            className="py-4 md:py-8 w-full"
          >
            {companies.map((company, index) => (
              <div
                key={index}
                className={`relative w-[120px] md:w-[200px] h-12 md:h-16 opacity-70 hover:opacity-100 transition-all duration-300 filter hover:brightness-110 ${
                  company.name === 'Ethio Dance Fitness' ? 'w-[180px] md:w-[400px]' : ''
                }`}
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