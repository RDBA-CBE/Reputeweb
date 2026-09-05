"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const TYPEWRITER_TEXT = "WHAT'S";

export default function HeroBanner() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const type = () => {
      setDisplayed(TYPEWRITER_TEXT.slice(0, i + 1));
      i++;
      if (i === TYPEWRITER_TEXT.length) {
        setDone(false);
        setTimeout(() => {
          i = 0;
          setDisplayed("");
          setTimeout(type, 100);
        }, 2000);
      } else {
        setTimeout(type, 120);
      }
    };
    type();
  }, []);
  return (
    <section className="relative h-[97.5vh] bg-[#0d0e12] text-white flex flex-col overflow-hidden rounded-xl m-3">
      {/* Background Polygonal Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <Image
          src="/banner_bg.png"
          alt="Abstract geometric polygonal background"
          fill
          priority
          className="object-cover object-center "
        />
        {/* Subtle atmospheric dark gradients */}
        <div className="absolute inset-0 bg-radial-[circle_at_75%_45%] from-red-600/[0.04] via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
      </div>

      {/* AI Cyborg Image — absolutely pinned to right edge of section */}
      <div className="hidden md:block absolute right-1 bottom-0 top-16 z-10 pointer-events-none select-none animate-fade-right delay-300" style={{ width: "50%" }}>
        <div className="relative w-full h-full">
          <Image
            src="/banner_img.png"
            alt="Repute AI futuristic humanoid cyborg"
            fill
            priority
            className="object-contain object-right-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          />
          {[
            { top: "28%", right: "22%", size: "w-4 h-4" },
            { top: "38%", right: "44%", size: "w-1.5 h-1.5" },
            { top: "58%", right: "50%", size: "w-1.5 h-1.5" },
            { top: "63%", right: "44%", size: "w-1 h-1" },
            { top: "68%", right: "38%", size: "w-1 h-1" },
            { top: "75%", right: "32%", size: "w-1.5 h-1.5" },
          ].map((pos, i) => (
            <span
              key={i}
              className={`absolute ${pos.size} rounded-full bg-[#D50715]`}
              style={{
                top: pos.top,
                right: pos.right,
                boxShadow: "0 0 8px 3px rgba(227,30,36,0.9)",
                animation: `pulse 1.5s ease-in-out ${i * 0.25}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Banner Content */}
      <main className="section-wid relative z-10 flex-1 flex items-center pt-24 md:pt-28 py-4 md:py-0 pb-8 md:pb-6">
        <div className="w-full flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-130px)]">
          {/* Left Column: Typography & CTAs */}
          <div className="w-full md:max-w-[340px] lg:max-w-[480px] xl:max-w-[600px] flex flex-col justify-center z-20 pt-2 md:pt-0">
            {/* Category / Pillar Tag */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3.5 sm:mb-5 md:mb-6 animate-fade-up delay-100">
              <span className="w-5 sm:w-6 md:w-12 h-[1px] bg-[#D50715] shrink-0 ms-2 mt-0.5" />
              <p className="hero-tag">BRANDING &bull; TECHNOLOGY &bull; AI &bull; GROWTH</p>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline mb-4 sm:mb-6 select-none animate-fade-up delay-200">
              <span className="block text-white">BUILD</span>
              <span className="block text-[#D50715] min-h-[1em]">{displayed}</span>
              <span className="block text-white">NEXT.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="hero-body max-w-[310px] md:max-w-[340px] lg:max-w-2xl mb-6 sm:mb-8 animate-fade-up delay-300">
              Repute builds brands, digital products and intelligent systems for
              businesses that refuse to stand still &mdash; combining creative
              craft, engineering and applied AI into one growth partnership.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 lg:gap-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12 animate-fade-up delay-400">
              <Link href="#explore" className="hero-btn hero-btn-primary">
                <span>EXPLORE WHAT&apos;S NEXT</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="#talk" className="hero-btn hero-btn-secondary">
                <span>TALK TO REPUTE</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Tagline */}
            <div className="pt-1 animate-fade-up delay-500">
              <p className="text-[10px] sm:text-[12px]  tracking-[0.22em]  uppercase">
                AI-POWERED. BUSINESS-FOCUSED.
              </p>
            </div>
          </div>

          {/* Mobile: Business Growth Card */}
          <div className="md:hidden z-20 flex flex-col gap-3 mt-6 w-full max-w-[270px] animate-fade-up delay-600">
            <div className="bg-white text-black p-4 shadow-2xl shadow-black/80 rounded-[2px]">
              <p className="hero-section-tag mb-1">BUSINESS GROWTH CHECK</p>
              <h2 className="text-sm font-black text-black leading-snug mb-1">How Is Your Business<br />Performing Today?</h2>
              <p className="text-[10.5px] text-gray-600 leading-relaxed mb-3">Get a quick view of where your business stands and what could be improved next.</p>
              <Link href="#check-business" className="hero-btn hero-btn-primary w-full justify-center group">
                <span>CHECK YOUR BUSINESS</span>
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <div className="flex items-center gap-1.5 mt-2 text-[9px] font-semibold text-gray-400 tracking-wider uppercase">
                <Sparkles className="w-3 h-3 text-[#D50715] shrink-0" />
                <span>AI-POWERED BUSINESS INSIGHT</span>
              </div>
            </div>
            <Link href="#watch-action" className="group flex items-center gap-2.5 w-fit">
              <div className="w-7 h-7 rounded-full bg-[#D50715] flex items-center justify-center text-white shrink-0">
                <Play className="w-3 h-3 fill-white ml-0.5" />
              </div>
              <span className="text-[11px] font-bold tracking-wider uppercase text-white flex items-center gap-1.5">
                <span>WATCH REPUTE IN ACTION</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </div>

          {/* Floating Business Growth Card & Video Link — absolutely positioned over robot */}
          <div className="hidden md:flex absolute z-20 flex-col gap-3 right-[5%] lg:right-[8%] xl:right-[26%] animate-fade-up delay-600" style={{ top: "50%", transform: "translateY(-50%)" }}>
            {/* White Business Growth Check Card */}
            <div className="bg-white text-black p-3.5 sm:p-4 lg:p-5 w-[235px] sm:w-[250px] lg:w-[400px] shadow-2xl shadow-black/80 rounded-[2px] border border-gray-100/20">
              <p className="hero-section-tag mb-1 md:mb-1.5">BUSINESS GROWTH CHECK</p>
              <h2 className="text-sm lg:text-[18px] font-semibold text-black leading-snug mb-1 md:mb-1.5">
                How Is Your Business<br />Performing Today?
              </h2>
              <p className="text-[12px] lg:text-[14px] text-gray-600 leading-relaxed mb-3 md:mb-3.5">
                Get a quick view of where your business stands and what could be improved next.
              </p>
              <Link href="#check-business" className="hero-btn hero-btn-primary w-full justify-center group">
                <span>CHECK YOUR BUSINESS</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <div className="flex items-center gap-1.5 mt-2 md:mt-5 text-[12px] font-semibold  tracking-wider uppercase">
                <Sparkles className="w-4 h-4 text-[#D50715] shrink-0" />
                <span>AI-POWERED BUSINESS INSIGHT</span>
              </div>
            </div>

            {/* Watch Repute In Action Link */}
            <Link href="#watch-action" className="group flex items-center gap-2.5 md:gap-3 w-fit transition-opacity hover:opacity-95 mt-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#D50715] group-hover:bg-[#ff262d] flex items-center justify-center text-white shadow-lg shadow-red-950/50 transition-all duration-200 group-hover:scale-105 shrink-0">
                <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white ml-0.5" />
              </div>
              <span className="text-[12px] sm:text-[13x]  tracking-[0.22em]font-semibold tracking-wider uppercase text-white group-hover:text-red-400 transition-colors flex items-center gap-1.5 md:gap-2">
                <span>WATCH REPUTE IN ACTION</span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
}

