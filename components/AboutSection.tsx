"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Search, Pencil, Code2, BarChart2 } from "lucide-react";

const steps = [
  { icon: <Search className="w-5 h-5 text-[#e31e24]" />, num: "01", title: "THINK", desc: "Business context, market signals and AI-assisted research." },
  { icon: <Pencil className="w-5 h-5 text-[#e31e24]" />, num: "02", title: "CREATE", desc: "Brand and creative direction, prototyped fast." },
  { icon: <Code2 className="w-5 h-5 text-[#e31e24]" />, num: "03", title: "BUILD", desc: "Web, software and AI systems engineered to last." },
  { icon: <BarChart2 className="w-5 h-5 text-[#e31e24]" />, num: "04", title: "SCALE", desc: "Predictive optimisation that compounds over time." },
];

export default function AboutSection() {
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((el) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { el.classList.add("in-view"); obs.disconnect(); } },
        { threshold: 0.15 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const ref = (i: number) => (el: HTMLElement | null) => { refs.current[i] = el; };

  return (
    <section id="about" className="w-full bg-[#fbfbfb]   mb-10">
      {/* Top: About Us */}
      <div className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-20 py-0">
        <div className="flex flex-col md:flex-row  justify-between gap-10">
          {/* Left */}
          <div
            ref={ref(0)}
            className="scroll-fade-up w-full md:w-1/2 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-[2px] bg-[#e31e24]" />
              <p className="text-[11px] font-bold tracking-[0.2em] text-black uppercase">ABOUT US</p>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.95] mb-5">
              WE ARE <span className="text-[#e31e24]">REPUTE.</span>
            </h2>
            <p className="text-sm sm:text-base font-black uppercase tracking-wide text-black mb-5">
              BUILDING TECHNOLOGY. DRIVING GROWTH.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed max-w-lg mb-8">
              Repute is a technology and strategy company helping businesses turn ideas into
              impactful digital solutions. We combine creativity, technology, and intelligence to
              solve complex challenges, build meaningful experiences, and drive sustainable growth.
            </p>
            <button className="inline-flex items-center justify-center px-6 py-3 bg-[#e31e24] text-white text-[11px] font-bold tracking-[0.15em] uppercase w-fit">
              AI-POWERED. BUSINESS-FOCUSED.
            </button>
          </div>

          {/* Right: Image */}
          <div
            ref={ref(1) as React.RefCallback<HTMLDivElement>}
            className="scroll-fade-up w-full md:w-1/2 flex items-center justify-center"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="relative w-full max-w-[520px] aspect-square">
              <Image src="/about.png" alt="Repute About" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Approach */}
      <div
        ref={ref(2) as React.RefCallback<HTMLDivElement>}
        className="scroll-fade-up mx-4 sm:mx-6 lg:mx-8 bg-[#111214] rounded-2xl mt-10"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="px-8 sm:px-12 lg:px-16 py-8 md:py-10">
          <div className="flex flex-col md:flex-row gap-10 md:gap-6">
            {/* Left label */}
            <div className="w-full md:w-[280px] shrink-0 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-[2px] bg-[#e31e24]" />
                <p className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase">APPROACH</p>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase leading-tight text-white whitespace-nowrap">
                HOW THE WORK<br />
                <span className="text-[#e31e24]">GETS MADE.</span>
              </h3>
            </div>

            {/* Steps */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center">
                {steps.map((step, idx) => (
                  <React.Fragment key={step.num}>
                    <div className="w-12 h-12 rounded-full border border-[#e31e24]/50 flex items-center justify-center shrink-0">
                      {step.icon}
                    </div>
                    {idx !== steps.length - 1 && (
                      <div className="flex-1 flex items-center min-w-0">
                        <div className="flex-1 border-t border-dashed border-white/30 min-w-0" />
                        <span className="text-[#e31e24] text-xs mx-1 shrink-0">›</span>
                        <div className="flex-1 border-t border-dashed border-white/30 min-w-0" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="flex mt-3">
                {steps.map((step, idx) => (
                  <React.Fragment key={step.num}>
                    <div className="shrink-0 w-12 flex flex-col gap-1">
                      <p className="text-2xl font-black text-white/20 tracking-tight">{step.num}</p>
                      <p className="text-sm font-black text-white uppercase tracking-wide">{step.title}</p>
                      <p className="text-xs text-gray-400 leading-relaxed w-[120px]">{step.desc}</p>
                    </div>
                    {idx !== steps.length - 1 && <div className="flex-1" />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
