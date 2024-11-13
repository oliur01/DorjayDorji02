import { HowItWorksHero } from "@/components/how-it-works/hero";
import { ProcessSteps } from "@/components/how-it-works/process-steps";
import { FAQ } from "@/components/how-it-works/faq";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen pt-20">
      <HowItWorksHero />
      <ProcessSteps />
      <FAQ />
    </div>
  );
}