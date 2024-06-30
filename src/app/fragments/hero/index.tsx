'use client';
import { CSSProperties, ReactNode } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import './_styles.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import AspectRatio from '@/components/aspectRatio';
import Link from 'next/link';

export default function Hero(): ReactNode {
	return (
		<>
			<div id="hero">
				<video
					autoPlay
					muted
					loop
					className="hero--video desktop"
					style={
						{
							'--bg': `url(/hero-placeholder.png)`,
						} as CSSProperties
					}
				>
					<source
						src="https://github.com/marcusvbda/divercity/raw/master/public/video.mp4"
						type="video/mp4"
					/>
				</video>
				<video
					autoPlay
					muted
					loop
					className="hero--video mobile"
					style={
						{
							'--bg': `url(/hero-placeholder.png)`,
						} as CSSProperties
					}
				>
					<source
						src="https://github.com/marcusvbda/divercity/raw/master/public/vertical-video.mp4"
						type="video/mp4"
					/>
				</video>
				<div className="hero--content">
					<Swiper
						navigation={{
							nextEl: '.swiper-button-unique.left',
							prevEl: '.swiper-button-unique.right',
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
							<div style={{ color: '#EAAB9B' }} className="styled">
								Diversão
							</div>
							<small className="smaller">para todos</small>
							<small>da sua família</small>
						</SwiperSlide>
						<SwiperSlide>
							<div style={{ color: '#ABBB7F' }} className="styled">
								Saúde
							</div>
							<small className="smaller">seu pequeno mais saudável</small>
							<small>brincando</small>
						</SwiperSlide>
						<SwiperSlide>
							<div style={{ color: '#A97FAE' }} className="styled">
								Esporte
							</div>
							<small className="smaller">é superação</small>
							<small>disciplina e alegria</small>
						</SwiperSlide>
						<div className="swiper-button-unique left">
							<div className="content">
								<Image
									src="/arrow.svg"
									alt="arrow"
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</div>
						</div>
						<div className="swiper-button-unique right">
							<div className="content">
								<Image
									src="/arrow-r.svg"
									alt="arrow"
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</div>
						</div>
					</Swiper>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<Link href="#atracoes">
							<div className="know-more">Saiba mais</div>
						</Link>
					</div>
					<div className="camelo">
						<AspectRatio src="/camelo.png" size={{ height: 200 }} />
					</div>
					<div className="balls">
						<AspectRatio src="/balls.png" size={{ height: 60 }} />
					</div>
					<Link href="#orcamento" className="hihand">
						<div className="text">Faça sua festa com a gente</div>
						<div className="hand">
							<AspectRatio src="/hand.png" size={{ height: 60 }} />
						</div>
						<div className="arm">
							<AspectRatio src="/arm.png" size={{ height: 30 }} />
						</div>
					</Link>
				</div>
			</div>
			<div className="navbar-border" />
		</>
	);
}
