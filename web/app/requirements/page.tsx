import MatrixRain from '@/components/MatrixRain';
import Navbar from '@/components/Navbar';
import CopyButton from '@/components/CopyButton';
import { Terminal, Monitor, Cpu, Info, AlertTriangle } from 'lucide-react';

export default function Requirements() {
  return (
    <>
      <MatrixRain opacity={0.3} />
      <div id="site">
        <Navbar />
        
        <div className="page active" id="requirements">
          <section className="about-wrap">
            <h1 className="about-hero-line"><Terminal className="inline-block mr-4 mb-2" size={48} /> REQUIREMENTS</h1>
            <p className="about-intro">
              PyMatrix is designed to be lightweight and highly compatible. 
              Here's what you need to run it smoothly on your system.
            </p>
            
            <div className="about-grid">
              <div className="about-cell">
                <div className="about-cell-label"><Cpu size={14} className="inline mr-2" /> Python</div>
                <div className="about-cell-val">3.6 or higher</div>
                <div className="about-cell-sub">Standard library only</div>
              </div>
              <div className="about-cell">
                <div className="about-cell-label"><Info size={14} className="inline mr-2" /> Library</div>
                <div className="about-cell-val">curses</div>
                <div className="about-cell-sub">Pre-installed on Unix</div>
              </div>
              <div className="about-cell">
                <div className="about-cell-label"><Monitor size={14} className="inline mr-2" /> Terminal</div>
                <div className="about-cell-val">256-Color ANSI</div>
                <div className="about-cell-sub">For high-fidelity rain</div>
              </div>
              <div className="about-cell">
                <div className="about-cell-label"><AlertTriangle size={14} className="inline mr-2" /> Memory</div>
                <div className="about-cell-val">&lt; 20MB RAM</div>
                <div className="about-cell-sub">Very low footprint</div>
              </div>
            </div>

            <div className="doc-section">
              <h2 className="doc-h2">Terminal Calibration</h2>
              <div className="doc-note">
                <div className="doc-note-label">NOTE ON COLOR ACCURACY</div>
                <p className="doc-p">
                  If your rain looks "pinkish" or "washed out" (common in Kitty or Alacritty), your terminal theme is overriding standard colors. 
                  PyMatrix v1.3+ uses <strong>xterm-256</strong> codes to bypass theme mapping, but for the best experience, we recommend these ANSI settings:
                </p>
                <table className="settings-table">
                  <thead>
                    <tr>
                      <th>ANSI Color</th>
                      <th>Suggested Hex</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span className="color-swatch" style={{backgroundColor: '#00ff41'}}></span>Color 10</td>
                      <td><code>#00ff41</code></td>
                      <td>Classic Matrix Green</td>
                    </tr>
                    <tr>
                      <td><span className="color-swatch" style={{backgroundColor: '#ffffff'}}></span>Color 15</td>
                      <td><code>#ffffff</code></td>
                      <td>Pure White (Head)</td>
                    </tr>
                    <tr>
                      <td><span className="color-swatch" style={{backgroundColor: '#000000'}}></span>Color 0</td>
                      <td><code>#000000</code></td>
                      <td>True Black (Background)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="doc-section">
              <h2 className="doc-h2">OS Specific Notes</h2>
              <h3 className="doc-h3">Windows</h3>
              <p className="doc-p">
                We strongly recommend <strong>Windows Terminal</strong>. If using CMD/PowerShell, install the curses bridge:
              </p>
              <div className="doc-code flex justify-between items-center">
                <span>pip install windows-curses</span>
                <CopyButton text="pip install windows-curses" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
