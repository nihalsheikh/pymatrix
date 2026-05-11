'use client';

import { useEffect, useRef } from 'react';

interface MatrixRainProps {
  color?: string;
  speed?: number;
  density?: 'light' | 'medium' | 'heavy';
  charset?: string;
  opacity?: number;
}

const CHARSETS = {
  katakana: 'ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ',
  binary: '01',
  ascii: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  mixed: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()',
};

const COLORS = {
  green:   { head: '#fff', bright: '#00ff41', mid: '#00cc33', dim: '#003b00', glow: '#00ff41' },
  red:     { head: '#fff', bright: '#ff0000', mid: '#cc0000', dim: '#3b0000', glow: '#ff0000' },
  cyan:    { head: '#fff', bright: '#00ffff', mid: '#00cccc', dim: '#003b3b', glow: '#00ffff' },
  yellow:  { head: '#fff', bright: '#ffff00', mid: '#cccc00', dim: '#3b3b00', glow: '#ffff00' },
  magenta: { head: '#fff', bright: '#ff00ff', mid: '#cc00ff', dim: '#3b003b', glow: '#ff00ff' },
  orange:  { head: '#fff', bright: '#ff8800', mid: '#cc6600', dim: '#3b2200', glow: '#ff8800' },
  violet:  { head: '#fff', bright: '#8800ff', mid: '#6600cc', dim: '#22003b', glow: '#8800ff' },
  pink:    { head: '#fff', bright: '#ff0088', mid: '#cc0066', dim: '#3b0022', glow: '#ff0088' },
};

export default function MatrixRain({ 
  color = 'green', 
  speed = 1.0, 
  density = 'medium', 
  charset = 'katakana',
  opacity = 1.0
}: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const configRef = useRef({ color, speed, density, charset, opacity });

  useEffect(() => {
    configRef.current = { color, speed, density, charset, opacity };
  }, [color, speed, density, charset, opacity]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const FONT_SIZE = 18;
    let cols: number, drops: any[];

    const initDrops = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const step = configRef.current.density === 'light' ? 2.5 : configRef.current.density === 'heavy' ? 0.7 : 1.0;
      cols = Math.floor(canvas.width / (FONT_SIZE * step));
      
      const chars = (CHARSETS as any)[configRef.current.charset] || CHARSETS.katakana;
      
      drops = [];
      for (let i = 0; i < cols; i++) {
        const s = (0.5 + Math.random() * 1.5) * configRef.current.speed;
        drops.push({
          x: i * (FONT_SIZE * step),
          y: Math.random() * -canvas.height,
          speed: s,
          length: Math.floor((15 + Math.random() * 25) * (1.5 / s)),
          chars: Array.from({ length: 60 }, () => chars[Math.floor(Math.random() * chars.length)])
        });
      }
    };

    initDrops();
    window.addEventListener('resize', initDrops);

    const drawRain = () => {
      const current = configRef.current;
      const colors = (COLORS as any)[current.color] || COLORS.green;
      const chars = (CHARSETS as any)[current.charset] || CHARSETS.katakana;

      ctx.fillStyle = `rgba(0, 0, 0, ${0.15 * current.opacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `bold ${FONT_SIZE}px 'Share Tech Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];

        for (let j = 0; j < drop.length; j++) {
          const charY = drop.y - (j * FONT_SIZE);
          if (charY < -FONT_SIZE || charY > canvas.height + FONT_SIZE) continue;

          const char = drop.chars[(Math.floor(charY / FONT_SIZE)) % drop.chars.length];
          
          if (j === 0) {
            ctx.fillStyle = colors.head;
            ctx.shadowBlur = 15;
            ctx.shadowColor = colors.glow;
          } else if (j < 3 || j < drop.length * 0.4) {
            ctx.fillStyle = colors.bright;
            ctx.shadowBlur = j < 3 ? 5 : 0;
            ctx.shadowColor = colors.glow;
          } else if (j < drop.length * 0.7) {
            ctx.fillStyle = colors.mid;
            ctx.shadowBlur = 0;
          } else {
            ctx.fillStyle = colors.dim;
            ctx.shadowBlur = 0;
          }

          ctx.globalAlpha = (1 - j / drop.length) * current.opacity;
          ctx.fillText(char, drop.x, charY);
          ctx.globalAlpha = 1.0;
          
          // Variable flicker
          const flickerChance = j < 3 ? 0.15 : 0.02;
          if (Math.random() < flickerChance) {
            drop.chars[Math.floor(Math.random() * drop.chars.length)] = chars[Math.floor(Math.random() * chars.length)];
          }
        }

        drop.y += drop.speed * 2.5;

        if (drop.y - (drop.length * FONT_SIZE) > canvas.height) {
          drop.y = -FONT_SIZE;
          drop.speed = (0.5 + Math.random() * 1.5) * current.speed;
          drop.length = Math.floor((15 + Math.random() * 25) * (1.5 / drop.speed));
        }
      }
    };

    const interval = setInterval(drawRain, 33);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', initDrops);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} id="rain" style={{ position: 'fixed', inset: 0, zIndex: 0 }} />
      <div id="scanlines" style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none', background: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 4px)' }} />
      <div id="vignette" style={{ position: 'fixed', inset: 0, zIndex: 2, pointerEvents: 'none', background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)' }} />
    </>
  );
}
