import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ЮгСпецТранс — спецтехника и автотранспорт",
  description:
    "Аренда строительной спецтехники и автотранспорта с водителем или оператором. Работа по договору по всей России.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
