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
    <section className="w-full bg-[#555555] section-pad-big !pb-10">
      <div className="section-wid">

        {/* Header */}
        <div className="grid grid-cols-12 md:items-start justify-between mb-12">
          <div className="w-full col-span-12 lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-5 sm:w-6 md:w-12 h-[1px] bg-[#c9181d]" />
              <p className="sec-top-ti uppercase text-[#fff]">INDUSTRIES</p>
            </div>
            <h2 className="section-ti uppercase leading-[1.0] text-white">
              BUILT FOR DIFFERENT<br />BUSINESS WORLDS.
            </h2>
          </div>
          <div className="w-full h-full lg:col-span-6 flex items-center justify-center ">
            <p className="text-white leading-relaxed md:max-w-xl">
              Every sector has its own buyers, cycles and constraints. We work across many of them — and design for the specifics of each.
            </p>
          </div>
        </div>

      </div>

      {/* Scrollable cards — starts at section-wid left edge, bleeds full width right */}
      <div className="section-wid overflow-visible">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide gap-2"
          style={{
            scrollSnapType: "x mandatory",
            marginRight: "calc(-50vw + 50%)",
            paddingRight: "2vw",
          }}
        >
          {industries.map((ind) => (
            <div
              key={ind.num}
              className="shrink-0 cursor-pointer group"
              style={{ scrollSnapAlign: "start", width: "22vw", minWidth: "200px" }}
            >
              <div className="relative w-full overflow-hidden bg-[#1a1a1a] rounded-sm" style={{ height: "58vh" }}>
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
              <h3 className="section-in-ti uppercase tracking-tight text-white mt-4 mb-2">{ind.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="section-wid  pt-10">
        <button
          onClick={() => scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" })}
          className="text-[12px] font-bold tracking-[0.2em] text-white/60 uppercase hover:text-white transition-colors"
        >
          SCROLL FOR MORE INDUSTRIES →
        </button>
      </div>

    </section>
  );
}
