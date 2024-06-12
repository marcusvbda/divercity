'use client';

import { ReactNode, useCallback, useEffect, useState } from 'react';
import './_styles.scss';
import AspectRatio from '../aspectRatio';
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
		document.onscroll = () => {
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
				<AspectRatio src="/climber.png" size={{ width: 120 }} />
			</button>
		</div>
	);
}
