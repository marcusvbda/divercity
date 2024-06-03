"use client";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { ReactNode } from "react";
import "./_styles.scss";

export default function Hero(): ReactNode {
  return (
    <>
      <div id="hero">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-unique.left",
            prevEl: ".swiper-button-unique.right",
          }}
          className="swiper-hero"
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 4000,
          }}
        >
          <SwiperSlide>
            <div style={{ color: "#EAAB9B" }} className="styled">
              Diversão
            </div>
            <small className="smaller">para todos</small>
            <small>da sua família</small>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ color: "#ABBB7F" }} className="styled">
              Saúde
            </div>
            <small className="smaller">seu pequeno mais saudável</small>
            <small>brincando</small>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ color: "#A97FAE" }} className="styled">
              Esporte
            </div>
            <small className="smaller">é superação</small>
            <small>disciplina e alegria</small>
          </SwiperSlide>
          <div className="swiper-button-unique left">
            <div className="content">
              <Image src="/arrow.svg" alt="arrow" fill />
            </div>
          </div>
          <div className="swiper-button-unique right">
            <div className="content">
              <Image src="/arrow-r.svg" alt="arrow" fill />
            </div>
          </div>
        </Swiper>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a href="#atracoes">
            <div className="know-more">Saiba mais</div>
          </a>
        </div>
        <div className="camelo" data-aos="fade-up">
          <div className="content">
            <Image src="/camelo.png" alt="camelo" fill />
          </div>
        </div>
        <div className="arrow-logo" data-aos="fade-left">
          <div className="content">
            <Image src="/arrow-logo.png" alt="arrow-logo" fill />
          </div>
        </div>
        <div className="balls" data-aos="zoom-in-down">
          <div className="content">
            <Image src="/balls.png" alt="balls" fill />
          </div>
        </div>
        <a href="#orcamento" className="hihand">
          <div className="text">Hey, orce sua festa !</div>
          <div className="hand">
            <Image src="/hand.png" alt="hand" fill />
          </div>
          <div className="arm">
            <Image src="/arm.png" alt="arm" fill />
          </div>
        </a>
      </div>
      <div className="navbar-border" />
    </>
  );
}
