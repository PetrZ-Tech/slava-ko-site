import { existsSync } from "node:fs";
import path from "node:path";
import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type WorkStep = {
  title: string;
  description: string;
  duration: string;
  image: string;
};

const workSteps: WorkStep[] = [
  {
    title: "Консультация и выезд на объект",
    description:
      "Обсуждаем задачу, выезжаем на объект, делаем замеры, фиксируем пожелания, бюджет и ключевые требования.",
    duration: "1–2 дня",
    image: "/images/work-steps/step-01-consultation.png",
  },
  {
    title: "Проект и планирование",
    description:
      "Готовим планировочное решение, дизайн-проект или архитектурную концепцию, продумываем технические решения.",
    duration: "от 7 дней",
    image: "/images/work-steps/step-02-project.png",
  },
  {
    title: "Смета и договор",
    description:
      "Составляем подробную смету, утверждаем этапы, сроки и объем работ, фиксируем условия в договоре.",
    duration: "2–3 дня",
    image: "/images/work-steps/step-03-estimate.png",
  },
  {
    title: "Подготовительные и черновые работы",
    description:
      "Выполняем демонтаж, подготовку основания, прокладку инженерных сетей, строительные и монтажные работы.",
    duration: "индивидуально",
    image: "/images/work-steps/step-04-rough-works.png",
  },
  {
    title: "Чистовая отделка и благоустройство",
    description:
      "Переходим к отделке, фасадам, участку, инженерии и финальным работам, которые формируют готовый результат.",
    duration: "индивидуально",
    image: "/images/work-steps/step-05-finish.png",
  },
  {
    title: "Сдача объекта",
    description:
      "Проверяем качество, выполняем финальную уборку, подписываем акты и передаем готовый объект заказчику.",
    duration: "финал",
    image: "/images/work-steps/step-06-handover.png",
  },
];

function hasPublicImage(imagePath: string) {
  const imageFile = path.join(
    process.cwd(),
    "public",
    imagePath.replace(/^\//, ""),
  );

  return existsSync(imageFile);
}

function getWorkStepBackgroundStyle(step: WorkStep): CSSProperties {
  const hasImage = hasPublicImage(step.image);

  return {
    backgroundImage: hasImage
      ? `url("${step.image}")`
      : "linear-gradient(135deg, #FCFBF8 0%, #F3F1EC 58%, rgba(183,154,107,0.12) 100%)",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
}

export function WorkSteps() {
  return (
    <Section className="bg-[#F3F1EC] py-18 sm:py-24 lg:py-28" id="process">
      <Container>
        <div className="border-t border-[#2F4A3C]/10 pt-16 sm:pt-20 lg:pt-24">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(320px,0.50fr)] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#B79A6B]">
                Этапы работы
              </p>
              <h2 className="max-w-4xl text-3xl font-semibold leading-[1.08] text-[#2B2B2B] text-balance sm:text-4xl lg:text-5xl">
                6 шагов к вашему готовому объекту
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-[#6D6A64] lg:text-right">
              Прозрачный процесс: от первой консультации до полной сдачи
              объекта с контролем качества на каждом этапе.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {workSteps.map((step, index) => (
              <article
                className="group relative flex min-h-72 overflow-hidden rounded-[6px] border border-[#2F4A3C]/12 bg-[linear-gradient(135deg,#FCFBF8_0%,#F3F1EC_58%,rgba(183,154,107,0.12)_100%)] shadow-[0_18px_55px_rgba(16,19,18,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#B79A6B]/55 hover:shadow-[0_24px_70px_rgba(16,19,18,0.10)]"
                key={step.title}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 scale-100 bg-cover bg-center [filter:contrast(1.12)_saturate(1.06)_brightness(0.96)] transition duration-500 group-hover:scale-[1.035] group-hover:[filter:contrast(1.15)_saturate(1.07)_brightness(0.96)]"
                  style={getWorkStepBackgroundStyle(step)}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(252,251,248,0.08)_0%,rgba(252,251,248,0.22)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(252,251,248,0.82)_0%,rgba(252,251,248,0.58)_38%,rgba(252,251,248,0.18)_72%,rgba(252,251,248,0.06)_100%)]" />

                <div className="relative flex w-full flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex items-center gap-3">
                      <span className="grid size-11 place-items-center rounded-[6px] bg-[#2F4A3C] text-sm font-semibold text-[#FCFBF8] shadow-[0_12px_26px_rgba(16,19,18,0.14)] transition group-hover:bg-[#B79A6B] group-hover:text-[#101312]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px w-10 bg-[#B79A6B]/55 transition group-hover:w-14 group-hover:bg-[#2F4A3C]" />
                    </div>
                    <span className="mt-1 block size-3 rounded-full border border-[#B79A6B]/70 bg-[#FCFBF8]/72" />
                  </div>

                  <h3 className="mt-8 text-xl font-semibold leading-tight text-[#2B2B2B]">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#6D6A64]">
                    {step.description}
                  </p>

                  <div className="mt-auto pt-7">
                    <div className="flex items-center justify-between gap-4 border-t border-[#2F4A3C]/10 pt-5">
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B79A6B]">
                        Срок
                      </span>
                      <span className="text-sm font-semibold text-[#2F4A3C]">
                        {step.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
