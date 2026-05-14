import React from "react";
import { CLI_FLAGS } from "@/constants";

const FlagsTable = () => {
  return (
    <section id="flags" className="mb-32 scroll-mt-48">
      <h2 className="text-5xl font-display text-accent mb-10">Command Line Flags</h2>
      <p className="text-xl text-fg/90 leading-relaxed mb-10">Fine-tune the stream using these parameters.</p>
      <div className="grid grid-cols-[120px_180px_1fr] border border-border rounded-xl overflow-hidden shadow-xl">
        <div className="bg-surface p-5 font-mono text-xs text-accent uppercase tracking-widest border-b border-border font-bold">Shorthand</div>
        <div className="bg-surface p-5 font-mono text-xs text-accent uppercase tracking-widest border-b border-border font-bold">Flag</div>
        <div className="bg-surface p-5 font-mono text-xs text-accent uppercase tracking-widest border-b border-border font-bold">Description</div>
        
        {CLI_FLAGS.map((f, i) => (
          <React.Fragment key={i}>
            <div className="bg-bg p-5 font-mono text-sm border-b border-border last:border-0 text-fg/90 font-medium">{f.shorthand}</div>
            <div className="bg-bg p-5 font-mono text-sm border-b border-border last:border-0 text-fg/90 font-medium">{f.flag}</div>
            <div className="bg-bg p-5 text-fg/80 border-b border-border last:border-0 leading-relaxed">{f.desc}</div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default FlagsTable;
