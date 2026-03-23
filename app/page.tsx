import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { WhoIWorkWith } from '@/components/sections/WhoIWorkWith';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <WhoIWorkWith />
      <Services />
      <Testimonials />
      <CTA />
    </>
  );
}
