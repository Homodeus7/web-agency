import { useLayoutEffect, useRef, useCallback, useMemo } from 'react';
import Lenis from 'lenis';
import './ScrollStack.css';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete
}) => {
  const scrollerRef = useRef(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef(null);
  const lenisRef = useRef(null);
  const cardsRef = useRef([]);
  const lastTransformsRef = useRef(new Map());
  const cardOffsetsRef = useRef([]); // Кэш позиций элементов
  const endElementOffsetRef = useRef(0);
  const isUpdatingRef = useRef(false);
  const tickScheduledRef = useRef(false);

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
        scrollContainer: document.documentElement
      };
    } else {
      const scroller = scrollerRef.current;
      return {
        scrollTop: scroller.scrollTop,
        containerHeight: scroller.clientHeight,
        scrollContainer: scroller
      };
    }
  }, [useWindowScroll]);

  // Кэшируем позиции элементов
  const cacheCardOffsets = useCallback(() => {
    const offsets = cardsRef.current.map(card => {
      if (useWindowScroll) {
        const rect = card.getBoundingClientRect();
        return rect.top + window.scrollY;
      } else {
        return card.offsetTop;
      }
    });
    cardOffsetsRef.current = offsets;

    const endElement = useWindowScroll
      ? document.querySelector('.scroll-stack-end')
      : scrollerRef.current?.querySelector('.scroll-stack-end');

    if (endElement) {
      if (useWindowScroll) {
        const rect = endElement.getBoundingClientRect();
        endElementOffsetRef.current = rect.top + window.scrollY;
      } else {
        endElementOffsetRef.current = endElement.offsetTop;
      }
    }
  }, [useWindowScroll]);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length) return;
    if (isUpdatingRef.current) return;

    isUpdatingRef.current = true;
    tickScheduledRef.current = false;

    // Batch read - все чтения DOM сначала
    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
    const endElementTop = endElementOffsetRef.current;

    // Вычисляем топ карточку один раз если нужен blur
    let topCardIndex = 0;
    if (blurAmount) {
      for (let i = 0; i < cardOffsetsRef.current.length; i++) {
        const cardTop = cardOffsetsRef.current[i];
        const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
        if (scrollTop >= triggerStart) {
          topCardIndex = i;
        }
      }
    }

    // Batch write - все записи в DOM потом
    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = cardOffsetsRef.current[i];
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount && i < topCardIndex) {
        const depthInStack = topCardIndex - i;
        blur = Math.max(0, depthInStack * blurAmount);
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.5 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.005 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.5 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.5;

      if (hasChanged) {
        // Используем CSS custom properties для более плавной анимации
        card.style.setProperty('--translate-y', `${newTransform.translateY}px`);
        card.style.setProperty('--scale', newTransform.scale);
        card.style.setProperty('--rotation', `${newTransform.rotation}deg`);
        card.style.setProperty('--blur', `${newTransform.blur}px`);

        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    getScrollData
  ]);

  // Используем requestAnimationFrame для throttling
  const scheduleUpdate = useCallback(() => {
    if (!tickScheduledRef.current) {
      tickScheduledRef.current = true;
      requestAnimationFrame(() => {
        updateCardTransforms();
      });
    }
  }, [updateCardTransforms]);

  const handleScroll = useCallback(() => {
    scheduleUpdate();
  }, [scheduleUpdate]);

  const setupLenis = useCallback(() => {
    if (useWindowScroll) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        wheelMultiplier: 1,
        lerp: 0.075, // Уменьшил для более резкого отклика
        syncTouch: true,
        syncTouchLerp: 0.05
      });

      // Используем только raf, не scroll event
      const raf = time => {
        lenis.raf(time);
        updateCardTransforms();
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return lenis;
    } else {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      const lenis = new Lenis({
        wrapper: scroller,
        content: scroller.querySelector('.scroll-stack-inner'),
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        gestureOrientationHandler: true,
        normalizeWheel: true,
        wheelMultiplier: 1,
        touchInertiaMultiplier: 35,
        lerp: 0.075,
        syncTouch: true,
        syncTouchLerp: 0.05,
        touchInertia: 0.6
      });

      const raf = time => {
        lenis.raf(time);
        updateCardTransforms();
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return lenis;
    }
  }, [useWindowScroll, updateCardTransforms]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : scroller.querySelectorAll('.scroll-stack-card')
    );

    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = 'transform, filter';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      // Инициализируем CSS custom properties
      card.style.setProperty('--translate-y', '0px');
      card.style.setProperty('--scale', '1');
      card.style.setProperty('--rotation', '0deg');
      card.style.setProperty('--blur', '0px');
    });

    // Кэшируем позиции после того как карточки отрендерены
    setTimeout(() => {
      cacheCardOffsets();
      setupLenis();
    }, 0);

    // Обновляем кэш при resize
    const handleResize = () => {
      cacheCardOffsets();
      updateCardTransforms();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      cardOffsetsRef.current = [];
      transformsCache.clear();
      isUpdatingRef.current = false;
      tickScheduledRef.current = false;
    };
  }, [
    itemDistance,
    useWindowScroll,
    cacheCardOffsets,
    setupLenis,
    updateCardTransforms
  ]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        {/* Spacer so the last pin can release cleanly */}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;
