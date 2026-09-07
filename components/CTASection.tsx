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
      <div className="w-[90%] lg:w-[75%] mx-auto border-t-2 border-[#c9181d]">

      {/* Vertical lines — same positions as footer */}
      <div className="absolute inset-0 pointer-events-none z-1" aria-hidden>
        <div className="w-[90%] lg:w-[85%] mx-auto px-8 h-full relative">
          {/* Line 0: left edge */}
          <div className="absolute top-0 w-px h-full overflow-hidden" style={{ left: 0 }}>
            <div className="absolute bottom-0 w-full bg-gray-100" style={{ height: animate ? "55%" : "0%", transition: "height 1s ease-in-out 0s" }} />
          </div>
          {/* Line 1: after logo col 320px */}
          <div className="absolute top-0 w-px h-full overflow-hidden" style={{ left: "370px" }}>
            <div className="absolute bottom-0 w-full bg-gray-100" style={{ height: animate ? "55%" : "0%", transition: "height 1s ease-in-out 0.08s" }} />
          </div>
          {/* Lines 2–6: evenly split flex-1 after 320px */}
          {[1, 2, 3, 4, 5].map((n) => (
            <div
              key={n}
              className="absolute top-0 w-px h-full overflow-hidden"
              style={{ left: `calc(320px + (100% - 320px) * ${n} / 5)` }}
            >
              <div
                className="absolute bottom-0 w-full bg-gray-100"
                style={{
                  height: animate ? "55%" : "0%",
                  transition: `height 1s ease-in-out ${(n + 1) * 0.08}s`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className=" py-28 md:py-20  z-10">
        <div className=" grid grid-cols-12 justify-center  gap-10 md:gap-20">

          {/* Left */}
          <div className="w-full lg:col-span-6 flex ">
            <h2 className="text-5xl sm:text-6xl section-ti uppercase leading-[0.95] text-black whitespace-nowrap">
              LET'S DECIDE<br />WHAT'S NEXT.
            </h2>
          </div>

          {/* Right */}
          <div className="w-full lg:col-span-6 flex flex-col gap-6">
            <p className="leading-relaxed max-w-sm">
              Bring us the problem you can't name yet. We'll help you define it, then build the work that answers it.
            </p>
            <div className="flex items-center gap-4">
              <button className="hero-btn hero-btn-primary">
                TALK TO REPUTE →
              </button>
              <button className="hero-btn hero-btn-secondary text-[#000] hover:text-[#fff]">
                CHECK YOUR BUSINESS →
              </button>
            </div>
          </div>

        </div>
      </div>
      </div>
    </section>
  );
}
