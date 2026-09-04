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
    <section className="w-full bg-[#0e0e0e] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[15%] h-[30%] bg-[radial-gradient(ellipse_at_top_left,_#5a0a0a_0%,_transparent_70%)] pointer-events-none" />
      <div className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-20 py-16 md:py-20">

        <div className="flex flex-col md:flex-row gap-12 md:gap-16">

          {/* Left */}
          <div className="w-full md:w-1/2 flex flex-col">
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[2px] bg-[#c0392b]" />
              <p className="text-[11px] font-bold tracking-[0.2em] text-white/60 uppercase">
                REPUTE BUSINESS PERSPECTIVE · AUGUST 2026
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1.0] text-white mb-8">
              WHAT'S CHANGING<br />IN BUSINESS.
            </h2>

            {/* Challenge label */}
            <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-3">
              THIS MONTH'S BUSINESS CHALLENGE
            </p>

            {/* Quote box */}
            <div className="mb-5">
              <p className="text-2xl sm:text-3xl font-black uppercase text-white leading-tight">
                “AI IS CHANGING HOW CUSTOMERS<br />DISCOVER BRANDS.”
              </p>
            </div>

            {/* Image with play button */}
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <Image
                src="/image_8.png"
                alt="Business Perspective"
                fill
                className="object-cover"
              />
              {/* Play button */}
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#c0392b] flex items-center justify-center shadow-lg hover:bg-[#a93226] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
              </button>
            </div>

            {/* Bottom buttons */}
            <div className="flex items-center gap-6 mt-6">
              <button className="bg-[#c0392b] text-white text-[11px] font-bold tracking-[0.2em] uppercase px-6 py-4 flex items-center gap-3 hover:bg-[#a93226] transition-colors">
                SEE THE FULL PERSPECTIVE →
              </button>
              <button className="text-[11px] font-bold tracking-[0.2em] text-white/60 uppercase hover:text-white transition-colors">
                PREVIOUS PERSPECTIVES →
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="w-full md:w-5/12 flex flex-col justify-center">
            <div className="border border-white inline-block px-4 py-2 mb-6 self-start">
              <p className="text-[11px] font-bold tracking-[0.2em] text-white uppercase">THIS MONTH</p>
            </div>

            <div className="bg-white p-5">
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#c0392b] uppercase mb-4">THE SEQUENCE</p>
              <div className="flex flex-col gap-3 mb-5">
                {sequence.map((s) => (
                  <div key={s.num} className="flex items-center gap-4 border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <span className="text-[11px] font-bold text-[#c0392b] shrink-0">{s.num}</span>
                    <p className="text-[11px] font-black uppercase tracking-widest text-black">{s.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 leading-relaxed border-t border-gray-200 pt-4">
                A new business challenge every month — the shifts we are seeing in the market and what we would do about them.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
