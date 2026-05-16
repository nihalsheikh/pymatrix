import Link from "next/link";
import MatrixRain from "@/components/MatrixRain";
import CommandBlock from "@/components/CommandBlock";

const Hero = () => {
  return (
    <header className="relative min-h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden border-b border-border px-4">
      <MatrixRain speed={0.7} opacity={0.7} />
      <div className="relative z-10 max-w-4xl p-12 rounded-full bg-[radial-gradient(circle,rgba(12,14,12,0.9)_0%,rgba(12,14,12,0)_80%)]">
        <h1 className="font-display text-[8rem] md:text-[12rem] leading-none text-fg mb-4 brightness-0 invert tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">RMATRIX</h1>
        <p className="text-xl md:text-2xl text-muted mb-12 max-w-2xl mx-auto font-medium">
          The cinematic Matrix digital rain, recreated in pure Python. High-fidelity, highly customizable, zero dependencies.
        </p>
        
        <div className="mb-14">
          <CommandBlock command="pip install rmatrix" className="inline-block" showBorderBeam />
        </div>

        <div className="flex flex-wrap gap-8 justify-center">
          <Link href="/docs" className="relative overflow-hidden px-10 py-5 bg-surface text-fg border border-border rounded-lg font-display text-base uppercase tracking-widest hover:border-accent hover:shadow-matrix transition-all transform hover:-translate-y-1 group">
             <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity">
               <MatrixRain fontSize={10} speed={0.4} opacity={0.2} glow={false} />
               <div className="absolute inset-0 bg-bg/40" />
             </div>
             <span className="relative z-10">Documentation</span>
          </Link>
          <Link href="/showcase" className="relative overflow-hidden px-10 py-5 bg-surface text-fg border border-border rounded-lg font-display text-base uppercase tracking-widest hover:border-accent hover:shadow-matrix transition-all transform hover:-translate-y-1 group">
             <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity">
               <MatrixRain fontSize={10} speed={0.4} opacity={0.2} glow={false} />
               <div className="absolute inset-0 bg-bg/40" />
             </div>
             <span className="relative z-10">Gallery</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Hero;
