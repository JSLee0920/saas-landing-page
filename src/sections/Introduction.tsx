"use client";

import Tag from "@/components/Tag";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");

export default function Introduction() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current || wordsRef.current.length === 0) return;

    gsap.set(wordsRef.current.filter(Boolean), {
      color: "rgba(255, 255, 255, 0.15)",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    wordsRef.current.forEach((word, index) => {
      if (!word) return;
      tl.to(
        word,
        {
          color: "rgba(255, 255, 255, 1)",
          duration: 0.5,
        },
        index * 0.1
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-28">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center">
          <Tag>Introducing Layers</Tag>
        </div>
        <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
          <span>Your creative process deserves better.</span>{" "}
          <span className="text-white/15">
            {words.map((word, index) => (
              <span
                key={index}
                ref={(el) => {
                  wordsRef.current[index] = el;
                }}
                className="inline-block"
              >
                {word}
                {index < words.length - 1 ? "\u00A0" : ""}
              </span>
            ))}
          </span>
          <span className="text-lime-400 block">
            That&apos;s why we built layers.
          </span>
        </div>
      </div>
    </section>
  );
}
