"use client";
import React, { useRef, useEffect } from 'react';

interface MatrixRainProps {
  fontSize?: number;
  speed?: number;
  color?: string;
  glow?: boolean;
  opacity?: number;
  density?: number;
  mutationRate?: number;
}

const MatrixRain: React.FC<MatrixRainProps> = ({
  fontSize = 16,
  speed = 1,
  color = 'oklch(62% 0.22 145)',
  glow = true,
  opacity = 1,
  density = 1,
  mutationRate = 0.1
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const chars = 'ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ0123456789$+-*/=%#&@';
    let columns: any[] = [];

    const init = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      
      const spacing = (fontSize * 0.9) / density;
      const colCount = Math.floor(canvas.width / spacing);
      columns = [];
      
      for (let i = 0; i < colCount; i++) {
        columns.push({
          x: i * spacing,
          y: Math.random() * -100,
          speed: (Math.random() * 0.5 + 0.3) * speed,
          chars: [],
          maxLength: Math.floor(Math.random() * 25) + 15,
          updateCounter: 0,
          updateRate: Math.floor(Math.random() * 5) + 2
        });
      }
    };

    const draw = () => {
      ctx.fillStyle = `rgba(12, 14, 12, ${0.15 * opacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = 'center';

      columns.forEach(col => {
        if (col.updateCounter % col.updateRate === 0) {
          const char = chars[Math.floor(Math.random() * chars.length)];
          col.chars.unshift(char);
          if (col.chars.length > col.maxLength) col.chars.pop();
        }

        if (Math.random() < mutationRate) {
          const mutateIndex = Math.floor(Math.random() * col.chars.length);
          col.chars[mutateIndex] = chars[Math.floor(Math.random() * chars.length)];
        }

        col.updateCounter++;

        col.chars.forEach((char: string, index: number) => {
          const y = (col.y - index) * fontSize;
          if (y < -fontSize || y > canvas.height + fontSize) return;

          if (index === 0) {
            ctx.fillStyle = '#fff';
            if (glow) {
              ctx.shadowBlur = 15;
              ctx.shadowColor = color;
            }
            ctx.fillText(char, col.x, y);
            ctx.shadowBlur = 0;
          } else {
            const charOpacity = Math.pow(1 - (index / col.maxLength), 1.2);
            // Handling oklch opacity for canvas
            let fillColor = color;
            if (color.startsWith('oklch')) {
                fillColor = color.includes('/') 
                    ? color.replace(/\/\s*[\d.]+\)/, `/ ${charOpacity})`)
                    : color.replace(')', ` / ${charOpacity})`);
            }
            ctx.fillStyle = fillColor;
            ctx.fillText(char, col.x, y);
          }
        });

        col.y += col.speed;
        if ((col.y - col.maxLength) * fontSize > canvas.height) {
          col.y = Math.random() * -10;
        }
      });
      animationId = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener('resize', init);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', init);
    };
  }, [fontSize, speed, color, glow, opacity, density, mutationRate]);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
};

export default MatrixRain;
