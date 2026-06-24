"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

type HeroContactId = "max" | "telegram" | "email";

const heroContactLinks: {
  id: HeroContactId;
  label: string;
  shortLabel: string;
  href: string;
}[] = [
  {
    id: "max",
    label: "Написать в MAX",
    shortLabel: "MAX",
    href: "#",
  },
  {
    id: "telegram",
    label: "Написать в Telegram",
    shortLabel: "Telegram",
    href: "https://t.me/username",
  },
  {
    id: "email",
    label: "Написать на почту",
    shortLabel: "Почта",
    href: "mailto:example@example.com",
  },
];

const heroCtaClasses =
  "inline-flex min-h-12 w-full items-center justify-center rounded-[6px] border border-[#2F4A3C] bg-[#2F4A3C] px-5 py-3 text-sm font-semibold leading-none text-[#FCFBF8] shadow-[0_18px_45px_rgba(16,19,18,0.22)] transition duration-200 hover:border-[#24382E] hover:bg-[#24382E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A6B] sm:w-auto";

function ContactIcon({ id }: { id: HeroContactId }) {
  if (id === "telegram") {
    return (
      <svg
        aria-hidden="true"
        className="size-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M20.2 4.7 4.6 10.8c-.9.4-.9 1.6.1 1.9l3.7 1.2 1.4 4.4c.3.9 1.4 1.1 2 .3l2.1-2.5 3.8 2.8c.8.6 1.9.1 2.1-.9l2.2-12c.2-1-.8-1.8-1.8-1.3Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <path
          d="m8.5 13.8 7.4-5.1-4.7 6.7"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (id === "email") {
    return (
      <svg
        aria-hidden="true"
        className="size-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M4.8 7.2h14.4v9.6H4.8V7.2Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <path
          d="m5.3 7.8 6.7 5 6.7-5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="size-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M4.8 6.8h14.4v8.8H9.7l-3.5 2.7v-2.7H4.8V6.8Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <text
        fill="currentColor"
        fontSize="4.2"
        fontWeight="700"
        letterSpacing="0"
        x="7.2"
        y="12.7"
      >
        MAX
      </text>
    </svg>
  );
}

export function HeroContactActions() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    if (!isContactOpen) {
      return;
    }

    const desktopPointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    );

    if (!desktopPointer.matches) {
      return;
    }

    const closeContactsOnScroll = () => {
      setIsContactOpen(false);
    };

    window.addEventListener("scroll", closeContactsOnScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", closeContactsOnScroll);
    };
  }, [isContactOpen]);

  return (
    <>
      <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:items-center">
        <button
          aria-controls="hero-contact-actions"
          aria-expanded={isContactOpen}
          className={heroCtaClasses}
          onClick={() => setIsContactOpen((value) => !value)}
          type="button"
        >
          Связаться с нами
        </button>

        <a className={heroCtaClasses} href="#services">
          Посмотреть услуги
        </a>
      </div>

      <div
        aria-hidden={!isContactOpen}
        className={`hero-contact-panel z-20 mt-3 flex origin-left flex-row items-center justify-center gap-3 overflow-hidden transition-[max-height,opacity,transform] duration-300 lg:absolute lg:mt-0 lg:flex-col lg:items-center lg:justify-start lg:gap-4 lg:overflow-visible ${
          isContactOpen
            ? "pointer-events-auto opacity-100 translate-x-0 scale-100"
            : "pointer-events-none opacity-0 -translate-x-2 scale-[0.96]"
        }`}
        id="hero-contact-actions"
        style={{ maxHeight: isContactOpen ? "220px" : "0px" }}
      >
        {heroContactLinks.map((link, index) => {
          const openDelay = (heroContactLinks.length - index - 1) * 80;

          return (
            <a
              aria-label={link.label}
              className={`hero-contact-link relative inline-flex min-h-16 min-w-16 shrink-0 flex-col items-center justify-center gap-1 rounded-[8px] border border-[rgba(183,154,107,0.45)] bg-[rgba(243,241,236,0.92)] px-2 py-2 text-[#2F4A3C] shadow-[0_14px_34px_rgba(16,19,18,0.20)] transition-[opacity,transform,background-color,border-color,color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A6B] lg:size-12 lg:min-h-0 lg:min-w-0 lg:flex-row lg:gap-0 lg:rounded-full lg:p-0 ${
                isContactOpen
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-2.5 scale-[0.96]"
              }`}
              href={link.href}
              key={link.id}
              style={
                {
                  transitionDelay: isContactOpen ? `${openDelay}ms` : "0ms",
                } as CSSProperties
              }
              tabIndex={isContactOpen ? undefined : -1}
            >
              <ContactIcon id={link.id} />
              <span className="hero-contact-short-label text-[11px] font-semibold leading-none lg:hidden">
                {link.shortLabel}
              </span>
              <span className="hero-contact-label">{link.label}</span>
            </a>
          );
        })}
      </div>
    </>
  );
}
