import CommandBlock from "@/components/CommandBlock";

const Installation = () => {
  return (
    <section id="installation" className="mb-32 scroll-mt-48 pt-12">
      <h2 className="text-5xl font-display text-accent mb-10">Installation</h2>
      <p className="text-xl text-fg/90 leading-relaxed mb-10">
        Rmatrix is distributed via PyPI. You can install it globally using <code className="text-accent font-bold bg-accent-soft px-2 py-1 rounded">pipx</code> (recommended) or in a virtual environment with <code className="text-accent font-bold bg-accent-soft px-2 py-1 rounded">pip</code>.
      </p>
      <div className="space-y-6 mb-10">
        <div className="space-y-2">
            <span className="text-sm font-mono text-muted uppercase tracking-widest font-bold">Global (Recommended)</span>
            <CommandBlock command="pipx install rmatrix" showBorderBeam />
            <p className="text-sm text-muted italic mt-2">Recommended: This allows you to run the `rmatrix` app from any directory without manually activating a virtual environment.</p>
        </div>
        <div className="space-y-2">
            <span className="text-sm font-mono text-muted uppercase tracking-widest font-bold">Local Environment</span>
            <CommandBlock command="pip install rmatrix" />
        </div>
      </div>
      <p className="text-xl text-fg/90 leading-relaxed">
        The <code className="text-accent font-bold bg-accent-soft px-2 py-1 rounded">rmatrix</code> binary will be added to your path automatically.
      </p>
    </section>
  );
};

export default Installation;
