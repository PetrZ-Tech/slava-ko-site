import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const navItems = [
  { label: "О компании", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Этапы", href: "#process" },
  { label: "Проекты", href: "#projects" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-white/12 bg-[#101312]/28 backdrop-blur-md">
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-4 py-3">
          <a
            className="group flex shrink-0 items-center gap-3"
            href="#top"
            aria-label="Слава и Ко - перейти в начало страницы"
          >
            <span className="grid size-10 place-items-center rounded-[6px] border border-[#B79A6B]/55 bg-[#FCFBF8]/10 text-sm font-bold text-[#FCFBF8]">
              СК
            </span>
            <span className="flex flex-col">
              <span className="text-base font-semibold leading-tight text-[#FCFBF8]">
                Слава и Ко
              </span>
              <span className="hidden text-xs text-[#FCFBF8]/65 sm:block">
                Строительство и ремонт
              </span>
            </span>
          </a>

          <nav
            className="hidden items-center gap-6 text-sm font-medium text-[#FCFBF8]/78 lg:flex"
            aria-label="Основная навигация"
          >
            {navItems.map((item) => (
              <a
                className="transition hover:text-[#FCFBF8]"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <a
              className="hidden text-sm font-semibold text-[#FCFBF8] transition hover:text-[#B79A6B] md:inline"
              href="tel:+7"
            >
              +7 [заменить здесь]
            </a>
            <Button
              className="min-h-10 px-4 py-2 text-xs sm:text-sm"
              href="#contacts"
              variant="ghost"
            >
              Получить смету
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
