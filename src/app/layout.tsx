import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Tokenizer",
  description: "Digitaliza y protege tus certificados en blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden bg-customBlackBackground">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
