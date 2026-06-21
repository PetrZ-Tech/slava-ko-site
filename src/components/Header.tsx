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
    <header className="sticky inset-x-0 top-0 z-[100] border-b border-[#F3F1EC]/12 bg-[linear-gradient(90deg,rgba(16,19,18,0.98)_0%,rgba(30,46,37,0.98)_42%,rgba(47,74,60,0.98)_100%)] shadow-[0_14px_36px_rgba(16,19,18,0.18)] backdrop-blur-md">
      <Container>
        <div className="flex h-14 items-center justify-between gap-3 sm:h-16 lg:h-[68px]">
          <a
            className="group flex shrink-0 items-center gap-2.5"
            href="#top"
            aria-label="Слава и Ко - перейти в начало страницы"
          >
            <span className="grid size-9 place-items-center rounded-[6px] border border-[#B79A6B]/58 bg-[#F3F1EC]/8 text-xs font-bold text-[#F3F1EC] shadow-[0_10px_24px_rgba(0,0,0,0.14)] sm:size-10 sm:text-sm">
              СК
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold leading-tight text-[#F3F1EC] sm:text-base">
                Слава и Ко
              </span>
              <span className="hidden text-xs text-[#F3F1EC]/68 sm:block">
                Строительство и ремонт
              </span>
            </span>
          </a>

          <nav
            className="hidden items-center gap-5 text-sm font-medium text-[#F3F1EC]/72 lg:flex"
            aria-label="Основная навигация"
          >
            {navItems.map((item) => (
              <a
                className="transition duration-200 hover:text-[#B79A6B]"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <a
              className="hidden text-sm font-semibold text-[#F3F1EC]/78 transition duration-200 hover:text-[#B79A6B] md:inline"
              href="tel:+7"
            >
              +7 [заменить здесь]
            </a>
            <Button
              className="min-h-9 border-[#B79A6B]/48 bg-transparent px-3 py-2 text-xs text-[#F3F1EC] shadow-none hover:border-[#B79A6B] hover:bg-[#B79A6B] hover:text-[#101312] sm:min-h-10 sm:px-4 sm:text-sm"
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
