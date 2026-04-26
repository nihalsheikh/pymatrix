export default function Landing() {
  return (
    <>
      <canvas id="rain"></canvas>
      <div id="scanlines"></div>
      <div id="vignette"></div>
      <div id="toast">// COPIED TO CLIPBOARD</div>
      <div id="site">
        <nav>
          <div className="nav-logo">
            PY<span className="nav-logo-span">MATRIX</span>
          </div>
          <div className="nav-links">
            <button className="nav-btn active">HOME</button>
            <button className="nav-btn">ABOUT</button>
            <button className="nav-btn">DOCS</button>
          </div>
          <div className="nav-right">
            <div className="nav-version">v1.0.0</div>
            <a href="https://github.com/nihalsheikh/pymatrix" className="nav-gh" target="_blank" rel="noopener noreferrer">
              <span>GH</span>
            </a>
          </div>
        </nav>
        
        <div className="page active" id="landing">
          <section className="land-hero">
            <div className="hero-pre">&gt;_</div>
            <h1 className="hero-title">PYMATRIX</h1>
            <h2 className="hero-sub-title">Matrix Digital Rain</h2>
            <p className="hero-desc">
              Experience the iconic falling code effect from <strong>The Matrix</strong> 
              in your terminal. A Python-based animation that brings cyberpunk aesthetics 
              to your command line.
            </p>
            <div className="hero-install">
              <span className="hero-install-prompt">&gt;_</span>
              <span className="hero-install-copy">sudo apt install pymatrix</span>
            </div>
            <div className="hero-btns">
              <a href="/about" className="btn-primary">Learn More</a>
              <a href="/docs" className="btn-outline">Documentation</a>
            </div>
          </section>
          
          <section className="land-features">
            <div className="section-label"><span></span>FEATURES</div>
            <div className="feat-grid">
              <div className="feat-card">
                <div className="feat-num">01</div>
                <div className="feat-icon">🎨</div>
                <h3 className="feat-title">Customizable Colors</h3>
                <p className="feat-desc">
                  Choose from 16 ANSI colors including classic green, cyan, red, and more.
                  Adjust speed, density, and trail length to your preference.
                </p>
              </div>
              <div className="feat-card">
                <div className="feat-num">02</div>
                <div className="feat-icon">⚡</div>
                <h3 className="feat-title">High Performance</h3>
                <p className="feat-desc">
                  Optimized for smooth animation at 60 FPS. Efficient rendering that 
                  won't slow down your system, even on older hardware.
                </p>
              </div>
              <div className="feat-card">
                <div className="feat-num">03</div>
                <div className="feat-icon">💻</div>
                <h3 className="feat-title">Cross Platform</h3>
                <p className="feat-desc">
                  Works on Linux, macOS, and Windows (via WSL). Native terminal 
                  experience with full cursor control and resize handling.
                </p>
              </div>
            </div>
          </section>
          
          <section className="land-demo">
            <div className="terminal">
              <div className="terminal-bar">
                <div className="t-dot" style={{backgroundColor: '#00ff41'}}></div>
                <div className="t-dot" style={{backgroundColor: '#ffff00'}}></div>
                <div className="t-dot" style={{backgroundColor: '#ff00ff'}}></div>
                <div className="t-title">pymatrix-demo</div>
              </div>
              <div className="terminal-body">
                <pre>
nihal@linux:~$ pymatrix --color 36 --speed 1.5
Starting Matrix rain animation...
Press 'q' or ESC to exit
nihal@linux:~$ pymatrix --help
Shows all available options and usage examples
                </pre>
              </div>
              <div className="t-cursor"></div>
            </div>
          </section>
          
          <div className="land-stats">
            <div className="stat-block">
              <div className="stat-num">16</div>
              <div className="stat-label">COLORS</div>
            </div>
            <div className="stat-block">
              <div className="stat-num">60</div>
              <div className="stat-label">FPS MAX</div>
            </div>
            <div className="stat-block">
              <div className="stat-num">3</div>
              <div className="stat-label">OS SUPPORT</div>
            </div>
            <div className="stat-block">
              <div className="stat-num">0</div>
              <div className="stat-label">DEPS</div>
            </div>
          </div>
          
          <section className="land-cta">
            <h2>Ready to experience the digital rain?</h2>
            <p>
              Install PyMatrix today and bring the iconic Matrix effect to your 
              terminal. Free, open-source, and easy to use.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
