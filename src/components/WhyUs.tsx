import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type WhyUsIcon =
  | "contractor"
  | "team"
  | "estimate"
  | "materials"
  | "quality"
  | "warranty";

type WhyUsItem = {
  title: string;
  description: string;
  icon: WhyUsIcon;
};

const whyUsItems: WhyUsItem[] = [
  {
    title: "Один подрядчик",
    description:
      "Берем на себя ремонт, строительство, инженерные работы и благоустройство без разрозненных исполнителей.",
    icon: "contractor",
  },
  {
    title: "Команда специалистов",
    description:
      "Над объектом работают архитектор, дизайнеры, инженеры и профильные мастера.",
    icon: "team",
  },
  {
    title: "Понятная смета",
    description:
      "Фиксируем объемы, материалы и этапы, чтобы стоимость была понятна до старта.",
    icon: "estimate",
  },
  {
    title: "Проверенные материалы",
    description:
      "Подбираем надежные решения под задачу, бюджет и технические требования объекта.",
    icon: "materials",
  },
  {
    title: "Контроль качества",
    description:
      "Проверяем ключевые работы до перехода к следующему этапу и не сдаем объект формально.",
    icon: "quality",
  },
  {
    title: "Гарантия",
    description:
      "Остаемся на связи после сдачи объекта и отвечаем за выполненные работы.",
    icon: "warranty",
  },
];

function WhyUsIcon({ icon }: { icon: WhyUsIcon }) {
  const commonProps = {
    "aria-hidden": true,
    className: "size-7",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.9,
    viewBox: "0 0 24 24",
  };

  switch (icon) {
    case "contractor":
      return (
        <svg {...commonProps}>
          <path d="M8.2 8.4c.4-2.4 1.8-3.7 3.8-3.7s3.4 1.3 3.8 3.7" />
          <path d="M6.7 8.7h10.6" />
          <path d="M9 8.8V7.2" />
          <path d="M15 8.8V7.2" />
          <path d="M8.6 11.2a3.4 3.4 0 0 0 6.8 0" />
          <path d="M5.5 20c.8-3.4 3-5.1 6.5-5.1s5.7 1.7 6.5 5.1" />
        </svg>
      );
    case "team":
      return (
        <svg {...commonProps}>
          <path d="M12 11.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M5.9 12.1a2.35 2.35 0 1 0 0-4.7" />
          <path d="M18.1 12.1a2.35 2.35 0 1 1 0-4.7" />
          <path d="M6.4 19.5c.7-3.2 2.6-4.9 5.6-4.9s4.9 1.7 5.6 4.9" />
          <path d="M3.5 18.4c.4-2 1.4-3.3 3-3.9" />
          <path d="M20.5 18.4c-.4-2-1.4-3.3-3-3.9" />
        </svg>
      );
    case "estimate":
      return (
        <svg {...commonProps}>
          <path d="M7 4.5h8l2.5 2.7v12.3H7V4.5Z" />
          <path d="M15 4.5v3h2.5" />
          <path d="M9.5 10.5h5" />
          <path d="M9.5 14h5" />
          <path d="M9.5 17.5h3" />
        </svg>
      );
    case "materials":
      return (
        <svg {...commonProps}>
          <path d="M4.5 16h5.2v3.2H4.5z" />
          <path d="M9.7 16h5.1v3.2H9.7z" />
          <path d="M14.8 16h4.7v3.2h-4.7z" />
          <path d="M6.8 12.8h5.1V16H6.8z" />
          <path d="M11.9 12.8H17V16h-5.1z" />
          <path d="M4.8 19.2h14.4" />
        </svg>
      );
    case "quality":
      return (
        <svg {...commonProps}>
          <path d="M12 4.5 18.5 7v5.2c0 4.1-2.5 6.6-6.5 7.8-4-1.2-6.5-3.7-6.5-7.8V7L12 4.5Z" />
          <path d="m8.8 12.2 2.1 2.1 4.4-4.6" />
        </svg>
      );
    case "warranty":
      return (
        <svg {...commonProps}>
          <path d="M12 14.4a4.6 4.6 0 1 0 0-9.2 4.6 4.6 0 0 0 0 9.2Z" />
          <path d="m9.9 10.1 1.4 1.4 2.9-3" />
          <path d="m9.4 13.8-1.2 5 3.8-2.1 3.8 2.1-1.2-5" />
        </svg>
      );
  }
}

export function WhyUs() {
  return (
    <Section
      className="relative overflow-hidden bg-[#F3F1EC] py-18 text-[#2B2B2B] sm:py-24 lg:py-28"
      id="why-us"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(183,154,107,0.13),transparent_28%),radial-gradient(circle_at_82%_22%,rgba(85,107,87,0.11),transparent_30%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[#2F4A3C]/10" />

      <Container className="relative">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.78fr)_minmax(320px,0.52fr)] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#B79A6B]">
              Почему выбирают нас
            </p>
            <h2 className="max-w-4xl text-3xl font-semibold leading-[1.08] text-balance sm:text-4xl lg:text-5xl">
              Порядок, качество и ответственность на каждом этапе
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-[#6D6A64] lg:text-right">
            Мы соединяем проектирование, строительство, отделку и
            благоустройство в один управляемый процесс — чтобы заказчик понимал
            сроки, бюджет и результат.
          </p>
        </div>

        <div className="mt-12 md:hidden">
          <div className="relative grid gap-8">
            <div className="absolute bottom-4 left-5 top-4 w-px bg-[#2F4A3C]/18" />

            {whyUsItems.map((item, index) => (
              <article
                className="group relative grid grid-cols-[52px_minmax(0,1fr)] gap-5"
                key={item.title}
              >
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <span className="grid size-12 place-items-center rounded-full border border-[#2F4A3C]/18 bg-[#FCFBF8] text-[#556B57] shadow-[0_12px_30px_rgba(16,19,18,0.08)] transition duration-300 group-hover:scale-105 group-hover:border-[#2F4A3C] group-hover:bg-[#2F4A3C] group-hover:text-[#F3F1EC]">
                    <WhyUsIcon icon={item.icon} />
                  </span>
                  <span className="text-xs font-semibold tracking-[0.16em] text-[#556B57] transition duration-300 group-hover:text-[#B79A6B]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="pb-2">
                  <h3 className="text-lg font-semibold leading-tight text-[#2B2B2B] transition duration-300 group-hover:text-[#2F4A3C]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#6D6A64]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="relative mt-14 hidden md:block lg:mt-18">
          <div className="grid gap-x-4 gap-y-14 md:grid-cols-3 lg:grid-cols-6">
            {whyUsItems.map((item, index) => (
              <article
                className="group relative flex flex-col items-center text-center"
                key={item.title}
              >
                <div className="relative mb-4 flex w-full items-center justify-center">
                  <span className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-[#2F4A3C]/18 transition duration-300 group-hover:bg-[#B79A6B]/45" />
                  <span className="relative z-10 grid size-16 place-items-center rounded-full border border-[#2F4A3C]/18 bg-[#FCFBF8] text-[#556B57] shadow-[0_16px_34px_rgba(16,19,18,0.08)] transition duration-300 group-hover:scale-105 group-hover:border-[#2F4A3C] group-hover:bg-[#2F4A3C] group-hover:text-[#F3F1EC]">
                    <WhyUsIcon icon={item.icon} />
                  </span>
                </div>
                <span className="mb-5 text-xs font-semibold tracking-[0.18em] text-[#556B57] transition duration-300 group-hover:text-[#B79A6B]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="max-w-[180px] text-lg font-semibold leading-tight text-[#2B2B2B] transition duration-300 group-hover:text-[#2F4A3C]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[180px] text-sm leading-6 text-[#6D6A64] transition duration-300 group-hover:text-[#4E4B46]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
