import MatrixRain from '@/components/MatrixRain';
import Navbar from '@/components/Navbar';
import { History, Target, Map, Star, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <>
      <MatrixRain opacity={0.2} />
      <div id="site">
        <Navbar />
        
        <div className="page active" id="about">
          <section className="about-wrap">
            <h1 className="about-hero-line"><History className="inline-block mr-4 mb-2" size={48} /> THE PROJECT</h1>
            <p className="about-intro">
              PyMatrix is an advanced <strong>digital rain engine</strong> that brings the cinematic code-flow effect to high-performance terminals. 
              Built with pure Python and optimized for 256-color TTY environments.
            </p>
            
            <div className="about-grid">
              <div className="about-cell">
                <div className="about-cell-label">ENGINE</div>
                <div className="about-cell-val">TMatrix-Inspired</div>
                <div className="about-cell-sub">5-zone gradient logic</div>
              </div>
              <div className="about-cell">
                <div className="about-cell-label">LICENSE</div>
                <div className="about-cell-val">MIT</div>
                <div className="about-cell-sub">Open source & free</div>
              </div>
              <div className="about-cell">
                <div className="about-cell-label">COLOR</div>
                <div className="about-cell-val">256-Bit ANSI</div>
                <div className="about-cell-sub">Theme-independent rendering</div>
              </div>
              <div className="about-cell">
                <div className="about-cell-label">VERSION</div>
                <div className="about-cell-val">v1.3.0</div>
                <div className="about-cell-sub">Stable release</div>
              </div>
            </div>

            <div className="doc-section">
              <h2 className="doc-h2"><Target size={24} className="inline mr-3" /> Core Vision</h2>
              <p className="doc-p">
                Most Matrix clones suffer from theme-interference where terminal colors bleed into the animation. 
                PyMatrix solves this by using direct color mapping and a physics-based trail engine. 
                Our goal is to provide the most authentic, flicker-heavy, and high-contrast digital rain available for CLI.
              </p>
            </div>

            <div className="about-roadmap">
              <h2 className="roadmap-title"><Map size={24} className="inline mr-3" /> Technical Roadmap</h2>
              <div className="roadmap-item">
                <div className="roadmap-check done">✓</div>
                <div className="roadmap-text">
                  <strong>v1.3 — Cinematic Update</strong>
                  256-color bypass, 5-zone comet tails, and character spacing.
                </div>
              </div>
              <div className="roadmap-item">
                <div className="roadmap-check wip">~</div>
                <div className="roadmap-text">
                  <strong>v1.4 — Directional Rain</strong>
                  Sideways/Horizontal rain modes (Left-to-Right, Right-to-Left).
                </div>
              </div>
              <div className="roadmap-item">
                <div className="roadmap-check">○</div>
                <div className="roadmap-text">
                  <strong>v1.5 — Overlay Layer</strong>
                  Glowing/Blinking central text and custom notification overlays.
                </div>
              </div>
              <div className="roadmap-item">
                <div className="roadmap-check">○</div>
                <div className="roadmap-text">
                  <strong>v2.0 — Custom Streams</strong>
                  Rain composed of user-defined strings and ASCII art segments.
                </div>
              </div>
            </div>

            <div className="about-author">
              <div className="author-avatar"><Star size={32} /></div>
              <div className="author-info">
                <h2 className="author-name">Nihal Sheikh</h2>
                <p className="author-handle">@sshNihal</p>
                <p className="author-bio">
                  Building high-fidelity terminal tools and cinematic CLI experiences.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
