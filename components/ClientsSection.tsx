"use client";
import React from "react";
import Image from "next/image";

const clients = [
  {
    image: "/kpr.png",
    quote: '"They rebuilt how our customers see us — and the pipeline followed."',
    name: "Mr. K.P. Ramasamy",
    role: "THE FOUNDER AND CHAIRMAN OF TEXTILES AND SUGAR MANUFACTURER KPR MILL.",
    link: null,
  },
  {
    image: "/zen.png",
    quote: '"Repute is the only partner that talks about our margin, not their awards."',
    name: "Viji Narayanan: An",
    role: "BENEFACTOR, HARVARD-EDUCATED ANTHROPOLOGIST",
    link: "IIT KGP ALUMNI FOUNDATION INDIA",
  },
  {
    image: "/msri.png",
    quote: '"They rebuilt how our customers see us — and the pipeline followed."',
    name: "M C Srinivas",
    role: "FOUNDER OF MSRI STUD FORM",
    link: null,
  }
  
 
];

export default function ClientsSection() {
  return (
    <section className="w-full bg-[#F0F0F1]">
      <div className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-20 py-16 ">

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-[#c0392b]" />
            <p className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">CLIENTS</p>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1.0] text-black">
            TRUSTED BY<br />BUSINESSES THAT <span className="text-[#c0392b]">THINK AHEAD.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="flex overflow-x-auto scrollbar-hide gap-5">
          {clients.map((c) => (
            <div key={c.name} className="bg-white flex flex-col shrink-0 w-[calc(33.333%-14px)]">
              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image src={c.image} alt={c.name} fill className="object-cover" />
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#c0392b] flex items-center justify-center hover:bg-[#a93226] transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  </div>
                </button>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-4">
                <p className="text-sm text-gray-700 leading-relaxed">{c.quote}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-black text-black mb-1">{c.name}</p>
                  <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                    {c.link ? (
                      <>
                        <span className="underline text-black">{c.link}</span>{" "}
                        {c.role}
                      </>
                    ) : c.role}
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
