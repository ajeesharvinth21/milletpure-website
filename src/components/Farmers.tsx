"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Farmers() {
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

  const farmers = [
    {
      name: "Anand Rao",
      specialty: "Finger Millet Specialist",
      quote: "The land gives what you give to it. We give it patience and respect.",
      image: "/farmer_anand_rao.png",
      offset: false,
    },
    {
      name: "Lakshmi Devi",
      specialty: "Pearl Millet Cultivator",
      quote: "I grow these grains for my children, and for yours. Purity is my only promise.",
      image: "/farmer_lakshmi_devi.png",
      offset: true, // Offset layout for editorial visual rhythm
    },
    {
      name: "Somanna K.",
      specialty: "Foxtail Millet Expert",
      quote: "We don't use chemicals because we don't want to hurt the soil that feeds us.",
      image: "/millet_grains_hands.png",
      offset: false,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-white overflow-hidden scroll-mt-20"
    >
      <div
        className={`px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto transition-all duration-[1200ms] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest block mb-4">
              The Heart of MilletPure
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary leading-tight">
              Meet the Custodians of the Land
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-4">
              We work with over 200 family farms that have been growing millets for
              generations. Their hands carry the wisdom of the seasons.
            </p>
          </div>
          <button className="border-2 border-secondary text-secondary px-8 py-3 rounded-lg font-label-md text-label-md hover:bg-secondary-container/10 transition-all active:scale-95 cursor-pointer">
            Meet More Farmers
          </button>
        </div>

        {/* Farmer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {farmers.map((farmer) => (
            <div
              key={farmer.name}
              className={`group flex flex-col transition-all duration-700 ${
                farmer.offset ? "lg:pt-16" : ""
              }`}
            >
              {/* Image Container */}
              <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[4/5] shadow-[0px_4px_20px_rgba(78,93,52,0.08)] bg-surface-container">
                <Image
                  src={farmer.image}
                  alt={`${farmer.name} - ${farmer.specialty}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Detail Block */}
              <h4 className="font-headline-md text-headline-md text-primary mb-1">
                {farmer.name}
              </h4>
              <p className="font-label-md text-label-md text-secondary mb-2">
                {farmer.specialty}
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant italic leading-relaxed">
                &ldquo;{farmer.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
