"use client";
import React from "react";

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D50715" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="2" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
      </svg>
    ),
    title: "BUSINESS-FIRST THINKING",
    desc: "Every decision traced back to a commercial outcome.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D50715" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "CREATIVE + TECHNOLOGY",
    desc: "One partner across brand, product and platform.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D50715" strokeWidth="1.5">
        <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z" />
        <circle cx="12" cy="9" r="2.5" />
        <path d="M19 9h2M3 9h2" />
        <path d="M17.5 4.5l1.5-1.5M5 16l1.5-1.5" />
      </svg>
    ),
    title: "AI-POWERED CAPABILITY",
    desc: "Intelligence applied where it earns its place.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D50715" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "STRATEGIC EXECUTION",
    desc: "Plans that survive contact with delivery.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D50715" strokeWidth="1.5">
        <circle cx="9" cy="7" r="3" />
        <circle cx="15" cy="7" r="3" />
        <path d="M3 21v-2a4 4 0 0 1 4-4h4" />
        <path d="M16 21v-2a4 4 0 0 0-1-2.7" />
        <circle cx="19" cy="17" r="3" />
        <path d="M19 15v2l1 1" />
      </svg>
    ),
    title: "SCALABLE EXPERIENCES",
    desc: "Systems built for the next stage, not just launch.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D50715" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "LONG-TERM PARTNERSHIP",
    desc: "Retained teams that learn your business.",
  },
];

export default function WhyReputeSection() {
  return (
    <section className="">
      <div className="section-wid py-16 md:py-20">

        {/* Top row */}
        <div className="grid grid-cols-12 md:flex-row gap-12 md:gap-8 mb-16">
          <div className="w-full col-span-7">
             <div className="flex items-center gap-3 mb-5">
              <span className="w-5 sm:w-6 md:w-12 h-[1px] bg-[#D50715]" />
              <p className="sec-top-ti  uppercase">WHY REPUTE</p>
            </div>
            <h2 className="section-ti leading-13 uppercase mb-10">
              WHY BUSINESSES<br />CHOOSE <span className="text-[#D50715]">REPUTE.</span>
            </h2>
            <button className="hero-btn hero-btn-primary w-fit">
              START A CONVERSATION <span>→</span>
            </button>
          </div>
          <div className="w-full col-span-5 flex items-start ">
            <div className="md:max-w-lg">
              <p className="">
                Clients stay because the work moves numbers — not because the deck looked good.
              </p>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8">
          {/* Row 1: first 3 features */}
          {features.slice(0, 3).map((f) => (
            <div key={f.title} className="border-t border-[#D50715] pt-6 pb-10">
              <div className="mb-4">{f.icon}</div>
              <h3 className="section-in-ti uppercase mb-2">{f.title}</h3>
              <p className="">{f.desc}</p>
            </div>
          ))}

          {/* Row 2: last 3 features */}
          {features.slice(3).map((f) => (
            <div key={f.title} className="border-t border-[#D50715] pt-6 pb-10">
              <div className="mb-4">{f.icon}</div>
              <h3 className="section-in-ti uppercase  mb-2">{f.title}</h3>
              <p className="">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
