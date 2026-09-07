"use client";
import React from "react";
import Image from "next/image";

const sequence = [
  { num: "01", label: "THE PROBLEM" },
  { num: "02", label: "WHAT BUSINESSES ARE EXPERIENCING" },
  { num: "03", label: "WHY IT MATTERS" },
  { num: "04", label: "WHAT BUSINESSES SHOULD CONSIDER" },
  { num: "05", label: "REPUTE'S PERSPECTIVE" },
];

export default function BusinessPerspectiveSection() {
  return (
    <section className="w-full bg-[#131315] relative overflow-hidden section-pad-big">
      <div className="absolute top-20 -left-10 w-[30%] md:w-[20%] h-[60%] bg-[radial-gradient(ellipse_at_top_left,rgba(90,10,10,0.7)_0%,rgba(90,10,10,0.4)_20%,rgba(90,10,10,0.15)_45%,transparent_72%)] blur-[25px] pointer-events-none" />
      <div className="section-wid">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-20">

          {/* Left */}
          <div className="w-full lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-3 mb-5 md:mb-6">
              <span className="w-8 md:w-12 h-[1px] bg-[#c9181d]" />
              <p className="sec-top-ti text-white">REPUTE BUSINESS PERSPECTIVE · AUGUST 2026</p>
            </div>
            <h2 className="section-ti text-white mb-6 md:mb-8 leading-tight">
              WHAT'S CHANGING<br />IN BUSINESS.
            </h2>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-white uppercase mb-3">THIS MONTH'S BUSINESS CHALLENGE</p>
            <div className="mb-5">
              <h3 className="section-ti-sm text-white leading-snug md:leading-10">
                "AI IS CHANGING HOW CUSTOMERS<br />DISCOVER BRANDS."
              </h3>
            </div>
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <Image src="/image_8.png" alt="Business Perspective" fill className="object-cover" />
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#c9181d] flex items-center justify-center shadow-lg hover:bg-[#a93226] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21" /></svg>
                </div>
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-5 md:mt-6">
              <button className="hero-btn hero-btn-primary w-fit">SEE THE FULL PERSPECTIVE →</button>
              <button className="hero-btn hero-btn-secondary !border-none">PREVIOUS PERSPECTIVES →</button>
            </div>
          </div>

          {/* Right */}
          <div className="w-full lg:col-span-6 flex flex-col justify-center lg:mt-[-20%]">
            <div className="hero-btn hero-btn-secondary w-fit py-2 px-4 mb-5">THIS MONTH</div>
            <div className="bg-white section-pad px-5 md:px-8">
              <p className="text-[12px] font-bold tracking-[0.1em] text-[#c9181d] uppercase mb-4">THE SEQUENCE</p>
              <div className="flex flex-col gap-3 mb-5">
                {sequence.map((s) => (
                  <div key={s.num} className="flex items-center gap-4 pb-3 last:border-0 last:pb-0">
                    <span className="text-[11px] font-bold text-[#c9181d] shrink-0">{s.num}</span>
                    <p className="text-[13px] md:text-[14px] font-semibold text-black">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="text-sm leading-relaxed border-t border-gray mt-6 pt-6 pb-3">
                <p className="max-w-lg">A new business challenge every month — the shifts we are seeing in the market and what we would do about them.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
