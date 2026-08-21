"use client";
import EmblaCarousel from "@/components/embla-carousel";
import { EmblaOptionsType } from "embla-carousel";
const OPTIONS: EmblaOptionsType = {
  align: "start",
  direction: "rtl",
  loop: true,
};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
export default function Carousel() {
  return (
    <div className="theme-dark">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}
