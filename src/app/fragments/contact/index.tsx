'use client';

import Image from 'next/image';
import { ReactNode, useState } from 'react';
import './_styles.scss';
export default function ContactSection(): ReactNode {
	const [form, setForm] = useState({
		name: '',
		message: '',
	});

	const submitHandler = (e: any) => {
		e.preventDefault();
		const phone = process.env.NEXT_PUBLIC_WPP_PHONE;
		const message = ` *Nome:* ${form.name} %0a *Mensagem:* ${form.message}
		`;
		const url = `https://wa.me/${phone}?text=${message}`;
		window.open(url, '_blank');
	};

	return (
		<div id="contato">
			<Image
				src="/cloud.png"
				className="cloud"
				alt="cloud"
				fill
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
			/>
			<div className="banner" style={{ aspectRatio: 1360 / 760 }}>
				<Image
					src="/contato.jpeg"
					alt="banner"
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
			<div className="form">
				<h3>Nos mande uma mensagem</h3>
				<div className="description">
					Preencha nosso formulário ou fale conosco em algum de nossos meios de
					contato!
				</div>
				<form onSubmit={submitHandler}>
					<input
						type="text"
						placeholder="Seu nome aqui ..."
						required
						value={form.name}
						onChange={(e) => setForm({ ...form, name: e.target.value })}
					/>
					<textarea
						placeholder="Sua mensagem aqui ..."
						rows={8}
						required
						value={form.message}
						onChange={(e) => setForm({ ...form, message: e.target.value })}
					/>
					<button className="know-more" type="submit">
						Enviar
					</button>
				</form>
			</div>
		</div>
	);
}
