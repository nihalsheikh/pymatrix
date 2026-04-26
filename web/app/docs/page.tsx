export default function Docs() {
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
            <button className="nav-btn">ABOUT</button>
            <button className="nav-btn active">DOCS</button>
          </div>
          <div className="nav-right">
            <div className="nav-version">v1.0.0</div>
            <a href="https://github.com/nihalsheikh/pymatrix" className="nav-gh" target="_blank" rel="noopener noreferrer">
              <span>GH</span>
            </a>
          </div>
        </nav>
        
        <div className="page active" id="docs">
          <div className="docs-layout">
            <div className="docs-sidebar">
              <div className="docs-nav-label">TABLE OF CONTENTS</div>
              <a href="#installation" className="docs-nav-link active">Installation</a>
              <a href="#usage" className="docs-nav-link">Usage</a>
              <a href="#options" className="docs-nav-link">Options</a>
              <a href="#examples" className="docs-nav-link">Examples</a>
              <a href="#troubleshooting" className="docs-nav-link">Troubleshooting</a>
            </div>
            <div className="docs-main">
              <div className="doc-section" id="installation">
                <h1 className="doc-h1">Installation</h1>
                <h2 className="doc-h2">Quick Start</h2>
                <p className="doc-p">
                  PyMatrix can be installed via pip, or you can use the provided installation scripts for 
                  a more traditional Linux-style installation.
                </p>
                
                <h3 className="doc-h3">Via pip (Recommended)</h3>
                <p className="doc-p">
                  First, ensure you have Python 3.6 or higher installed. Then install PyMatrix from PyPI:
                </p>
                <div className="doc-code">pip install pymatrix</div>
                <p className="doc-p">
                  This will install the <code>pymatrix</code> command in your PATH.
                </p>
                
                <h3 className="doc-h3">From Source</h3>
                <p className="doc-p">
                  If you prefer to install from source, clone the repository and install in development mode:
                </p>
                <div className="doc-code">
                  git clone https://github.com/nihalsheikh/pymatrix.git<br/>
                  cd pymatrix<br/>
                  pip install -e .
                </div>
                
                <h3 className="doc-h3">Installation Scripts</h3>
                <p className="doc-p">
                  We also provide installation scripts that mimic traditional Linux package installation:
                </p>
                <div className="doc-code">
                  # For user-level installation (no sudo required)<br/>
                  ./pymatrix/scripts/install.sh<br/>
                  <br/>
                  # For system-wide installation (requires sudo)<br/>
                  sudo ./pymatrix/scripts/install.sh --system
                </div>
              </div>
              
              <div className="doc-section" id="usage">
                <h1 className="doc-h1">Usage</h1>
                <h2 className="doc-h2">Basic Usage</h2>
                <p className="doc-p">
                  Simply run the <code>pymatrix</code> command to start the animation:
                </p>
                <div className="doc-code">pymatrix</div>
                <p className="doc-p">
                  Press 'q' or ESC to exit the animation.
                </p>
                
                <h2 className="doc-h2">Terminal Resize Handling</h2>
                <p className="doc-p">
                  PyMatrix automatically detects terminal resize events and adjusts the animation accordingly.
                  You can safely resize your terminal while the animation is running.
                </p>
              </div>
              
              <div className="doc-section" id="options">
                <h1 className="doc-h1">Command Line Options</h1>
                <p className="doc-p">
                  PyMatrix offers several command-line options to customize the animation:
                </p>
                <div className="doc-table">
                  <thead>
                    <tr>
                      <th>Option</th>
                      <th>Description</th>
                      <th>Default</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>matrix</code> (positional)</td>
                      <td>Number of symbols per column</td>
                      <td>24</td>
                    </tr>
                    <tr>
                      <td><code>--columns &lt;n&gt;</code></td>
                      <td>Number of columns (default: terminal width)</td>
                      <td>Terminal width</td>
                    </tr>
                    <tr>
                      <td><code>--width &lt;n&gt;</code></td>
                      <td>Output width in characters (default: columns)</td>
                      <td>Terminal width</td>
                    </tr>
                    <tr>
                      <td><code>--height &lt;n&gt;</code></td>
                      <td>Output height in characters (default: terminal height)</td>
                      <td>Terminal height</td>
                    </tr>
                    <tr>
                      <td><code>--color &lt;n&gt;</code></td>
                      <td>ANSI color code (1-16). Common: 36=cyan, 32=green, 33=yellow, 31=red</td>
                      <td>32 (green)</td>
                    </tr>
                    <tr>
                      <td><code>--speed &lt;f&gt;</code></td>
                      <td>Animation speed multiplier</td>
                      <td>1.0</td>
                    </tr>
                    <tr>
                      <td><code>--fps &lt;n&gt;</code></td>
                      <td>Frames per second</td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td><code>--clear</code></td>
                      <td>Clear terminal on start</td>
                      <td>false</td>
                    </tr>
                    <tr>
                      <td><code>--trail &lt;n&gt;</code></td>
                      <td>Length of character trail</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td><code>--help</code></td>
                      <td>Show help message</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td><code>--version</code></td>
                      <td>Show version information</td>
                      <td></td>
                    </tr>
                  </tbody>
                </div>
                <p className="doc-p">
                  Environment variables can also be used to set default values:
                </p>
                <div className="doc-table">
                  <thead>
                    <tr>
                      <th>Variable</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>PYMATRIX_WIDTH</td>
                      <td>Set default terminal width</td>
                    </tr>
                    <tr>
                      <td>PYMATRIX_HEIGHT</td>
                      <td>Set default terminal height</td>
                    </tr>
                    <tr>
                      <td>PYMATRIX_COLOR</td>
                      <td>Set default color code (e.g., 36 for cyan)</td>
                    </tr>
                  </tbody>
                </div>
              </div>
              
              <div className="doc-section" id="examples">
                <h1 className="doc-h1">Examples</h1>
                <div className="doc-code">
                  # Default settings (green rain, 24 symbols per column)<br/>
                  pymatrix<br/>
                  <br/>
                  # Full-width cyan matrix<br/>
                  pymatrix --columns $(tput cols) --color 36<br/>
                  <br/>
                  # Fast red matrix with short trail<br/>
                  pymatrix --color 31 --speed 2.0 --trail 5<br/>
                  <br/>
                  # Custom size blue matrix<br/>
                  pymatrix --width 80 --height 30 --color 36 --clear<br/>
                  <br/>
                  # High FPS smooth animation<br/>
                  pymatrix --fps 60<br/>
                  <br/>
                  # Using environment variables<br/>
                  PYMATRIX_COLOR=36 PYMATRIX_SPEED=1.5 pymatrix
                </div>
              </div>
              
              <div className="doc-section" id="troubleshooting">
                <h1 className="doc-h1">Troubleshooting</h1>
                <h2 className="doc-h2">Common Issues</h2>
                <div className="doc-note">
                  <div className="doc-note-label">Note</div>
                  <p className="doc-p">
                    If you're using Windows, PyMatrix requires Windows Subsystem for Linux (WSL) or 
                    Windows Terminal with proper VT100 support.
                  </p>
                </div>
                
                <div className="doc-warn">
                  <div className="doc-warn-label">Warning</div>
                  <p className="doc-p">
                    On very old systems or terminals with limited color support, you may experience 
                    reduced functionality. Try reducing the FPS or using a simpler color scheme.
                  </p>
                </div>
                
                <h3 className="doc-h3">Error: nocbreak() returned ERR</h3>
                <p className="doc-p">
                  This error occurs when the terminal doesn't support the required curses functions. 
                  Try running the command in a different terminal emulator or ensure your terminal 
                  supports ANSI escape codes.
                </p>
                
                <h3 className="doc-h3">Animation too fast or too slow</h3>
                <p className="doc-p">
                  Adjust the <code>--speed</code> and <code>--fps</code> parameters to control the 
                  animation speed. Lower values for slower animation, higher values for faster.
                </p>
                
                <h3 className="doc-h3">Characters not displaying correctly</h3>
                <p className="doc-p">
                  Ensure your terminal uses a monospace font and supports UTF-8 encoding. 
                  The animation uses a wide range of ASCII characters that require proper font support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
