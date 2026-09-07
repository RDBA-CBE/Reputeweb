"use client";
import React from "react";
import Image from "next/image";

const clients = [
  { image: "/kpr.png", quote: '"They rebuilt how our customers see us — and the pipeline followed."', name: "Mr. K.P. Ramasamy", role: "THE FOUNDER AND CHAIRMAN OF TEXTILES AND SUGAR MANUFACTURER KPR MILL.", link: null },
  { image: "/zen.png", quote: '"Repute is the only partner that talks about our margin, not their awards."', name: "Viji Narayanan: An", role: "BENEFACTOR, HARVARD-EDUCATED ANTHROPOLOGIST", link: "IIT KGP ALUMNI FOUNDATION INDIA" },
  { image: "/msri.png", quote: '"They rebuilt how our customers see us — and the pipeline followed."', name: "M C Srinivas", role: "FOUNDER OF MSRI STUD FORM", link: null },
];

export default function ClientsSection() {
  return (
    <section className="w-full bg-[#F0F0F1] section-pad-big">
      <div className="section-wid">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 md:w-12 h-[1px] bg-[#c9181d]" />
            <p className="sec-top-ti uppercase">CLIENTS</p>
          </div>
          <h2 className="section-ti uppercase leading-tight">
            TRUSTED BY<br />BUSINESSES THAT <span className="text-[#c9181d]">THINK AHEAD.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row overflow-x-auto scrollbar-hide gap-4 md:gap-5">
          {clients.map((c) => (
            <div key={c.name} className="bg-white flex flex-col w-full sm:shrink-0 sm:w-[calc(80vw)] md:w-[calc(33.333%-14px)]">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image src={c.image} alt={c.name} fill className="object-cover" />
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#c9181d] flex items-center justify-center hover:bg-[#a93226] transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21" /></svg>
                  </div>
                </button>
              </div>
              <div className="p-5 md:p-7 flex flex-col gap-3 md:gap-4">
                <p className="text-sm md:text-base leading-relaxed">{c.quote}</p>
                <div className="border-t border-gray pt-4 md:pt-5">
                  <p className="font-bold mb-1">{c.name}</p>
                  <p className="text-[11px] md:text-[12px] font-bold tracking-widest text-gray uppercase">
                    {c.link ? (<><span className="underline text-gray">{c.link}</span>{" "}{c.role}</>) : c.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
