'use client';

import MatrixRain from '@/components/MatrixRain';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import CopyButton from '@/components/CopyButton';
import { useState, useEffect, useRef } from 'react';
import { Code, Terminal, Zap, Globe, Package, ArrowRight, Play, Terminal as TerminalIcon } from 'lucide-react';

const DEMO_COMMANDS = [
  {
    id: 'classic',
    title: 'Original Sin',
    cmd: 'pymatrix --chars katakana -c green -d medium',
    desc: 'The definitive digital rain experience.',
    config: { color: 'green', charset: 'katakana', speed: 1.0, density: 'medium' }
  },
  {
    id: 'cyber',
    title: 'Binary Overload',
    cmd: 'pym --chars binary -c red -s 2.0 -l long',
    desc: 'Aggressive red binary streams.',
    config: { color: 'red', charset: 'binary', speed: 2.2, density: 'medium' }
  },
  {
    id: 'ghost',
    title: 'Ethereal Ghost',
    cmd: 'pymatrix -c cyan -d light -l long -s 0.6',
    desc: 'Wispy, high-latency cyan trails.',
    config: { color: 'cyan', charset: 'katakana', speed: 0.6, density: 'light' }
  },
  {
    id: 'warning',
    title: 'System Alert',
    cmd: 'pym --chars symbols -c yellow -d heavy',
    desc: 'Critical warning glyphs at maximum density.',
    config: { color: 'yellow', charset: 'symbols', speed: 1.5, density: 'heavy' }
  },
  {
    id: 'magenta-void',
    title: 'Magenta Void',
    cmd: 'pym -c magenta --chars binary -f 60 -s 2.5',
    desc: 'Hyper-speed magenta binary at 60 FPS.',
    config: { color: 'magenta', charset: 'binary', speed: 2.5, density: 'medium' }
  },
  {
    id: 'hacker-white',
    title: 'Pure Source',
    cmd: 'pym -c white --chars ascii -d heavy',
    desc: 'Clean, monochrome source code rain.',
    config: { color: 'white', charset: 'ascii', speed: 1.2, density: 'heavy' }
  }
] as const;

export default function Landing() {
  const [activeCmd, setActiveCmd] = useState<typeof DEMO_COMMANDS[number]>(DEMO_COMMANDS[0]);
  const [liveConfig, setLiveConfig] = useState(DEMO_COMMANDS[0].config);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const runCommand = (cmdObj: typeof DEMO_COMMANDS[number]) => {
    if (isTyping) return;
    setActiveCmd(cmdObj);
    setIsTyping(true);
    
    let i = 0;
    setTerminalLines(prev => [...prev, `nihal@linux:~$ `]);
    
    const typeInterval = setInterval(() => {
      setTerminalLines(prev => {
        const newLines = [...prev];
        newLines[newLines.length - 1] = `nihal@linux:~$ ${cmdObj.cmd.substring(0, i + 1)}`;
        return newLines;
      });
      i++;
      if (i >= cmdObj.cmd.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setTerminalLines(prev => [
            ...prev,
            `[PYMATRIX] Engine: TMatrix-V1.3`,
            `[PYMATRIX] Character set: ${cmdObj.config.charset}`,
            `[PYMATRIX] Mode: Cinematic 5-Zone Render`,
            `Running...`
          ]);
          setIsTyping(false);
          setLiveConfig(cmdObj.config);
        }, 300);
      }
    }, 30);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [terminalLines]);

  return (
    <>
      <MatrixRain {...liveConfig} />
      <div id="site">
        <Navbar />
        
        <div className="page active" id="landing">
          <section className="land-hero">
            <div className="hero-pre"><TerminalIcon size={12} className="inline mr-2" /> <span>INITIALIZING SYSTEM...</span></div>
            <h1 className="hero-title">PYMATRIX</h1>
            <h2 className="hero-sub-title">Advanced Digital Rain Engine</h2>
            <p className="hero-desc">
              Experience the cinematic TMatrix-inspired falling code effect. 
              High-performance, theme-independent, and fully customizable.
            </p>
            <div className="hero-install flex items-center justify-between min-w-[320px]">
              <div className="flex items-center">
                <span className="hero-install-prompt mr-3">&gt;_</span>
                <span className="font-bold">pipx install pymatrix</span>
              </div>
              <CopyButton text="pipx install pymatrix" />
            </div>
            <div className="hero-btns mt-8">
              <Link href="/about" className="btn-primary">View Project</Link>
              <Link href="/docs" className="btn-outline">Documentation</Link>
            </div>
          </section>
          
          <section className="land-features">
            <div className="section-label"><span></span>CAPABILITIES</div>
            <div className="feat-grid">
              <div className="feat-card">
                <Zap className="text-white mb-4" size={24} />
                <h3 className="feat-title">TMatrix Logic</h3>
                <p className="feat-desc">5-zone gradient rendering with white head clusters and aggressive tail dimming.</p>
              </div>
              <div className="feat-card">
                <Terminal className="text-white mb-4" size={24} />
                <h3 className="feat-title">Theme Bypass</h3>
                <p className="feat-desc">Uses direct xterm-256 color mapping to bypass your terminal's rose/pink theme overrides.</p>
              </div>
              <div className="feat-card">
                <Package className="text-white mb-4" size={24} />
                <h3 className="feat-title">Zero Deps</h3>
                <p className="feat-desc">Pure Python implementation using only the standard library curses module.</p>
              </div>
            </div>
          </section>

          <section className="land-interactive">
            <div className="section-label"><span></span>LIVE ENGINE PRESETS</div>
            <div className="demo-container">
              <div className="demo-sidebar">
                {DEMO_COMMANDS.map((cmd) => (
                  <div 
                    key={cmd.id} 
                    className={`cmd-card ${activeCmd.id === cmd.id ? 'active' : ''}`}
                    onClick={() => runCommand(cmd)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="cmd-title">{cmd.title}</div>
                      <Play size={10} className={activeCmd.id === cmd.id ? 'text-white' : 'text-green-900'} />
                    </div>
                    <div className="cmd-desc">{cmd.desc}</div>
                  </div>
                ))}
              </div>
              <div className="terminal-wrap">
                <div className="terminal-header">
                  <div className="t-dot" style={{backgroundColor: '#ff5f56'}}></div>
                  <div className="t-dot" style={{backgroundColor: '#ffbd2e'}}></div>
                  <div className="t-dot" style={{backgroundColor: '#27c93f'}}></div>
                  <div className="t-title">bash — interactive@pymatrix</div>
                </div>
                <div className="terminal-screen" ref={scrollRef}>
                  {terminalLines.length === 0 && (
                    <div className="t-prompt">nihal@linux:~$ <span className="t-cursor"></span></div>
                  )}
                  {terminalLines.map((line, idx) => (
                    <div key={idx} className="t-line">
                      {line.startsWith('nihal@') ? (
                        <span className="t-prompt">{line}</span>
                      ) : line.startsWith('[PYMATRIX]') ? (
                        <span className="text-white opacity-80">{line}</span>
                      ) : (
                        <span className="t-comment">{line}</span>
                      )}
                      {idx === terminalLines.length - 1 && isTyping && <span className="t-cursor"></span>}
                    </div>
                  ))}
                  {!isTyping && terminalLines.length > 0 && (
                    <div className="t-prompt">nihal@linux:~$ <span className="t-cursor"></span></div>
                  )}
                </div>
              </div>
            </div>
          </section>
          
          <div className="land-stats">
            <div className="stat-block">
              <div className="stat-num">256</div>
              <div className="stat-label">COLORS</div>
            </div>
            <div className="stat-block">
              <div className="stat-num">5</div>
              <div className="stat-label">ZONES</div>
            </div>
            <div className="stat-block">
              <div className="stat-num">60</div>
              <div className="stat-label">MAX FPS</div>
            </div>
            <div className="stat-block">
              <div className="stat-num">0</div>
              <div className="stat-label">DEPS</div>
            </div>
          </div>
          
          <section className="land-cta">
            <h2 className="text-white">Experience the code.</h2>
            <p className="mb-12">Install the advanced digital rain engine today.</p>
            <a className="btn-primary" href="https://github.com/nihalsheikh/pymatrix" target="_blank" rel="noopener noreferrer">VIEW ON GITHUB</a>
          </section>
        </div>
      </div>
    </>
  );
}
