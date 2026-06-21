"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedMetric = {
  value: number;
  suffix: string;
  label: string;
  animated: true;
  editable: boolean;
};

type StaticMetric = {
  value: string;
  label: string;
  animated: false;
  editable: boolean;
};

type HeroMetric = AnimatedMetric | StaticMetric;

const heroMetrics: HeroMetric[] = [
  { value: 10, suffix: "+", label: "лет опыта", animated: true, editable: true },
  { value: 100, suffix: "+", label: "объектов", animated: true, editable: true },
  { value: 30, suffix: "+", label: "специалистов", animated: true, editable: true },
  { value: "Гарантия", label: "на работы", animated: false, editable: true },
];

const animationDuration = 1500;

export function HeroMetrics() {
  return (
    <div className="grid overflow-hidden rounded-[6px] border border-[#F3F1EC]/14 bg-[linear-gradient(90deg,rgba(16,19,18,0.72)_0%,rgba(30,46,37,0.72)_45%,rgba(47,74,60,0.64)_100%)] shadow-[0_22px_70px_rgba(0,0,0,0.20)] backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4">
      {heroMetrics.map((metric) => (
        <CountUpMetric key={`${metric.value}-${metric.label}`} metric={metric} />
      ))}
    </div>
  );
}

function CountUpMetric({ metric }: { metric: HeroMetric }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const animationTimeoutRef = useRef<number | null>(null);
  const hasAnimatedRef = useRef(false);
  const [currentValue, setCurrentValue] = useState(
    metric.animated ? 0 : metric.value,
  );

  useEffect(() => {
    if (!metric.animated || hasAnimatedRef.current) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      hasAnimatedRef.current = true;
      animationFrameRef.current = requestAnimationFrame(() => {
        setCurrentValue(metric.value);
      });
      return;
    }

    const node = itemRef.current;

    if (!node) {
      return;
    }

    function startAnimation() {
      if (hasAnimatedRef.current || !metric.animated) {
        return;
      }

      hasAnimatedRef.current = true;
      const targetValue = metric.value;
      const startedAt = performance.now();
      animationTimeoutRef.current = window.setTimeout(() => {
        setCurrentValue(targetValue);
      }, animationDuration + 120);

      function animate(now: number) {
        const progress = Math.min((now - startedAt) / animationDuration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        setCurrentValue(Math.round(targetValue * eased));

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();

      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      if (animationTimeoutRef.current !== null) {
        window.clearTimeout(animationTimeoutRef.current);
      }
    };
  }, [metric]);

  const displayValue = metric.animated
    ? `${currentValue}${metric.suffix}`
    : metric.value;

  return (
    <div
      className="group min-h-[92px] border-b border-r border-[#F3F1EC]/12 px-5 py-5 transition duration-300 hover:bg-[#F3F1EC]/7 last:border-b-0 sm:[&:nth-child(3)]:border-b-0 sm:[&:nth-child(4)]:border-b-0 sm:even:border-r-0 lg:border-b-0 lg:even:border-r lg:last:border-r-0"
      data-editable-placeholder={metric.editable}
      ref={itemRef}
    >
      <div className="text-3xl font-semibold leading-none text-[#F3F1EC] transition duration-300 group-hover:text-[#B79A6B] sm:text-4xl">
        {displayValue}
      </div>
      <div className="mt-2 text-sm leading-6 text-[#F3F1EC]/68">
        {metric.label}
      </div>
    </div>
  );
}
