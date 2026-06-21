import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type WorkStep = {
  title: string;
  description: string;
  duration: string;
};

const workSteps: WorkStep[] = [
  {
    title: "Консультация и выезд на объект",
    description:
      "Обсуждаем задачу, выезжаем на объект, делаем замеры, фиксируем пожелания, бюджет и ключевые требования.",
    duration: "1–2 дня",
  },
  {
    title: "Проект и планирование",
    description:
      "Готовим планировочное решение, дизайн-проект или архитектурную концепцию, продумываем технические решения.",
    duration: "от 7 дней",
  },
  {
    title: "Смета и договор",
    description:
      "Составляем подробную смету, утверждаем этапы, сроки и объем работ, фиксируем условия в договоре.",
    duration: "2–3 дня",
  },
  {
    title: "Подготовительные и черновые работы",
    description:
      "Выполняем демонтаж, подготовку основания, прокладку инженерных сетей, строительные и монтажные работы.",
    duration: "индивидуально",
  },
  {
    title: "Чистовая отделка и благоустройство",
    description:
      "Переходим к отделке, фасадам, участку, инженерии и финальным работам, которые формируют готовый результат.",
    duration: "индивидуально",
  },
  {
    title: "Сдача объекта",
    description:
      "Проверяем качество, выполняем финальную уборку, подписываем акты и передаем готовый объект заказчику.",
    duration: "финал",
  },
];

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
                className="group flex min-h-72 flex-col rounded-[6px] border border-[#2F4A3C]/12 bg-[#FCFBF8] p-6 shadow-[0_18px_55px_rgba(16,19,18,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#B79A6B]/55 hover:shadow-[0_24px_70px_rgba(16,19,18,0.10)] sm:p-7"
                key={step.title}
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-[6px] bg-[#2F4A3C] text-sm font-semibold text-[#FCFBF8] transition group-hover:bg-[#B79A6B] group-hover:text-[#101312]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-10 bg-[#B79A6B]/55 transition group-hover:w-14 group-hover:bg-[#2F4A3C]" />
                  </div>
                  <span className="mt-1 block size-3 rounded-full border border-[#B79A6B]/70 bg-[#F3F1EC]" />
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
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
