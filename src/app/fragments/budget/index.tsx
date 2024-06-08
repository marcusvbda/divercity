'use client';
import { ReactNode, useMemo, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import './_styles.scss';
import AspectRatio from '@/components/aspectRatio';

const Step0 = ({ form, setForm, step, setStep }: any) => {
	const handleSubmit = (e: any) => {
		e.preventDefault();
		setStep(step + 1);
	};

	return (
		<>
			<h4>Qual é seu email ? </h4>
			<form onSubmit={handleSubmit} id="step-0-form">
				<input
					type="email"
					placeholder="Seu email ..."
					required
					autoFocus
					value={form.email}
					onChange={(e) => setForm({ ...form, email: e.target.value })}
				/>
			</form>
			<div className="btns">
				<button type="submit" className="know-more" form="step-0-form">
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
					autoFocus
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
			<form onSubmit={handleSubmit} id="step-2-form">
				<input
					type="number"
					placeholder="Pessoas"
					step={1}
					autoFocus
					value={form.qty}
					onChange={(e) => setForm({ ...form, qty: parseInt(e.target.value) })}
					max={40}
				/>
				<small>Número máximo de pessoas permitidas é 40</small>
			</form>
			<div className="btns">
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

const Step3 = ({ form, setForm, step, setStep }: any) => {
	const submitHandler = (e: any) => {
		e.preventDefault();
		setStep(step + 1);
	};

	return (
		<>
			<h4>Deste número de pessoas ({form.qty}), quantas são crianças ?</h4>
			<form id="step-3-form" onSubmit={submitHandler}>
				<input
					type="number"
					placeholder="Pessoas"
					step={1}
					value={form.children}
					autoFocus
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
				<button type="submit" className="know-more" form="step-3-form">
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

const Step4 = ({ setForm, form, step, setStep }: any) => {
	const submitHandler = (e: any) => {
		e.preventDefault();
		setStep(step + 1);
	};

	return (
		<>
			<h4>Qual é a melhor data para sua festa?</h4>
			<form id="step-4-form" onSubmit={submitHandler}>
				<input
					type="date"
					placeholder="Data da festa"
					value={form.date}
					autoFocus
					onChange={(e) => setForm({ ...form, date: e.target.value })}
					required
				/>
				<small>escolha uma data para sua festa</small>
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
				<button type="submit" className="know-more" form="step-4-form">
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

const Step5 = ({ form, setForm, step, setStep }: any) => {
	const submitHandler = (e: any) => {
		e.preventDefault();
		setStep(step + 1);
	};

	return (
		<>
			<h4>Quanto ao consumo de bebidas ?</h4>
			<form id="step-5-form" onSubmit={submitHandler}>
				<label className="label-checkbox">
					<input
						type="checkbox"
						checked={form.ownDrink}
						onChange={(e) => setForm({ ...form, ownDrink: e.target.checked })}
					/>
					Trarei bebidas por conta ?
				</label>

				<label className="label-checkbox">
					<input
						type="checkbox"
						autoFocus
						value="true"
						checked={form.hasDecorator}
						onChange={(e) =>
							setForm({ ...form, hasDecorator: e.target.checked })
						}
					/>
					Já tenho decorador(a) ?
				</label>
				<small>
					Vale que mesmo que seja necessário fornecer alguma bebida é necessário
					que parte do consumo seja do nosso bar
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
				<button type="submit" className="know-more" form="step-5-form">
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

const Review = ({ form, step, setStep }: any) => {
	const priceBuffet = parseInt(process.env.NEXT_PUBLIC_PRICE_BUFFET || '0');
	const pricePerPerson = parseInt(
		process.env.NEXT_PUBLIC_PRICE_BUFFET_PERSON || '0',
	);

	const totalPrice = useMemo(() => {
		const qty = parseInt(form.qty || 0);
		const total = qty * pricePerPerson + priceBuffet;
		return total.toLocaleString('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		});
	}, [form.qty, priceBuffet, pricePerPerson]);

	const submitHandler = (e: any) => {
		e.preventDefault();
		const formatedDate = new Date(form.date).toLocaleDateString('pt-BR');
		const phone = process.env.NEXT_PUBLIC_WPP_PHONE;
		const message =
			`Oi, gostaria de orçar uma festa. Segue os detalhes abaixo. %0a  %0a` +
			`*Nome:* ${form.name} %0a` +
			`*Email:* ${form.email} %0a` +
			`*Quantidade de pessoas:* ${form.qty} %0a` +
			`*Quantidade de crianças:* ${form.children} %0a` +
			`*Data:* ${formatedDate}` +
			`*Tenho decorador(a):* ${form.hasDecorator ? 'Sim' : 'Não'} %0a` +
			`*Trarei bebidas:* ${form.ownDrink ? 'Sim' : 'Não'} %0a` +
			`*Total estimado:* ${totalPrice}`;
		const url = `https://wa.me/${phone}?text=${message}`;
		window.open(url, '_blank');
		setStep(0);
	};

	return (
		<>
			<h4>Solicitar ao responsável o orçamento</h4>
			<form id="step-review-form" onSubmit={submitHandler}>
				<div className="review">
					<p>
						<strong>Nome: </strong>
						{form.name}
					</p>
					<p>
						<strong>Email: </strong>
						{form.email}
					</p>
					<p>
						<strong>Quantidade de pessoas: </strong>
						{form.qty}
					</p>
					<p>
						<strong>Quantidade de acompanhas: </strong>
						{form.children}
					</p>
					<p>
						<strong>Tenho decorador(a): </strong>
						{form.hasDecorator ? 'Sim' : 'Não'}
					</p>
					<p>
						<strong>Trarei bebidas: </strong>
						{form.ownDrink ? 'Sim' : 'Não'}
					</p>
					<p>
						<strong>Data: </strong>
						{new Date(form.date).toLocaleDateString('pt-BR')}
					</p>
					<p>
						<strong>Valor estimado: </strong>
						{totalPrice}
					</p>
				</div>
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
				<button type="submit" className="know-more" form="step-review-form">
					<span>Solicitar</span>
					<div className="arrow-logo">
						<AspectRatio
							src="/arrow-r.svg"
							size={{ height: 30 }}
							className="arrow-logo"
						/>
					</div>
				</button>
			</div>
		</>
	);
};

export default function BudgetSection(): ReactNode {
	const [step, setStep] = useState(0);
	const [form, setForm] = useState({
		name: '',
		email: '',
		qty: 40,
		children: 25,
		date: '',
		hasDecorator: false,
		ownDrink: false,
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
					{step === 0 && (
						<Step0
							form={form}
							setForm={setForm}
							setStep={setStep}
							step={step}
						/>
					)}
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
					{step === 4 && (
						<Step4
							form={form}
							setForm={setForm}
							setStep={setStep}
							step={step}
						/>
					)}
					{step === 5 && (
						<Step5
							setForm={setForm}
							form={form}
							setStep={setStep}
							step={step}
						/>
					)}
					{step === 6 && <Review form={form} setStep={setStep} step={step} />}
				</div>
			</div>
		</div>
	);
}
