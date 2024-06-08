'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { ReactNode, useState } from 'react';
import './_styles.scss';
const Step1 = ({ form, setForm, step, setStep }: any) => {
	const handleSubmit = (e: any) => {
		e.preventDefault();
		setStep(step + 1);
	};

	return (
		<>
			<h4>Qual é seu nome ? </h4>
			<form onSubmit={handleSubmit} id="step-1-form">
				<input
					type="text"
					placeholder="Seu nome ..."
					required
					value={form.name}
					onChange={(e) => setForm({ ...form, name: e.target.value })}
				/>
			</form>
			<div className="btns">
				<button type="submit" className="know-more" form="step-1-form">
					<span>Continuar</span>
					<div className="arrow-logo">
						<Image
							src="/arrow-r.svg"
							alt="arrow"
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
				</button>
			</div>
		</>
	);
};

const Step2 = ({ form, setForm, step, setStep }: any) => {
	const handleSubmit = (e: any) => {
		e.preventDefault();
		setStep(step + 1);
	};

	return (
		<>
			<h4>Quantos pessoas ao todo ?</h4>
			<form onSubmit={handleSubmit} id="step-1-form">
				<input
					type="number"
					placeholder="Pessoas"
					step={1}
					value={form.qty}
					onChange={(e) => setForm({ ...form, qty: parseInt(e.target.value) })}
					max={40}
				/>
				<small>Número máximo de pessoas permitidas é 40</small>
			</form>
			<div className="btns">
				<button type="submit" className="know-more" form="step-1-form">
					<span>Continuar</span>
					<div className="arrow-logo">
						<Image
							src="/arrow-r.svg"
							alt="arrow"
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
				</button>
			</div>
		</>
	);
};

const Step3 = ({ form, setForm, step, setStep }: any) => {
	const submitHandler = (e: any) => {
		e.preventDefault();
		setStep(step + 1);
	};

	return (
		<>
			<h4>Deste número de pessoas ({form.qty}), quantas são crianças ?</h4>
			<form id="step-2-form" onSubmit={submitHandler}>
				<input
					type="number"
					placeholder="Pessoas"
					step={1}
					value={form.children}
					onChange={(e) =>
						setForm({ ...form, children: parseInt(e.target.value) })
					}
				/>
				<small>
					Crianças menores de 4 anos poderão participar de nossas aventuras
					acompanhadas
				</small>
			</form>
			<div className="btns">
				<button
					type="button"
					className="know-more"
					onClick={() => setStep(step - 1)}
				>
					<div className="arrow-logo">
						<Image
							src="/arrow.svg"
							alt="arrow"
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
					<span>Voltar</span>
				</button>
				<button type="submit" className="know-more" form="step-2-form">
					<span>Continuar</span>
					<div className="arrow-logo">
						<Image
							src="/arrow-r.svg"
							alt="arrow"
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
				</button>
			</div>
		</>
	);
};

const Step4 = ({ form, step, setStep }: any) => {
	const submitHandler = (e: any) => {
		e.preventDefault();
		const phone = process.env.NEXT_PUBLIC_WPP_PHONE;
		const message = `Oi, gostaria de saber mais sobre sua festa. %0a *Nome:* ${form.name} %0a *Quantidade de pessoas:* ${form.qty} %0a *Quantidade de crianças:* ${form.children}
		`;
		const url = `https://wa.me/${phone}?text=${message}`;
		window.open(url, '_blank');
		setStep(0);
	};

	return (
		<>
			<h4>Solicitar ao responsável o orçamento</h4>
			<form id="step-2-form" onSubmit={submitHandler}>
				<small>e consultar disponibidade de data</small>
			</form>
			<div className="btns">
				<button
					type="button"
					className="know-more"
					onClick={() => setStep(step - 1)}
				>
					<div className="arrow-logo">
						<Image
							src="/arrow.svg"
							alt="arrow"
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
					<span>Voltar</span>
				</button>
				<button type="submit" className="know-more" form="step-2-form">
					<span>Solicitar</span>
					<div className="arrow-logo">
						<Image
							src="/arrow-r.svg"
							alt="arrow"
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
				</button>
			</div>
		</>
	);
};

export default function BudgetSection(): ReactNode {
	const [step, setStep] = useState(1);
	const [form, setForm] = useState({
		name: '',
		qty: 40,
		children: 25,
	});
	return (
		<div id="orcamento">
			<Image
				src="/cloud-orcamento.png"
				className="cloud"
				alt="cloud"
				fill
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
			/>
			<div className="card">
				<h3>Faça sua festa conosco</h3>
				<div className="description">
					Planeje a festa dos sonhos do seu filho no DIVERCITY PARK! Oferecemos
					pacotes completos que incluem acesso a todas as nossas atrações
					emocionantes, como a Arena de Camas Elásticas, Guerreiro Ninja, Parede
					de Escalar, Pula-Pula e muito mais. Nosso buffet infantil oferece uma
					seleção deliciosa e saudável de comidas e bebidas, garantindo que as
					crianças tenham energia para se divertir o dia todo. Enquanto os
					pequenos se divertem, os pais podem relaxar e aproveitar no nosso bar,
					que oferece uma variedade de bebidas e um ambiente confortável para
					socializar. Nossa equipe dedicada cuida de todos os detalhes, desde a
					decoração temática até a organização das atividades, para que você
					possa aproveitar cada momento sem preocupações. Faça da festa do seu
					filho um evento inesquecível conosco!
				</div>
				<div className="subscription">
					Celebre a festa perfeita com nossas atrações emocionantes, buffet
					infantil delicioso e um bar aconchegante para os pais!
				</div>

				<div className="form">
					{step === 1 && (
						<Step1
							form={form}
							setForm={setForm}
							setStep={setStep}
							step={step}
						/>
					)}
					{step === 2 && (
						<Step2
							form={form}
							setForm={setForm}
							setStep={setStep}
							step={step}
						/>
					)}
					{step === 3 && (
						<Step3
							form={form}
							setForm={setForm}
							setStep={setStep}
							step={step}
						/>
					)}
					{step === 4 && <Step4 form={form} setStep={setStep} step={step} />}
				</div>
			</div>
		</div>
	);
}
