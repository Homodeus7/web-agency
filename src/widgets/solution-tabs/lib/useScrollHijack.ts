"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface UseScrollHijackOptions {
  itemIds: string[];
  throttleMs?: number;
  minWidth?: number;
}

interface UseScrollHijackReturn {
  sectionRef: React.RefObject<HTMLElement | null>;
  activeId: string;
  setActiveId: (id: string) => void;
  isLocked: boolean;
  currentIndex: number;
}

export function useScrollHijack({
  itemIds,
  throttleMs = 700,
  minWidth = 1024,
}: UseScrollHijackOptions): UseScrollHijackReturn {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState(itemIds[0] ?? "");
  const [isLocked, setIsLocked] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const lastScrollTime = useRef(0);
  const lastScrollY = useRef(0);
  const wasAboveSection = useRef(true);

  const currentIndex = itemIds.indexOf(activeId);

  // Check if desktop
  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= minWidth);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, [minWidth]);

  // Handle wheel events
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (!isDesktop || !isLocked || hasCompleted) return;

      e.preventDefault();

      const now = Date.now();
      if (now - lastScrollTime.current < throttleMs) return;
      lastScrollTime.current = now;

      if (e.deltaY > 0) {
        // Scroll down - next item
        if (currentIndex < itemIds.length - 1) {
          setActiveId(itemIds[currentIndex + 1]);
        } else {
          // Last item - release scroll
          setHasCompleted(true);
          setIsLocked(false);
        }
      } else if (e.deltaY < 0) {
        // Scroll up - previous item
        if (currentIndex > 0) {
          setActiveId(itemIds[currentIndex - 1]);
        } else {
          // First item - release scroll up
          setIsLocked(false);
        }
      }
    },
    [isDesktop, isLocked, hasCompleted, currentIndex, itemIds, throttleMs],
  );

  // Handle scroll position detection
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !isDesktop) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollingDown = window.scrollY > lastScrollY.current;
      lastScrollY.current = window.scrollY;

      // Track if we're above the section
      if (rect.top > window.innerHeight * 0.5) {
        wasAboveSection.current = true;
      }

      // Lock conditions
      const isAtTop = rect.top <= 20 && rect.top >= -50;

      if (
        isAtTop &&
        scrollingDown &&
        wasAboveSection.current &&
        !hasCompleted &&
        !isLocked
      ) {
        setIsLocked(true);
        wasAboveSection.current = false;
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      // Reset when section is fully below viewport
      if (rect.top > window.innerHeight) {
        setHasCompleted(false);
        setActiveId(itemIds[0]);
        setIsLocked(false);
        wasAboveSection.current = true;
      }

      // Mark as skipped if scrolled past
      if (rect.bottom < -200) {
        wasAboveSection.current = false;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop, hasCompleted, isLocked, itemIds]);

  // Attach wheel listener when locked
  useEffect(() => {
    if (isLocked) {
      window.addEventListener("wheel", handleWheel, { passive: false });
      return () => window.removeEventListener("wheel", handleWheel);
    }
  }, [isLocked, handleWheel]);

  return {
    sectionRef,
    activeId,
    setActiveId,
    isLocked,
    currentIndex,
  };
}
