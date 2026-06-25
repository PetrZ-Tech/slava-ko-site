import { existsSync } from "node:fs";
import path from "node:path";
import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type ProjectCard = {
  title: string;
  category: string;
  description: string;
  area: string;
  duration: string;
  imagePath: string;
  fallbackLabel: string;
};

const projectCards: ProjectCard[] = [
  {
    title: "Ремонт квартиры в современном стиле",
    category: "Ремонт и отделка",
    description:
      "Комплексный ремонт квартиры с инженерными работами, чистовой отделкой и подготовкой пространства к проживанию.",
    area: "82 м²",
    duration: "4 месяца",
    imagePath: "/images/project-apartment.jpg",
    fallbackLabel: "Ремонт квартиры",
  },
  {
    title: "Благоустройство загородного участка",
    category: "Благоустройство",
    description:
      "Планировка территории, дорожки, освещение, озеленение и аккуратная организация пространства вокруг дома.",
    area: "14 соток",
    duration: "2 месяца",
    imagePath: "/images/project-landscape.jpg",
    fallbackLabel: "Благоустройство",
  },
  {
    title: "Дом под ключ в Нижегородской области",
    category: "Строительство",
    description:
      "Строительство загородного дома с инженерными сетями, фасадными решениями, внутренней отделкой и подготовкой к сдаче.",
    area: "160 м²",
    duration: "8 месяцев",
    imagePath: "/images/project-house.jpg",
    fallbackLabel: "Дом под ключ",
  },
];

function hasPublicImage(imagePath: string) {
  const imageFile = path.join(process.cwd(), "public", imagePath);
  return existsSync(imageFile);
}

function getProjectMediaStyle(project: ProjectCard): CSSProperties {
  const hasImage = hasPublicImage(project.imagePath);

  return {
    backgroundImage: hasImage
      ? `linear-gradient(180deg, rgba(16, 19, 18, 0.04), rgba(16, 19, 18, 0.34)), url("${project.imagePath}")`
      : "linear-gradient(135deg, rgba(183, 154, 107, 0.62), rgba(85, 107, 87, 0.78) 45%, rgba(47, 74, 60, 0.95)), linear-gradient(90deg, rgba(252, 251, 248, 0.12) 1px, transparent 1px), linear-gradient(0deg, rgba(252, 251, 248, 0.10) 1px, transparent 1px)",
    backgroundPosition: "center",
    backgroundSize: hasImage ? "cover" : "cover, 34px 34px, 34px 34px",
  };
}

export function Projects() {
  return (
    <Section className="bg-[#F3F1EC] pb-12 pt-0 sm:pb-16 lg:pb-20" id="projects">
      <Container>
        <div className="border-t border-[#2F4A3C]/10 pt-10 sm:pt-12 lg:pt-14">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(320px,0.50fr)] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#B79A6B]">
                Проекты
              </p>
              <h2 className="max-w-4xl text-3xl font-semibold leading-[1.08] text-[#2B2B2B] text-balance sm:text-4xl lg:text-5xl">
                Реализованные работы и направления
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-[#6D6A64] lg:text-right">
              Показываем разные форматы задач: от ремонта квартиры до
              строительства дома и благоустройства участка.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {projectCards.map((project) => (
              <article
                className="group overflow-hidden rounded-[6px] border border-[#2F4A3C]/12 bg-[#FCFBF8] shadow-[0_18px_55px_rgba(16,19,18,0.06)] transition duration-300 hover:-translate-y-1.5 hover:border-[#B79A6B]/55 hover:shadow-[0_26px_70px_rgba(16,19,18,0.12)]"
                key={project.title}
              >
                <div className="relative min-h-72 overflow-hidden bg-[#2F4A3C]">
                  <div
                    aria-label={`Будущее изображение проекта: ${project.imagePath}`}
                    className="absolute inset-0 scale-100 bg-cover bg-center transition duration-500 group-hover:scale-105"
                    role="img"
                    style={getProjectMediaStyle(project)}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,19,18,0.02)_0%,rgba(16,19,18,0.54)_100%)]" />
                  <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                    <span className="rounded-[4px] border border-[#FCFBF8]/30 bg-[#101312]/28 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#FCFBF8] backdrop-blur">
                      {project.fallbackLabel}
                    </span>
                    <span className="text-xs font-medium text-[#FCFBF8]/74">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="flex min-h-[360px] flex-col p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B79A6B]">
                    {project.category}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#2B2B2B]">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#6D6A64]">
                    {project.description}
                  </p>

                  <dl className="mt-7 grid grid-cols-2 border-y border-[#2F4A3C]/10 text-sm">
                    <div className="border-r border-[#2F4A3C]/10 py-4 pr-4">
                      <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6D6A64]">
                        Площадь
                      </dt>
                      <dd className="mt-2 font-semibold text-[#2F4A3C]">
                        {project.area}
                      </dd>
                    </div>
                    <div className="py-4 pl-4">
                      <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6D6A64]">
                        Срок
                      </dt>
                      <dd className="mt-2 font-semibold text-[#2F4A3C]">
                        {project.duration}
                      </dd>
                    </div>
                  </dl>

                  <a
                    className="mt-auto inline-flex min-h-11 items-center pt-7 text-sm font-semibold text-[#2F4A3C] transition duration-200 group-hover:text-[#B79A6B]"
                    href="#contacts"
                  >
                    Смотреть проект
                    <span aria-hidden="true" className="ml-2">
                      →
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
