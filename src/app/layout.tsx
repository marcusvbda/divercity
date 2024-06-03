import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Image from "next/image";
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
  return (
    <html lang="en">
      <body suppressHydrationWarning className={inter.className}>
        <header>
          <nav>
            <div className="logo">
              <Image src="/logo.png" alt="Vercel Logo" fill priority />
            </div>
            <div className="pages">
              <a href="#" className="nav-link active">
                <div>Início</div>
              </a>
              <a href="#" className="nav-link">
                <div>Eventos</div>
              </a>
              <a href="#" className="nav-link">
                <div>Blog</div>
              </a>
              <a href="#" className="nav-link">
                <div>Contato</div>
              </a>
            </div>
          </nav>
        </header>
        {children}
        {/* <footer>footer here</footer> */}
      </body>
    </html>
  );
}
