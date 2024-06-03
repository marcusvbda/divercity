"use client";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { ReactNode } from "react";
import "./_styles.scss";

export default function BudgetSection(): ReactNode {
  return (
    <div id="orcamento">
      <Image
        src="/cloud-orcamento.png"
        className="cloud"
        alt="cloud"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="card">
        <h3>Faça sua festa conosco</h3>
      </div>
    </div>
  );
}
