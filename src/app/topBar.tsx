'use client';

import AspectRatio from '@/components/aspectRatio';
import SocialNetworkLinks from '@/components/socialNetworkLink';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function TopBar() {
	const [navbarClass, setNavbarClass] = useState('transparent');

	useEffect(() => {
		const setClass = () => {
			if (window.scrollY >= 150) {
				setNavbarClass('white');
			} else {
				setNavbarClass('');
			}
		};
		window.onscroll = () => {
			setClass();
		};

		setClass();
	});
	return (
		<header>
			<nav className={navbarClass}>
				<AspectRatio src="/logo.png" size={{ height: 100 }} />
				<div className="pages">
					<Link href="#topo" className="nav-link active">
						<div>Início</div>
					</Link>
					<Link href="#atracoes" className="nav-link">
						<div>Atrações</div>
					</Link>
					<Link href="#orcamento" className="nav-link btn">
						<div>Orçamento</div>
					</Link>
					<Link href="#contato" className="nav-link">
						<div>Contato</div>
					</Link>
					<SocialNetworkLinks />
				</div>
			</nav>
		</header>
	);
}
