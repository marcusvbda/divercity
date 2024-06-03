"use client";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect } from "react";
import AOS from "aos";
import Hero from "./fragments/_hero";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      disable: () => {
        const maxWidth = 600;
        return window.innerWidth < maxWidth;
      },
    });
  }, []);

  return (
    <main>
      <Hero />
      <div
        id="atracoes"
        style={{
          padding: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>atrações</h1>
      </div>
      <div
        id="orcamento"
        style={{
          padding: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>orçamento</h1>
      </div>
      <div
        id="contato"
        style={{
          padding: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>contato</h1>
      </div>
    </main>
  );
}
