import MatrixRain from "@/components/MatrixRain";
import { PALETTE_COLORS } from "@/constants";

const ColorPalettes = () => {
  return (
    <section id="colors" className="mb-32 scroll-mt-48">
      <h2 className="text-5xl font-display text-accent mb-10">Color Palettes</h2>
      <p className="text-xl text-fg/90 leading-relaxed mb-10">Supported colors for the <code className="text-accent font-bold bg-accent-soft px-2 py-1 rounded">--color</code> flag.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {PALETTE_COLORS.map((c, i) => (
          <div key={i} className="relative h-32 bg-surface border border-border rounded-xl flex items-center justify-center group hover:border-accent transition-all overflow-hidden shadow-lg">
            <div className="absolute inset-0 z-0">
              <MatrixRain color={c.color} fontSize={10} speed={0.4} opacity={0.3} glow={false} />
              <div className="absolute inset-0 bg-bg/40" />
            </div>
            <span className="relative z-10 font-display text-xl tracking-widest uppercase pointer-events-none font-bold" style={{ color: c.color, textShadow: '0 0 15px rgba(0,0,0,0.9)' }}>
              {c.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ColorPalettes;
