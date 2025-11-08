"use client";

import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Button from "@/components/Button";
import { useState, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setShowMenu(true);
      setTimeout(() => {
        if (!menuRef.current) return;
        const menuItems = Array.from(menuRef.current.children) as HTMLElement[];

        gsap.set(menuItems, { opacity: 0, y: -20 });
        gsap.to(menuItems, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      }, 10);
    } else if (showMenu && menuRef.current) {
      const menuItems = Array.from(menuRef.current.children) as HTMLElement[];
      gsap.to(menuItems, {
        opacity: 0,
        y: -10,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          setShowMenu(false);
        },
      });
    }
  }, [isOpen, showMenu]);

  return (
    <>
      <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="border border-white/15 rounded-[27px] bg-neutral-950/70 backdrop-blur">
            <div className="grid grid-cols-2 lg:grid-cols-3 p-2 px-4 md:pr-2 items-center">
              <div>
                <Image
                  src={logo}
                  alt="Layers"
                  className="h-9 md:h-auto w-auto"
                />
              </div>
              <div className="lg:flex justify-center items-center hidden">
                <nav className="flex gap-6 font-semibold">
                  {navLinks.map((link) => (
                    <a href={link.href} key={link.label}>
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="flex justify-end gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-menu md:hidden"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "rotate-45 -translate-y-1"
                    )}
                  ></line>
                  <line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                    className={twMerge(isOpen && "opacity-0")}
                  ></line>
                  <line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "-rotate-45 translate-y-1"
                    )}
                  ></line>
                </svg>
                <Button
                  variant="secondary"
                  className="hidden md:inline-flex items-center"
                >
                  Log In
                </Button>
                <Button
                  variant="primary"
                  className="hidden md:inline-flex items-center"
                >
                  Sign Up
                </Button>
              </div>
            </div>
            {showMenu && (
              <div
                ref={menuRef}
                className="flex flex-col items-center gap-4 py-2"
              >
                {navLinks.map((link) => (
                  <a href={link.href} key={link.label} className="opacity-0">
                    {link.label}
                  </a>
                ))}
                <div className="opacity-0">
                  <Button variant="secondary">Log In</Button>
                </div>
                <div className="opacity-0">
                  <Button variant="primary">Sign Up</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <div className="pb-[86px] md:pb-[98px] lg:px-[130px]"></div>
    </>
  );
}
