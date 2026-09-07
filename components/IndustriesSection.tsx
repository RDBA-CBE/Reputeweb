"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";

const industries = [
  { num: "01", title: "MANUFACTURING", image: "/image_6.png" },
  { num: "02", title: "HEALTHCARE", image: "/image_5.png" },
  { num: "03", title: "EDUCATION", image: "" },
  { num: "04", title: "RETAIL", image: "/image_7.png" },
  { num: "05", title: "TECHNOLOGY", image: "/what_we_do.png" },
  { num: "06", title: "REAL ESTATE", image: "/image_5.png" },
  { num: "07", title: "FOOD & BEVERAGE", image: "/image_6.png" },
];

export default function IndustriesSection() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3.5 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768,  settings: { slidesToShow: 2.2 } },
      { breakpoint: 480,  settings: { slidesToShow: 1.3 } },
    ],
  };

  return (
    <section className="w-full bg-[#555555] section-pad-big !pb-10">
      <div className="section-wid">
        {/* Header */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:items-start gap-6 lg:gap-0 mb-8 md:mb-12">
          <div className="w-full lg:col-span-6">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <span className="w-8 md:w-12 h-[1px] bg-[#c9181d]" />
              <p className="sec-top-ti uppercase text-white">INDUSTRIES</p>
            </div>
            <h2 className="section-ti uppercase leading-tight text-white">
              BUILT FOR DIFFERENT<br />BUSINESS WORLDS.
            </h2>
          </div>
          <div className="w-full lg:col-span-6 flex items-center">
            <p className="text-white text-sm md:text-base leading-relaxed md:max-w-xl">
              Every sector has its own buyers, cycles and constraints. We work across many of them — and design for the specifics of each.
            </p>
          </div>
        </div>
      </div>

      {/* Slider — left-aligned with section-wid, bleeds to right edge of page */}
      <div
        style={{
          marginLeft: "calc((100vw - 90%) / 2)",
          width: "calc(100vw - (100vw - 90%) / 2)",
          overflow: "hidden",
        }}
      >
        <Slider {...settings}>
          {industries.map((ind) => (
            <div key={ind.num}>
              <div className="pr-2 cursor-pointer group">
                <div
                  className="relative w-full overflow-hidden bg-[#1a1a1a] rounded-sm"
                  style={{ height: "clamp(220px, 58vh, 600px)" }}
                >
                  {ind.image ? (
                    <Image
                      src={ind.image}
                      alt={ind.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                  ) : null}
                  <span className="absolute bottom-4 left-4 text-white/30 text-4xl md:text-6xl font-black leading-none">
                    {ind.num}
                  </span>
                </div>
                <h3 className="section-in-ti uppercase tracking-tight text-white mt-3 md:mt-4 mb-2">
                  {ind.title}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Footer */}
      <div className="section-wid pt-6 md:pt-10">
        <p className="text-[11px] md:text-[12px] font-bold tracking-[0.2em] text-white/60 uppercase">
          SCROLL FOR MORE INDUSTRIES →
        </p>
      </div>
    </section>
  );
}
