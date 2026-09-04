"use client";
import React, { useRef } from "react";
import Image from "next/image";

const industries = [
  { num: "01", title: "MANUFACTURING", image: "/image_6.png" },
  { num: "02", title: "HEALTHCARE", image: "/image_5.png" },
  { num: "03", title: "EDUCATION", image: "" },
  { num: "04", title: "RETAIL", image: "/image_7.png" },
  { num: "05", title: "TECHNOLOGY", image: "/what_we_do.png" },
  { num: "06", title: "REAL ESTATE", image: "/image_5.png" },
  { num: "07", title: "FOOD & BEVERAGE", image: "/image_6.png" },
];

export default function IndustriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full bg-[#4a4a4a]">
      <div className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-20 pt-16 md:pt-20">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-12">
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[2px] bg-[#c0392b]" />
              <p className="text-[11px] font-bold tracking-[0.2em] text-white/60 uppercase">INDUSTRIES</p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase leading-[1.0] text-white">
              BUILT FOR DIFFERENT<br />BUSINESS WORLDS.
            </h2>
          </div>
          <div className="w-full md:w-1/2 flex items-start justify-end mt-8 md:mt-2">
            <p className="text-sm text-white/70 leading-relaxed md:max-w-sm">
              Every sector has its own buyers, cycles and constraints. We work across many of them — and design for the specifics of each.
            </p>
          </div>
        </div>

      </div>

      {/* Scrollable cards — full bleed */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide gap-3 px-8 sm:px-12 lg:px-20"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {industries.map((ind) => (
          <div
            key={ind.num}
            className="shrink-0 w-[300px] sm:w-[340px] cursor-pointer group"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#1a1a1a] rounded-sm">
              {ind.image ? (
                <Image
                  src={ind.image}
                  alt={ind.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              ) : null}
              <span className="absolute bottom-5 left-5 text-white/30 text-6xl font-black leading-none">{ind.num}</span>
            </div>
            <p className="text-sm font-black uppercase tracking-tight text-white mt-4 mb-2">{ind.title}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-20 py-10">
        <button
          onClick={() => scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" })}
          className="text-[11px] font-bold tracking-[0.2em] text-white/60 uppercase hover:text-white transition-colors"
        >
          SCROLL FOR MORE INDUSTRIES →
        </button>
      </div>

    </section>
  );
}
