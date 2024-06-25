'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import { CSSProperties, ReactNode } from 'react';
import './_styles.scss';
import AspectRatio from '@/components/aspectRatio';

export default function Attractions(): ReactNode {
	return (
		<div
			id="attractions"
			style={{ '--bg-image': `url('/desenho.png')` } as CSSProperties}
		>
			<div className="banner-row mb-4" id="precos">
				<div className="text">
					<h3 className="center">PROMOÇÃO DE FÉRIAS</h3>
					<div className="description center">
						<p>Segunda-feira a quinta-feira (exceto feriados)</p>
						<div className="cards">
							<div className="card">
								<p className="title">30 min</p>
								<p className="price">R$ 40,00</p>
								<small>Acompanhante</small>
								<p className="price">R$ 10,00</p>
							</div>
							<div className="card secondary">
								<p className="title">60 min</p>
								<p className="price">R$ 50,00</p>
								<small>Acompanhante</small>
								<p className="price">R$ 15,00</p>
							</div>
							<div className="card tertiary">
								<p className="title">Passe livre</p>
								<p className="price">R$ 60,00</p>
								<small>Acompanhante</small>
								<p className="price">R$ 20,00</p>
							</div>
						</div>
						<p>Sexta, Sábado, Domingo e Feriados</p>
						<div className="cards">
							<div className="card">
								<p className="title">30 min</p>
								<p className="price">R$45,00</p>
								<small>Acompanhante</small>
								<p className="price">R$10,00</p>
							</div>
							<div className="card secondary">
								<p className="title">60 min</p>
								<p className="price">R$60,00</p>
								<small>Acompanhante</small>
								<p className="price">R$15,00</p>
							</div>
							<div className="card tertiary">
								<p className="title">Passe livre</p>
								<p className="price">R$ 80,00</p>
								<small>Acompanhante</small>
								<p className="price">R$ 20,00</p>
							</div>
						</div>
					</div>
					<div className="subdescription center">
						<p>
							<strong>Crianças até 4 anos: </strong>
							<small>
								Obrigatório o acompanhamento de um adulto. O acompanhante não
								paga.
							</small>
						</p>
						<p>
							<strong>Pessoas com Necessidades Especiais (PNE): </strong>
							<small>
								Obrigatório o acompanhamento de um adulto. O acompanhante não
								paga.
							</small>
						</p>
						<p>
							<strong>Crianças a partir de 5 anos: </strong>
							<small>
								Acompanhante opcional. Se o acompanhante entrar na área de
								brinquedos com a criança, ele paga a taxa de acompanhante
								correspondente.
							</small>
						</p>
					</div>
				</div>
			</div>
			<div className="banner-row" id="atracoes">
				<div className="text">
					<h3 className="center">ATRAÇÕES</h3>
				</div>
			</div>
			<div className="banner-row">
				<div className="text">
					<h3>Arena de Camas Elásticas</h3>
					<div className="description">
						Nossa arena de camas elásticas é o lugar perfeito para pular e se
						divertir! Com trampolins interconectados, as crianças podem pular
						livremente, realizar acrobacias e liberar toda a energia. É uma
						excelente forma de exercício físico e diversão garantida.
					</div>
					<div className="subdescription">
						Salte alto e se divirta na nossa incrível arena de camas elásticas!
					</div>
				</div>
				<div className="banner">
					<AspectRatio
						src="/attractions/camas-elasticas.jpeg"
						size={{ width: '100%' }}
					/>
				</div>
			</div>
			<div className="banner-row">
				<div className="banner">
					<AspectRatio src="/attractions/ninja.jpeg" size={{ width: '100%' }} />
				</div>
				<div className="text">
					<h3>Guerreiro Ninja</h3>
					<div className="description">
						Desafie suas habilidades na nossa pista de obstáculos Guerreiro
						Ninja! Projetada para testar força, agilidade e coordenação, essa
						atração oferece diferentes níveis de dificuldade para crianças de
						todas as idades. Superar cada obstáculo é uma vitória! Cras quis est
						consectetur sem bibendum placerat eu nec nisi.
					</div>
					<div className="subdescription">
						Supere desafios e sinta-se um verdadeiro guerreiro ninja!
					</div>
				</div>
			</div>
			<div className="banner-row">
				<div className="text">
					<h3>Parede de Escalada</h3>
					<div className="description">
						Nossa parede de escalar é ideal para pequenos alpinistas. Com vários
						percursos e níveis de dificuldade, as crianças podem desenvolver
						suas habilidades de escalada em um ambiente seguro, sempre
						supervisionado por nossos monitores.
					</div>
					<div className="subdescription">
						Escale, alcance o topo e vença seus limites!
					</div>
				</div>
				<div className="banner">
					<AspectRatio
						src="/attractions/escalada.jpeg"
						size={{ width: '100%' }}
					/>
				</div>
			</div>
			<div className="banner-row">
				<div className="banner">
					<AspectRatio
						src="/attractions/buffet.jpeg"
						size={{ width: '100%' }}
					/>
				</div>
				<div className="text">
					<h3>Buffet Infantil</h3>
					<div className="description">
						Nosso buffet infantil oferece uma seleção deliciosa e nutritiva de
						comidas e bebidas. Temos opções para todos os gostos, incluindo
						pratos especiais para aniversários e eventos. Venha saborear nossas
						delícias enquanto seus filhos se divertem!
					</div>
					<div className="subdescription">
						Celebre momentos inesquecíveis no nosso encantador Buffet Infantil,
						com deliciosas opções de comidas e bebidas!
					</div>
				</div>
			</div>

			<div className="banner-row">
				<div className="text">
					<h3>Desafio Radical</h3>
					<div className="description">
						Prepare-se para enfrentar o Desafio Radical, nosso circuito de
						obstáculos emocionante! Com uma série de desafios projetados para
						testar a agilidade, força e coragem das crianças, essa atração
						oferece diversão e aventura a cada passo. Os pequenos poderão
						escalar, pular, rastejar e se equilibrar em diversos obstáculos,
						incentivando a superação e o espírito de equipe. Nosso circuito é
						seguro e supervisionado por monitores treinados, garantindo uma
						experiência inesquecível para todas as idades.
					</div>
					<div className="subdescription">
						Enfrente o Desafio Radical e supere todos os obstáculos!
					</div>
				</div>
				<div className="banner">
					<AspectRatio
						src="/attractions/desafio-radical.jpeg"
						size={{ width: '100%' }}
					/>
				</div>
			</div>
			<div className="banner-row">
				<div className="banner">
					<AspectRatio
						src="/attractions/pula-pula.jpeg"
						size={{ width: '100%' }}
					/>
				</div>
				<div className="text">
					<h3>Pula-pulas</h3>
					<div className="description">
						Nosso espaço de Pula-Pula é perfeito para crianças de todas as
						idades! Com várias áreas de pula-pula infláveis, as crianças podem
						gastar energia enquanto se divertem em segurança. É uma atividade
						que promove a coordenação motora, o equilíbrio e, claro, garante
						muitas risadas. Venha pular com a gente!
					</div>
					<div className="subdescription">
						Pule, brinque e se divirta nos nossos incríveis pula-pulas!
					</div>
				</div>
			</div>
			<div className="banner-row">
				<div className="text">
					<h3>Bar para os pais</h3>
					<div className="description">
						Enquanto as crianças brincam, os pais podem relaxar no nosso bar.
						Com um ambiente aconchegante, oferecemos uma variedade de bebidas,
						incluindo cafés, chás, sucos e coquetéis. É o lugar perfeito para
						descontrair e aproveitar enquanto os pequenos estão se divertindo.
					</div>
					<div className="subdescription">
						Descanse e relaxe enquanto seus filhos brincam!
					</div>
				</div>
				<div className="banner">
					<AspectRatio src="/attractions/bar.jpeg" size={{ width: '100%' }} />
				</div>
			</div>
			<div className="banner-row">
				<div className="banner">
					<AspectRatio
						src="/attractions/muito-mais.jpeg"
						size={{ width: '100%' }}
					/>
				</div>
				<div className="text">
					<h3>... e muito mais</h3>
					<div className="description">
						Além das nossas principais atrações, temos diversas outras opções de
						diversão para as crianças! Desde circuitos de obstáculos
						desafiadores até espaços de pula-pula, labirintos intrigantes,
						piscinas de bolinhas coloridas, mini-cidades encantadoras e áreas de
						jogos eletrônicos. Há algo para cada pequeno aventureiro descobrir e
						explorar. Venha conferir todas as possibilidades de diversão que
						oferecemos!
					</div>
					<div className="subdescription">
						Descubra muitas outras formas de diversão para todas as idades!
					</div>
				</div>
			</div>
		</div>
	);
}
