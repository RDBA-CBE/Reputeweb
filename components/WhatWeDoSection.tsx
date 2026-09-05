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
    <section className="w-full bg-[#D50715]">
      <div className="section-wid  py-16 md:py-20">
        {/* Top row: heading + description */}
        <div className="grid grid-cols-12 md:flex-row gap-12 md:gap-20 mb-10">
          <div className="w-full col-span-12 md:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-5 sm:w-6 md:w-12 h-[1px] bg-white" />
              <p className="sec-top-ti text-white uppercase leading-1">WHAT WE DO</p>
            </div>
            <h2 className="section-ti text-white leading-13">
              ONE PARTNER<br />MANY<br />POSSIBLITIES.
            </h2>
          </div>
          <div className="w-full col-span-12 md:col-span-5 flex items-end">
            <p className="text-[#fff] max-w-2xl">
              Six connected capabilities. Engage one, or let them compound — strategy, design, engineering, intelligence and growth working from a single brief.
            </p>
          </div>
        </div>

        {/* Bottom row: capability list + image */}
        <div className="grid grid-cols-12 gap-12 md:gap-20">
          <div className="w-full col-span-12 md:col-span-7 flex flex-col">
            <div className="flex flex-col">
              {capabilities.map((cap, idx) => (
                <div
                  key={cap.num}
                  className="border-t border-white/40 cursor-pointer"
                  onClick={() => setActive(idx)}
                >
                  <div className="py-5">
                    <div className="flex items-center gap-4 mb-0 py-3">
                      <span className="text-lg font-bold text-white">{cap.num}</span>
                      <h3 className={`section-ti-sec uppercase tracking-tight transition-colors ${active === idx ? "text-white" : "text-white/60"}`}>
                        {cap.title}
                      </h3>
                    </div>
                    {active === idx && (
                      <div className="mt-3 ml-8">
                        <p className="text-white mb-3">{cap.tag}</p>
                        <div className="flex flex-wrap gap-2 w-[80%]">
                          {cap.tags.map((tag) => (
                            <span key={tag} className="text-[14px] text-white  bg-white/20 rounded-full px-3 py-1 flex items-center gap-1 ">
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

          <div className="w-full col-span-12 md:col-span-5 flex flex-col justify-between">
            <div className="relative w-full  rounded-sm overflow-hidden ">
              <img
                src={capabilities[active].image}
                alt={capabilities[active].title}
                
                className="object-cover"
              />
            </div>
            <div className="flex justify-between items-center px-1 py-3 mt-4">
              <p className=" tracking-widest text-white uppercase">{capabilities[active].title}</p>
              <p className="font-bold text-white">{capabilities[active].num}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
