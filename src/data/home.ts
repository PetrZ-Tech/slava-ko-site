export type TestimonialItem = {
  name: string;
  object: string;
  text: string;
  detail: string;
};

export type LinkItem = {
  label: string;
  href: string;
};

export const testimonials: TestimonialItem[] = [
  {
    name: "Алексей и Марина",
    object: "Ремонт квартиры",
    text: "Обратились за комплексным ремонтом квартиры. Понравилось, что сразу обсудили смету, сроки и порядок работ. По ходу ремонта были на связи, показывали промежуточный результат и спокойно решали вопросы.",
    detail: "82 м² · ремонт под ключ",
  },
  {
    name: "Ирина",
    object: "Благоустройство участка",
    text: "Нужно было привести участок в порядок после строительства дома. Сделали дорожки, освещение, зоны отдыха и озеленение. Территория стала выглядеть аккуратно и законченно.",
    detail: "14 соток · благоустройство",
  },
  {
    name: "Сергей",
    object: "Дом под ключ",
    text: "Выбирали подрядчика, который сможет вести весь процесс, а не отдельные куски работ. Команда помогла с решениями, материалами, этапами и довела объект до сдачи.",
    detail: "160 м² · строительство дома",
  },
];

export const ctaBenefits = [
  "Предварительная консультация",
  "Оценка сроков и бюджета",
  "Понятный следующий шаг",
  "Работаем в Нижнем Новгороде и области",
];

export const workTypeOptions = [
  "Ремонт квартиры или дома",
  "Благоустройство участка",
  "Строительство дома под ключ",
  "Нужна консультация",
];

export const companyContacts = {
  phone: "+7 [заменить здесь]",
  phoneHref: "tel:+70000000000",
  email: "[email заменить здесь]",
  emailHref: "mailto:info@example.com",
  city: "Нижний Новгород и область",
  whatsappUrl: "https://wa.me/70000000000",
  telegramUrl: "https://t.me/username",
};

export const contactActions: LinkItem[] = [
  {
    label: "Позвонить",
    href: companyContacts.phoneHref,
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

export const footerServiceLinks: LinkItem[] = [
  {
    label: "Ремонт квартир и домов",
    href: "#services",
  },
  {
    label: "Благоустройство участков",
    href: "#services",
  },
  {
    label: "Строительство домов под ключ",
    href: "#services",
  },
];

export const footerCompanyLinks: LinkItem[] = [
  {
    label: "О компании",
    href: "#about",
  },
  {
    label: "Услуги",
    href: "#services",
  },
  {
    label: "Этапы работы",
    href: "#process",
  },
  {
    label: "Проекты",
    href: "#projects",
  },
  {
    label: "Отзывы",
    href: "#reviews",
  },
  {
    label: "Контакты",
    href: "#contacts",
  },
];
