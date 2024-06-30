import 'swiper/css';
import 'swiper/css/navigation';
import Attractions from './fragments/attractions';
import Hero from './fragments/hero';
import ContactSection from './fragments/contact';
import BudgetSection from './fragments/budget';
import { GoogleAnalytics } from '@next/third-parties/google';
import TopBar from './topBar';
import BtnUp from '@/components/btnUp';
import SocialNetworkLinks from '@/components/socialNetworkLink';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	const currentYear = new Date().getFullYear();
	const analyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || '';

	return (
		<>
			<GoogleAnalytics gaId={analyticsId} />
			<TopBar />
			<main>
				<Hero />
				<Attractions />
				<BudgetSection />
				<ContactSection />
			</main>
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
						<strong>Domingos e feriados :</strong> das 12h às 20h
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
			<BtnUp />
			<div className="subfooter">
				<div>©{currentYear}, Todos os direitos reservados Divercity</div>
			</div>
		</>
	);
}
