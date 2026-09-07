"use client";

import React, { useEffect, useRef } from "react";
import { Search, Pencil, Code2, BarChart2 } from "lucide-react";

const steps = [
  { icon: <Search className="w-8 h-8 md:w-10 md:h-10 text-[#D50715]" />, img: "/IconImages/search.png", num: "01", title: "THINK", desc: "Business context, market signals and AI-assisted research." },
  { icon: <Pencil className="w-8 h-8 md:w-10 md:h-10 text-[#D50715]" />, img:"/IconImages/pencil.png", num: "02", title: "CREATE", desc: "Brand and creative direction, prototyped fast." },
  { icon: <Code2 className="w-8 h-8 md:w-10 md:h-10 text-[#D50715]" />, img:"/IconImages/simple-icons_devbox.png", num: "03", title: "BUILD", desc: "Web, software and AI systems engineered to last." },
  { icon: <BarChart2 className="w-8 h-8 md:w-10 md:h-10 text-[#D50715]" />, img:"/IconImages/oui_stats.png", num: "04", title: "SCALE", desc: "Predictive optimisation that compounds over time." },
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
    <section id="about" className="w-full mb-6 md:mb-10">
      {/* Top: About Us */}
      <div className="section-wid section-pad">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-10">
          {/* Left */}
          <div ref={ref(0)} className="scroll-fade-up w-full md:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4 md:mb-5">
              <span className="w-8 md:w-12 h-[1px] bg-[#D50715]" />
              <p className="sec-top-ti uppercase">ABOUT US</p>
            </div>
            <h2 className="section-ti uppercase tracking-tight leading-[0.95] mb-4 md:mb-5">
              WE ARE <span className="text-[#D50715]">REPUTE.</span>
            </h2>
            <p className="section-sub-ti uppercase mb-4 md:mb-5">BUILDING TECHNOLOGY. DRIVING GROWTH.</p>
            <p className="text-sm md:text-base max-w-xl mb-6 md:mb-8">
              Repute is a technology and strategy company helping businesses turn ideas into impactful digital solutions. We combine creativity, technology, and intelligence to solve complex challenges, build meaningful experiences, and drive sustainable growth.
            </p>
            <button className="hero-btn hero-btn-primary w-fit">AI-POWERED. BUSINESS-FOCUSED.</button>
          </div>

          {/* Right: Image */}
          <div ref={ref(1) as React.RefCallback<HTMLDivElement>} className="scroll-fade-up w-full md:w-1/2 flex items-center justify-center" style={{ animationDelay: "0.15s" }}>
            <img src="/about.png" alt="Repute About" className="w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Bottom: Approach */}
      <div ref={ref(2) as React.RefCallback<HTMLDivElement>} className="scroll-fade-up mx-3 sm:mx-4 lg:mx-8 bg-[#111214] rounded-2xl mt-6 md:mt-10" style={{ animationDelay: "0.1s" }}>
        <div className="px-5 sm:px-8 lg:px-16 py-8 md:py-10">
          <div className="flex flex-col md:grid md:grid-cols-12 gap-8 lg:gap-0">
            {/* Left label */}
            <div className="col-span-12 lg:col-span-3 flex flex-col justify-start">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 md:w-12 h-[1px] bg-[#D50715]" />
                <p className="sec-top-ti !text-white uppercase">APPROACH</p>
              </div>
              <h3 className="section-ti-sec uppercase text-white">
                HOW THE WORK<br /><span className="text-[#D50715]">GETS MADE.</span>
              </h3>
            </div>

            {/* Steps */}
            <div className="col-span-12 lg:col-span-9">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-x-8">
                {steps.map((step, idx) => (
                  <div key={step.num} className="relative">
                    <div className="relative flex items-center h-[52px]">
                      <div className="relative z-10 w-[55px] h-[55px] md:w-[65px] md:h-[65px] rounded-full border border-white/30 flex items-center justify-center bg-[#151719] shrink-0">
                        {/* {step.icon} */}
                        <img src={step.img} alt={step.title} className="object-contain w-[30px] lg:w-[40px] h-auto" />
                      </div>
                      {idx !== steps.length - 1 && (
                        <div className="hidden lg:flex absolute left-[52px] right-[-32px] top-1/2 -translate-y-1/2 items-center">
                          <div className="flex-1 border-t border-dashed border-white/20" />
                          <span className="text-[#D50715] text-[22px] leading-none mx-2">›</span>
                          <div className="flex-1 border-t border-dashed border-white/20" />
                        </div>
                      )}
                    </div>
                    <div className="mt-6 md:mt-10">
                      <p className="text-[28px] md:text-[38px] leading-none font-bold text-white/20 tracking-tight mb-3 md:mb-5">{step.num}</p>
                      <p className="text-[15px] md:text-[18px] font-bold text-white uppercase tracking-wide mb-2">{step.title}</p>
                      <p className="text-sm text-white max-w-[150px]">{step.desc}</p>
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
