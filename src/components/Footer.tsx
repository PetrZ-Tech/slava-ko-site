import {
  companyContacts,
  footerCompanyLinks,
  footerServiceLinks,
} from "@/data/home";
import { Container } from "@/components/ui/Container";

const contactLinks = [
  {
    label: companyContacts.phone,
    href: companyContacts.phoneHref,
  },
  {
    label: companyContacts.email,
    href: companyContacts.emailHref,
  },
  {
    label: companyContacts.city,
    href: "#contacts",
  },
  {
    label: "WhatsApp",
    href: companyContacts.whatsappUrl,
  },
  {
    label: "Telegram",
    href: companyContacts.telegramUrl,
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#F3F1EC]/12 bg-[#101312] text-[#F3F1EC]">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(30,46,37,0.94)_0%,rgba(16,19,18,0.99)_52%,rgba(21,24,22,1)_100%)]" />
      <div className="absolute -right-28 top-0 size-80 rounded-full bg-[#2F4A3C]/30 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-px w-1/2 bg-[#B79A6B]/28" />

      <Container className="relative">
        <div className="py-10 sm:py-12 lg:py-14">
          <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-[minmax(260px,1.25fr)_minmax(160px,0.7fr)_minmax(160px,0.7fr)_minmax(190px,0.8fr)]">
            <div>
              <a
                className="inline-flex items-center gap-3"
                href="#top"
                aria-label="Слава и Ко - перейти в начало страницы"
              >
                <span className="grid size-12 place-items-center rounded-[6px] border border-[#B79A6B]/65 bg-[#101312]/58 text-sm font-bold text-[#F3F1EC] shadow-[0_14px_32px_rgba(0,0,0,0.20)]">
                  СК
                </span>
                <span className="flex flex-col">
                  <span className="text-lg font-semibold text-[#F3F1EC]">
                    Слава и Ко
                  </span>
                  <span className="mt-1 text-xs text-[#F3F1EC]/58">
                    Строительство и ремонт
                  </span>
                </span>
              </a>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[#F3F1EC]/68">
                Ремонт, строительство и благоустройство под ключ в Нижнем
                Новгороде и области.
              </p>
            </div>

            <FooterColumn title="Услуги" links={footerServiceLinks} />
            <FooterColumn title="Компания" links={footerCompanyLinks} />
            <FooterColumn title="Контакты" links={contactLinks} />
          </div>

          <div className="relative mt-10 flex flex-col gap-3 border-t border-[#F3F1EC]/12 pt-6 text-sm text-[#F3F1EC]/58 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Слава и Ко</p>
            <a
              className="font-medium text-[#F3F1EC]/72 transition hover:text-[#B79A6B]"
              href="#contacts"
            >
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#B79A6B]">
        {title}
      </h2>
      <ul className="mt-5 space-y-3 text-sm text-[#F3F1EC]/68">
        {links.map((link) => (
          <li key={`${title}-${link.label}`}>
            <a
              className="transition hover:text-[#B79A6B]"
              href={link.href}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
