export default function About() {
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
            <button className="nav-btn">HOME</button>
            <button className="nav-btn active">ABOUT</button>
            <button className="nav-btn">DOCS</button>
          </div>
          <div className="nav-right">
            <div className="nav-version">v1.0.0</div>
            <a href="https://github.com/nihalsheikh/pymatrix" className="nav-gh" target="_blank" rel="noopener noreferrer">
              <span>GH</span>
            </a>
          </div>
        </nav>
        
        <div className="page active" id="about">
          <section className="about-wrap">
            <h1 className="about-hero-line">PYMATRIX</h1>
            <p className="about-intro">
              PyMatrix is a <strong>Matrix-style terminal rain animation</strong> that brings the iconic falling code effect from 
              <em>The Matrix</em> to your command line. Built with Python and the curses library, it offers a customizable, 
              high-performance experience across Linux, macOS, and Windows.
            </p>
            
            <div className="about-grid">
              <div className="about-cell">
                <div className="about-cell-label">Version</div>
                <div className="about-cell-val">1.0.0</div>
                <div className="about-cell-sub">Stable release</div>
              </div>
              <div className="about-cell">
                <div className="about-cell-label">License</div>
                <div className="about-cell-val">MIT</div>
                <div className="about-cell-sub">Open source</div>
              </div>
              <div className="about-cell">
                <div className="about-cell-label">Language</div>
                <div className="about-cell-val">Python 3.6+</div>
                <div className="about-cell-sub">With curses</div>
              </div>
              <div className="about-cell">
                <div className="about-cell-label">Platform</div>
                <div className="about-cell-val">Cross-platform</div>
                <div className="about-cell-sub">Linux, macOS, Windows</div>
              </div>
            </div>
            
            <div className="about-comparison">
              <h2 className="comp-title">PyMatrix vs Alternatives</h2>
              <div className="comp-row">
                <div className="comp-name">PyMatrix</div>
                <div className="comp-lang">Python</div>
                <div className="comp-desc">
                  Pure Python implementation with customizable colors, speed, and trail length. 
                  No external dependencies beyond the standard library.
                </div>
                <div className="comp-badge badge-ours">Native</div>
              </div>
              <div className="comp-row">
                <div className="comp-name">cmatrix</div>
                <div className="comp-lang">C</div>
                <div className="comp-desc">
                  The classic Matrix rain animation in C. Limited customization options.
                </div>
                <div className="comp-badge">Terminal</div>
              </div>
              <div className="comp-row">
                <div className="comp-name">tmatrix</div>
                <div className="comp-lang">Go</div>
                <div className="comp-desc">
                  Go-based Matrix animation with some customization features.
                </div>
                <div className="comp-badge">Terminal</div>
              </div>
              <div className="comp-row">
                <div className="comp-name">web matrix</div>
                <div className="comp-lang">JavaScript</div>
                <div className="comp-desc">
                  Browser-based implementations, not for terminal use.
                </div>
                <div className="comp-badge">Web</div>
              </div>
            </div>
            
            <div className="about-author">
              <div className="author-avatar">NS</div>
              <div className="author-info">
                <h2 className="author-name">Nihal Sheikh</h2>
                <p className="author-handle">@sshNihal</p>
                <p className="author-bio">
                  Open source enthusiast and developer passionate about creating 
                  beautiful terminal experiences. PyMatrix is a labor of love, 
                  inspired by the iconic visual effects of The Matrix.
                </p>
                <div className="author-links">
                  <a href="https://github.com/nihalsheikh" className="author-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://twitter.com/sshNihal" className="author-link" target="_blank" rel="noopener noreferrer">Twitter/X</a>
                  <a href="https://linkedin.com/in/nihalsheikh" className="author-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
              </div>
            </div>
            
            <div className="about-roadmap">
              <h2 className="roadmap-title">Roadmap</h2>
              <div className="roadmap-item">
                <div className="roadmap-check done">✓</div>
                <div className="roadmap-text">
                  <strong>Core animation engine</strong><br/>
                  <span className="roadmap-tag">v1.0</span> Completed
                </div>
              </div>
              <div className="roadmap-item">
                <div className="roadmap-check done">✓</div>
                <div className="roadmap-text">
                  <strong>CLI with argument parsing</strong><br/>
                  <span className="roadmap-tag">v1.0</span> Completed
                </div>
              </div>
              <div className="roadmap-item">
                <div className="roadmap-check done">✓</div>
                <div className="roadmap-text">
                  <strong>Cross-platform support</strong><br/>
                  <span className="roadmap-tag">v1.0</span> Linux, macOS, Windows
                </div>
              </div>
              <div className="roadmap-item">
                <div className="roadmap-check wip">~</div>
                <div className="roadmap-text">
                  <strong>Rainbow color mode</strong><br/>
                  <span className="roadmap-tag">v1.1</span> In progress
                </div>
              </div>
              <div className="roadmap-item">
                <div className="roadmap-check">○</div>
                <div className="roadmap-text">
                  <strong>Custom character sets</strong><br/>
                  <span className="roadmap-tag">v1.2</span> Planned
                </div>
              </div>
              <div className="roadmap-item">
                <div className="roadmap-check">○</div>
                <div className="roadmap-text">
                  <strong>Web portal for sharing configs</strong><br/>
                  <span className="roadmap-tag">v2.0</span> Planned
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
