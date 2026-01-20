"use client";

import { ArrowRight } from "lucide-react";
import { Button, Container } from "@/shared/ui";
import type { HeroData } from "@/sanity/lib/types";

interface HeroProps {
  data: HeroData;
}

export function Hero({ data }: HeroProps) {
  const trustLogos = data.trustLogos ?? [];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-125 h-125 bg-accent-primary/20 rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-[-10%] left-[-5%] w-125 h-125 bg-accent-secondary/20 rounded-full blur-[100px] animate-blob [animation-delay:2s]" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-in">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-text-secondary">
              {data.badge}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight mb-6 animate-in animate-delay-100">
            {data.title} <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-primary via-accent-secondary to-accent-primary animate-gradient-x">
              {data.highlightedText}
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-text-secondary mb-10 max-w-2xl leading-relaxed animate-in animate-delay-200">
            {data.description}
            {data.descriptionHighlight && (
              <span className="text-text-primary block mt-2 font-medium">
                {data.descriptionHighlight}
              </span>
            )}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-in animate-delay-300">
            <Button>
              {data.primaryButtonText} <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="secondary">{data.secondaryButtonText}</Button>
          </div>

          {/* Trust Badges */}
          {trustLogos.length > 0 && (
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
          )}
        </div>
      </Container>
    </section>
  );
}
