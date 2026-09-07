"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";

const clients = [
  { image: "/kpr.png",  quote: '"They rebuilt how our customers see us — and the pipeline followed."',       name: "Mr. K.P. Ramasamy", role: "THE FOUNDER AND CHAIRMAN OF TEXTILES AND SUGAR MANUFACTURER KPR MILL.", link: null },
  { image: "/zen.png",  quote: '"Repute is the only partner that talks about our margin, not their awards."', name: "Viji Narayanan: An", role: "BENEFACTOR, HARVARD-EDUCATED ANTHROPOLOGIST",                           link: "IIT KGP ALUMNI FOUNDATION INDIA" },
  { image: "/msri.png", quote: '"They rebuilt how our customers see us — and the pipeline followed."',       name: "M C Srinivas",      role: "FOUNDER OF MSRI STUD FORM",                                             link: null },
];

export default function ClientsSection() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640,  settings: { slidesToShow: 1.1 } },
    ],
  };

  return (
    <section className="w-full bg-[#F0F0F1] section-pad-big">
      <div className="section-wid">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-0 mb-8 md:mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 md:w-12 h-[1px] bg-[#c9181d]" />
              <p className="sec-top-ti uppercase">CLIENTS</p>
            </div>
            <h2 className="section-ti uppercase leading-tight">
              TRUSTED BY<br />BUSINESSES THAT <span className="text-[#c9181d]">THINK AHEAD.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button onClick={() => sliderRef.current?.slickPrev()} className="w-9 h-9 border border-gray-400 flex items-center justify-center hover:border-black transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button onClick={() => sliderRef.current?.slickNext()} className="w-9 h-9 border border-gray-400 flex items-center justify-center hover:border-black transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Slider */}
        {/* Slider */}
<div
  className="
    [&_.slick-track]:!flex
    [&_.slick-track]:!items-stretch
    [&_.slick-slide]:!h-auto
    [&_.slick-slide]:!flex
    [&_.slick-slide>div]:!flex
    [&_.slick-slide>div]:!w-full
    [&_.slick-slide>div]:!h-full
  "
>
  <Slider ref={sliderRef} {...settings}>
    {clients.map((c) => (
      <div key={c.name}>
        <div className="bg-white flex flex-col h-full mr-4 md:mr-5">

          {/* Image */}
          <div className="relative w-full aspect-[4/3] overflow-hidden shrink-0">
            <Image
              src={c.image}
              alt={c.name}
              fill
              className="object-cover"
            />

            <button className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#c9181d] flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
            </button>
          </div>

          {/* Content */}
          <div className="p-5 md:p-7 flex flex-col flex-1">
            <p className="text-sm md:text-base leading-relaxed">
              {c.quote}
            </p>

            <div className="border-t border-gray pt-4 md:pt-5 mt-auto">
              <p className="font-bold mb-1">
                {c.name}
              </p>

              <p className="text-[11px] md:text-[12px] font-bold tracking-widest text-gray uppercase">
                {c.link ? (
                  <>
                    <span className="underline">{c.link}</span>{" "}
                    {c.role}
                  </>
                ) : (
                  c.role
                )}
              </p>
            </div>
          </div>

        </div>
      </div>
    ))}
  </Slider>
</div>

      </div>
    </section>
  );
}
