"use client";
import React, { useEffect, useRef, useState } from "react";

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-white relative" ref={sectionRef}>

      {/* Full-width vertical lines across entire section */}
      <div className="absolute inset-0 flex justify-between pointer-events-none px-[12.5%]" aria-hidden>
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="relative w-px h-full overflow-hidden">
            <div
              className="absolute bottom-0 w-full bg-gray-200"
              style={{
                height: animate ? "55%" : "0%",
                transition: `height 1s ease-in-out ${i * 0.08}s`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="w-full px-[12.5%] py-28 md:py-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-32">

          {/* Left */}
          <div className="w-full md:w-auto flex items-center">
            <h2 className="text-5xl sm:text-6xl font-black uppercase leading-[0.95] text-black whitespace-nowrap">
              LET'S DECIDE<br />WHAT'S NEXT.
            </h2>
          </div>

          {/* Right */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
              Bring us the problem you can't name yet. We'll help you define it, then build the work that answers it.
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-[#c0392b] text-white text-[11px] font-bold tracking-[0.2em] uppercase px-6 py-3 flex items-center gap-3 hover:bg-[#a93226] transition-colors whitespace-nowrap">
                TALK TO REPUTE →
              </button>
              <button className="border border-gray-300 text-black text-[11px] font-bold tracking-[0.2em] uppercase px-6 py-3 flex items-center gap-3 hover:border-black transition-colors whitespace-nowrap">
                CHECK YOUR BUSINESS →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
