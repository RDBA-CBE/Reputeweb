import { Metadata } from "next";
import Home from "./home";

export const metadata: Metadata = {
  title: "React Components | Your App Name",
  description:
    "Reusable and responsive React components for building modern web applications.",
  keywords: [
    "React components",
    "React UI",
    "Next.js",
    "web components",
    "UI components",
  ],
  openGraph: {
    title: "React Components | Your App Name",
    description:
      "Reusable and responsive React components for modern web applications.",
    type: "website",
  },
};

export default function page() {
  return (
    <>
    <Home/>
    </>
  );
}
