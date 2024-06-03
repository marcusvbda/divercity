import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Image from "next/image";
import BtnUp from "@/components/btnUp";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();
  return (
    <html lang="en">
      <body suppressHydrationWarning className={inter.className} id="topo">
        <header>
          <nav>
            <div className="logo">
              <Image src="/logo.png" alt="Vercel Logo" fill priority />
            </div>
            <div className="pages">
              <a href="#topo" className="nav-link active">
                <div>Início</div>
              </a>
              <a href="#atracoes" className="nav-link">
                <div>Atrações</div>
              </a>
              <a href="#orcamento" className="nav-link btn">
                <div>Orçamento</div>
              </a>
              <a href="#contato" className="nav-link">
                <div>Contato</div>
              </a>
            </div>
          </nav>
        </header>
        {children}
        <BtnUp />
        <footer>
          <h1>footer</h1>
        </footer>
        <div className="subfooter">
          <div>©{currentYear}, Todos os direitos reservados</div>
        </div>
      </body>
    </html>
  );
}
