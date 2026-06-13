"use client";

import Image from "next/image";

export default function Hero() {
  const handleScrollToMission = () => {
    const missionSection = document.getElementById("mission-section");
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[80vh] min-h-[600px] max-h-[850px] flex items-center overflow-hidden">
      {/* Background Image with Dark Tint Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/hero_millet_field.png"
          alt="Golden millet field at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-70 transition-transform duration-[10000ms] ease-out scale-105"
        />
        {/* Sleek Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/45 to-transparent z-1" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto text-white">
        <div className="max-w-2xl">
          <h1 className="font-display-lg text-display-lg mb-6 leading-tight animate-entry-title">
            Rooted in Tradition,
            <span className="block text-secondary-fixed-dim italic font-normal mt-1">
              Crafted for Modern Wellness.
            </span>
          </h1>
          <p className="font-body-lg text-body-lg mb-8 text-white/90 max-w-xl animate-entry-desc">
            We bridge the gap between ancient agricultural wisdom and the
            fast-paced modern world, one grain at a time.
          </p>
          <div className="flex gap-4 animate-entry-btn">
            <button
              onClick={handleScrollToMission}
              className="bg-primary text-white px-8 py-4 rounded-lg font-label-md text-label-md transition-all duration-300 hover:bg-primary-container active:scale-95 shadow-[0px_4px_20px_rgba(78,93,52,0.3)] hover:shadow-[0px_6px_24px_rgba(78,93,52,0.4)] cursor-pointer"
            >
              Discover Our Heritage
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
