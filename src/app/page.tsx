import Features from "@/components/Features";

import { Metadata } from "next";
import { Hero } from "../components/Hero";
import { MailingList } from "../components/Common/MailingList";

export const metadata: Metadata = {
  title: "Lokomu - Local Communities",
  description:
    "Lokomu is an app for building local communities through shared interests and resources.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <MailingList />
    </>
  );
}
