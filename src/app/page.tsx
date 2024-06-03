"use client";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect } from "react";
import AOS from "aos";
import Hero from "./_hero";

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
        id="mais"
        style={{
          padding: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Em breve mais informações ...</h1>
      </div>
    </main>
  );
}
