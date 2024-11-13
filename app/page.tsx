import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { Collections } from "@/components/home/collections";
import { Testimonials } from "@/components/home/testimonials";
import { Process } from "@/components/home/process";
import { CTASection } from "@/components/home/cta-section";
import { Expertise } from "@/components/home/expertise";

export default function Home() {
  return (
    <>
      <Hero />
      <Collections />
      <Features />
      <Process />
      <Expertise />
      <Testimonials />
      <CTASection />
    </>
  );
}