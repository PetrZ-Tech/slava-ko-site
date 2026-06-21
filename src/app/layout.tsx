import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Слава и Ко - строительство, ремонт и благоустройство",
  description:
    "Строительная компания полного цикла в Нижнем Новгороде и Нижегородской области: ремонт, отделка, строительство домов и благоустройство участков.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
