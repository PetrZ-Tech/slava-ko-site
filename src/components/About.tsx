import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const aboutContent = {
  eyebrow: "О компании",
  title: "От отделки квартир — к строительству домов полного цикла",
  lead:
    "Мы выросли из команды отделочников в компанию, которая ведет объект целиком: от подбора участка и проекта до строительства, ремонта и благоустройства.",
  body:
    "Наша работа началась с отделочных работ в квартирах. Со временем заказчики стали доверять нам более сложные задачи: ремонт элитных квартир, отделку домов, устройство террас, отмосток, благоустройство участков и строительство хозяйственных построек.",
  extra:
    "Постепенно мы пришли к комплексным проектам: баням, летним кухням, загородным домам и объектам под ключ. Сегодня «Слава и Ко» может взять на себя полный цикл работ — от выбора земельного участка и подготовки проекта до строительства дома, ремонта внутри и благоустройства территории.",
  closing:
    "Мы развиваемся за счет доверия клиентов, практического опыта и понятного подхода к работе: не обещаем лишнего, заранее обсуждаем этапы, смету и результат.",
};

const workDirections = [
  "Ремонт и отделка квартир",
  "Ремонт и отделка домов",
  "Благоустройство участков",
  "Террасы, отмостки и площадки",
  "Бани, летние кухни и хозпостройки",
  "Строительство домов под ключ",
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
      "Практический опыт начинался с квартир и постепенно вырос до комплексных загородных объектов.",
  },
  {
    title: "Профессиональная команда",
    description:
      "Беремся за ремонт, отделку, благоустройство, постройки на участке и строительство домов.",
  },
  {
    title: "Проверенные поставщики",
    description:
      "До старта обсуждаем последовательность работ, смету и ожидаемый результат.",
  },
  {
    title: "Прозрачная смета",
    description:
      "Заказчик может передать нам весь цикл: от участка и проекта до дома и территории.",
  },
  {
    title: "Контроль качества",
    description:
      "Не обещаем лишнего и заранее проговариваем решения, которые влияют на сроки и бюджет.",
  },
  {
    title: "Гарантия на работы",
    description:
      "Растем за счет опыта на реальных объектах и задач, с которыми к нам возвращаются клиенты.",
  },
];

export function About() {
  return (
    <Section
      className="relative overflow-hidden bg-[#F3F1EC] py-12 sm:py-16 lg:py-20"
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
              <p>{aboutContent.closing}</p>
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
                Вместо разрозненных исполнителей заказчик получает понятный
                маршрут работ: от первых решений по участку до готового дома и
                территории вокруг него.
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {advantages.map((advantage, index) => (
            <article
              className="group min-h-32 border border-[#2F4A3C]/12 bg-[#FCFBF8] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#B79A6B]/50 hover:shadow-[0_18px_50px_rgba(16,19,18,0.08)] sm:min-h-36 sm:p-6"
              key={advantage.title}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-[#B79A6B]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-[#2F4A3C]/12 transition group-hover:bg-[#B79A6B]/50" />
              </div>
              <h3 className="mt-5 text-xl font-semibold leading-tight text-[#2B2B2B]">
                {advantage.title}
              </h3>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
