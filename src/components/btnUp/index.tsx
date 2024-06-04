'use client';

import { ReactNode, useCallback, useEffect, useState } from 'react';
import './_styles.scss';
import Image from 'next/image';
export default function BtnUp(): ReactNode {
	const [className, setClassName] = useState('hidden');

	useEffect(() => {
		const process = () => {
			if (window.scrollY >= 200) {
				setClassName('show');
			} else {
				setClassName('hidden');
			}
		};
		window.onscroll = () => {
			process();
		};

		process();
	}, []);

	const upHandler = useCallback(() => {
		setClassName('hidden');
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className={`up-btn ${className}`}>
			<button onClick={upHandler}>
				<div className="speech">
					<div className="speech-bubble">Subir ?</div>
				</div>
				<Image
					src="/climber.png"
					alt="up"
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</button>
		</div>
	);
}
