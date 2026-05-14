import CommandBlock from "@/components/CommandBlock";

const Usage = () => {
  return (
    <section id="usage" className="mb-32 scroll-mt-48">
      <h2 className="text-5xl font-display text-accent mb-10">Basic Usage</h2>
      <p className="text-xl text-fg/90 leading-relaxed mb-10">To launch the animation with system defaults, simply run:</p>
      <CommandBlock command="pymatrix" className="mb-6" />
      <p className="text-xl text-fg/80 mb-10 italic">Alternatively, you can also run the app using the shorter <code className="text-accent font-bold bg-accent-soft px-2 py-1 rounded">pym</code> command in your terminal.</p>
      <p className="text-xl text-fg/90 leading-relaxed">Press <code className="text-accent font-bold bg-accent-soft px-2 py-1 rounded">q</code> or <code className="text-accent font-bold bg-accent-soft px-2 py-1 rounded">Ctrl+C</code> to exit and return to your shell.</p>
    </section>
  );
};

export default Usage;
