import Image from 'next/image';
import './_styles.scss';
import Link from 'next/link';
export default function SocialNetworks({ title }: any) {
	const facebook = process.env.NEXT_PUBLIC_FACEBOOK || '#';
	const instagram = process.env.NEXT_PUBLIC_INSTAGRAM || '#';

	return (
		<div className="social-network">
			{title ? <h3>{title}</h3> : <></>}
			<div className="items">
				<Link href={instagram} className="item" target="_blank">
					<Image
						src="/instagram.png"
						alt="instagram"
						fill
						priority
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</Link>
				<Link href={facebook} className="item" target="_blank">
					<Image
						src="/facebook.jpeg"
						alt="facebook"
						fill
						priority
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</Link>
			</div>
		</div>
	);
}
