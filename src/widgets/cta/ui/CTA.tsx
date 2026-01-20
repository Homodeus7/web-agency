"use client";

import { useState } from "react";
import { Button, Container } from "@/shared/ui";
import type { CTAData } from "@/sanity/lib/types";

interface CTAProps {
  data: CTAData;
}

export function CTA({ data }: CTAProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail("");
        setPhone("");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="cta">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-900/40 via-bg-primary to-cyan-900/20 z-0" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto bg-bg-elevated/50 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-16 text-center shadow-[0_0_50px_rgba(79,70,229,0.2)]">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            {data.title}
          </h2>
          <p className="text-xl text-text-secondary mb-10">
            {data.description}
          </p>

          {submitted ? (
            <div className="max-w-md mx-auto p-8 rounded-xl bg-green-500/10 border border-green-500/30">
              <p className="text-green-400 font-semibold text-lg">
                Спасибо! Мы свяжемся с вами в ближайшее время.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto space-y-4 text-left"
            >
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email: name@company.com"
                  required
                  className="w-full bg-bg-secondary border border-white/10 rounded-xl px-6 py-4 text-white placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Телефон (опционально)"
                  className="w-full bg-bg-secondary border border-white/10 rounded-xl px-6 py-4 text-white placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors"
                />
              </div>
              <Button
                type="submit"
                className="w-full py-4 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Отправка..." : data.buttonText}
              </Button>
              {data.contactEmail && (
                <p className="text-center text-xs text-text-muted mt-4">
                  Или напишите нам:{" "}
                  <a
                    href={`mailto:${data.contactEmail}`}
                    className="text-accent-secondary hover:underline"
                  >
                    {data.contactEmail}
                  </a>
                </p>
              )}
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
