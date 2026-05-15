import { FEATURES } from "@/constants";

const Features = () => {
  return (
    <section className="py-40 bg-bg">
      <div className="container">
        <h2 className="glow-text text-5xl font-display mb-20 text-left uppercase tracking-tighter">Casual by Design</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {FEATURES.map(feat => (
            <div key={feat.id} className="relative p-12 bg-surface border border-border hover:border-accent hover:-translate-y-2 transition-all group overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-accent shadow-matrix" />
              <div className="font-mono text-muted text-sm mb-8 font-bold">[{feat.id}]</div>
              <h3 className="text-accent text-3xl font-display mb-6 uppercase tracking-tight">{feat.title}</h3>
              <p className="text-fg/80 text-lg leading-relaxed font-medium">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
