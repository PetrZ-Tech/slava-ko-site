import { existsSync } from "node:fs";
import path from "node:path";
import type { CSSProperties } from "react";
import { HeroMetrics } from "@/components/HeroMetrics";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type HeroSlide = {
  title: string;
  image: string;
};

const heroSlides: HeroSlide[] = [
  {
    title: "Проект дома",
    image: "/images/hero-slider/hero-01-project.png",
  },
  {
    title: "Строительство",
    image: "/images/hero-slider/hero-02-construction.png",
  },
  {
    title: "Готовый дом",
    image: "/images/hero-slider/hero-03-finished.png",
  },
];

const heroBenefits = [
  "Фиксируем смету и сроки",
  "Собственная команда специалистов",
  "Контроль качества на каждом этапе",
  "Работаем в Нижнем Новгороде и области",
];

function hasPublicImage(imagePath: string) {
  const imageFile = path.join(
    process.cwd(),
    "public",
    imagePath.replace(/^\//, ""),
  );

  return existsSync(imageFile);
}

const availableHeroSlides = heroSlides.filter((slide) =>
  hasPublicImage(slide.image),
);

const fallbackHeroStyle: CSSProperties = {
  backgroundImage:
    "radial-gradient(circle at 82% 20%, rgba(183, 154, 107, 0.38), transparent 32%), linear-gradient(135deg, rgba(16, 19, 18, 0.97), rgba(47, 74, 60, 0.86) 54%, rgba(16, 19, 18, 0.95))",
};

export function Hero() {
  const hasSlides = availableHeroSlides.length > 0;

  return (
    <section
      className="relative isolate flex min-h-[calc(100svh-var(--header-height))] overflow-hidden bg-[#101312] text-[#FCFBF8]"
      id="top"
      style={hasSlides ? undefined : fallbackHeroStyle}
    >
      {hasSlides ? (
        <div className="absolute inset-0 -z-20">
          {availableHeroSlides.map((slide, index) => (
            <div
              aria-label={slide.title}
              className="hero-slide absolute inset-0 bg-cover bg-center"
              key={slide.image}
              role="img"
              style={
                {
                  "--hero-slide-delay": `${index * 6}s`,
                  backgroundImage: `url("${slide.image}")`,
                } as CSSProperties
              }
            />
          ))}
        </div>
      ) : null}

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(16,19,18,0.84)_0%,rgba(16,19,18,0.68)_42%,rgba(16,19,18,0.34)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_30%,rgba(47,74,60,0.36),transparent_42%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(16,19,18,0.14)_0%,rgba(16,19,18,0.58)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-[linear-gradient(180deg,transparent,rgba(243,241,236,0.98))] sm:h-40" />
      <div className="absolute right-[-120px] top-16 -z-10 hidden h-[420px] w-[420px] rounded-full border border-[#B79A6B]/15 lg:block" />

      <Container className="flex flex-1 items-center pb-28 sm:pb-32 lg:pb-28">
        <div className="grid w-full -translate-y-6 gap-6 pt-6 sm:pt-8 md:-translate-y-8 lg:-translate-y-10 lg:pt-0">
          <div className="grid items-center lg:grid-cols-[minmax(0,0.88fr)_minmax(260px,0.62fr)]">
            <div className="max-w-3xl">
              <p className="mb-4 inline-flex rounded-[4px] border border-[#B79A6B]/45 bg-[#FCFBF8]/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#FCFBF8]/86 backdrop-blur">
                Нижний Новгород и область
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.04] text-balance sm:text-5xl lg:text-6xl">
                Строим, ремонтируем и благоустраиваем под ключ
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#FCFBF8]/78 sm:text-lg">
                Ремонт квартир и домов, строительство загородных домов и
                благоустройство участков - от идеи и проекта до полной сдачи
                готового объекта.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href="#contacts">Рассчитать стоимость</Button>
                <Button href="#services" variant="secondary">
                  Посмотреть услуги
                </Button>
              </div>

              <ul className="mt-7 grid gap-3 text-sm text-[#FCFBF8]/84 sm:grid-cols-2">
                {heroBenefits.map((benefit) => (
                  <li className="flex items-start gap-3" key={benefit}>
                    <span className="mt-2 block size-2 shrink-0 rounded-full bg-[#B79A6B]" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {hasSlides ? (
              <div
                aria-label="Слайды главного экрана"
                className="mt-8 flex items-center gap-2 lg:mt-0 lg:justify-end lg:self-end"
              >
                {availableHeroSlides.map((slide, index) => (
                  <span
                    aria-label={slide.title}
                    className="hero-slide-indicator block h-1 w-10 rounded-full bg-[#FCFBF8]/28"
                    key={slide.image}
                    role="img"
                    style={
                      {
                        "--hero-slide-delay": `${index * 6}s`,
                      } as CSSProperties
                    }
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-5 z-10 sm:bottom-6">
        <Container>
          <HeroMetrics />
        </Container>
      </div>
    </section>
  );
}
