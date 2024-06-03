import Image from "next/image";
import { ReactNode } from "react";
import "./_styles.scss";
export default function ContactSection(): ReactNode {
  return (
    <div id="contato">
      <Image src="/cloud.png" className="cloud" alt="cloud" fill />
      <div className="banner">
        <Image src="/contact-banner.png" alt="banner" fill />
      </div>
      <div className="form">
        <h3>Nos mande uma mensagem</h3>
        <button className="know-more">Enviar</button>
      </div>
    </div>
  );
}
