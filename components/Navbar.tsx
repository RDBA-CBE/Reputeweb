"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "#about" },
  { label: "CAPABILITIES", href: "#capabilities" },
  { label: "CASESTUDIES", href: "#casestudies" },
  { label: "INDUSTRIES", href: "#industries" },
  { label: "INSIGHTS", href: "#insights" },
  { label: "CAREERS", href: "#careers" },
  { label: "CONTACT", href: "/contact" },
];

const navVariants = {
  hidden: { y: -80, opacity: 0, scale: 0.97 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.35 + i * 0.07, ease: "easeOut" },
  }),
};

const sideVariants = (dir: number) => ({
  hidden: { opacity: 0, x: dir * 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
});

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 section-wid transition-all duration-500 ${scrolled ? "pt-2 md:pt-3" : "pt-4 md:pt-6"}`}
    >
      <motion.nav
        animate={{
          boxShadow: scrolled
            ? "0 8px 32px rgba(0,0,0,0.18)"
            : "0 2px 8px rgba(0,0,0,0.06)",
        }}
        transition={{ duration: 0.4 }}
        className="w-full px-6 md:px-10 bg-white rounded-md md:rounded-lg h-14 md:h-20 flex items-center justify-between border border-gray-100"
      >
        {/* Logo */}
        <motion.div
          variants={sideVariants(-1)}
          initial="hidden"
          animate="visible"
          className="flex items-center shrink-0"
        >
          <Link
            href="/"
            className="inline-block transition-opacity hover:opacity-90"
          >
            <Image
              src="/repute_logo.png"
              alt="Repute Logo"
              width={140}
              height={40}
              priority
              className="h-7 sm:h-8 md:h-12 w-auto object-contain"
            />
          </Link>
        </motion.div>

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex items-center gap-2.5 md:gap-3.5 lg:gap-6 xl:gap-7 2xl:gap-8 text-[10.5px] md:text-[11px] lg:text-[11.5px] xl:text-[14px] tracking-[0.04em] lg:tracking-[0.06em] font-semibold">
          {navItems.map((item, i) => (
            <motion.li
              key={item.label}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="relative group"
            >
              <Link
                href={item.href}
                className="py-1 whitespace-nowrap text-neutral-800 hover:text-[#D50715] transition-colors duration-200 block"
              >
                {item.label}
              </Link>
              {/* Hover underline */}
              <motion.span
                className="absolute bottom-0 left-0 h-[2px] bg-[#D50715] rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            </motion.li>
          ))}
        </ul>

        {/* Right: Button + Mobile Toggle */}
        <motion.div
          variants={sideVariants(1)}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-2.5 sm:gap-3"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="#start-project"
              className="hidden sm:inline-flex items-center justify-center px-4 md:px-4.5 lg:px-5 py-2 md:py-3 text-[14px] md:text-[14px]  text-white tracking-wide rounded-xl bg-gradient-to-b from-[#3a3b40] to-[#1c1d21] shadow-md shadow-black/25 hover:from-[#46474d] hover:to-[#26272e] border border-white/10 transition-all duration-200 whitespace-nowrap"
            >
              Start a Project
            </Link>
          </motion.div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-black focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scaleY: 0.94 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -12, scaleY: 0.94 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-lg shadow-2xl border border-gray-200 py-4 px-6 z-50 origin-top"
          >
            <ul className="flex flex-col gap-1 text-sm font-semibold text-gray-800">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.05,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 px-1 transition-colors text-gray-700 hover:text-[#D50715] hover:pl-3 duration-200"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="pt-3 sm:hidden"
              >
                <Link
                  href="#start-project"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-white rounded-lg bg-[#1c1d21]"
                >
                  Start a Project
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
