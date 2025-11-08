"use client";
import Tag from "@/components/Tag";
import { twMerge } from "tailwind-merge";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const faqs = [
  {
    question: "How is Layers different from other design tools?",
    answer:
      "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
  },
  {
    question: "Is there a learning curve?",
    answer:
      "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
  },
  {
    question: "How do you handle version control?",
    answer:
      "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
  },
  {
    question: "Can I work offline?",
    answer:
      "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
  },
  {
    question: "How does Layers handle collaboration?",
    answer:
      "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
  },
];

export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [prevIndex, setPrevIndex] = useState<number>(0);
  const answersRef = useRef<(HTMLDivElement | null)[]>([]);
  const iconsRef = useRef<(SVGSVGElement | null)[]>([]);

  useEffect(() => {
    const indicesToAnimate = [prevIndex, selectedIndex];

    indicesToAnimate.forEach((index) => {
      const answer = answersRef.current[index];
      const icon = iconsRef.current[index];
      if (!answer || !icon) return;

      if (index === selectedIndex) {
        gsap.fromTo(
          answer,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
        );
        gsap.to(icon, { rotation: 45, duration: 0.3, ease: "power2.out" });
      } else {
        gsap.fromTo(
          answer,
          { height: answer.scrollHeight },
          {
            height: 0,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
          }
        );
        gsap.to(icon, { rotation: 0, duration: 0.3, ease: "power2.in" });
      }
    });

    setPrevIndex(selectedIndex);
  }, [selectedIndex]);

  return (
    <section className="py-24 text-white min-h-screen">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center">
          <Tag>Faqs</Tag>
        </div>
        <h2 className="text-6xl font-medium mt-6 text-center lg:max-w-xl mx-auto">
          Questions? We've got <span className="text-lime-400">answers</span>
        </h2>
        <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
          {faqs.map((faq, faqIndex) => (
            <div
              key={faq.question}
              className="bg-neutral-900 rounded-2xl border border-white/10 p-6 cursor-pointer hover:border-white/20 transition-colors"
              onClick={() =>
                setSelectedIndex(selectedIndex === faqIndex ? -1 : faqIndex)
              }
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{faq.question}</h3>
                <svg
                  ref={(el) => {
                    iconsRef.current[faqIndex] = el;
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-lime-400 shrink-0"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <div
                ref={(el) => {
                  answersRef.current[faqIndex] = el;
                }}
                className="overflow-hidden"
                style={{ height: faqIndex === selectedIndex ? "auto" : 0 }}
              >
                <div className="mt-6">
                  <p className="text-white/50">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
