"use client";

import Tag from "@/components/Tag";
import figmaIcon from "@/assets/images/figma-logo.svg";
import notionIcon from "@/assets/images/notion-logo.svg";
import slackIcon from "@/assets/images/slack-logo.svg";
import relumeIcon from "@/assets/images/relume-logo.svg";
import framerIcon from "@/assets/images/framer-logo.svg";
import githubIcon from "@/assets/images/github-logo.svg";
import Image from "next/image";
import IntegrationsColumn from "@/components/IntegrationsColumn";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const integrations = [
  {
    name: "Figma",
    icon: figmaIcon,
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: notionIcon,
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: slackIcon,
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: relumeIcon,
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    icon: framerIcon,
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "GitHub",
    icon: githubIcon,
    description: "GitHub is the leading platform for code collaboration.",
  },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
  const column1Ref = useRef<HTMLDivElement>(null);
  const column2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!column1Ref.current || !column2Ref.current) return;

    const column1Height = column1Ref.current.scrollHeight / 2;
    const column2Height = column2Ref.current.scrollHeight / 2;

    gsap.to(column1Ref.current, {
      y: -column1Height,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    gsap.fromTo(
      column2Ref.current,
      { y: -column2Height },
      {
        y: 0,
        duration: 20,
        ease: "none",
        repeat: -1,
      }
    );
  }, []);

  return (
    <section className="py-24 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <Tag>Integrations</Tag>
            <h2 className="text-6xl font-medium mt-6 lg:max-w-xl">
              Plays well with <span className="text-lime-400">others</span>
            </h2>
            <p className="text-white/50 mt-4 text-lg">
              Layers seamlessly connects with your favorite tools, making it
              easy to plug into any workflow and collaborate across platforms.
            </p>
          </div>
          <div>
            <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 grid md:grid-cols-2 gap-4 overflow-hidden mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] lg:max-w-xl lg:justify-self-end">
              <div ref={column1Ref}>
                <IntegrationsColumn integrations={integrations} />
                <IntegrationsColumn integrations={integrations} />
              </div>
              <div
                ref={column2Ref}
                className="hidden md:flex md:flex-col lg:mt-8"
              >
                <IntegrationsColumn
                  integrations={integrations.slice().reverse()}
                />
                <IntegrationsColumn
                  integrations={integrations.slice().reverse()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
