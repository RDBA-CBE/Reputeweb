"use client";
import { ArrowRight } from "lucide-react";
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
      <div className="w-[90%] lg:w-[75%] mx-auto border-t-2 border-[#c9181d]">

        {/* Vertical lines */}
        <div className="hidden xl:block absolute inset-0 pointer-events-none z-0" aria-hidden>
          <div className="w-[90%] lg:w-[85%] mx-auto px-8 h-full relative">
            <div className="absolute top-0 w-px h-full overflow-hidden" style={{ left: 0 }}>
              <div className="absolute bottom-0 w-full bg-gray-100" style={{ height: animate ? "55%" : "0%", transition: "height 1s ease-in-out 0s" }} />
            </div>
            <div className="absolute top-0 w-px h-full overflow-hidden" style={{ left: "370px" }}>
              <div className="absolute bottom-0 w-full bg-gray-100" style={{ height: animate ? "55%" : "0%", transition: "height 1s ease-in-out 0.08s" }} />
            </div>
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="absolute top-0 w-px h-full overflow-hidden" style={{ left: `calc(320px + (100% - 320px) * ${n} / 5)` }}>
                <div className="absolute bottom-0 w-full bg-gray-100" style={{ height: animate ? "55%" : "0%", transition: `height 1s ease-in-out ${(n + 1) * 0.08}s` }} />
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 py-16 md:py-20 lg:py-28">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-20">
            {/* Left */}
            <div className="w-full lg:col-span-6">
              <h2 className="section-ti uppercase leading-tight text-black">
                LET'S DECIDE<br />WHAT'S NEXT.
              </h2>
            </div>
            {/* Right */}
            <div className="w-full lg:col-span-6 flex flex-col gap-5 md:gap-6">
              <p className="text-sm md:text-base leading-relaxed max-w-sm">
                Bring us the problem you can't name yet. We'll help you define it, then build the work that answers it.
              </p>
              <div className="flex flex-wrap items-center gap-3 md:gap-4">
                <button className="hero-btn hero-btn-primary">TALK TO REPUTE <ArrowRight className="w-3.5 h-3.5" /></button>
                <button className="hero-btn hero-btn-secondary text-[#000] hover:text-[#fff]">CHECK YOUR BUSINESS <ArrowRight className="w-3.5 h-3.5" /></button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
