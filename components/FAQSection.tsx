"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What does Repute help businesses with?", a: "Repute helps businesses with branding, technology, and growth strategies tailored to their specific needs." },
  { q: "How does Repute use AI?", a: "We integrate AI across brand creatives, web development, and marketing to deliver faster and smarter outcomes." },
  { q: "Can Repute handle branding and technology together?", a: "Yes — we are a single partner across brand, product and platform, eliminating the need for multiple agencies." },
  { q: "What kind of businesses does Repute work with?", a: "We work with businesses across manufacturing, healthcare, retail, education, technology and more." },
  { q: "How does the project process work?", a: "We start with a brief, align on strategy, and execute with a dedicated team — keeping you informed at every stage." },
  { q: "Can we start with a specific business challenge?", a: "Absolutely. Many clients start with one challenge and expand as they see results." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#F3F3F5]">
      <div className=" mx-auto px-8 sm:px-12 lg:px-20 py-16 ">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">

          {/* Left */}
          <div className="w-full md:w-2/5">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[2px] bg-[#c0392b]" />
              <p className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">FAQ</p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase leading-[1.0] text-black">
              QUESTIONS,<br /><span className="text-[#c0392b]">ANSWERED.</span>
            </h2>
          </div>

          {/* Right */}
          <div className="w-full md:w-3/5 flex flex-col">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-t border-gray-300">
                <button
                  className="w-full flex items-center justify-between py-5 text-left"
                  onClick={() => setOpen(open === idx ? null : idx)}
                >
                  <span className="text-sm font-semibold text-black">{faq.q}</span>
                  <ChevronDown size={18} className={`text-gray-400 ml-4 shrink-0 transition-transform ${open === idx ? "rotate-180" : ""}`} />
                </button>
                {open === idx && (
                  <p className="text-sm text-gray-500 leading-relaxed pb-5">{faq.a}</p>
                )}
              </div>
            ))}
            <div className="border-t border-gray-300" />
          </div>

        </div>
      </div>
    </section>
  );
}
