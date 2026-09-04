"use client";
import React, { useState } from "react";
import Image from "next/image";

const capabilities = [
  {
    num: "01",
    title: "BRANDING & CREATIVE",
    tag: "[ Rapid AI Prototyping in Brand Creatives ]",
    tags: ["Brand Strategy", "Logo Design", "Corporate Identity", "Marketing Collaterals", "Brochures & Presentations", "Retail Branding", "Packaging Design"],
    image: "/what_we_do.png",
  },
  {
    num: "02",
    title: "TECHNOLOGY",
    tag: "[ Web, App & AI Engineering ]",
    tags: ["Web Development", "Mobile Apps", "AI Integration", "Cloud Solutions", "API Development"],
    image: "/what_we_do.png",
  },
  {
    num: "03",
    title: "GROWTH",
    tag: "[ Performance & Digital Marketing ]",
    tags: ["SEO & SEM", "Social Media", "Content Strategy", "Analytics", "Paid Campaigns"],
    image: "/what_we_do.png",
  },
];

export default function WhatWeDoSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-[#e31e24]">
      <div className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-20 py-16 md:py-20">
        {/* Top row: heading + description */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-8 mb-10">
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[2px] bg-white/60" />
              <p className="text-[11px] font-bold tracking-[0.2em] text-white/80 uppercase">WHAT WE DO</p>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.92] text-white">
              ONE PARTNER<br />MANY<br />POSSIBLITIES.
            </h2>
          </div>
          <div className="w-full md:w-1/2 flex items-end">
            <p className="text-sm text-white/80 leading-relaxed max-w-sm">
              Six connected capabilities. Engage one, or let them compound — strategy, design, engineering, intelligence and growth working from a single brief.
            </p>
          </div>
        </div>

        {/* Bottom row: capability list + image */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-8">
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="flex flex-col">
              {capabilities.map((cap, idx) => (
                <div
                  key={cap.num}
                  className="border-t border-white/20 cursor-pointer"
                  onClick={() => setActive(idx)}
                >
                  <div className="py-5">
                    <div className="flex items-center gap-4 mb-0">
                      <span className="text-xs font-bold text-white/50">{cap.num}</span>
                      <h3 className={`text-xl sm:text-2xl font-black uppercase tracking-tight transition-colors ${active === idx ? "text-white" : "text-white/40"}`}>
                        {cap.title}
                      </h3>
                    </div>
                    {active === idx && (
                      <div className="mt-3 ml-8">
                        <p className="text-xs text-white/70 mb-3">{cap.tag}</p>
                        <div className="flex flex-wrap gap-2">
                          {cap.tags.map((tag) => (
                            <span key={tag} className="text-[10px] text-white/80 border border-white/30 rounded-full px-3 py-1 flex items-center gap-1">
                              <span className="w-1 h-1 rounded-full bg-white/60 inline-block" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div className="border-t border-white/20" />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div className="relative w-full aspect-[3/2] rounded-sm overflow-hidden max-w-[85%]">
              <Image
                src={capabilities[active].image}
                alt={capabilities[active].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex justify-between items-center px-1 py-3">
              <p className="text-xs font-bold tracking-widest text-white uppercase">{capabilities[active].title}</p>
              <p className="text-xs font-bold text-white/60">{capabilities[active].num}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
