const Requirements = () => {
  return (
    <section id="requirements" className="mb-32 scroll-mt-48">
      <h2 className="text-5xl font-display text-accent mb-10">Requirements</h2>
      <ul className="list-disc list-inside text-xl text-fg/90 leading-relaxed space-y-4 font-medium">
        <li>Python 3.6+</li>
        <li>A terminal with <code className="text-accent font-bold bg-accent-soft px-2 py-1 rounded">curses</code> support (Standard on POSIX)</li>
        <li>For Windows: Windows Terminal or PowerShell is recommended</li>
      </ul>
    </section>
  );
};

export default Requirements;
