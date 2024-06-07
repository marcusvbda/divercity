import Image from 'next/image';
import './_styles.scss';
export default function SocialNetworks({ title }: any) {
	return (
		<div className="social-network">
			{title ? <h3>{title}</h3> : <></>}
			<div className="items">
				<a href="#" className="item">
					<Image
						src="/instagram.png"
						alt="instagram"
						fill
						priority
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</a>
				<a href="#" className="item">
					<Image
						src="/facebook.jpeg"
						alt="facebook"
						fill
						priority
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</a>
			</div>
		</div>
	);
}
