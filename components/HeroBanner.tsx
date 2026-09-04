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
    <section className="relative w-full min-h-screen bg-[#0d0e12] text-white flex flex-col justify-between overflow-hidden  pt-15">
      {/* Background Polygonal Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <Image
          src="/banner_bg.png"
          alt="Abstract geometric polygonal background"
          fill
          priority
          className="object-cover object-center opacity-[0.35] contrast-[1.3] scale-105"
        />
        {/* Subtle atmospheric dark gradients */}
        <div className="absolute inset-0 bg-radial-[circle_at_75%_45%] from-red-600/[0.04] via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
      </div>

      {/* Hero Banner Content */}
      <main className="relative z-10 flex-1 flex items-center max-w-[1440px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-20 py-4 md:py-0 pb-8 md:pb-6">
        <div className="w-full relative flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-130px)]">
          {/* Left Column: Typography & CTAs */}
          <div className="w-full md:max-w-[340px] lg:max-w-[540px] xl:max-w-[620px] flex flex-col justify-center z-20 pt-2 md:pt-0">
            {/* Category / Pillar Tag */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3.5 sm:mb-5 md:mb-6 animate-fade-up delay-100">
              <span className="w-5 sm:w-6 md:w-8 h-[2px] bg-[#e31e24] shrink-0" />
              <p className="hero-tag">BRANDING &bull; TECHNOLOGY &bull; AI &bull; GROWTH</p>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline mb-4 sm:mb-6 select-none animate-fade-up delay-200">
              <span className="block text-white">BUILD</span>
              <span className="block text-[#e31e24] min-h-[1em]">{displayed}</span>
              <span className="block text-white">NEXT.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="hero-body max-w-[310px] md:max-w-[340px] lg:max-w-lg mb-6 sm:mb-8 animate-fade-up delay-300">
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
              <p className="text-[10px] sm:text-[11px] font-medium tracking-[0.22em] text-gray-400 uppercase">
                AI-POWERED. BUSINESS-FOCUSED.
              </p>
            </div>
          </div>

          {/* Right Cyborg Graphic */}
          <div className="md:absolute right-[-10px] xl:right-0 bottom-0 top-0 h-[560px] sm:h-[620px] md:h-[calc(100vh-40px)] pointer-events-none select-none z-10 flex items-end justify-end mt-6 md:mt-0 pt-10 animate-fade-right delay-300" style={{ width: "55%" }}>
            <div className="relative w-full h-full flex items-end justify-end">
              <Image
                src="/banner_img.png"
                alt="Repute AI futuristic humanoid cyborg"
                fill
                priority
                className="object-contain object-right-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              />
              {/* Blinking red dots on image red points */}
              {[
                { top: "28%", right: "22%", size: "w-4 h-4" },   // big ear circle center
                { top: "38%", right: "44%", size: "w-1.5 h-1.5" }, // eye
                { top: "58%", right: "50%", size: "w-1.5 h-1.5" }, // neck dot 1
                { top: "63%", right: "44%", size: "w-1 h-1" },     // neck dot 2
                { top: "68%", right: "38%", size: "w-1 h-1" },     // neck dot 3
                { top: "75%", right: "32%", size: "w-1.5 h-1.5" }, // shoulder dot
              ].map((pos, i) => (
                <span
                  key={i}
                  className={`absolute ${pos.size} rounded-full bg-[#e31e24]`}
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

          {/* Floating Business Growth Card & Video Link */}
          <div className="relative md:absolute z-20 flex flex-col gap-3 md:gap-3.5 mt-6 md:mt-0 md:right-[220px] lg:right-[390px] xl:right-[450px] 2xl:right-[520px] self-start md:self-auto animate-fade-up delay-600" style={{ bottom: "-5%" }}>
            {/* White Business Growth Check Card */}
            <div className="bg-white text-black p-3.5 sm:p-4 md:p-4 lg:p-5 w-[235px] sm:w-[250px] md:w-[245px] lg:w-[270px] md:max-w-[280px] shadow-2xl shadow-black/80 rounded-[2px] border border-gray-100/20">
              <p className="hero-section-tag mb-1 md:mb-1.5">
                BUSINESS GROWTH CHECK
              </p>

              <h2 className="text-sm sm:text-[15px] md:text-sm lg:text-base font-black text-black leading-snug mb-1 md:mb-1.5">
                How Is Your Business
                <br />
                Performing Today?
              </h2>

              <p className="text-[10.5px] sm:text-[11px] md:text-[10.5px] lg:text-[11.5px] text-gray-600 leading-relaxed mb-3 md:mb-3.5">
                Get a quick view of where your business stands and what could
                be improved next.
              </p>

              <Link
                href="#check-business"
                className="hero-btn hero-btn-primary w-full justify-center group"
              >
                <span>CHECK YOUR BUSINESS</span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <div className="flex items-center gap-1.5 mt-2 md:mt-2.5 text-[8.5px] sm:text-[9px] md:text-[9px] lg:text-[9.5px] font-semibold text-gray-400 tracking-wider uppercase">
                <Sparkles className="w-3 h-3 text-[#e31e24] shrink-0" />
                <span>AI-POWERED BUSINESS INSIGHT</span>
              </div>
            </div>

            {/* Watch Repute In Action Link */}
            <Link
              href="#watch-action"
              className="group flex items-center gap-2.5 md:gap-3 w-fit transition-opacity hover:opacity-95"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#e31e24] group-hover:bg-[#ff262d] flex items-center justify-center text-white shadow-lg shadow-red-950/50 transition-all duration-200 group-hover:scale-105 shrink-0">
                <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white ml-0.5" />
              </div>
              <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-white group-hover:text-red-400 transition-colors flex items-center gap-1.5 md:gap-2">
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

