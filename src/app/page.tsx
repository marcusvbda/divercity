'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect } from 'react';
import AOS from 'aos';
import Attractions from './fragments/attractions';
import BudgetSection from './fragments/budget';
import ContactSection from './fragments/contact';
import Hero from './fragments/hero';

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
			<Attractions />
			<BudgetSection />
			<ContactSection />
		</main>
	);
}
