import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Repute | Build What's Next - Branding, Technology & AI",
  description:
    "Repute builds brands, digital products and intelligent systems for businesses that refuse to stand still.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased bg-white">
      <body className="min-h-full flex flex-col font-sans selection:bg-[#e31e24] selection:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
