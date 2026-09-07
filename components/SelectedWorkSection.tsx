"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const filters = ["ALL", "BRANDING", "WEB & SOFTWARE", "MOBILE & DIGITAL", "AI", "E-COMMERCE", "DIGITAL MARKETING"];

const projects = [
  { num: ".01", title: "BRAND TRANSFORMATION", category: "BRANDING & CREATIVE", tag: "BRANDING", image: "/image_1.png" },
  { num: ".02", title: "MOBILE PRODUCT LAUNCH", category: "MOBILE & DIGITAL", tag: "MOBILE & DIGITAL", image: "/image_2.png" },
  { num: ".03", title: "CREATIVE EXPERIENCE", category: "CREATIVES", tag: "BRANDING", image: "/image_3.png" },
  { num: ".04", title: "MOBILE PRODUCT LAUNCH", category: "MOBILE & DIGITAL", tag: "MOBILE & DIGITAL", image: "/image_4.png" },
  { num: ".05", title: "BRAND TRANSFORMATION", category: "BRANDING & CREATIVE", tag: "BRANDING", image: "/image_1.png" },
];

export default function SelectedWorkSection() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const scrollRef = useRef<HTMLDivElement>(null);
  const filtered = activeFilter === "ALL" ? projects : projects.filter((p) => p.tag === activeFilter);
  const scroll = (dir: "left" | "right") => scrollRef.current?.scrollBy({ left: dir === "left" ? -420 : 420, behavior: "smooth" });

  return (
    <section className="section-pad-big bg-white">
      <div className="section-wid pb-5">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-0 mb-8 md:mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 md:w-12 h-[1px] bg-[#c9181d]" />
              <p className="sec-top-ti uppercase">SELECTED WORK</p>
            </div>
            <h2 className="section-ti uppercase leading-tight text-black">
              IDEAS.<br />BUILT INTO <span className="text-[#c9181d]">IMPACT.</span>
            </h2>
          </div>
          <button className="hero-btn hero-btn-primary w-fit">VIEW ALL WORK <span>→</span></button>
        </div>

        {/* Filter tabs + arrows */}
        <div className="flex items-center justify-between border-t border-b border-gray-200 py-3 md:py-4">
          <div className="flex items-center gap-4 md:gap-6 overflow-x-auto scrollbar-hide">
            {filters.map((f) => (
              <button key={f} onClick={() => setActiveFilter(f)}
                className={`text-[11px] md:text-[13px] font-semibold tracking-widest uppercase whitespace-nowrap transition-colors ${activeFilter === f ? "text-[#c9181d]" : "text-[#000] hover:text-black"}`}>
                {f}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 ml-4 shrink-0">
            <button onClick={() => scroll("left")} className="w-8 h-8 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center hover:border-black transition-colors"><ArrowLeft className="w-4 h-4" /></button>
            <button onClick={() => scroll("right")} className="w-8 h-8 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center hover:border-black transition-colors"><ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div ref={scrollRef} className="flex overflow-x-auto scrollbar-hide gap-3 md:gap-4 mt-6 md:mt-8 px-[2%] md:px-0" style={{ scrollSnapType: "x mandatory" }}>
        {filtered.map((p) => (
          <div key={p.num} className="shrink-0 w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px] cursor-pointer group" style={{ scrollSnapAlign: "start" }}>
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
              <Image src={p.image} alt={p.title} fill className="object-contain group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-4 right-4 text-white/80 text-sm font-bold">{p.num}</span>
            </div>
            <div className="flex items-start justify-between px-0 py-4 border-b border-gray-200">
              <div>
                <h3 className="section-in-ti">{p.title}</h3>
                <p className="text-[11px] text-gray uppercase tracking-widest mt-1">{p.category}</p>
              </div>
              <span className="text-gray mt-1"><ArrowUpRight className="w-4 h-4" /></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
