"use client";
import React, { useState } from 'react';
import MatrixRain from "@/components/MatrixRain";
import { DEMO_PRESETS } from "@/constants";

const LiveDemo = () => {
  const [demoOptions, setDemoOptions] = useState({
    command: DEMO_PRESETS[0].cmd,
    color: DEMO_PRESETS[0].options.color,
    speed: DEMO_PRESETS[0].options.speed,
    density: DEMO_PRESETS[0].options.density
  });

  return (
    <section className="py-40 bg-surface border-y border-border">
      <div className="container">
        <h2 className="glow-text text-5xl font-display mb-20 text-left">Live Interface</h2>
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-16 h-auto lg:h-[550px]">
          <div className="flex flex-col gap-4 overflow-y-auto pr-6 bg-bg p-8 border border-border rounded-xl">
            {DEMO_PRESETS.map((preset, i) => (
              <button
                key={i}
                onClick={() => setDemoOptions({ command: preset.cmd, ...preset.options })}
                className={`relative p-6 bg-surface border rounded-lg font-mono text-sm text-left transition-all transform hover:translate-x-2 overflow-hidden ${
                  demoOptions.command === preset.cmd ? 'border-accent text-accent bg-accent-soft' : 'border-border text-muted'
                }`}
              >
                {/* Brightened animation for demo buttons */}
                <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-70 transition-opacity">
                  <MatrixRain fontSize={10} speed={0.4} opacity={0.4} />
                  <div className="absolute inset-0 bg-bg/20" />
                </div>
                <span className="relative z-10 font-bold">{preset.label}</span>
              </button>
            ))}
          </div>
          
          <div className="flex flex-col bg-black border border-border rounded-xl overflow-hidden shadow-2xl relative">
            <div className="bg-[#1a1a1a] p-4 flex items-center gap-3 border-b border-border">
              <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]" />
              <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
              <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
              <div className="flex-1 text-center font-mono text-xs text-muted tracking-widest font-bold">nihal@pymatrix: ~</div>
            </div>
            <div className="flex-1 relative">
              <MatrixRain 
                key={demoOptions.command} 
                fontSize={16} 
                color={demoOptions.color} 
                speed={demoOptions.speed} 
                density={demoOptions.density} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
