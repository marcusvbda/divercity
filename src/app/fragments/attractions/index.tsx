"use client";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { CSSProperties, ReactNode } from "react";
import "./_styles.scss";

export default function Attractions(): ReactNode {
  return (
    <div
      id="atracoes"
      style={{ "--bg-image": `url('/desenho.png')` } as CSSProperties}
    >
      <h1>Atraçoes aqui ...</h1>
    </div>
  );
}
