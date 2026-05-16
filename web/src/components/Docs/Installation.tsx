import CommandBlock from "@/components/CommandBlock";

const Installation = () => {
  return (
    <section id="installation" className="mb-32 scroll-mt-48 pt-12">
      <h2 className="text-5xl font-display text-accent mb-10">Installation</h2>
      <p className="text-xl text-fg/90 leading-relaxed mb-10">
        Rmatrix is distributed via PyPI. Install it globally or in a virtual environment with <code className="text-accent font-bold bg-accent-soft px-2 py-1 rounded">pip</code>.
      </p>
      <CommandBlock command="pip install rmatrix" className="mb-10" showBorderBeam />
      <p className="text-xl text-fg/90 leading-relaxed">
        The <code className="text-accent font-bold bg-accent-soft px-2 py-1 rounded">rmatrix</code> binary will be added to your path automatically.
      </p>
    </section>
  );
};

export default Installation;
