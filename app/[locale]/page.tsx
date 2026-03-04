import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Contact from '@/components/Contact';

import FAQ from '@/components/FAQ';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BeforeAfterGallery />
      <About />
      <Services />
      <Stats />
      {/* <VideoSection /> */}
      {/* <BeforeAfter /> */}
      {/* <Testimonials /> */}
      <FAQ />
      <Contact />
    </main>
  );
}