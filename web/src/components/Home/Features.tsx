const Features = () => {
  const features = [
    { id: "01", title: "Pure Python", desc: "Built for the modern terminal using only the standard library. Runs on anything that has Python 3.6+ installed." },
    { id: "02", title: "Infinite Tweakability", desc: "Over 20+ CLI flags to tune speed, density, colors, and mutation rates. Make the Matrix exactly how you want it." },
    { id: "03", title: "Performance First", desc: "Optimized curses rendering ensures buttery smooth animations without hammering your system resources." }
  ];

  return (
    <section className="py-40 bg-bg">
      <div className="container">
        <h2 className="glow-text text-5xl font-display mb-20 text-left">Engineered for Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map(feat => (
            <div key={feat.id} className="relative p-12 bg-surface border border-border hover:border-accent hover:-translate-y-2 transition-all group overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-accent shadow-matrix" />
              <div className="font-mono text-muted text-sm mb-8">[{feat.id}]</div>
              <h3 className="text-accent text-3xl font-display mb-6">{feat.title}</h3>
              <p className="text-muted text-lg leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
