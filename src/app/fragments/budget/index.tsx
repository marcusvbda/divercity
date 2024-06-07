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

const Step2 = ({ form, setForm, step, setStep }: any) => {
	const submitHandler = (e: any) => {
		e.preventDefault();
		alert('ainda não implementado');
		// setStep(step + 1);
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

export default function BudgetSection(): ReactNode {
	const [step, setStep] = useState(1);
	const [form, setForm] = useState({
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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel urna
					sed libero blandit euismod quis at nulla. Etiam sed augue eget tortor
					blandit varius in consectetur nisl. Sed consequat aliquet sagittis.
					Cras congue, nisl porta interdum facilisis, dolor ipsum tristique est,
					ac placerat urna arcu quis purus.
				</div>
				<div className="subscription">Sed consequat aliquet sagittis.</div>

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
				</div>
			</div>
		</div>
	);
}
