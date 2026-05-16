const InfoPane = () => {
  return (
    <div className="relative p-12 lg:p-20 bg-bg border-r border-border overflow-hidden">
      <div className="relative z-10">
        <div className="font-mono text-xs text-accent uppercase tracking-[0.25em] mb-10 opacity-80 font-bold">Origin // Project</div>
        <h2 className="text-6xl font-display text-accent mb-10 uppercase tracking-tighter">Just for Fun</h2>
        <div className="space-y-8 text-xl text-fg/90 leading-relaxed font-medium">
          <p>
            Rmatrix is a cinematic digital rain for the terminal, built for anyone who loves ricing their setup. It's a cross-platform, dependency-free tool that brings the Matrix to life using pure Python.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
          <div>
            <div className="text-3xl text-white font-bold mb-1 flex items-baseline drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              <span className="font-miltown">3.6</span>
              <span className="font-mono text-xl ml-0.5">+</span>
            </div>
            <div className="font-mono text-[10px] text-muted font-bold uppercase tracking-wider">Python Req</div>
          </div>
          <div>
            <div className="text-3xl text-white font-bold mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              <span className="font-miltown">0</span>
            </div>
            <div className="font-mono text-[10px] text-muted font-bold uppercase tracking-wider">External Deps</div>
          </div>
          <div>
            <div className="text-3xl text-white font-bold mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              <span className="font-miltown leading-none uppercase" style={{ fontSize: '0.8em' }}>MIT</span>
            </div>
            <div className="font-mono text-[10px] text-muted font-bold uppercase tracking-wider">Open License</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPane;
