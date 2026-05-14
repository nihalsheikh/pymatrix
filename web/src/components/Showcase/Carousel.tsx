"use client";
import React, { useState } from "react";
import MatrixRain from "@/components/MatrixRain";
import CommandBlock from "@/components/CommandBlock";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SHOWCASE_VARIATIONS } from "@/constants";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const v = SHOWCASE_VARIATIONS[currentIndex];

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % SHOWCASE_VARIATIONS.length);
  const prev = () =>
    setCurrentIndex(
      (prev) =>
        (prev - 1 + SHOWCASE_VARIATIONS.length) % SHOWCASE_VARIATIONS.length,
    );

  return (
    <div className="relative max-w-[90vw] mx-auto px-24">
      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-[-6rem] top-1/2 -translate-y-1/2 w-20 h-20 bg-surface border border-border rounded-full flex items-center justify-center text-fg hover:border-accent hover:text-accent hover:shadow-matrix transition-all z-20 group"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        onClick={next}
        className="absolute right-[-6rem] top-1/2 -translate-y-1/2 w-20 h-20 bg-surface border border-border rounded-full flex items-center justify-center text-fg hover:border-accent hover:text-accent hover:shadow-matrix transition-all z-20 group"
      >
        <ChevronRight size={40} />
      </button>

      <div className="mb-12 max-w-5xl mx-auto">
        <CommandBlock
          key={v.command}
          command={v.command}
          color={v.options.color}
        />
      </div>

      {/* Larger Terminal with Mac Dots */}
      <div className="flex flex-col bg-black border border-border rounded-[1.5rem] overflow-hidden relative shadow-[0_0_150px_rgba(0,0,0,0.9)] border-opacity-30">
        <div className="bg-[#1a1a1a] p-4 flex items-center gap-4 border-b border-border/30">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          <div className="flex-1 text-center font-mono text-base text-muted tracking-[0.25em] font-bold">
            nihal@pymatrix: ~/{v.title.toLowerCase().replace(" ", "-")}.sh
          </div>
        </div>
        <div className="aspect-[16/9] relative">
          <MatrixRain
            key={currentIndex}
            color={v.options.color}
            speed={v.options.speed}
            mutationRate={v.options.mutationRate || 0.1}
            fontSize={24}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
