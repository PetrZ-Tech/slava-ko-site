import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const aboutContent = {
  eyebrow: "О компании",
  title: "Надежная строительная компания полного цикла",
  lead:
    "От проекта и сметы - до готового дома, ремонта или благоустроенного участка.",
  body:
    "Компания «Слава и Ко» выполняет комплексные работы в сфере ремонта, строительства и благоустройства. Мы берем на себя весь процесс: от консультации, замера и проектирования до чистовой отделки, благоустройства территории и сдачи объекта.",
  extra:
    "В команде работают дизайнеры, ведущий архитектор, инженеры, электрики, сантехники, плиточники, отделочники и прорабы. Мы сотрудничаем с проверенными поставщиками материалов и профессиональными партнерами, чтобы заказчик получал прогнозируемый результат без хаоса, срывов и лишних затрат.",
};

const workDirections = [
  "Ремонт и отделка квартир",
  "Ремонт и отделка частных домов",
  "Строительство домов под ключ",
  "Благоустройство участков",
];

const processPrinciples = [
  "Нижний Новгород и Нижегородская область",
  "Один подрядчик на весь цикл",
  "Смета и этапы до старта работ",
  "Внутренний контроль качества",
];

const advantages = [
  {
    title: "Опыт и системный подход",
    description:
      "Выстраиваем понятный процесс работ, фиксируем этапы и ведем объект до результата.",
  },
  {
    title: "Профессиональная команда",
    description:
      "Архитектор, дизайнеры, инженеры и профильные мастера работают как единая команда.",
  },
  {
    title: "Проверенные поставщики",
    description:
      "Подбираем материалы и решения у надежных партнеров под задачу и бюджет проекта.",
  },
  {
    title: "Прозрачная смета",
    description:
      "Детализируем работы и материалы, чтобы заказчик понимал стоимость до старта.",
  },
  {
    title: "Контроль качества",
    description:
      "Проверяем ключевые этапы работ и не передаем объект без внутренней приемки.",
  },
  {
    title: "Гарантия на работы",
    description:
      "Сопровождаем объект после сдачи и отвечаем за выполненные работы.",
  },
];

export function About() {
  return (
    <Section
      className="relative overflow-hidden bg-[#F3F1EC] pb-18 pt-18 sm:pb-24 sm:pt-24 lg:pb-28 lg:pt-28"
      id="about"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-[#2F4A3C]/10" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.98fr)_minmax(360px,0.72fr)] lg:items-start">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#B79A6B]">
              {aboutContent.eyebrow}
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold leading-[1.08] text-[#2B2B2B] text-balance sm:text-4xl lg:text-5xl">
              {aboutContent.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#2F4A3C]">
              {aboutContent.lead}
            </p>
            <div className="mt-8 space-y-5 text-base leading-8 text-[#6D6A64]">
              <p>{aboutContent.body}</p>
              <p>{aboutContent.extra}</p>
            </div>
          </div>

          <aside className="border border-[#2F4A3C]/14 bg-[#FCFBF8] p-6 shadow-[0_24px_70px_rgba(16,19,18,0.07)] sm:p-8">
            <div className="flex items-start justify-between gap-5 border-b border-[#2F4A3C]/12 pb-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#B79A6B]">
                  Подход
                </p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#2B2B2B]">
                  Берем объект под ответственность
                </h3>
              </div>
              <span className="grid size-12 shrink-0 place-items-center rounded-[6px] bg-[#2F4A3C] text-sm font-semibold text-[#FCFBF8]">
                02
              </span>
            </div>

            <div className="grid gap-6 py-7 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-[#2B2B2B]">
                  Направления
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-[#6D6A64]">
                  {workDirections.map((item) => (
                    <li className="flex gap-3" key={item}>
                      <span className="mt-2 block size-1.5 shrink-0 rounded-full bg-[#B79A6B]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#2B2B2B]">
                  Принципы
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-[#6D6A64]">
                  {processPrinciples.map((item) => (
                    <li className="flex gap-3" key={item}>
                      <span className="mt-2 block h-1.5 w-3 shrink-0 rounded-full bg-[#2F4A3C]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-[#2F4A3C]/12 pt-6">
              <p className="text-sm leading-6 text-[#6D6A64]">
                Вместо разрозненных исполнителей заказчик получает управляемый
                процесс, понятные решения и одну команду, которая отвечает за
                итоговый результат.
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {advantages.map((advantage, index) => (
            <article
              className="group min-h-52 border border-[#2F4A3C]/12 bg-[#FCFBF8] p-6 transition duration-200 hover:-translate-y-1 hover:border-[#B79A6B]/50 hover:shadow-[0_18px_50px_rgba(16,19,18,0.08)] sm:p-7"
              key={advantage.title}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-[#B79A6B]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-[#2F4A3C]/12 transition group-hover:bg-[#B79A6B]/50" />
              </div>
              <h3 className="mt-7 text-xl font-semibold leading-tight text-[#2B2B2B]">
                {advantage.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#6D6A64]">
                {advantage.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
