import Image from "next/image";

const nav = [
  {
    title: "COMPANY",
    links: ["About", "Why Repute", "Insights", "Careers"],
  },
  {
    title: "SERVICES",
    links: [
      "Branding & Creative",
      "Web & Software",
      "Mobile & Digital",
      "AI Solutions",
      "AI-Driven Marketing",
    ],
  },
  {
    title: "WORK",
    links: ["Case Studies", "Industries", "Clients", "Testimonials"],
  },
  {
    title: "RESOURCES",
    links: ["Business Insights", "FAQ"],
  },
  {
    title: "CONTACT",
    links: ["Start a Project", "Talk to Repute", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#2a2a2a] text-white relative overflow-hidden ">
      {/* Vertical lines continuing from CTA section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="w-[90%] lg:w-[85%] mx-auto px-8 h-full relative">
          {/* Line 0: left edge of content */}
          <div className="absolute top-0 w-px h-[55%] bg-[#ffffff09]" style={{ left: 0 }} />
          {/* Line 1: after logo col (320px) */}
          <div className="absolute top-0 w-px h-[55%] bg-[#ffffff09]" style={{ left: "370px" }} />
          {/* Lines 2–6: evenly split the flex-1 area after 320px */}
          {[1, 2, 3, 4, 5].map((n) => (
            <div
              key={n}
              className="absolute top-0 w-px h-[55%] bg-[#ffffff09]"
              style={{ left: `calc(320px + (100% - 320px) * ${n} / 5)` }}
            />
          ))}
        </div>
      </div>
      <div className="w-[90%] lg:w-[75%] mx-auto pt-12 md:pt-16 pb-6">
        {/* Top row */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-8">
          {/* Left: Logo + tagline + social */}
          <div className="w-full md:w-[320px] shrink-0 flex flex-col gap-5">
            <img
              src="/footer_logo.png"
              alt="Repute"
              width={140}
              height={40}
              className="w-[160px] object-left"
            />
            <h3 className="section-in-ti tracking-wide text-white">
              BUILD WHAT'S NEXT.
            </h3>
            <p className="text-footer leading-relaxed max-w-[220px]">
              Brand, technology and AI built around your next stage of growth.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[
                <svg
                  key="li"
                  viewBox="0 0 24 24"
                  fill="#99a1af00"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>,
                <svg
                  key="ig"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>,
                <svg
                  key="x"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>,
                <svg
                  key="yt"
                  viewBox="0 0 24 24"
                  fill="#99a1af00"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon
                    points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                    fill="white"
                  />
                </svg>,
              ].map((icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 border border-[#595959] flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-colors"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Nav columns */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
            {nav.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-6 h-px bg-[#D50715]" />
                  <span className="text-[12px] font-semibold tracking-[0.18em] text-white uppercase">
                    {col.title}
                  </span>
                </div>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-[15px] text-footer hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Contact row */}
        <div className="flex flex-col sm:flex-row sm:justify-end gap-6 sm:gap-16 mt-6 md:mt-4">
          <div>
            <p className="text-[14px] tracking-[0.15em] text-footer uppercase mb-1">
              CALL
            </p>
            <p className="text-[14px] tracking-[0.05em] font-semibold text-white">+91 00 0000 0000</p>
          </div>
          <div>
            <p className="text-[14px] tracking-[0.15em] text-footer uppercase mb-1">
              MAIL
            </p>
            <p className="text-[14px] tracking-[0.05em] font-semibold text-white">hello@repute.com</p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-2 pt-4 border-t border-white/10 text-center">
          <p className="text-[12px] tracking-[0.15em] text-footer uppercase">
            REPUTE DIGITAL BUSINESS AGENCY © 2026 ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
