"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CallToAction() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const sliderWidth = slider.scrollWidth / 2;

    gsap.set(slider, { x: 0 });

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(slider, {
      x: -sliderWidth,
      duration: 30,
      ease: "none",
      onComplete: () => {
        gsap.set(slider, { x: 0 });
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="py-24">
      <div className="overflow-x-clip p-4 flex">
        <div
          ref={sliderRef}
          className="flex flex-none gap-16 text-7xl md:text-8xl font-medium"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-lime-400 text-7xl">&#10038;</span>
              <span className="whitespace-nowrap">Try it for free</span>
            </div>
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-16">
              <span className="text-lime-400 text-7xl">&#10038;</span>
              <span className="whitespace-nowrap">Try it for free</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
