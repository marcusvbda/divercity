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
				<label className="label-checkbox" style={{ marginBottom: 0 }}>
					<input
						type="checkbox"
						checked={form.ownDrink}
						onChange={(e) => setForm({ ...form, ownDrink: e.target.checked })}
					/>
					Trarei bebidas por conta ?<br />
				</label>
				<small
					className="text-muted"
					style={{
						marginBottom: 20,
						textAlign: 'left',
						alignSelf: 'flex-start',
					}}
				>
					Só é permitido bebidas que não temos em nosso bar
				</small>

				<label className="label-checkbox">
					<input
						type="checkbox"
						value="true"
						checked={form.hasDecorator}
						onChange={(e) =>
							setForm({ ...form, hasDecorator: e.target.checked })
						}
					/>
					Já tenho decorador(a) ?
				</label>
				<label className="label-checkbox">
					<input
						type="checkbox"
						value="true"
						checked={form.needIndication}
						onChange={(e) =>
							setForm({ ...form, hasDecorator: e.target.checked })
						}
					/>
					Vou precisar de indicação de parceiro fornecedor ?
				</label>
				<small>
					Reforçando que parte das bebidas devem ser consumidas de nosso bar
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

const Step6 = ({ form, setForm, step, setStep }: any) => {
	const submitHandler = (e: any) => {
		e.preventDefault();
		setStep(step + 1);
	};

	return (
		<>
			<h4>Quer unir ao orçamento uma estimativa de consumo ?</h4>
			<form id="step-6-form" onSubmit={submitHandler}>
				<small>
					Defina um quantidade estimado de cada item a ser consumido para que
					possamos fazer um calculo mais próximo da realidade.
				</small>
				<div className="form-row">
					<label>Refrigerante Lata</label>
					<input
						type="number"
						step={1}
						required
						value={form.canSodaQty}
						onChange={(e) => setForm({ ...form, canSodaQty: e.target.value })}
					/>
				</div>
				<div className="form-row">
					<label>Refrigerante 600ml</label>
					<input
						type="number"
						step={1}
						required
						value={form.bottleSodaQty}
						min={0}
						onChange={(e) =>
							setForm({ ...form, bottleSodaQty: e.target.value })
						}
					/>
				</div>
				<div className="form-row">
					<label>Suco del vale</label>
					<input
						type="number"
						step={1}
						required
						min={0}
						value={form.juiceQty}
						onChange={(e) => setForm({ ...form, juiceQty: e.target.value })}
					/>
				</div>
				<div className="form-row">
					<label>Agua</label>
					<input
						type="number"
						step={1}
						required
						value={form.waterQty}
						onChange={(e) => setForm({ ...form, waterQty: e.target.value })}
					/>
				</div>
				<div className="form-row">
					<label>Chopp</label>
					<input
						type="number"
						step={1}
						required
						min={0}
						value={form.choppQty}
						onChange={(e) => setForm({ ...form, choppQty: e.target.value })}
					/>
				</div>
				<div className="form-row">
					<label>Cerveja long neck</label>
					<input
						type="number"
						step={1}
						required
						min={0}
						value={form.beerQty}
						onChange={(e) => setForm({ ...form, beerQty: e.target.value })}
					/>
				</div>
				<small>
					Caso não queira incluir ao orçamento uma estimativa de consumo do bar,
					deixe o campo em branco ou zero.
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
				<button type="submit" className="know-more" form="step-6-form">
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
		const qty = parseInt(form.children || 0);
		const totalSoda =
			((process.env as any).NEXT_PUBLIC_PRICE_SODA_CAN || 0) * form.canSodaQty;
		const totalBottleSoda =
			((process.env as any).NEXT_PUBLIC_PRICE_SODA_BOTTLE || 0) *
			form.bottleSodaQty;
		const totalJuice =
			((process.env as any).NEXT_PUBLIC_PRICE_JUICE || 0) * form.juiceQty;
		const totalWater =
			((process.env as any).NEXT_PUBLIC_PRICE_WATER || 0) * form.waterQty;
		const totalChopp =
			((process.env as any).NEXT_PUBLIC_PRICE_CHOPP || 0) * form.choppQty;
		const totalBeer =
			((process.env as any).NEXT_PUBLIC_PRICE_BEER || 0) * form.beerQty;
		const total =
			qty * pricePerPerson +
			priceBuffet +
			totalSoda +
			totalBottleSoda +
			totalJuice +
			totalWater +
			totalChopp +
			totalBeer;

		return total.toLocaleString('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		});
	}, [
		form.beerQty,
		form.bottleSodaQty,
		form.canSodaQty,
		form.children,
		form.choppQty,
		form.juiceQty,
		form.waterQty,
		priceBuffet,
		pricePerPerson,
	]);

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
			`*Preciso de indicação:* ${form.needIndication ? 'Sim' : 'Não'} %0a` +
			`*Consumo de canhão:* ${form.canSodaQty} %0a` +
			`*Consumo estimado de latas de refrigerante:* ${form.canSodaQty} %0a` +
			`*Consumo estimado de sucos del vale:* ${form.juiceQty} %0a` +
			`*Consumo estimado de cervejas:* ${form.beerQty} %0a` +
			`*Consumo estimado de garrafas de água:* ${form.waterQty} %0a` +
			`*Consumo estimado de chopps:* ${form.choppQty} %0a` +
			`*Consumo estimado de refrigerantes 600ml:* ${form.bottleSodaQty} %0a` +
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
						<strong>Quantidade de crianças: </strong>
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
						<strong>Preciso de indicação: </strong>
						{form.needIndication ? 'Sim' : 'Não'}
					</p>
					<p>
						<strong>Data: </strong>
						{new Date(form.date).toLocaleDateString('pt-BR')}
					</p>
					<p>
						<strong>Qtde de refrigerantes lata ( estimativa ): </strong>
						{form.canSodaQty}
					</p>
					<p>
						<strong>Qtde de refrigerantes 600ml ( estimativa ): </strong>
						{form.bottleSodaQty}
					</p>
					<p>
						<strong>Qtde de sucos Del Vale ( estimativa ): </strong>
						{form.juiceQty}
					</p>
					<p>
						<strong>Qtde de garrafas de água ( estimativa ): </strong>
						{form.waterQty}
					</p>
					<p>
						<strong>Qtde de chopps ( estimativa ): </strong>
						{form.choppQty}
					</p>
					<p>
						<strong>Qtde de cervejas Long Neck ( estimativa ): </strong>
						{form.beerQty}
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
		needIndication: false,
		canSodaQty: 0,
		bottleSodaQty: 0,
		juiceQty: 0,
		choppQty: 0,
		beerQty: 0,
		waterQty: 0,
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
					{step === 6 && (
						<Step6
							setForm={setForm}
							form={form}
							setStep={setStep}
							step={step}
						/>
					)}
					{step === 7 && <Review form={form} setStep={setStep} step={step} />}
				</div>
			</div>
		</div>
	);
}
