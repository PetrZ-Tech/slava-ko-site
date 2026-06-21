import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type WhyUsItem = {
  title: string;
  description: string;
};

const whyUsItems: WhyUsItem[] = [
  {
    title: "Один подрядчик на весь цикл",
    description:
      "Берем на себя ремонт, строительство, инженерные работы и благоустройство без разрозненных исполнителей.",
  },
  {
    title: "Архитектор, дизайнеры и мастера",
    description:
      "Над объектом работает команда специалистов: от проектных решений до чистовой отделки.",
  },
  {
    title: "Подробная смета до начала работ",
    description:
      "Фиксируем объемы, материалы и этапы, чтобы стоимость была понятна до старта.",
  },
  {
    title: "Проверенные материалы и поставщики",
    description:
      "Подбираем надежные решения под задачу, бюджет и технические требования объекта.",
  },
  {
    title: "Поэтапный контроль качества",
    description:
      "Проверяем ключевые работы до перехода к следующему этапу и не сдаем объект формально.",
  },
  {
    title: "Гарантия и сопровождение",
    description:
      "Остаемся на связи после сдачи объекта и отвечаем за выполненные работы.",
  },
];

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

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {whyUsItems.map((item, index) => (
            <article
              className="group min-h-64 rounded-[6px] border border-[#2F4A3C]/12 bg-[#FCFBF8] p-6 shadow-[0_18px_55px_rgba(16,19,18,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#B79A6B]/55 hover:shadow-[0_24px_70px_rgba(16,19,18,0.10)] sm:p-7"
              key={item.title}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-[#2F4A3C] transition group-hover:text-[#B79A6B]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-[#2F4A3C]/12 transition group-hover:bg-[#B79A6B]/45" />
              </div>

              <h3 className="mt-8 text-xl font-semibold leading-tight text-[#2B2B2B]">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#6D6A64]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
