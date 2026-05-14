const InfoPane = () => {
  return (
    <div className="relative p-12 lg:p-20 bg-bg border-r border-border overflow-hidden">
      <div className="relative z-10">
        <div className="font-mono text-xs text-accent uppercase tracking-[0.25em] mb-10 opacity-80 font-bold">Origin // Project</div>
        <h2 className="text-6xl font-display text-accent mb-10">Just for Fun</h2>
        <div className="space-y-8 text-xl text-fg/90 leading-relaxed font-medium">
          <p>
            Pymatrix didn't start with a business plan. It started as a curiosity-driven final project for <strong className="text-fg font-bold underline decoration-accent/30">CS50 Python</strong>. I wanted that certificate, but more than that, I wanted to build something I’d actually use.
          </p>
          <p>
            I saw <code className="text-accent bg-accent-soft px-1.5 rounded font-bold">cmatrix</code> and <code className="text-accent bg-accent-soft px-1.5 rounded font-bold">tmatrix</code>, but I found them either hard to customize or locked to specific distros. I wanted a Matrix rain that was truly cross-platform, dependency-free, and hyper-customizable using the power of Python. 
          </p>
          <p>
            This app is for the <strong className="text-fg font-bold">casual look</strong>—for the people who spend hours "ricing" their Linux setups and want a cinematic backdrop that feels alive. No complex use cases, no user data tracking. Just the Matrix.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-12 mt-16 pt-16 border-t border-border">
          <div>
            <div className="text-4xl text-accent mb-2 brightness-150 flex items-baseline">
              <span className="font-miltown">3.6</span>
              <span className="font-mono text-2xl ml-0.5">+</span>
            </div>
            <div className="font-mono text-[11px] text-fg font-black uppercase tracking-wider">Python Req</div>
          </div>
          <div>
            <div className="text-4xl text-accent mb-2 brightness-150">
              <span className="font-miltown">0</span>
            </div>
            <div className="font-mono text-[11px] text-fg font-black uppercase tracking-wider">External Deps</div>
          </div>
          <div>
            <div className="text-4xl text-accent mb-2 brightness-150">
              <span className="font-miltown leading-none uppercase" style={{ fontSize: '0.8em' }}>MIT</span>
            </div>
            <div className="font-mono text-[11px] text-fg font-black uppercase tracking-wider">Open License</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPane;
