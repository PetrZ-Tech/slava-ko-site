import { testimonials } from "@/data/home";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function Testimonials() {
  return (
    <Section className="bg-[#F3F1EC] py-18 sm:py-24 lg:py-28" id="reviews">
      <Container>
        <div className="border-t border-[#2F4A3C]/10 pt-16 sm:pt-20 lg:pt-24">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(320px,0.50fr)] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#B79A6B]">
                Отзывы
              </p>
              <h2 className="max-w-4xl text-3xl font-semibold leading-[1.08] text-[#2B2B2B] text-balance sm:text-4xl lg:text-5xl">
                Что говорят клиенты
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-[#6D6A64] lg:text-right">
              Нам важно, чтобы заказчик понимал процесс, видел контроль на
              каждом этапе и получал результат без лишнего хаоса.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                className="group flex min-h-96 flex-col rounded-[6px] border border-[#2F4A3C]/12 bg-[#FCFBF8] p-6 shadow-[0_18px_55px_rgba(16,19,18,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#B79A6B]/55 hover:shadow-[0_24px_70px_rgba(16,19,18,0.10)] sm:p-7"
                key={`${testimonial.name}-${testimonial.object}`}
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B79A6B]">
                      {testimonial.object}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold leading-tight text-[#2B2B2B]">
                      {testimonial.name}
                    </h3>
                  </div>

                  <span
                    aria-hidden="true"
                    className="text-5xl font-semibold leading-none text-[#2F4A3C]/12 transition group-hover:text-[#B79A6B]/28"
                  >
                    “
                  </span>
                </div>

                <p className="mt-7 text-sm leading-7 text-[#6D6A64]">
                  {testimonial.text}
                </p>

                <div className="mt-auto pt-7">
                  <p className="border-t border-[#2F4A3C]/10 pt-5 text-sm font-semibold text-[#2F4A3C]">
                    {testimonial.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
