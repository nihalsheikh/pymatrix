"use client";
import React from 'react';

interface BorderBeamProps {
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

const BorderBeam: React.FC<BorderBeamProps> = ({
  duration = 8,
  borderWidth = 2,
  anchor = 90,
  colorFrom = "var(--accent)",
  colorTo = "transparent",
  delay = 0,
}) => {
  return (
    <div
      style={
        {
          "--duration": `${duration}s`,
          "--border-width": `${borderWidth}px`,
          "--anchor": `${anchor}`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`,
        } as React.CSSProperties
      }
      className="absolute inset-0 rounded-[inherit] [border:var(--border-width)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
    >
      <div className="absolute [background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] aspect-square h-[calc(var(--anchor)*1%)] transition-opacity animate-border-beam offset-path-rect [offset-anchor:100%_50%]" />
    </div>
  );
};

export default BorderBeam;
