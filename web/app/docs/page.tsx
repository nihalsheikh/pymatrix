import MatrixRain from '@/components/MatrixRain';
import Navbar from '@/components/Navbar';
import CopyButton from '@/components/CopyButton';

export default function Docs() {
  return (
    <>
      <MatrixRain opacity={0.3} />
      <div id="site">
        <Navbar />
        
        <div className="page active" id="docs">
          <div className="docs-layout">
            <div className="docs-sidebar">
              <div className="docs-nav-label">TABLE OF CONTENTS</div>
              <a href="#installation" className="docs-nav-link active">Installation</a>
              <a href="#usage" className="docs-nav-link">Usage</a>
              <a href="#options" className="docs-nav-link">Options</a>
              <a href="#examples" className="docs-nav-link">Examples</a>
            </div>
            <div className="docs-main">
              <div className="doc-section" id="installation">
                <h1 className="doc-h1">Installation</h1>
                <p className="doc-p">
                  PyMatrix can be installed via pip. Ensure you have Python 3.6 or higher installed.
                </p>
                <div className="doc-code flex justify-between items-center">
                  <span>pip install pymatrix</span>
                  <CopyButton text="pip install pymatrix" />
                </div>
                <p className="doc-p">
                  This will install the <code>pymatrix</code> and <code>pym</code> commands in your PATH.
                </p>
              </div>
              
              <div className="doc-section" id="usage">
                <h1 className="doc-h1">Usage</h1>
                <p className="doc-p">
                  Simply run the <code>pymatrix</code> or <code>pym</code> command to start the animation:
                </p>
                <div className="doc-code flex justify-between items-center">
                  <span>pymatrix</span>
                  <CopyButton text="pymatrix" />
                </div>
                <p className="doc-p">
                  Press 'q' or ESC to exit the animation.
                </p>
              </div>
              
              <div className="doc-section" id="options">
                <h1 className="doc-h1">Command Line Options</h1>
                <table className="doc-table">
                  <thead>
                    <tr>
                      <th>Option</th>
                      <th>Short</th>
                      <th>Description</th>
                      <th>Default</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>--color</code></td>
                      <td><code>-c</code></td>
                      <td>Rain color (green, red, blue, cyan, etc.)</td>
                      <td>green</td>
                    </tr>
                    <tr>
                      <td><code>--speed</code></td>
                      <td><code>-s</code></td>
                      <td>Animation speed multiplier</td>
                      <td>1.0</td>
                    </tr>
                    <tr>
                      <td><code>--density</code></td>
                      <td><code>-d</code></td>
                      <td>Column density (light, medium, heavy)</td>
                      <td>medium</td>
                    </tr>
                    <tr>
                      <td><code>--chars</code></td>
                      <td><code>--chars</code></td>
                      <td>Character set (katakana, binary, mixed, etc.)</td>
                      <td>mixed</td>
                    </tr>
                    <tr>
                      <td><code>--length</code></td>
                      <td><code>-l</code></td>
                      <td>Length of character trail</td>
                      <td>medium</td>
                    </tr>
                    <tr>
                      <td><code>--fps</code></td>
                      <td><code>-f</code></td>
                      <td>Frames per second</td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td><code>--clear</code></td>
                      <td><code>-C</code></td>
                      <td>Clear terminal on start</td>
                      <td>false</td>
                    </tr>
                    <tr>
                      <td><code>--no-bold</code></td>
                      <td><code>--no-bold</code></td>
                      <td>Disable bold text</td>
                      <td>false</td>
                    </tr>
                    <tr>
                      <td><code>--version</code></td>
                      <td><code>-v</code></td>
                      <td>Show version information</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="doc-section" id="examples">
                <h1 className="doc-h1">Examples</h1>
                <div className="doc-code group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white opacity-40"># Default settings</span>
                    <CopyButton text="pymatrix" />
                  </div>
                  <code className="block">pymatrix</code>
                </div>

                <div className="doc-code group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white opacity-40"># Cyan rain with Japanese glyphs</span>
                    <CopyButton text="pymatrix -c cyan --chars katakana" />
                  </div>
                  <code className="block">pymatrix -c cyan --chars katakana</code>
                </div>

                <div className="doc-code group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white opacity-40"># Fast red binary rain</span>
                    <CopyButton text="pym -c red --chars binary -s 2.0" />
                  </div>
                  <code className="block">pym -c red --chars binary -s 2.0</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
