"use client";

import quantumLogo from "@/assets/images/quantum.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import outsideLogo from "@/assets/images/outside.svg";
import apexLogo from "@/assets/images/apex.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import twiceLogo from "@/assets/images/twice.svg";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const logos = [
  { name: "Quantum", image: quantumLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Twice", image: twiceLogo },
];

export default function LogoTicker() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const firstChild = slider.children[0] as HTMLElement;
    if (!firstChild) return;

    const logoWidth = firstChild.offsetWidth;
    const gap = 96;
    const moveDistance = (logoWidth + gap) * logos.length;

    gsap.set(slider, { x: 0 });

    gsap.to(slider, {
      x: -moveDistance,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section className="py-24 overflow-x-clip">
      <div className="container px-4 mx-auto">
        <h3 className="text-center text-white/50 text-xl">
          Already chosen by these market leaders
        </h3>
        <div className="overflow-hidden mt-12 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div ref={sliderRef} className="flex gap-24 pr-24">
            {logos.map((logo) => (
              <Image src={logo.image} key={logo.name} alt={logo.name} />
            ))}
            {logos.map((logo) => (
              <Image
                src={logo.image}
                key={`${logo.name}-duplicate`}
                alt={logo.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
