import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Features from "@/components/Features";
import Hero from "@/components/Hero";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lokomu - Local Communities ",
  description: "This is home for the startup Lokomu",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
}
