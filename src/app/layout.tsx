import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Image from "next/image";
import BtnUp from "@/components/btnUp";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Divercity Park",
  description:
    "Venha se divertir no nosso centro de diversão infantil localizado no Shopping Maringá. Oferecemos um ambiente seguro e cheio de atrações para as crianças.",
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
              <Image
                src="/logo.png"
                alt="Vercel Logo"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
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
          <Image
            src="/cloud-footer.png"
            className="cloud"
            alt="cloud"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="opening-hours">
            <h3>Horários de funcionamento</h3>
            <p>
              <strong>Segunda a Sábado :</strong> das 10h às 22h
            </p>
            <p>
              <strong>Domingos e feriados :</strong> das 14h às 20h
            </p>
          </div>
          <div className="location">
            <h3>Onde Estamos</h3>
            <p>
              Avenida São Paulo, 1099 Centro - Cep 87013.931 Maringá - Paraná
            </p>
          </div>
          <div className="social-network">
            <h3>Redes sociais</h3>
            <div className="items">
              <a href="#" className="item">
                <Image
                  src="/instagram.png"
                  alt="instagram"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </a>
              <a href="#" className="item">
                <Image
                  src="/facebook.jpeg"
                  alt="facebook"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </a>
            </div>
          </div>
        </footer>
        <div className="subfooter">
          <div>©{currentYear}, Todos os direitos reservados Divercity</div>
        </div>
      </body>
    </html>
  );
}
