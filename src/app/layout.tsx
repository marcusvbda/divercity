import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.scss';
import Image from 'next/image';

import Link from 'next/link';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import BtnUp from '@/components/btnUp';
import AspectRatio from '@/components/aspectRatio';
import SocialNetworkLinks from '@/components/socialNetworkLink';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
	title: 'Divercity Park | Maringá - PR',
	description:
		'No Divercity Park, oferecemos diversão e aventura para crianças com nossa arena de camas elásticas, guerreiro ninja, parede de escalar, buffet infantil, e bar para os pais relaxarem. Planeje a festa dos sonhos do seu filho conosco!',
	keywords:
		'maringá, divercity, pula-pula, festa, salão de festa, buffet infantil, chopp, shopping, cama elastica, escalada, entretenimento infantil, diversão para crianças, arena de camas elásticas, guerreiro ninja, parede de escalar, pula-pula, buffet infantil, bar para os pais, festas infantis, eventos para crianças, Maringá, parque infantil, brinquedos para crianças, espaço kids, playground coberto, atrações para crianças, animação para festas, espaço de jogos, brinquedoteca, pintura facial infantil, decoração de festas, monitores infantis, balão pula-pula, pista de kart infantil, lanchonete para crianças, área de aventura, mini golf, palhaços para festas, buffet de doces, bolo de aniversário, pipoca e algodão doce, atividades recreativas, animação de personagens, espaço para amamentação, pintura em giz, teatro infantil, patinação infantil, jogo de basquete infantil, oficinas criativas, aluguel de fantasias, caça ao tesouro, circo infantil, roda gigante infantil, jogos eletrônicos, brinquedos infláveis, trampolim, quadra de esportes, palco para apresentações, cabine de fotos, espaço para dança, mágico para festas, zona de jogos, brincadeiras ao ar livre, escorregador, área de descanso, kart elétrico, área de leitura, passeios de trenzinho, massinha de modelar, jogos de tabuleiro, fazendinha para crianças, espaço para arte, ginásio infantil, tobogã, cinema infantil, fotografia infantil, jogos educativos, aulas de música, boliche infantil, oficinas de culinária, espaço sensorial, área de descobertas, aulas de teatro, espaço para relaxamento, parquinho, jogos de equipe, show de palhaços, circo de pulgas, dia temático, mini chef, espaço de aprendizado, pintura em tela, atividades manuais, oficina de artesanato, cantinho da leitura, área de ciências, jogos cooperativos, hora do conto, brinquedos educativos, clube de leitura, oficinas de reciclagem, brincadeiras tradicionais, experiências sensoriais, dança criativa, mural de artes, aulas de desenho, espaço maker, acampamento de férias, torneios esportivos, aulas de yoga para crianças, show de malabares, aulas de dança, aulas de circo, atividades ao ar livre, jogos de raciocínio, caiaque infantil, oficinas de fotografia, oficinas de ciências, oficinas de robótica, aulas de programação para crianças, jogos de estratégia, aulas de línguas estrangeiras, atividades esportivas, escalada indoor, aulas de natação, arvorismo infantil, skate park infantil, jogos de aventura, aulas de artes marciais, espaço de meditação, torre de escalada, circo de variedades, passeios de bicicleta, caça ao tesouro, oficinas de história, oficinas de literatura, oficinas de música, aulas de instrumentos musicais, aulas de canto, aulas de dança folclórica, aulas de artes cênicas, pista de obstáculos, pista de skate, campeonatos esportivos, jogos de habilidade, espaço para contação de histórias, jogos de estratégia em grupo',
	openGraph: {
		title: 'Divercity Park | Maringá - PR',
		description:
			'Oferecemos atrações emocionantes como arena de camas elásticas, guerreiro ninja, parede de escalar e muito mais. Planeje a festa dos sonhos do seu filho conosco!',
		url: 'https://www.divercitypark.com.br',
		images: [
			{
				url: 'https://www.divercitypark.com.br/logo.png',
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
					<SocialNetworkLinks title="Redes sociais" />
				</footer>
				<div className="subfooter">
					<div>©{currentYear}, Todos os direitos reservados Divercity</div>
				</div>
			</body>
		</html>
	);
}
