import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import LiveDemo from "@/components/Home/LiveDemo";
import CTA from "@/components/Home/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <LiveDemo />
      <CTA />
    </div>
  );
}
