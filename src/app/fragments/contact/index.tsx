import Image from "next/image";
import { ReactNode } from "react";
import "./_styles.scss";
export default function ContactSection(): ReactNode {
  return (
    <div id="contato">
      <Image
        src="/cloud.png"
        className="cloud"
        alt="cloud"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="banner">
        <Image
          src="/contact-banner.png"
          alt="banner"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="form">
        <h3>Nos mande uma mensagem</h3>
        <button className="know-more">Enviar</button>
      </div>
    </div>
  );
}
