"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Slide = {
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  href: string;
  cta: string;
};

export default function BannerSlider({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  const slide = slides[index];

  return (
    <section className="relative h-[88vh] min-h-[620px] overflow-hidden">
      {slides.map((item, i) => (
        <div
          key={item.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(12,18,16,0.25) 0%, rgba(12,18,16,0.72) 100%), url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden={i !== index}
        />
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-20 md:px-8">
        <p className="text-xs uppercase tracking-[0.4em] text-[#e8d5b0]">{slide.eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] text-[#f7f3eb] md:text-7xl">
          {slide.title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-8 text-[#f7f3eb]/80 md:text-lg">{slide.subtitle}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href={slide.href}
            className="rounded-full bg-[#c4a574] px-7 py-3 text-xs uppercase tracking-[0.22em] text-[#0c1210] hover:bg-[#d8bf8d]"
          >
            {slide.cta}
          </Link>
          <Link
            href="/properties"
            className="rounded-full border border-white/25 px-7 py-3 text-xs uppercase tracking-[0.22em] text-white hover:border-[#c4a574]"
          >
            View all homes
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${i === index ? "w-10 bg-[#c4a574]" : "w-5 bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
}
