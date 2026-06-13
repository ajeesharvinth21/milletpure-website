"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-surface-container-low overflow-hidden"
    >
      <div
        className={`px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto transition-all duration-[1200ms] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4 animate-pulse-slow">
            The Art of Stone-Milling
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
            Our process is slow, intentional, and respects the integrity of the grain.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Step 1 */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-2xl bg-white shadow-[0px_4px_20px_rgba(78,93,52,0.08)] flex flex-col justify-between">
            <div className="relative w-full h-80 overflow-hidden">
              <Image
                src="/millet_grains_hands.png"
                alt="Selective Harvesting of millet grains"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold">
                  01
                </span>
                <h3 className="font-headline-md text-headline-md text-primary font-bold">
                  Selective Harvesting
                </h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We only harvest when the sun has perfectly dried the stalks,
                ensuring maximum nutrient density and natural sweetness.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-[0px_4px_20px_rgba(78,93,52,0.08)] flex flex-col justify-between">
            <div className="relative w-full h-80 overflow-hidden">
              <Image
                src="/stone_mill_process.png"
                alt="Traditional stone milling process"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold">
                  02
                </span>
                <h3 className="font-headline-md text-headline-md text-primary font-bold">
                  Stone-Grinding
                </h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Unlike industrial steel rollers, stone-milling keeps the temperature
                low, preserving delicate vitamins and natural oils.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-[0px_4px_20px_rgba(78,93,52,0.08)] transition-all duration-300 hover:shadow-[0px_8px_30px_rgba(78,93,52,0.12)]">
            <div className="p-8 h-full flex flex-col justify-center bg-primary text-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold">
                  03
                </span>
                <h3 className="font-headline-md text-headline-md text-white font-bold">
                  Sustainable Packaging
                </h3>
              </div>
              <p className="font-body-md text-body-md text-white/80">
                Every bag is hand-sealed in biodegradable, plastic-free packaging
                that respects the Earth as much as the contents within.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-2xl bg-white shadow-[0px_4px_20px_rgba(78,93,52,0.08)]">
            <div className="relative w-full h-80 md:h-[22rem] overflow-hidden">
              <Image
                src="/millet_flour_bags.png"
                alt="Minimalist overhead shot of millet flour bags"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover group-hover:scale-103 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
