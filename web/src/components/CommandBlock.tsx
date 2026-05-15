"use client";
import React, { useState } from 'react';
import MatrixRain from './MatrixRain';
import { Copy, Check } from 'lucide-react';
import ElectricBorder from './ElectricBorder';
import { CommandBlockProps } from '@/types';

const CommandBlock: React.FC<CommandBlockProps> = ({ command, className, color, showBorderBeam = false }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const borderClasses = showBorderBeam ? "" : "border border-border hover:border-accent";

  const innerContent = (
    <div className={`relative overflow-hidden bg-surface rounded-xl group transition-all ${borderClasses} p-6`}>
      {/* Dimmed Matrix Rain background */}
      <div className="absolute inset-0 z-0">
        <MatrixRain opacity={0.15} fontSize={12} speed={0.4} color={color} />
        <div className="absolute inset-0 bg-bg/60 backdrop-blur-[1px]" />
      </div>
      
      <div className="relative z-10 flex items-center justify-between gap-4 font-mono">
        <div className="flex items-center gap-3">
          <span className="text-accent font-bold">$</span>
          <span className="text-fg text-lg font-semibold tracking-tight">{command}</span>
        </div>
        <button 
          onClick={handleCopy}
          className={`p-2 rounded-lg transition-all relative z-20 ${copied ? 'bg-accent text-bg' : 'hover:bg-accent-soft text-muted hover:text-accent'}`}
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </button>
      </div>
    </div>
  );

  if (showBorderBeam) {
    return (
      <ElectricBorder color="#29ff1b" borderRadius={12} chaos={0.1} className={className}>
        {innerContent}
      </ElectricBorder>
    );
  }

  return <div className={className}>{innerContent}</div>;
};

export default CommandBlock;
