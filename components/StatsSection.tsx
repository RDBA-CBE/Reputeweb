"use client";

import React, { useEffect, useRef } from "react";

export interface StatItem {
  number: string;
  label: string;
  description: string;
}

export const statsData: StatItem[] = [
  { number: "10+",      label: "YEARS",        description: "Building digital experiences" },
  { number: "50+",      label: "TEAM MEMBERS", description: "Strategy, design, engineering, AI" },
  { number: "GLOBAL",   label: "CLIENT REACH", description: "Across continents" },
  { number: "MULTIPLE", label: "INDUSTRIES",   description: "Enterprise to emerging" },
];

export default function StatsSection() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((el) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { el.classList.add("in-view"); obs.disconnect(); } },
        { threshold: 0.2 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section className="section-wrapper relative z-20 mt-6 sm:mt-8 md:mt-10">
      <div className="section-box !py-6 sm:!py-8 md:!py-10">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-0">
          {statsData.map((stat, idx) => (
            <div
              key={stat.label}
              ref={(el) => { itemRefs.current[idx] = el; }}
              className={`scroll-fade-up flex flex-col justify-center items-center text-center ${
                idx !== 0 ? "md:border-l md:border-gray-200/80 md:pl-6 lg:pl-8" : ""
              } ${idx !== statsData.length - 1 ? "md:pr-6 lg:pr-8" : ""}`}
              style={{ animationDelay: `${idx * 0.12}s` }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-[26px] lg:text-[30px] font-black text-black tracking-tight leading-none mb-1.5 select-none">
                {stat.number}
              </h3>
              <p className="section-label mb-1">{stat.label}</p>
              <p className="text-[11px] sm:text-xs text-gray-600 font-normal leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
