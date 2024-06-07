'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import { CSSProperties, ReactNode } from 'react';
import './_styles.scss';
import Image from 'next/image';

export default function Attractions(): ReactNode {
	return (
		<div
			id="atracoes"
			style={{ '--bg-image': `url('/desenho.png')` } as CSSProperties}
		>
			<div className="banner-row">
				<div className="text">
					<h3>Lorem ipsum</h3>
					<div className="description">
						Pellentesque consequat maximus fringilla. Suspendisse nec neque
						semper, suscipit ante hendrerit, placerat eros. Curabitur non
						aliquet est, at bibendum leo. Vivamus eleifend dui eget gravida
						vehicula. Class aptent taciti sociosqu ad litora torquent per
						conubia nostra, per inceptos himenaeos. Vivamus vehicula velit vitae
						massa aliquam luctus. Donec porttitor ultrices dolor vel lacinia.
						Cras quis est consectetur sem bibendum placerat eu nec nisi.
					</div>
					<div className="subdescription">
						Pellentesque consequat maximus fringilla. Suspendisse nec neque
					</div>
				</div>
				<div className="banner">
					<Image
						src="https://placehold.co/638x477.png?text=aspect-ratio:1,337"
						alt="banner"
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
			</div>
			<div className="banner-row">
				<div className="banner">
					<Image
						src="https://placehold.co/638x477.png?text=aspect-ratio:1,337"
						alt="banner"
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
				<div className="text">
					<h3>Lorem ipsum</h3>
					<div className="description">
						Pellentesque consequat maximus fringilla. Suspendisse nec neque
						semper, suscipit ante hendrerit, placerat eros. Curabitur non
						aliquet est, at bibendum leo. Vivamus eleifend dui eget gravida
						vehicula. Class aptent taciti sociosqu ad litora torquent per
						conubia nostra, per inceptos himenaeos. Vivamus vehicula velit vitae
						massa aliquam luctus. Donec porttitor ultrices dolor vel lacinia.
						Cras quis est consectetur sem bibendum placerat eu nec nisi.
					</div>
					<div className="subdescription">
						Pellentesque consequat maximus fringilla. Suspendisse nec neque
					</div>
				</div>
			</div>
			<div className="banner-row">
				<div className="text">
					<h3>Lorem ipsum</h3>
					<div className="description">
						Pellentesque consequat maximus fringilla. Suspendisse nec neque
						semper, suscipit ante hendrerit, placerat eros. Curabitur non
						aliquet est, at bibendum leo. Vivamus eleifend dui eget gravida
						vehicula. Class aptent taciti sociosqu ad litora torquent per
						conubia nostra, per inceptos himenaeos. Vivamus vehicula velit vitae
						massa aliquam luctus. Donec porttitor ultrices dolor vel lacinia.
						Cras quis est consectetur sem bibendum placerat eu nec nisi.
					</div>
					<div className="subdescription">
						Pellentesque consequat maximus fringilla. Suspendisse nec neque
					</div>
				</div>
				<div className="banner">
					<Image
						src="https://placehold.co/638x477.png?text=aspect-ratio:1,337"
						alt="banner"
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
			</div>
			<div className="banner-row">
				<div className="banner">
					<Image
						src="https://placehold.co/638x477.png?text=aspect-ratio:1,337"
						alt="banner"
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
				<div className="text">
					<h3>Lorem ipsum</h3>
					<div className="description">
						Pellentesque consequat maximus fringilla. Suspendisse nec neque
						semper, suscipit ante hendrerit, placerat eros. Curabitur non
						aliquet est, at bibendum leo. Vivamus eleifend dui eget gravida
						vehicula. Class aptent taciti sociosqu ad litora torquent per
						conubia nostra, per inceptos himenaeos. Vivamus vehicula velit vitae
						massa aliquam luctus. Donec porttitor ultrices dolor vel lacinia.
						Cras quis est consectetur sem bibendum placerat eu nec nisi.
					</div>
					<div className="subdescription">
						Pellentesque consequat maximus fringilla. Suspendisse nec neque
					</div>
				</div>
			</div>
		</div>
	);
}
