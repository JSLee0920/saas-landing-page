"use client";

import Button from "@/components/Button";
import designExample1Img from "@/assets/images/design-example-1.png";
import designExample2Img from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export default function Hero() {
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!image1Ref.current || !image2Ref.current) return;

    const draggable1 = Draggable.create(image1Ref.current, {
      type: "x,y",
    });

    const draggable2 = Draggable.create(image2Ref.current, {
      type: "x,y",
    });

    return () => {
      draggable1[0].kill();
      draggable2[0].kill();
    };
  }, []);

  return (
    <section className="py-30 overflow-x-clip overflow-y-hidden">
      <div className="container px-4 mx-auto relative">
        <div
          ref={image1Ref}
          className="absolute -left-32 top-16 hidden lg:block"
        >
          <Image
            src={designExample1Img}
            alt="Design Example 1"
            draggable={false}
          />
        </div>
        <div
          ref={image2Ref}
          className="absolute -right-64 -top-16 hidden lg:block"
        >
          <Image
            src={designExample2Img}
            alt="Design Example 2"
            draggable={false}
          />
        </div>
        <div className="absolute left-56 top-96 hidden lg:block">
          <Pointer name="Andrea" />
        </div>
        <div className="absolute right-80 -top-4 hidden lg:block">
          <Pointer name="Justin" color="red" />
        </div>
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-linear-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-bold">
            $7.5M seed round raised
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 max-w-4xl mx-auto">
          Impactful design, create effortlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          Design tools shouldn&apos;t slow you down. Layers combines powerful
          features with an intuitive interface that keeps you in your creative
          flow.
        </p>
        <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4 border-none outline-none md:flex-1 focus:ring-0 placeholder:text-white/50 w-full"
          />
          <Button
            type="submit"
            variant="primary"
            size="sm"
            className="whitespace-nowrap"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
