import Header from "@/components/Header";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/Footer";

const OpenSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Eyo Devlog",
    template: "Eyo Devlog | %s",
  },
  description: "끊임없이 창작하는 개발자 Eyo의 블로그",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={OpenSans.className}>
      <body className="relative flex flex-col items-center">
        <Header />
        <main className="w-full px-6 mx-auto mt-16 grow max-w-7xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
