"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Search, Pencil, Code2, BarChart2 } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-10 h-10 text-[#D50715]" />,
    num: "01",
    title: "THINK",
    desc: "Business context, market signals and AI-assisted research.",
  },
  {
    icon: <Pencil className="w-10 h-10 text-[#D50715]" />,
    num: "02",
    title: "CREATE",
    desc: "Brand and creative direction, prototyped fast.",
  },
  {
    icon: <Code2 className="w-10 h-10 text-[#D50715]" />,
    num: "03",
    title: "BUILD",
    desc: "Web, software and AI systems engineered to last.",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-[#D50715]" />,
    num: "04",
    title: "SCALE",
    desc: "Predictive optimisation that compounds over time.",
  },
];

export default function AboutSection() {
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((el) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("in-view");
            obs.disconnect();
          }
        },
        { threshold: 0.15 },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const ref = (i: number) => (el: HTMLElement | null) => {
    refs.current[i] = el;
  };

  return (
    <section id="about" className="w-full   mb-10">
      {/* Top: About Us */}
      <div className="section-wid section-pad ">
        <div className="flex flex-col md:flex-row  justify-between gap-10">
          {/* Left */}
          <div
            ref={ref(0)}
            className="scroll-fade-up w-full md:w-1/2 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-5 sm:w-6 md:w-12 h-[1px] bg-[#D50715]" />
              <p className="sec-top-ti  uppercase">ABOUT US</p>
            </div>
            <h2 className="section-ti  uppercase tracking-tight leading-[0.95] mb-5">
              WE ARE <span className="text-[#D50715]">REPUTE.</span>
            </h2>
            <p className="section-sub-ti uppercase  mb-5">
              BUILDING TECHNOLOGY. DRIVING GROWTH.
            </p>
            <p className=" max-w-xl mb-8">
              Repute is a technology and strategy company helping businesses
              turn ideas into impactful digital solutions. We combine
              creativity, technology, and intelligence to solve complex
              challenges, build meaningful experiences, and drive sustainable
              growth.
            </p>
            <button className="hero-btn hero-btn-primary w-fit">
              AI-POWERED. BUSINESS-FOCUSED.
            </button>
          </div>

          {/* Right: Image */}
          <div
            ref={ref(1) as React.RefCallback<HTMLDivElement>}
            className="scroll-fade-up w-full md:w-1/2 flex items-center justify-center"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="relative w-full max-w-[650px] flex items-center justify-center">
              <img src="/about.png" alt="Repute About" className=" !h-fit" />
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
          <div className="grid grid-cols-12 ">
            {/* Left label */}
            <div className="col-span-12 md:col-span-3  shrink-0 flex flex-col justify-start">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-5 sm:w-6 md:w-12 h-[1px] bg-[#D50715]" />
                <p className="sec-top-ti !text-white uppercase">APPROACH</p>
              </div>
              <h3 className="section-ti-sec uppercase  text-white whitespace-nowrap">
                HOW THE WORK
                <br />
                <span className="text-[#D50715]">GETS MADE.</span>
              </h3>
            </div>

            {/* Steps */}
            {/* Steps */}
            <div className="col-span-12 md:col-span-9 min-w-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
                {steps.map((step, idx) => (
                  <div key={step.num} className="relative min-w-0">
                    {/* Icon + Connector */}
                    <div className="relative flex items-center h-[52px]">
                      {/* Icon */}
                      <div className="relative z-10 w-[65px] h-[65px] rounded-full border border-white/30 flex items-center justify-center bg-[#151719] shrink-0">
                        <div className="text-[#D50715]">{step.icon}</div>
                      </div>

                      {/* Connector */}
                      {idx !== steps.length - 1 && (
                        <div className="hidden lg:flex absolute left-[52px] right-[-32px] top-1/2 -translate-y-1/2 items-center">
                          {/* Line */}
                          <div className="flex-1 border-t border-dashed border-white/20" />

                          {/* Arrow */}
                          <span className="text-[#D50715] text-[22px] leading-none mx-2">
                            ›
                          </span>

                          {/* Line */}
                          <div className="flex-1 border-t border-dashed border-white/20" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="mt-10">
                      {/* Number */}
                      <p className="text-[38px] leading-none font-bold text-white/20 tracking-tight mb-5">
                        {step.num}
                      </p>

                      {/* Title */}
                      <p className="text-[18px] font-bold leading-none  text-white uppercase tracking-wide mb-2">
                        {step.title}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-[#fff] max-w-[150px]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
