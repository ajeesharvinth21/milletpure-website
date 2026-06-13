"use client";

import { useEffect, useRef, useState } from "react";

export default function Mission() {
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
      id="mission-section"
      className="py-24 md:py-32 bg-white scroll-mt-20 overflow-hidden"
    >
      <div
        className={`px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto transition-all duration-[1200ms] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Text Block */}
          <div>
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest block mb-4">
              Our Mission
            </span>
            <h2 className="font-headline-lg text-headline-lg md:text-[40px] text-primary mb-8 leading-tight">
              Preserving Health and Earth&apos;s Heritage
            </h2>
            <div className="space-y-6">
              <p className="font-body-md text-body-md text-on-surface-variant">
                MilletPure was born from a simple observation: the world had forgotten
                the most resilient, nutritious grains known to mankind. Our journey began
                in the small, sun-drenched fields of traditional farmers who never
                abandoned the heirloom varieties of millets.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We believe that wellness shouldn&apos;t be a luxury, but a return to the
                basics. By sourcing directly from organic farmers, we ensure that every
                spoonful of MilletPure supports both your health and the biodiversity of
                our planet.
              </p>
            </div>
          </div>

          {/* Right Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-surface-container-low p-8 rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-103 hover:shadow-[0px_8px_30px_rgba(78,93,52,0.08)]">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">
                eco
              </span>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">
                100% Organic
              </h3>
              <p className="font-caption text-caption text-on-surface-variant">
                Sourced from pesticide-free ancestral lands.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-surface-container-low p-8 rounded-xl flex flex-col items-center text-center mt-8 transition-all duration-300 hover:scale-103 hover:shadow-[0px_8px_30px_rgba(78,93,52,0.08)]">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">
                history_edu
              </span>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">
                Heritage
              </h3>
              <p className="font-caption text-caption text-on-surface-variant">
                Preserving heirloom grain varieties for the future.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-surface-container-low p-8 rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-103 hover:shadow-[0px_8px_30px_rgba(78,93,52,0.08)]">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">
                health_and_safety
              </span>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">
                Pure Nutrition
              </h3>
              <p className="font-caption text-caption text-on-surface-variant">
                Rich in fiber, minerals, and gluten-free energy.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-surface-container-low p-8 rounded-xl flex flex-col items-center text-center mt-8 transition-all duration-300 hover:scale-103 hover:shadow-[0px_8px_30px_rgba(78,93,52,0.08)]">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">
                groups
              </span>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">
                Fair Trade
              </h3>
              <p className="font-caption text-caption text-on-surface-variant">
                Empowering farmers with sustainable livelihoods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
