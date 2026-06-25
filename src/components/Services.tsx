import { existsSync } from "node:fs";
import path from "node:path";
import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type ServiceCard = {
  title: string;
  description: string;
  imagePath: string;
  fallbackLabel: string;
  bullets: string[];
  imageSequence: string[];
};

const serviceCards: ServiceCard[] = [
  {
    title: "Ремонт квартир и домов",
    description:
      "Капитальный и дизайнерский ремонт, черновые и чистовые работы, инженерные коммуникации, отделка и полная подготовка объекта к проживанию.",
    imagePath: "/images/service-renovation.jpg",
    fallbackLabel: "Ремонт",
    bullets: [
      "демонтаж и подготовка",
      "инженерные коммуникации",
      "чистовая отделка",
      "уборка и сдача объекта",
    ],
    imageSequence: [
      "до ремонта",
      "демонтаж",
      "черновые работы",
      "чистовая отделка",
      "уборка",
      "готовый интерьер",
    ],
  },
  {
    title: "Благоустройство участка",
    description:
      "Дорожки, озеленение, освещение, террасы, заборы, дренаж, парковочные зоны и комплексное оформление территории вокруг дома.",
    imagePath: "/images/service-landscape.jpg",
    fallbackLabel: "Благоустройство",
    bullets: [
      "планировка участка",
      "опорные стены, забор, ворота",
      "парковка и дорожки",
      "ливневки и дренажи",
      "навесы, бани, Хоз постройки",
      "автополив, ландшафтное освещение",
      "газон и озеленение",
    ],
    imageSequence: [
      "исходный участок",
      "подготовка",
      "земляные работы",
      "монтаж дорожек и освещения",
      "озеленение",
      "готовый участок",
    ],
  },
  {
    title: "Строительство домов под ключ",
    description:
      "Проектирование, фундамент, коробка, кровля, фасад, инженерные сети, внутренняя отделка и благоустройство территории.",
    imagePath: "/images/service-house.jpg",
    fallbackLabel: "Дом под ключ",
    bullets: [
      "помощь с выбором участка",
      "инженерные изыскания",
      "проектирование",
      "строительство",
      "сдача теплого контура",
    ],
    imageSequence: [
      "проект",
      "фундамент",
      "коробка",
      "кровля",
      "фасад",
      "готовый дом",
    ],
  },
];

function resolvePublicImage(imagePath: string) {
  const imageFile = path.join(process.cwd(), "public", imagePath);
  return existsSync(imageFile);
}

function getMediaStyle(service: ServiceCard): CSSProperties {
  const hasImage = resolvePublicImage(service.imagePath);

  return {
    backgroundImage: hasImage
      ? `linear-gradient(180deg, rgba(16, 19, 18, 0.08), rgba(16, 19, 18, 0.28)), url("${service.imagePath}")`
      : "linear-gradient(135deg, rgba(47, 74, 60, 0.94), rgba(85, 107, 87, 0.74) 48%, rgba(183, 154, 107, 0.42)), linear-gradient(45deg, rgba(252, 251, 248, 0.10) 25%, transparent 25%, transparent 50%, rgba(252, 251, 248, 0.10) 50%, rgba(252, 251, 248, 0.10) 75%, transparent 75%, transparent)",
    backgroundSize: hasImage ? "cover" : "cover, 28px 28px",
    backgroundPosition: "center",
  };
}

export function Services() {
  return (
    <Section className="bg-[#F3F1EC] pb-12 pt-0 sm:pb-16 lg:pb-20" id="services">
      <Container>
        <div className="flex flex-col gap-5 border-t border-[#2F4A3C]/10 pt-10 sm:pt-12 lg:flex-row lg:items-end lg:justify-between lg:pt-14">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#B79A6B]">
              Что мы делаем
            </p>
            <h2 className="text-3xl font-semibold leading-[1.08] text-[#2B2B2B] text-balance sm:text-4xl lg:text-5xl">
              Основные направления работы
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {serviceCards.map((service) => (
            <article
              className="group overflow-hidden border border-[#2F4A3C]/12 bg-[#FCFBF8] shadow-[0_18px_55px_rgba(16,19,18,0.06)] transition duration-300 hover:-translate-y-1.5 hover:border-[#B79A6B]/55 hover:shadow-[0_26px_70px_rgba(16,19,18,0.12)]"
              key={service.title}
            >
              <div className="relative min-h-64 overflow-hidden bg-[#2F4A3C]">
                <div
                  aria-label={`Будущее изображение: ${service.imagePath}`}
                  className="absolute inset-0 scale-100 bg-cover bg-center transition duration-500 group-hover:scale-105"
                  role="img"
                  style={getMediaStyle(service)}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,19,18,0.08)_0%,rgba(16,19,18,0.52)_100%)]" />
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                  <span className="rounded-[4px] border border-[#FCFBF8]/30 bg-[#101312]/28 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#FCFBF8] backdrop-blur">
                    {service.fallbackLabel}
                  </span>
                </div>
              </div>

              <div className="flex min-h-[380px] flex-col p-6 sm:p-7">
                <h3 className="text-2xl font-semibold leading-tight text-[#2B2B2B]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#6D6A64]">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3 text-sm leading-6 text-[#6D6A64]">
                  {service.bullets.map((bullet) => (
                    <li className="flex gap-3" key={bullet}>
                      <span className="mt-2 block size-1.5 shrink-0 rounded-full bg-[#B79A6B]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
