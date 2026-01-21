"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button, Container } from "@/shared/ui";
import { useSelectedPackage } from "@/shared/lib/selected-package-context";
import { formatPhone, parsePhoneDigits } from "@/shared/lib/phone";
import type { CTAData } from "@/sanity/lib/types";

interface CTAProps {
  data: CTAData;
}

export function CTA({ data }: CTAProps) {
  const [email, setEmail] = useState("");
  const [phoneDigits, setPhoneDigits] = useState("");
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [telegram, setTelegram] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { selectedPackage, clearPackage } = useSelectedPackage();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneDigits(parsePhoneDigits(e.target.value));
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && phoneDigits.length > 0) {
      e.preventDefault();
      setPhoneDigits((prev) => prev.slice(0, -1));
    }
  };

  const handlePhoneFocus = () => setPhoneFocused(true);
  const handlePhoneBlur = () => setPhoneFocused(false);

  const phoneValue =
    phoneDigits.length > 0 || phoneFocused ? formatPhone(phoneDigits) : "";

  const handleTelegramChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTelegram(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          phone: phoneDigits.length > 0 ? `+7${phoneDigits}` : undefined,
          telegram: telegram || undefined,
          ...(selectedPackage && { package: selectedPackage }),
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail("");
        setPhoneDigits("");
        setTelegram("");
        clearPackage();
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
              {selectedPackage && (
                <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-accent-primary/10 border border-accent-primary/30">
                  <span className="text-sm text-text-secondary">
                    Выбран пакет:
                  </span>
                  <span className="text-sm font-semibold text-accent-secondary">
                    {selectedPackage}
                  </span>
                  <button
                    type="button"
                    onClick={clearPackage}
                    className="ml-2 p-1 rounded-full hover:bg-white/10 transition-colors"
                    aria-label="Убрать выбор пакета"
                  >
                    <X className="w-4 h-4 text-text-muted" />
                  </button>
                </div>
              )}
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
                  value={phoneValue}
                  onChange={handlePhoneChange}
                  onKeyDown={handlePhoneKeyDown}
                  onFocus={handlePhoneFocus}
                  onBlur={handlePhoneBlur}
                  placeholder="+7 (012) 345-67-89"
                  className="w-full bg-bg-secondary border border-white/10 rounded-xl px-6 py-4 text-white placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  value={telegram}
                  onChange={handleTelegramChange}
                  placeholder="@username"
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
