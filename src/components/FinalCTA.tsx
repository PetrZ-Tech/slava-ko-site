import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { contactActions, ctaBenefits } from "@/data/home";

export function FinalCTA() {
  return (
    <Section
      className="relative overflow-hidden bg-[#F3F1EC] pb-12 pt-18 sm:pb-16 sm:pt-24 lg:pb-20 lg:pt-28"
      id="contacts"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(252,251,248,0)_0%,rgba(85,107,87,0.08)_100%)]" />

      <Container className="relative">
        <div className="relative overflow-hidden rounded-[8px] border border-[#F3F1EC]/12 bg-[#101312] p-5 text-[#F3F1EC] shadow-[0_26px_90px_rgba(16,19,18,0.16)] sm:p-7 lg:p-10">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(47,74,60,0.92)_0%,rgba(30,46,37,0.88)_42%,rgba(16,19,18,0.98)_100%)]" />
          <div className="absolute -left-20 top-8 size-64 rounded-full bg-[#556B57]/24 blur-3xl" />
          <div className="absolute -right-24 -top-24 size-80 rounded-full bg-[#B79A6B]/16 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(360px,0.62fr)] lg:gap-10">
            <div className="flex flex-col justify-between">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#B79A6B]">
                  Заявка
                </p>
                <h2 className="max-w-3xl text-3xl font-semibold leading-[1.08] text-balance sm:text-4xl lg:text-5xl">
                  Готовы обсудить ваш проект?
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[#F3F1EC]/68">
                  Оставьте заявку — мы свяжемся с вами, уточним задачу и
                  подготовим предварительную оценку по срокам и стоимости.
                </p>
              </div>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {ctaBenefits.map((benefit) => (
                  <div
                    className="flex min-h-16 items-center gap-3 rounded-[6px] border border-[#F3F1EC]/12 bg-[#F3F1EC]/7 px-4 py-3 text-sm font-medium text-[#F3F1EC]/86 backdrop-blur"
                    key={benefit}
                  >
                    <span className="block size-2 shrink-0 rounded-full bg-[#B79A6B]" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  className="w-full border-[#B79A6B] bg-[#B79A6B] text-[#101312] shadow-[0_18px_45px_rgba(0,0,0,0.20)] hover:border-[#C7AC7D] hover:bg-[#C7AC7D] sm:w-auto"
                  href={contactActions[0].href}
                >
                  {contactActions[0].label}
                </Button>
                {contactActions.slice(1).map((action) => (
                  <a
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-[6px] border border-[#F3F1EC]/18 bg-[#F3F1EC]/7 px-5 py-3 text-sm font-semibold leading-none text-[#F3F1EC] transition duration-200 hover:border-[#B79A6B] hover:bg-[#B79A6B] hover:text-[#101312] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A6B] sm:w-auto"
                    href={action.href}
                    key={action.href}
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}
