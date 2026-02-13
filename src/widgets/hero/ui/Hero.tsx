"use client";

import { Button, Container } from "@/shared/ui";
import type { HeroData } from "@/sanity/lib/types";
import Aurora from "@/components/Aurora";

interface HeroProps {
  data: HeroData;
}

export function Hero({ data }: HeroProps) {
  const trustLogos = data.trustLogos ?? [];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#3730a3", "#0e7490", "#6d28d9"]}
          amplitude={1}
          blend={0.55}
        />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Badge */}
          {data.badge && (
            <span className="uppercase text-xs text-slate-100/90 tracking-wider mb-3">
              {data.badge}
            </span>
          )}

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight"
            style={{ fontWeight: 600 }}
          >
            {data.title}{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-primary via-accent-secondary to-accent-primary">
              {data.highlightedText}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto">
            {data.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center">
            <Button
              variant="primary"
              className="h-14 px-8 text-xl"
              onClick={() =>
                document
                  .getElementById("cta")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {data.primaryButtonText}
            </Button>
            {/* <Button variant="secondary">{data.secondaryButtonText}</Button> */}
          </div>

          {/* Trust Badges */}
          {/* {trustLogos.length > 0 && (
            <div className="mt-20 pt-10 border-t border-white/5 w-full animate-in animate-delay-500">
              <p className="text-sm text-text-muted mb-6 uppercase tracking-widest">
                {data.trustBadgesTitle}
              </p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {trustLogos.map((logo, i) => (
                  <span
                    key={i}
                    className="text-xl font-display font-bold flex items-center gap-2"
                  >
                    <div className="w-6 h-6 rounded bg-white/20" />
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          )} */}
        </div>
      </Container>
    </section>
  );
}
