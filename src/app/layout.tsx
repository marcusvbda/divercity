import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import './globals.scss';
import Image from 'next/image';
import BtnUp from '@/components/btnUp';
import SocialNetworks from '@/components/SocialNetworks';
import Link from 'next/link';
import { Metadata } from 'next';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Divercity Park | Maringá - PR',
	description:
		'No Divercity Park, oferecemos diversão e aventura para crianças com nossa arena de camas elásticas, guerreiro ninja, parede de escalar, buffet infantil, e bar para os pais relaxarem. Planeje a festa dos sonhos do seu filho conosco!',
	keywords:
		'entretenimento infantil, diversão para crianças, arena de camas elásticas, guerreiro ninja, parede de escalar, pula-pula, buffet infantil, bar para os pais, festas infantis, eventos para crianças, Maringá',
	openGraph: {
		title: 'Divercity Park | Maringá - PR',
		description:
			'Oferecemos atrações emocionantes como arena de camas elásticas, guerreiro ninja, parede de escalar e muito mais. Planeje a festa dos sonhos do seu filho conosco!',
		url: 'https://www.divercitypark.com.br',
		images: [
			{
				url: 'hhttps://www.divercitypark.com.br/_next/image?url=%2Flogo.png&w=640&q=75',
				width: 620,
				height: 402,
				alt: 'Divercity Park',
			},
		],
		type: 'website',
	},
	robots: 'index, follow',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const currentYear = new Date().getFullYear();
	const analyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || '';
	return (
		<html lang="pt-BR">
			<body suppressHydrationWarning className={inter.className} id="topo">
				<GoogleAnalytics gaId={analyticsId} />
				<header>
					<nav>
						<div className="logo">
							<Image
								src="/logo.png"
								alt="Vercel Logo"
								fill
								priority
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
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
							<SocialNetworks />
						</div>
					</nav>
				</header>
				{children}
				<BtnUp />
				<footer>
					<Image
						src="/cloud-footer.png"
						className="cloud"
						alt="cloud"
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
					<div className="opening-hours">
						<h3>Horários de funcionamento</h3>
						<p>
							<strong>Segunda a Sábado :</strong> das 10h às 22h
						</p>
						<p>
							<strong>Domingos e feriados :</strong> das 11h às 20h
						</p>
					</div>
					<div className="location">
						<h3>Onde estamos</h3>
						<p>
							<Link
								target="_blank"
								href="https://www.google.com.br/maps/search/Av.+Tuiuti,+710+-+Gleba+Patrim%C3%B4nio+Maringa,+Maring%C3%A1+87043-720/@-23.4231537,-51.9107751,17z/data=!3m1!4b1?entry=ttu"
							>
								Av. Tuiuti, 710 - Gleba Patrimônio Maringa, Maringá 87043-720
							</Link>
						</p>
						<p>Shopping Cidade Maringá</p>
					</div>
					<SocialNetworks title="Redes sociais" />
				</footer>
				<div className="subfooter">
					<div>©{currentYear}, Todos os direitos reservados Divercity</div>
				</div>
			</body>
		</html>
	);
}
