"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

const filters = ["ALL", "BRANDING", "WEB & SOFTWARE", "MOBILE & DIGITAL", "AI", "E-COMMERCE", "DIGITAL MARKETING"];

const projects = [
  { num: ".01", title: "BRAND TRANSFORMATION", category: "BRANDING & CREATIVE", tag: "BRANDING", image: "/image_1.png" },
  { num: ".02", title: "MOBILE PRODUCT LAUNCH", category: "MOBILE & DIGITAL", tag: "MOBILE & DIGITAL", image: "/image_2.png" },
  { num: ".03", title: "CREATIVE EXPERIENCE", category: "CREATIVES", tag: "BRANDING", image: "/image_3.png" },
  { num: ".04", title: "MOBILE PRODUCT LAUNCH", category: "MOBILE & DIGITAL", tag: "MOBILE & DIGITAL", image: "/image_4.png" },
];

export default function SelectedWorkSection() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered = activeFilter === "ALL" ? projects : projects.filter((p) => p.tag === activeFilter);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -420 : 420, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-20 pt-16 md:pt-20">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[2px] bg-[#c0392b]" />
              <p className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">SELECTED WORK</p>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.92] text-black">
              IDEAS.<br />BUILT INTO <span className="text-[#c0392b]">IMPACT.</span>
            </h2>
          </div>
          <button className="mt-8 md:mt-0 self-start md:self-auto bg-[#c0392b] text-white text-[11px] font-bold tracking-[0.2em] uppercase px-7 py-4 flex items-center gap-3 hover:bg-[#a93226] transition-colors">
            VIEW ALL WORK <span>→</span>
          </button>
        </div>

        {/* Filter tabs + arrows */}
        <div className="flex items-center justify-between border-t border-b border-gray-200 py-4 mb-0">
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`text-[11px] font-bold tracking-widest uppercase whitespace-nowrap transition-colors ${
                  activeFilter === f ? "text-[#c0392b]" : "text-gray-500 hover:text-black"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 ml-6 shrink-0">
            <button onClick={() => scroll("left")} className="w-9 h-9 border border-gray-300 flex items-center justify-center hover:border-black transition-colors text-sm">←</button>
            <button onClick={() => scroll("right")} className="w-9 h-9 border border-gray-300 flex items-center justify-center hover:border-black transition-colors text-sm">→</button>
          </div>
        </div>

      </div>

      {/* Cards — full bleed scroll */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide gap-4 mt-8"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {filtered.map((p) => (
          <div
            key={p.num}
            className="shrink-0 w-[380px] sm:w-[420px] cursor-pointer group"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
              <Image src={p.image} alt={p.title} fill className="object-contain group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-4 right-4 text-white/80 text-sm font-bold">{p.num}</span>
            </div>
            <div className="flex items-start justify-between px-0 py-4 border-b border-gray-200">
              <div>
                <p className="text-sm font-black uppercase tracking-tight text-black">{p.title}</p>
                <p className="text-[11px] text-gray-400 uppercase tracking-widest mt-1">{p.category}</p>
              </div>
              <span className="text-gray-400 mt-1">↗</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
