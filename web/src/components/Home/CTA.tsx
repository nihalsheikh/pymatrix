import Link from "next/link";
import MatrixRain from "@/components/MatrixRain";
import CommandBlock from "@/components/CommandBlock";

const CTA = () => {
  return (
    <section className="py-60 text-center container border-t border-border mt-20">
      <h2 className="glow-text text-7xl font-display mb-10 mt-10">Enter the Stream</h2>
      <p className="text-2xl text-muted mb-20 max-w-3xl mx-auto leading-relaxed font-medium">
        Join the ranks of developers ricing their systems with the most customizable Matrix animation available.
      </p>
      
      <div className="mb-20">
        <CommandBlock command="pip install pymatrix" className="inline-block" showBorderBeam />
      </div>

      <div className="flex flex-wrap gap-8 justify-center">
        <Link href="https://github.com/nihalsheikh/pymatrix" target="_blank" className="relative overflow-hidden px-10 py-5 bg-surface text-fg border border-border rounded-lg font-display text-base uppercase tracking-widest hover:border-accent transition-all transform hover:-translate-y-1 group">
           <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity">
              <MatrixRain fontSize={10} speed={0.4} opacity={0.2} glow={false} />
              <div className="absolute inset-0 bg-bg/40" />
           </div>
           <span className="relative z-10">GitHub Repository</span>
        </Link>
        <Link href="/docs" className="relative overflow-hidden px-10 py-5 bg-surface text-fg border border-border rounded-lg font-display text-base uppercase tracking-widest hover:border-accent transition-all transform hover:-translate-y-1 group">
           <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity">
              <MatrixRain fontSize={10} speed={0.4} opacity={0.2} glow={false} />
              <div className="absolute inset-0 bg-bg/40" />
           </div>
           <span className="relative z-10">Full Documentation</span>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
